import {ITournamentService} from "../ITournamentService";
import {CreateNewTournamentRequest} from "../../controller/dto/CreateNewTournamentRequest";
import {Tournament} from "../../models/Tournament";
import {inject, injectable} from "inversify";
import {TYPES} from "../../types/types";
import {ITournamentRepository} from "../../repository/ITournamentRepository";

@injectable()
export class TournamentServiceImpl implements ITournamentService {

    tournamentRepository : ITournamentRepository

    constructor(@inject(TYPES.ITournamentRepository)tournamentRepository : ITournamentRepository ) {
        this.tournamentRepository = tournamentRepository
    }
    createTournament(createNewTournamentRequest: CreateNewTournamentRequest): Tournament {
        this.tournamentRepository.create(new Tournament()).then(r => console.log(r))
        let tournament = new Tournament();

        return tournament;
    }

}
