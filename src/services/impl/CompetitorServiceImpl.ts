import {ICompetitorService} from "../ICompetitorService";
import {inject, injectable} from "inversify";
import {ICompetitorRepository} from "../../repository/ICompetitorRepository";
import {TYPES} from "../../types/types";
import {Competitor} from "../../models/Competitor";
import {ITournamentService} from "../ITournamentService";
import {userApi} from "../../helpers/api.users";
import {CompetitorNotFoundException} from "../../exceptions/CompetitorNotFoundException";

@injectable()
export class CompetitorServiceImpl implements ICompetitorService {
    _competitorRepository: ICompetitorRepository
    _tournamentService: ITournamentService

    constructor(@inject(TYPES.ICompetitorRepository)repository: ICompetitorRepository, @inject(TYPES.ITournamentService)tournamentService: ITournamentService) {
        this._competitorRepository = repository;
        this._tournamentService = tournamentService;
    }


    async SubscribeCompetitor(competitor: Competitor): Promise<Competitor> {
        if (!competitor.tournament) {
            throw new Error("Tournament is required");
        }
        await userApi.findUserById(competitor.userId)
        let tournamentId = competitor.tournament.toString()
        await this._tournamentService.findTournamentById(tournamentId);
        competitor = await this._competitorRepository.create(competitor);
        return competitor;
    }

    async FindAllSubscriptionsForTournament(id: string): Promise<Competitor[]> {
        return this._competitorRepository.findByTournamentId(id);
    }

    async FinishGame(): Promise<Competitor> {
        return Promise.resolve(new Competitor());
    }

    UnsubscribeCompetitor(id: string): void {

    }

    FindCompetitorById(id: string): Promise<Competitor> {
        return this._competitorRepository.findOne(id);
    }


}
