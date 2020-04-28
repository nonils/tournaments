import {Collection} from 'mongodb';
import {injectable} from "inversify";

@injectable()
export class GenericDao<T> {
    public readonly _collection: Collection;

    constructor(collection :Collection) {
        this._collection = collection;
    }

    async create(entity: T): Promise<boolean> {
        const result = await this._collection.insertOne(entity);
        return !!result.result.ok;
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
