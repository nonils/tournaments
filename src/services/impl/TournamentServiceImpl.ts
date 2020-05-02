import {ITournamentService} from "../ITournamentService";
import {Tournament} from "../../models/Tournament";
import {inject, injectable} from "inversify";
import {TYPES} from "../../types/types";
import {ITournamentRepository} from "../../repository/ITournamentRepository";
import {TournamentNotFoundException} from "../../exceptions/TournamentNotFoundException";

@injectable()
export class TournamentServiceImpl implements ITournamentService {

    tournamentRepository: ITournamentRepository

    constructor(@inject(TYPES.ITournamentRepository)tournamentRepository: ITournamentRepository) {
        this.tournamentRepository = tournamentRepository
    }

    async createTournament(tournament: Tournament): Promise<Tournament> {
        try {
            return await this.tournamentRepository.create(tournament);
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    async findAllTournaments(): Promise<Tournament[]> {
        return await this.tournamentRepository.find({} as Tournament);
    }

    async findTournamentById(id: string): Promise<Tournament> {
        let tournament = await this.tournamentRepository.findOne(id);
        if (!tournament) {
            throw new TournamentNotFoundException(id);
        }
        return tournament;
    }

    deleteTournamentById(id: string): void {
        this.tournamentRepository.delete(id);
    }

    async updateTournament(id: string, tournament: Tournament): Promise<Tournament> {
        await this.findTournamentById(id);
        return this.tournamentRepository.update(id, tournament);
    }

}
