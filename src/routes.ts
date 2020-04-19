//src/routes.ts

import { Application } from 'express';
import { TournamentController } from './controller/tournament.controller';

export class Routes {
    private TournamentController: TournamentController;
    private prefix = '/api/v1'

    constructor(private app: Application) {
        this.TournamentController = TournamentController.getInstance();
        this.middleware();
        this.routes();
    }

    public routes() {
        this.app.route(`${this.prefix}/tournaments/`).post(this.TournamentController.createNewTournament);
    }

    public middleware() {

    }
}
