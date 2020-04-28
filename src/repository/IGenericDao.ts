export interface IGenericDao<T> {

    create(entity: T): Promise<T>

    update(id: string, item: T): Promise<boolean>

    delete(id: string): Promise<boolean>

    find(item: T): Promise<T[]>

    findOne(id: string): Promise<T>
}
