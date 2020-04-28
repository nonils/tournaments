import {ITournamentRepository} from "../ITournamentRepository";
import {Tournament} from "../../models/Tournament";
import {GenericDao} from "./GenericDao";
import {inject, injectable} from "inversify";
import {TYPES} from "../../types/types";
import {WrapperDB} from "../WrappereDB";
import {mongoose} from "@typegoose/typegoose";


@injectable()
export class TournamentRepositoryImpl extends GenericDao<Tournament> implements ITournamentRepository {

    constructor(@inject(TYPES.WrapperDB)db: WrapperDB) {
        super(mongoose.connection.collection("Tournament"));
    }

}
