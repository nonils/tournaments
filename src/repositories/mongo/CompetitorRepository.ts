import {Schema} from 'mongoose';

import {BaseRepository} from './BaseRepository';
import {inject, ProvideSingleton} from '../../ioc';
import {MongoDbConnection} from '../../config/MongoDbConnection';
import {CompetitorFormatter, ICompetitorModel} from "../../models";

@ProvideSingleton(CompetitorRepository)
export class CompetitorRepository extends BaseRepository<ICompetitorModel> {
    protected modelName: string = 'Competitor';

    protected playedGameTransaction: Schema = new Schema({
        gameId: {type: String, required: false},
        status: {type: String, enum: ["WIN, LOOSE, TIE"], required: false},
        casinoId: {type: String, required: false},
        userId: {type: String, required: false},
        points: {type: Number, required: false},
        date: {type: Date, required: false}
    });

    protected schema: Schema = new Schema({
        userId: {type: String, required: false},
        tournamentId: {type: String, required: false},
        inscriptionDate: {type: Date, required: false},
        totalPoints: {type: String, required: false},
        winedMatches: {type: String, required: false},
        totalMatches: {type: String, required: false},
        transactions: {type: this.playedGameTransaction, required: false},
    });
    protected formatter = CompetitorFormatter;

    constructor(@inject(MongoDbConnection) protected dbConnection: MongoDbConnection) {
        super();
        super.init();
    }
}
