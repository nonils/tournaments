import {inject} from "inversify";
import {BaseService} from "./BaseService";
import {ProvideSingleton} from "../../ioc";
import {ICompetitorService} from "../ICompetitorService";
import {CompetitorRepository} from "../../repositories/mongo/CompetitorRepository";
import {ICompetitorModel} from "../../models/CompetitorModel";
import {TournamentRepository} from "../../repositories/mongo/TournamentRepository";

@ProvideSingleton(CompetitorServiceImpl)
export class CompetitorServiceImpl extends BaseService<ICompetitorModel> implements ICompetitorService {

    constructor(@inject(CompetitorRepository) protected repository: CompetitorRepository) {
        super()
    }

    async createCompetitor(competitor: ICompetitorModel): Promise<ICompetitorModel> {
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


}
