import { Request, Response } from 'express';
import {inject, injectable} from "inversify";
import {ITournamentService} from "../services/ITournamentService";
import {TYPES} from "../types/types";
import {controller, httpPost, interfaces} from "inversify-express-utils";
import {CreateNewTournamentRequest} from "./dto/CreateNewTournamentRequest";


@controller("/tournaments")
export class TournamentController implements interfaces.Controller{

    private _tournamentService: ITournamentService

    private constructor(@inject(TYPES.ITournamentService) tournamentService : ITournamentService) {
        this._tournamentService = tournamentService;
    }

    @httpPost("/")
    public async createNewTournament(req: Request, res:Response) {
        this._tournamentService.createTournament(new CreateNewTournamentRequest(0,
            "",
            0,
            false,
            new Date(),
            new Date(),
            new Date(),
            new Date(),
            0,
            []));
    }

}
