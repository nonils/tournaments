import {Tournament} from "../models/Tournament";

export interface ITournamentService {
    createTournament(tournamnet:Tournament):Promise<Tournament>
    findAllTournaments(): Promise<Tournament[]>;
    findTournamentById(id: string): Promise<Tournament>;
    deleteTournamentById(id: string): void;
    updateTournament(id:string ,tournament:Tournament):Promise<Tournament>;
}
