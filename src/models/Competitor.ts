import {prop, Ref} from "@typegoose/typegoose";
import {Tournament} from "./Tournament";
import {ApiModel} from "swagger-express-ts";
import {SoftDeleteableBean} from "./SoftDeleteableBean";
import {PlayedGameTransaction} from "./PlayedGameTransaction";

@ApiModel({name: "Competitor", description: "Competitor"})
export class Competitor extends SoftDeleteableBean{
    @prop()
    userId: number = 0;
    @prop({ref: Tournament})
    tournament?: Ref<Tournament>;
    inscriptionDate: Date = new Date()
    totalPoints: number = 0
    winedMatches: number = 0
    totalMatches: number = 0
    transactions:PlayedGameTransaction[] = []
}
