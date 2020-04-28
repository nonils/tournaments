import {ApiModel, ApiModelProperty} from "swagger-express-ts";

@ApiModel( {
    description : "Request to create a subscription to tournament" ,
    name : "CompetitorRequest"
})
export class CompetitorRequest {
    @ApiModelProperty( {
        description : "User id" ,
        required : true,
    })
    userId:number=0;
    @ApiModelProperty( {
        description : "Tournament id" ,
        required : true,
    })
    tournamentId: number=0;


    static fromReqToCompetitorRequest(body:any) : CompetitorRequest{
        let entity = new CompetitorRequest();
        entity.tournamentId = body.tournamentId;
        entity.userId = body.userId;
        return entity;
    }
}
