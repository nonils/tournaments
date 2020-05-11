import {ITournamentModel} from "../models/TournamentModel";
import {IBaseService} from "./IBaseService";

export interface ITournamentService extends IBaseService<ITournamentModel> {
    createTournament(tournamnet: ITournamentModel): Promise<ITournamentModel>

    findAllTournaments(): Promise<ITournamentModel[]>;

    findTournamentById(id: string): Promise<ITournamentModel>;

    deleteTournamentById(id: string): void;

    updateTournament(id: string, tournament: ITournamentModel): Promise<ITournamentModel>;
}
