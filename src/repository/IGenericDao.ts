import {SoftDeleteableBean} from "../models/SoftDeleteableBean";

export interface IGenericDao<T extends SoftDeleteableBean> {

    create(entity: T): Promise<T>

    update(id: string, item: T): Promise<T>

    delete(id: string): Promise<boolean>

    find(item: T): Promise<T[]>

    findOne(id: string): Promise<T>
}
