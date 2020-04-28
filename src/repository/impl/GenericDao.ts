import {injectable} from "inversify";
import {Collection} from 'mongodb';
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


    update(id: string, item: T): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    delete(id: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    find(item: T): Promise<T[]> {
        throw new Error('Method not implemented.');
    }

    findOne(id: string): Promise<T> {
        throw new Error('Method not implemented.');
    }

}
