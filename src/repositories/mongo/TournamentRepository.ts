import {Schema} from 'mongoose';

import {BaseRepository} from './BaseRepository';
import {inject, ProvideSingleton} from '../../ioc';
import {MongoDbConnection} from '../../config/MongoDbConnection';
import {TournamentFormatter, ITournamentModel} from "../../models/TournamentModel";

@ProvideSingleton(TournamentRepository)
export class TournamentRepository extends BaseRepository<ITournamentModel> {
    protected modelName: string = 'Tournament';

    protected prizeElementSchema: Schema = new Schema({
        quantity: {type: Number, required: true},
        type: {type: String, enum: ["MONEY", "SOFT_COIN", "BOOSTER"], required: true},
        associatedIds: {type: [String], required: false}
    });

    protected prizeSchema: Schema = new Schema({
        positionFrom: {type: Number, required: true},
        positionTo: {type: Number, required: true},
        fieldsToDefinePosition: {type: Number, required: true},
        prizeElement: {type: [this.prizeElementSchema], required: true}
    })

    protected schema: Schema = new Schema({
        casinoId: {type: Number, required: true},
        tournamentName: {type: String, required: true},
        cost: {type: Number, required: true},
        mostWinMatches: {type: Boolean, required: true},
        from: {type: Date, required: true},
        to: {type: Date, required: true},
        inscriptionFrom: {type: Date, required: true},
        inscriptionTo: {type: Date, required: true},
        gameId: {type: Number, required: true},
        prizes: {
            type: [this.prizeSchema],
            name: {type: String, required: true},
            email: {type: String, required: true, unique: true},
        }
    });
    protected formatter = TournamentFormatter;

    constructor(@inject(MongoDbConnection) protected dbConnection: MongoDbConnection) {
        super();
        super.init();
    }
}
