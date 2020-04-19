import {prop, Ref} from "@typegoose/typegoose";
import {Tournament} from "./Tournament";

export class Competitor {
    @prop()
    userId:number=0;
    @prop({ref: Tournament})
    tournament?: Ref<Tournament>;
}
