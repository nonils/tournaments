import {TournamentModel} from "../models/TournamentModel";

export interface ITournamentService {
    createTournament(tournamnet: TournamentModel): Promise<TournamentModel>

    findAllTournaments(): Promise<TournamentModel[]>;

    findTournamentById(id: string): Promise<TournamentModel>;

    deleteTournamentById(id: string): void;

    updateTournament(id: string, tournament: TournamentModel): Promise<TournamentModel>;
}
