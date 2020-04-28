import {injectable} from "inversify";
import {Collection, Cursor} from 'mongodb';
import {IGenericDao} from "../IGenericDao";

@injectable()
export class GenericDao<T> implements IGenericDao<T>{
    public readonly _collection: Collection;

    constructor(collection :Collection) {
        this._collection = collection;
    }

    async create (entity: T) : Promise<T> {
        const result = await this._collection.insertOne(entity);
        return <T>(await this._collection.findOne({_id: result.insertedId}) as unknown);
    }


    async update(id: string, item: T): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    async delete(id: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    async find(item: T): Promise<T[]> {
        const cursor: Cursor<T>=await this._collection.find<T>();
        return cursor.toArray()
    }

    async findOne(id: string): Promise<T> {
        return <T>(await this._collection.findOne({_id: id}) as unknown);
    }

}
