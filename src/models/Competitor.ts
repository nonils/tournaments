import {SoftDeleteableBean} from "./SoftDeleteableBean";
import {PlayedGameTransaction} from "./PlayedGameTransaction";

export class Competitor extends SoftDeleteableBean {
    userId: number = 0;
    tournamentId: string = "";
    inscriptionDate: Date = new Date()
    totalPoints: number = 0
    winedMatches: number = 0
    totalMatches: number = 0
    transactions: PlayedGameTransaction[] = []
}
