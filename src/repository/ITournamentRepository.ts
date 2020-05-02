import {IGenericDao} from "./IGenericDao";
import {Tournament} from "../models/Tournament";

export interface ITournamentRepository extends IGenericDao<Tournament> {
}
