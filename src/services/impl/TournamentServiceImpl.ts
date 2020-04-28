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
    async createTournament(createNewTournamentRequest: CreateNewTournamentRequest): Promise<Tournament> {
        try{
            let tournament =TournamentMapper.mapFromCreateNewTournamentRequestToTournament(createNewTournamentRequest)
            return await this.tournamentRepository.create(tournament);
        } catch (e) {
            console.error(e);
            throw e;
        }

    }

    async findAllTournaments(): Promise<Tournament[]> {
        return await this.tournamentRepository.find({} as Tournament);
    }

}
