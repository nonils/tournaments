import {ITournamentModel} from "../../models";
import {inject} from "inversify";
import {TournamentNotFoundException} from "../../exceptions";
import {TournamentRepository} from "../../repositories/mongo/TournamentRepository";
import {BaseService} from "./BaseService";
import {ProvideSingleton} from "../../ioc";
import {ITournamentService} from "../ITournamentService";
import * as mongoose from "mongoose";
import {CompetitorRepository} from "../../repositories/mongo/CompetitorRepository";

@ProvideSingleton(TournamentServiceImpl)
export class TournamentServiceImpl extends BaseService<ITournamentModel> implements ITournamentService {

    constructor(@inject(TournamentRepository) protected repository: TournamentRepository, @inject(CompetitorRepository) protected competitorRepository: CompetitorRepository) {
        super()
    }

    async createTournament(tournament: ITournamentModel): Promise<ITournamentModel> {
        try {
            return await this.repository.create(tournament);
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    async findAllTournaments(): Promise<ITournamentModel[]> {
        return await this.repository.findAll();
    }

    async findTournamentById(id: string): Promise<ITournamentModel> {
        let tournament = await this.repository.findOne({_id: mongoose.Types.ObjectId(id)});
        if (!tournament) {
            throw new TournamentNotFoundException(id);
        }
        return tournament;
    }

    deleteTournamentById(id: string): void {
        this.repository.delete(id);
    }

    async updateTournament(id: string, tournament: ITournamentModel): Promise<ITournamentModel> {
        await this.findTournamentById(id);
        await this.repository.update(id, tournament);
        return this.findTournamentById(id);
    }

    async findAllByUserId(userId: number): Promise<ITournamentModel[]> {
        let competitors = await this.competitorRepository.findByUser(userId);
        return await this.repository.findByIdIn(competitors.map(competitor => competitor.tournamentId));
    }

}
