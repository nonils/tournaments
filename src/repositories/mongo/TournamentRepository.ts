import {Schema} from 'mongoose';

import {BaseRepository} from './BaseRepository';
import {inject, ProvideSingleton} from '../../ioc';
import {MongoDbConnection} from '../../config/MongoDbConnection';
import {ITournamentModel, TournamentFormatter} from "../../models";
import {cleanQuery} from "../../utils";
import * as mongoose from "mongoose";

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
        prizeElement: {type: [this.prizeElementSchema], required: false}
    })

    protected schema: Schema = new Schema({
        casinoId: {type: Number, required: true},
        tournamentName: {type: String, required: true},
        cost: {type: Number, required: true},
        ruleSetStrategy: {type: String, required: false},
        bet_id : {type:Number, required:true},
        from: {type: Date, required: true},
        to: {type: Date, required: true},
        inscriptionFrom: {type: Date, required: true},
        inscriptionTo: {type: Date, required: true},
        gameId: {type: Number, required: true},
        prizes: {
            type: [this.prizeSchema], required: false
        }
    });
    protected formatter = TournamentFormatter;

    constructor(@inject(MongoDbConnection) protected dbConnection: MongoDbConnection) {
        super();
        super.init();
    }

    async findByIdIn(ids: string[]):Promise<ITournamentModel[]> {
        return (
            await this.documentModel.find({
                    '_id': { $in: ids.map(id => mongoose.Types.ObjectId(id))}
            })

        )
            .map(item => new this.formatter(item));
    }
}
