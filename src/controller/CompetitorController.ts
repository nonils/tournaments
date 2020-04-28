import {Request, Response} from 'express';
import {inject} from "inversify";
import {ITournamentService} from "../services/ITournamentService";
import {TYPES} from "../types/types";
import {controller, httpDelete, httpGet, httpPost, httpPut, interfaces} from "inversify-express-utils";
import {CreateNewTournamentRequest} from "./dto/CreateNewTournamentRequest";
import {ApiOperationGet, ApiOperationPost, ApiPath, SwaggerDefinitionConstant} from "swagger-express-ts";
import {Tournament} from "../models/Tournament";
import {TournamentMapper} from "../mapper/TournamentMapper";
import {ICompetitorService} from "../services/ICompetitorService";


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


}
