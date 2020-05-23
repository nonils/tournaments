import {IPrize} from "../Prize";

export interface ICreateTournamentRequest {
    active: boolean;
    bet_id: number;
    casinoId: number;
    tournamentName: string;
    cost: number;
    ruleSetStrategy: string;
    from: Date;
    to: Date;
    inscriptionFrom: Date;
    inscriptionTo: Date;
    gameId: number;
    prizes: IPrize[];
}
