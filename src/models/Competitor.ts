import {prop, Ref} from "@typegoose/typegoose";
import {Tournament} from "./Tournament";
import {ApiModel} from "swagger-express-ts";

@ApiModel({name : "Competitor", description: "Competitor"})
export class Competitor {
    @prop()
    userId:number=0;
    @prop({ref: Tournament})
    tournament?: Ref<Tournament>;
    inscriptionDate: Date=new Date()
    totalPoints: number=0
    winedMatches: number=0
    totalMatches: number=0
}
