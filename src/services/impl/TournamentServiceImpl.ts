import axios from 'axios';
import {ITournamentService} from "../ITournamentService";
import {CreateNewTournamentRequest} from "../../controller/dto/CreateNewTournamentRequest";
import {Tournament} from "../../models/Tournament";
import {injectable} from "inversify";

@injectable()
export class TournamentServiceImpl implements ITournamentService {
    createTournament(createNewTournamentRequest: CreateNewTournamentRequest): Tournament {
        return new Tournament();
    }

}
