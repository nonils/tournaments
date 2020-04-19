import { Request, Response } from 'express';
import {inject, injectable} from "inversify";
import {ITournamentService} from "../services/ITournamentService";
import {TYPES} from "../types/types";
import {controller, httpPost, interfaces} from "inversify-express-utils";
import {CreateNewTournamentRequest} from "./dto/CreateNewTournamentRequest";
import {ApiOperationPost, ApiPath} from "swagger-express-ts";


@ApiPath({
    path: "/versions",
    name: "Version",
    security: { basicAuth: [] }
})
@controller("/tournaments")
export class TournamentController implements interfaces.Controller{

    public static TARGET_NAME: string = "TuVieja";
    private _tournamentService: ITournamentService

    public constructor(@inject(TYPES.ITournamentService) tournamentService : ITournamentService) {
        this._tournamentService = tournamentService;
    }

    @ApiOperationPost({
        description: "Post tournament object",
        summary: "Create a new tournament",
        parameters: {
            body: { description: "Create a new tournament", required: true, model: "Tournament" }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Parameters fail" },
            404: { description: "An element was not found trying to create the tournament" }
        }
    })
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
