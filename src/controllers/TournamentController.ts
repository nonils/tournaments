import {Body, Controller, Delete, Get, Post, Put, Query, Response, Route, Tags} from 'tsoa';

import {inject, ProvideSingleton} from '../ioc';
import {ITournamentService, TournamentServiceImpl} from '../services';
import {ITournamentModel} from "../models/TournamentModel";
import {IPaginationModel} from "../models";
import {ICreateTournamentRequest} from "../models/dto/CreateTournamentRequest";

@Tags('Tournaments')
@Route('/v1/tournaments')
@ProvideSingleton(TournamentController)
export class TournamentController extends Controller {
    constructor(@inject(TournamentServiceImpl) private service: ITournamentService) {
        super();
    }

    @Get("/all")
    public async getAll(): Promise<ITournamentModel[]> {
        return this.service.findAllTournaments();
    }

    @Get("/suscribed/{userId}")
    public async getAllByUserId(userId:number): Promise<ITournamentModel[]> {
        return this.service.findAllByUserId(userId);
    }

    @Get('/{id}')
    public async getById(id: string): Promise<ITournamentModel> {
        return this.service.findTournamentById(id);
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

    @Post()
    @Response(400, 'Bad request')
    public async create(@Body() body: ICreateTournamentRequest): Promise<ITournamentModel> {
        return this.service.create(body as ITournamentModel);
    }

    @Delete('{id}')
    public async delete(id: string): Promise<void> {
        return this.service.delete(id);
    }

    @Response(400, 'Bad request')
    @Put('{id}')
    public async update(id: string, @Body() body: ITournamentModel): Promise<ITournamentModel> {
        return this.service.updateTournament(id, body);
    }
}
