import {SoftDeleteableBean} from "./SoftDeleteableBean";
import {PlayedGameTransaction} from "./PlayedGameTransaction";
import {BaseFormatter} from "./BaseFormatter";

export interface ICompetitorModel extends SoftDeleteableBean {
    userId: number;
    tournamentId: string;
    inscriptionDate: Date;
    totalPoints: number;
    winedMatches: number;
    totalMatches: number;
    transactions: PlayedGameTransaction[];
}

export class CompetitorFormatter extends BaseFormatter implements ICompetitorModel {
    active: boolean = undefined;
    inscriptionDate: Date = undefined;
    totalMatches: number = undefined;
    totalPoints: number = undefined;
    tournamentId: string = undefined;
    transactions: PlayedGameTransaction[] = undefined;
    userId: number = undefined;
    winedMatches: number = undefined;

    constructor(args: any) {
        super();
        this.format(args);
    }

}
