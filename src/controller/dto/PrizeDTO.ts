import {PrizeElementDTO} from "./PrizeElementDTO";
import {ApiModel, ApiModelProperty} from "swagger-express-ts";

@ApiModel({
    name : "PrizeDTO",
    description : "DTO to model the prizes",
})
export class PrizeDTO {
    @ApiModelProperty( {
        description : "position from this prize is valid" ,
        required : true,
    })
    positionFrom: number;
    @ApiModelProperty( {
        description : "position to the prize is valid" ,
        required : true,
    })
    positionTo: number;
    @ApiModelProperty( {
        description : "Fields to define the position" ,
        required : true,
    })
    fieldsToDefinePosition: string[];
    @ApiModelProperty( {
        description : "Prize elements",
        required : true,
        //model: 'PrizeElementDTO',
        type: "Array",
        itemType: "PrizeDTO",
    })
    prizeElement: PrizeElementDTO[];

    constructor(positionFrom: number, positionTo: number, fieldsToDefinePosition: string[], prizeElement: PrizeElementDTO[]) {
        this.positionFrom = positionFrom;
        this.positionTo = positionTo;
        this.fieldsToDefinePosition = fieldsToDefinePosition;
        this.prizeElement = prizeElement;
    }
}
