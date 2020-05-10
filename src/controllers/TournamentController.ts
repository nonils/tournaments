import {Controller, Get, Route, Tags} from 'tsoa';

import {inject, ProvideSingleton} from '../ioc';
import {ITournamentService, TournamentServiceImpl} from '../services';
import {ITournamentModel} from "../models/TournamentModel";

@Tags('Tournaments')
@Route('tournaments')
@ProvideSingleton(TournamentController)
export class TournamentController extends Controller {
    constructor(@inject(TournamentServiceImpl) private service: ITournamentService) {
        super();
    }

    @Get('{id}')
    public async getById(id: string): Promise<ITournamentModel> {
        return this.service.findTournamentById(id);
    }

    /* @Get()
     public async getPaginated(
       @Query('page') page: number,
       @Query('limit') limit: number,
       @Query('fields') fields?: string,
       @Query('sort') sort?: string,
       @Query('q') q?: string): Promise<IPaginationModel> {
       return this.service.getPaginated(page, limit, fields, sort, q);
     }

     @Response(400, 'Bad request')
     @Security('admin')
     @Post()
     public async create(@Body() body: IUserModel): Promise<IUserModel> {
       return this.service.create(body);
     }

     @Response(400, 'Bad request')
     @Security('admin')
     @Put('{id}')
     public async update(id: string, @Body() body: IUserModel): Promise<IUserModel> {
       return this.service.update(id, body);
     }

     @Security('admin')
     @Delete('{id}')
     public async delete(id: string): Promise<void> {
       return this.service.delete(id);
     }*/
}
