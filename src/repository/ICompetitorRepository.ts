import {IGenericDao} from "./IGenericDao";
import {Competitor} from "../models/Competitor";

export interface ICompetitorRepository extends IGenericDao<Competitor> {
    findByTournamentId(id: string): Promise<Competitor[]>;
}
