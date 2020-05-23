import {Body, Controller, Delete, Get, Post, Put, Query, Response, Route, Tags} from 'tsoa';

import {inject, ProvideSingleton} from '../ioc';
import {IPaginationModel} from "../models";
import {ICompetitorModel} from "../models/CompetitorModel";
import {ICompetitorService} from "../services/ICompetitorService";
import {CompetitorServiceImpl} from "../services/impl/CompetitorServiceImpl";
import {ICreateCompetitorRequest} from "../models/dto/CreateCompetitorRequest";
import {IAddPlayedGameRequest} from "../models/dto/AddPlayedGameRequest";

@Tags('Competitors')
@Route('/v1/competitors')
@ProvideSingleton(CompetitorController)
export class CompetitorController extends Controller {
    constructor(@inject(CompetitorServiceImpl) private service: ICompetitorService) {
        super();
    }

    @Get('{id}')
    public async getById(id: string): Promise<ICompetitorModel> {
        return this.service.getById(id);
    }

    @Get()
    public async getPaginated(
        @Query('page') page: number,
        @Query('limit') limit: number,
        @Query('fields') fields?: string,
        @Query('sort') sort?: string,
        @Query('q') q?: string): Promise<IPaginationModel> {
        return this.service.getPaginated(page, limit, fields, sort, q);
    }

    @Get("/all")
    public async getAll(): Promise<ICompetitorModel[]> {
        return this.service.getAll();
    }

    @Post()
    @Response(400, 'Bad request')
    public async create(@Body() body: ICreateCompetitorRequest): Promise<ICompetitorModel> {
        return this.service.createCompetitor(body as ICompetitorModel);
    }

    @Delete('{id}')
    public async delete(id: string): Promise<void> {
        return this.service.delete(id);
    }

    @Response(400, 'Bad request')
    @Put('{id}')
    public async update(id: string, @Body() competitor: ICompetitorModel): Promise<ICompetitorModel> {
        return this.service.replaceCompetitor(id, competitor);
    }

    @Response(400, 'Bad request')
    @Post("/played-transaction")
    public async addPlayedTransaction(@Body() request:IAddPlayedGameRequest) : Promise<ICompetitorModel[]> {
        return this.service.addPlayedTransaction(request);
    }


}
