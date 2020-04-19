import axios from 'axios';
import {ITournamentService} from "../ITournamentService";
import {CreateNewTournamentRequest} from "../../controller/dto/CreateNewTournamentRequest";
import {Tournament} from "../../models/Tournament";

export class TournamentServiceImpl implements ITournamentService {
    createTournament(createNewTournamentRequest: CreateNewTournamentRequest): Tournament {
        return new Tournament();
    }

}
