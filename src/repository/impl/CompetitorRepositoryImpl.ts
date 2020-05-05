import {inject, injectable} from "inversify";
import {GenericDao} from "./GenericDao";
import {ICompetitorRepository} from "../ICompetitorRepository";
import {TYPES} from "../../types/types";
import {WrapperDB} from "../WrappereDB";
import {mongoose} from "@typegoose/typegoose";
import {Competitor} from "../../models/Competitor";
import {Cursor} from "mongodb";

@injectable()
export class CompetitorRepositoryImpl extends GenericDao<Competitor> implements ICompetitorRepository {
    constructor(@inject(TYPES.WrapperDB)db: WrapperDB) {
        super(mongoose.connection.collection("Competitor"));
    }

    async findByTournamentId(id: string): Promise<Competitor[]> {
        const cursor: Cursor<Competitor> = await this._collection.find<Competitor>({tournament:mongoose.Types.ObjectId(id)});
        return cursor.toArray();
    }

    async findByUserIdAndGameId(gameId: number, userId: number): Promise<Competitor> {
        return await this._collection.findOne<Competitor>({gameId:gameId, userId:userId}) as Competitor;
    }
}
