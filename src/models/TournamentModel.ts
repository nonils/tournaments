import {IPrize} from "./Prize";
import {SoftDeleteableBean} from "./SoftDeleteableBean";
import {BaseFormatter} from "./BaseFormatter";

export interface ITournamentModel extends SoftDeleteableBean {
    casinoId: number;
    tournamentName: string;
    cost: number;
    mostWinMatches: boolean;
    from: Date;
    to: Date;
    inscriptionFrom: Date;
    inscriptionTo: Date;
    gameId: number;
    prizes: IPrize[];
}

export class TournamentFormatter extends BaseFormatter implements ITournamentModel {
    public active: boolean = undefined;
    public casinoId: number = undefined;
    public cost: number = undefined;
    public from: Date =  undefined;
    public gameId: number = undefined;
    public inscriptionFrom: Date =  undefined;
    public inscriptionTo: Date =  undefined;
    public mostWinMatches: boolean = undefined;
    public prizes: IPrize[] = undefined;
    public to: Date =  undefined;
    public tournamentName: string = undefined;

    constructor(args: any) {
        super();
        this.format(args);
    }

}
