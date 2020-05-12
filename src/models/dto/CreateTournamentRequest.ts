import {IPrize} from "../Prize";

export interface ICreateTournamentRequest {
    active: boolean;
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
