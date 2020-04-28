import {PrizeDTO} from "./PrizeDTO";
import {ApiModel, ApiModelProperty} from "swagger-express-ts";

@ApiModel( {
    description : "Request to create a new tournament" ,
    name : "TournamentRequest"
})
export class CreateNewTournamentRequest {
    @ApiModelProperty( {
        description : "Casino id" ,
        required : true,
    })
    casinoId: number;
    @ApiModelProperty( {
        description : "Tournament name" ,
        required : true,
    } )
    tournamentName: string;
    @ApiModelProperty( {
        description : "Cost of the inscription" ,
        required : true,
    })
    cost: number;
    @ApiModelProperty( {
        description : "If the way to define the winner of the tournament is the person who won most matches" ,
        required : true,
    })
    mostWinMatches: boolean;
    @ApiModelProperty( {
        description : "date from are the tournament valid" ,
        required : true,
    })
    from: Date;
    @ApiModelProperty( {
        description : "date to are the tournament valid" ,
        required : true,
    })
    to: Date;
    @ApiModelProperty( {
        description : "date from are the inscription valid" ,
        required : true,
    })
    inscriptionFrom: Date;
    @ApiModelProperty( {
        description : "date to are the inscription valid" ,
        required : true,
    })
    inscriptionTo: Date;
    @ApiModelProperty( {
        description : "Game id" ,
        required : true,
    })
    gameId: number;
    @ApiModelProperty( {
        description : "prizes to won" ,
        type: "Array",
        model:"PrizeDTO",
        itemType: "PrizeDTO",
        required : true,
        example: [{
            positionFrom: 1,
            positionTo: 1,
            fieldsToDefinePosition: ['inscriptionDate'],
            prizeElement: [{
               quantity: 1,
               type: "booster",
               associatedIds: [1],
            },{
                quantity: 100,
                type: "realMoney",
            },{
                quantity: 20,
                type: "soft-coin",
            }]
        },
            {
            positionFrom: 2,
            positionTo: 4,
            fieldsToDefinePosition: ['inscriptionDate'],
            prizeElement: [{
                quantity: 1,
                type: "booster",
                associatedIds: [1],
            },{
                quantity: 20,
                type: "soft-coin",
            }]
        }]
    })
    prizes: PrizeDTO[];

    constructor(casinoId: number, tournamentName: string, cost: number, mostWinMatches: boolean, from: Date,
    to: Date, inscriptionFrom: Date, inscriptionTo: Date, gameId: number, prizes: PrizeDTO[]) {
        this.casinoId = casinoId;
        this.tournamentName = tournamentName;
        this.cost = cost;
        this.mostWinMatches = mostWinMatches;
        this.from = from;
        this.to = to;
        this.inscriptionFrom= inscriptionFrom;
        this.inscriptionTo = inscriptionTo;
        this.gameId = gameId;
        this.prizes = prizes;
    }

    static buildFromReq(body: any) : CreateNewTournamentRequest {
        return new CreateNewTournamentRequest(
                body.casinoId,
                body.tournamentName,
                body.cost,
                body.mostWinMatches,
                body.from,
                body.to,
                body.inscriptionFrom,
                body.inscriptionTo,
                body.gameId,
                body.prizes
        )
    }

}
