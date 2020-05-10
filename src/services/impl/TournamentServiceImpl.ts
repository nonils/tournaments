import {TournamentModel} from "../../models/TournamentModel";
import {inject} from "inversify";
import {TournamentNotFoundException} from "../../exceptions";
import {TournamentRepository} from "../../repositories/mongo/TournamentRepository";
import {BaseService} from "../BaseService";
import {ProvideSingleton} from "../../ioc";
import {ITournamentService} from "../ITournamentService";
import * as mongoose from "mongoose";

@ProvideSingleton(TournamentServiceImpl)
export class TournamentServiceImpl extends BaseService<TournamentModel> implements ITournamentService {


    constructor(@inject(TournamentRepository) private repository: TournamentRepository) {
        super()
    }

    async createTournament(tournament: TournamentModel): Promise<TournamentModel> {
        try {
            return await this.repository.create(tournament);
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    async findAllTournaments(): Promise<TournamentModel[]> {
        return await this.repository.findAll();
    }

    async findTournamentById(id: string): Promise<TournamentModel> {
        let tournament = await this.repository.findOne({_id: mongoose.Types.ObjectId(id)});
        if (!tournament) {
            throw new TournamentNotFoundException(id);
        }
        return tournament;
    }

    deleteTournamentById(id: string): void {
        this.repository.delete(id);
    }

    async updateTournament(id: string, tournament: TournamentModel): Promise<TournamentModel> {
        await this.findTournamentById(id);
        await this.repository.update(id, tournament);
        return this.findTournamentById(id);
    }

}
