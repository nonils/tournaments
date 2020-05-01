import {CompetitorRequest} from "../controller/dto/CompetitorRequest";
import {Competitor} from "../models/Competitor";
import {mongoose} from "@typegoose/typegoose";

export class CompetitorMapper {
    static MapFromCompetitorRequestToCompetitor(request: CompetitorRequest): Competitor {
        let entity = new Competitor();
        entity.userId= request.userId;
        entity.tournament = mongoose.Types.ObjectId(request.tournamentId);
        return entity;
    }
}
