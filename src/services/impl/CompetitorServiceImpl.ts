import {inject} from "inversify";
import {BaseService} from "./BaseService";
import {ProvideSingleton} from "../../ioc";
import {ICompetitorService} from "../ICompetitorService";
import {CompetitorRepository} from "../../repositories/mongo/CompetitorRepository";
import {ICompetitorModel} from "../../models";
import {userApi} from "../../utils/api.users";
import {UserNotFoundException} from "../../exceptions";
import {IAddPlayedGameRequest} from "../../models/dto/AddPlayedGameRequest";
import {TournamentRepository} from "../../repositories/mongo/TournamentRepository";
import {IRuleSetExecutor} from "../IRuleSetExecutor";
import {RuleSetExecutorImpl} from "./RuleSetExecutorImpl";
import {CompetitorExistsException} from "../../exceptions/CompetitorExistsException";

@ProvideSingleton(CompetitorServiceImpl)
export class CompetitorServiceImpl extends BaseService<ICompetitorModel> implements ICompetitorService {

    constructor(@inject(CompetitorRepository) protected repository: CompetitorRepository,
                @inject(TournamentRepository) protected tournamentRepository: TournamentRepository,
                @inject(RuleSetExecutorImpl)protected ruleExecutor : IRuleSetExecutor) {
        super()
    }

    async createCompetitor(competitor: ICompetitorModel): Promise<ICompetitorModel> {
        let userEntity = await userApi.findUserById(competitor.userId);
        if(!userEntity.id) {
            throw new UserNotFoundException(competitor.userId.toString());
        }
        let persistedElement =this.repository.findByUserIdAndTournamentId(competitor.userId, competitor.tournamentId);
        if(!persistedElement) {
            throw new CompetitorExistsException(competitor.userId, competitor.tournamentId);
        }
        competitor.inscriptionDate = new Date();
        competitor.totalMatches = 0;
        competitor.totalPoints = 0;
        competitor.transactions = [];
        competitor.winedMatches = 0;
        competitor.active = true;
        return await this.repository.create(competitor);
    }

    async replaceCompetitor(id: string, competitor: ICompetitorModel): Promise<ICompetitorModel> {
        await this.repository.update(id, competitor);
        return await this.getById(id);
    }

    async addPlayedTransaction(request: IAddPlayedGameRequest) : Promise<ICompetitorModel[]> {
        let tournaments = await this.tournamentRepository.findByFilter({bet_id: request.bet_id, casinoId: request.casinoId}, {from: -1})
        const transactionTime = new Date()
        const tournament = tournaments.find(value => {
            return value.from <= transactionTime && value.to >= transactionTime;
        });
        return this.ruleExecutor.execute("tournament.id", tournament.ruleSetStrategy)
    }
}
