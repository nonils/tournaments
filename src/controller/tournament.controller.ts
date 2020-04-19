import { Request, Response } from 'express';


export class TournamentController {

    private static instance : TournamentController;

    public static getInstance():TournamentController {
        if(!TournamentController.instance) {
            TournamentController.instance = new TournamentController();
        }
        return TournamentController.instance;
    }

    private constructor() {
    }


    public async createNewTournament(req: Request, res:Response) {

    }

}
