import {ITournamentService} from "../ITournamentService";
import {CreateNewTournamentRequest} from "../../controller/dto/CreateNewTournamentRequest";
import {Tournament} from "../../models/Tournament";
import {inject, injectable} from "inversify";
import {TYPES} from "../../types/types";
import {ITournamentRepository} from "../../repository/ITournamentRepository";
import {TournamentMapper} from "../../mapper/TournamentMapper";

@injectable()
export class TournamentServiceImpl implements ITournamentService {

    tournamentRepository : ITournamentRepository

    constructor(@inject(TYPES.ITournamentRepository)tournamentRepository : ITournamentRepository ) {
        this.tournamentRepository = tournamentRepository
    }
    createTournament(createNewTournamentRequest: CreateNewTournamentRequest): Tournament {
        let tournament =TournamentMapper.mapFromCreateNewTournamentRequestToTournament(createNewTournamentRequest)
        this.tournamentRepository.create(tournament)
        return tournament;
    }

}
