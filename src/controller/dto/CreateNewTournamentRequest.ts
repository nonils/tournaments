import {PrizeDTO} from "./PrizeDTO";

export class CreateNewTournamentRequest {
    casinoId: number;
    tournamentName: string;
    cost: number;
    mostWinMatches: boolean;
    from: Date;
    to: Date;
    inscriptionFrom: Date;
    inscriptionTo: Date;
    gameId: number;
    prizes: PrizeDTO[];

    constructor(casinoId: number, tournamentName: string, cost: number, mostWinMatches: boolean, from: Date,
    to: Date, inscriptionFrom: Date, inscriptionTo: Date, gameId: number, prizes: PrizeDTO[]) {
        this.casinoId = casinoId;
        this.tournamentName = tournamentName;
        this.cost = cost;
        this.mostWinMatches = mostWinMatches;
        this.from = from;
        this.to = to;
        this.inscriptionFrom= inscriptionFrom;
        this.inscriptionTo = inscriptionTo;
        this.gameId = gameId;
        this.prizes = prizes;
    }

}
