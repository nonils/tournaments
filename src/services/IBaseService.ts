import {PaginationModel} from "../models";

export interface IBaseService<EntityModel> {
    getById(_id: string): Promise<EntityModel>

    getPaginated(page: number, limit: number, fields: string, sort: string, query: string): Promise<PaginationModel>;

    getAll(): Promise<EntityModel[]>;

    create(entity: EntityModel): Promise<EntityModel>

    update(id: string, entity: EntityModel): Promise<EntityModel>;

    delete(id: string): Promise<void>
}
