import {IPrize} from "./Prize";
import {SoftDeleteableBean} from "./SoftDeleteableBean";
import {BaseFormatter} from "./BaseFormatter";

export interface ITournamentModel extends SoftDeleteableBean {
    casinoId: number;
    tournamentName: string;
    cost: number;
    mostWinMatches: boolean;
    from: string;
    to: string;
    inscriptionFrom: string;
    inscriptionTo: string;
    gameId: number;
    prizes: IPrize[];
}

export class TournamentFormatter extends BaseFormatter implements ITournamentModel {
    public active: boolean = undefined;
    public casinoId: number = undefined;
    public cost: number = undefined;
    public from: string =  undefined;
    public gameId: number = undefined;
    public inscriptionFrom: string =  undefined;
    public inscriptionTo: string =  undefined;
    public mostWinMatches: boolean = undefined;
    public prizes: IPrize[] = undefined;
    public to: string =  undefined;
    public tournamentName: string = undefined;

    constructor(args: any) {
        super();
        this.format(args);
    }
}


