import {ICompetitorService} from "../ICompetitorService";
import {inject, injectable} from "inversify";
import {ICompetitorRepository} from "../../repository/ICompetitorRepository";
import {TYPES} from "../../types/types";
import {Competitor} from "../../models/Competitor";

@injectable()
export class CompetitorServiceImpl implements ICompetitorService{
    _competitorRepository:ICompetitorRepository

    constructor(@inject(TYPES.ICompetitorRepository)repository:ICompetitorRepository) {
        this._competitorRepository = repository;
    }


    async SubscribeCompetitor(competitor : Competitor) : Promise<Competitor> {
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


}
