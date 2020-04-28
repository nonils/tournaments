import {Request, Response} from 'express';
import {inject} from "inversify";
import {ITournamentService} from "../services/ITournamentService";
import {TYPES} from "../types/types";
import {controller, httpGet, httpPost, interfaces} from "inversify-express-utils";
import {CreateNewTournamentRequest} from "./dto/CreateNewTournamentRequest";
import {ApiOperationGet, ApiOperationPost, ApiPath, SwaggerDefinitionConstant} from "swagger-express-ts";
import {Tournament} from "../models/Tournament";


@ApiPath({
    path: "/tournaments",
    name: "Tournaments",
    security: { basicAuth: [] }
})
@controller("/api/v1/tournaments")
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
            body: { description: "Create a new tournament", required: true, model: "TournamentRequest" }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Parameters fail" },
            404: { description: "An element was not found trying to create the tournament" }
        }
    })
    @httpPost("/", )
    public async createNewTournament(req: Request, res:Response) {
        const response = await this._tournamentService.createTournament(CreateNewTournamentRequest.buildFromReq(req.body))
        res.send(response);
        return;
    }

    @ApiOperationGet({
        description: "Get all tournaments",
        summary: "Create a new tournament",
        parameters: {
        },
        responses: {
            200: { description: "Success" , type: SwaggerDefinitionConstant.Response.Type.ARRAY, model: "Tournament" },
        }
    })
    @httpGet("/")
    public async GetTournaments(req: Request, res:Response) {
        const response = await this._tournamentService.findAllTournaments();
        res.send(response);
        return;
    }

}