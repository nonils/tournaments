import {inject, injectable} from "inversify";
import {GenericDao} from "./GenericDao";
import {ICompetitorRepository} from "../ICompetitorRepository";
import {TYPES} from "../../types/types";
import {WrapperDB} from "../WrappereDB";
import {mongoose} from "@typegoose/typegoose";
import {Competitor} from "../../models/Competitor";

@injectable()
export class CompetitorRepositoryImpl extends GenericDao<Competitor> implements ICompetitorRepository {
    constructor(@inject(TYPES.WrapperDB)db: WrapperDB) {
        super(mongoose.connection.collection("Competitor"));
    }
}
