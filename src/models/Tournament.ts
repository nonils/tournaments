import {Prize} from "./Prize";
import {arrayProp, prop} from '@typegoose/typegoose';
import {Competitor} from "./Competitor";

export class Tournament {
    @prop()
    casinoId: number = 0;
    @prop()
    tournamentName: string = "";
    @prop()
    cost: number = 0;
    @prop()
    mostWinMatches: boolean = false;
    @prop()
    from: Date = new Date();
    @prop()
    to: Date = new Date();
    @prop()
    inscriptionFrom: Date = new Date();
    @prop()
    inscriptionTo: Date = new Date();
    @prop()
    gameId: number = 0;
    @prop()
    prizes: Prize[] = [];
    @arrayProp({ref: Competitor})
    competitors?: Competitor[]=[];

}


