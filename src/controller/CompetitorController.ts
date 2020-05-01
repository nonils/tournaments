import {NextFunction, Request, Response} from 'express';
import {inject} from "inversify";
import {ITournamentService} from "../services/ITournamentService";
import {TYPES} from "../types/types";
import {controller, httpDelete, httpGet, httpPost, httpPut, interfaces} from "inversify-express-utils";
import {CreateNewTournamentRequest} from "./dto/CreateNewTournamentRequest";
import {ApiOperationGet, ApiOperationPost, ApiPath, SwaggerDefinitionConstant} from "swagger-express-ts";
import {Tournament} from "../models/Tournament";
import {TournamentMapper} from "../mapper/TournamentMapper";
import {ICompetitorService} from "../services/ICompetitorService";
import {CompetitorRequest} from "./dto/CompetitorRequest";
import {CompetitorMapper} from "../mapper/CompetitorMapper";


@ApiPath({
    path: "/competitors",
    name: "competitors",
    security: { basicAuth: [] }
})
@controller("/api/v1/competitors")
export class CompetitorController implements interfaces.Controller{

    public static TARGET_NAME: string = "competitors";
    private _competitorService: ICompetitorService

    public constructor(@inject(TYPES.ICompetitorService) service : ICompetitorService) {
        this._competitorService = service;
    }

    @ApiOperationPost({
        description: "Create a new competitor for an existing tournament",
        summary: "Create a new competitor",
        parameters: {
            body: { description: "Create a new competitor", required: true, model: "CompetitorRequest" }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Invalid casino, game or userId" },
            404: { description: "An element was not found trying to create the competitor" }
        }
    })
    @httpPost("/")
    public async createNewCompetitor(req: Request, res: Response, next:NextFunction) {
        let response = await this._competitorService.SubscribeCompetitor(CompetitorMapper.
        MapFromCompetitorRequestToCompetitor(CompetitorRequest.fromBodyToCompetitorRequest(req.body)));
        res.send(response);
    }

    @httpGet("/:id")
    public async GetCompetitorById(req: Request, res:Response) {
        res.send(await this._competitorService.FindCompetitorById(req.params.id));
    }

    @httpPut("/")
    public async ModifyCompetitor(req:Request, res: Response) {

    }

    @httpPost("/played")
    public async AddPlayedGame(req:Request, res: Response) {

    }



}
