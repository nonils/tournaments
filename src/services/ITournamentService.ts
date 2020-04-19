import {CreateNewTournamentRequest} from "../controller/dto/CreateNewTournamentRequest";
import {Tournament} from "../models/Tournament";

export interface ITournamentService {
    createTournament(createNewTournamentRequest:CreateNewTournamentRequest):Tournament
}
