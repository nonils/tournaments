import {injectable} from "inversify";
import {Collection, Cursor} from 'mongodb';
import {IGenericDao} from "../IGenericDao";
import {mongoose} from "@typegoose/typegoose";

@injectable()
export class GenericDao<T> implements IGenericDao<T> {
    public readonly _collection: Collection;

    constructor(collection: Collection) {
        this._collection = collection;
    }

    async create(entity: T): Promise<T> {
        const result = await this._collection.insertOne(entity);
        return <T>(await this._collection.findOne({_id: result.insertedId}) as unknown);
    }


    async update(id: string, item: T): Promise<T> {
        let result = await this._collection.replaceOne({_id: mongoose.Types.ObjectId(id)}, item)
        return <T>(await this._collection.findOne({_id: result.upsertedId}) as unknown);
    }

    async delete(id: string): Promise<boolean> {
        return (await this._collection.deleteOne({_id: mongoose.Types.ObjectId(id)})).result.ok === 0
    }

    async find(item: T): Promise<T[]> {
        const cursor: Cursor<T> = await this._collection.find<T>();
        return cursor.toArray()
    }

    async findOne(id: string): Promise<T> {
        return <T>(await this._collection.findOne({_id: mongoose.Types.ObjectId(id)}) as unknown);
    }

}
