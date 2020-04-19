import {PrizeElement} from "./PrizeElement";
import {prop} from "@typegoose/typegoose";

export class Prize {
    @prop()
    positionFrom: number = 0;
    @prop()
    positionTo: number = 0;
    @prop()
    fieldsToDefinePosition: string[] = [];
    @prop()
    prizeElement: PrizeElement[] = [];
}
