import {ICompetitorService} from "../ICompetitorService";
import {inject, injectable} from "inversify";
import {ICompetitorRepository} from "../../repository/ICompetitorRepository";
import {TYPES} from "../../types/types";
import {Competitor} from "../../models/Competitor";
import {ITournamentService} from "../ITournamentService";
import {TournamentNotFoundException} from "../../exceptions/TournamentNotFoundException";
import {apiUsersConfig} from "../../helpers/api.config";
import {userApi} from "../../helpers/api.users";

@injectable()
export class CompetitorServiceImpl implements ICompetitorService{
    _competitorRepository:ICompetitorRepository
    _tournamentService : ITournamentService
    constructor(@inject(TYPES.ICompetitorRepository)repository:ICompetitorRepository, @inject(TYPES.ITournamentService)tournamentService:ITournamentService) {
        this._competitorRepository = repository;
        this._tournamentService = tournamentService;
    }


    async SubscribeCompetitor(competitor : Competitor) : Promise<Competitor> {
        if(!competitor.tournament) {
            throw new Error("Tournament is required");
        }
        const tournament = await this._tournamentService.findTournamentById(competitor.tournament.toString());
        if(!tournament) {
            throw new TournamentNotFoundException(competitor.tournament.toString())
        }
        const responseFromUser = await userApi.findUserById(competitor.userId)
        return this._competitorRepository.create(competitor);
    }

    async FindAllSubscriptionsForTournament(id: string): Promise<Competitor[]> {
        return Promise.resolve([]);
    }

    async FinishGame(): Promise<Competitor> {
        return Promise.resolve(new Competitor());
    }

    async ModifyCompetitor(competitor: Competitor): Promise<Competitor> {
        return Promise.resolve(new Competitor());
    }

    UnsubscribeCompetitor(id: string): void {
    }

    FindCompetitorById(id: string): Promise<Competitor> {
        return this._competitorRepository.findOne(id);
    }


}
