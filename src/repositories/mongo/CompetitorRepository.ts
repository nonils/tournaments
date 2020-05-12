import {Schema} from 'mongoose';

import {BaseRepository} from './BaseRepository';
import {inject, ProvideSingleton} from '../../ioc';
import {MongoDbConnection} from '../../config/MongoDbConnection';
import {TournamentFormatter} from "../../models/TournamentModel";
import {ICompetitorModel} from "../../models/Competitor";
import {PlayedGameTransaction} from "../../models/PlayedGameTransaction";

@ProvideSingleton(CompetitorRepository)
export class CompetitorRepository extends BaseRepository<ICompetitorModel> {
    protected modelName: string = 'Competitor';

    protected playedGameTransaction: Schema = new Schema({
        gameId: {type: String, required: true},
        status: {type: String, enum: ["WIN, LOOSE, TIE"] ,required: true},
        casinoId: {type: String, required: true},
        userId: {type: String, required: true},
        points: {type: Number, required: true},
        date: {type: Date, required: true}
    });

    protected schema: Schema = new Schema({
        userId: {type: String, required: true},
        tournamentId: {type: String, required: true},
        inscriptionDate: {type: Date, required: true},
        totalPoints: {type: String, required: true},
        winedMatches: {type: String, required: true},
        totalMatches: {type: String, required: true},
        transactions: {type: this.playedGameTransaction, required: false},
    });
    protected formatter = TournamentFormatter;

    constructor(@inject(MongoDbConnection) protected dbConnection: MongoDbConnection) {
        super();
        super.init();
    }
}
