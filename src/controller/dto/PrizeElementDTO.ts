import {ApiModel, ApiModelProperty} from "swagger-express-ts";

@ApiModel( {
    name : "PrizeElementDTO",
    description : "DTO to model the prize elements"
} )
export class PrizeElementDTO {
    @ApiModelProperty( {
        description : "Quantity get for the element" ,
        required : true,
    })
    quantity: number = 0;
    @ApiModelProperty( {
        description : "Type of prize" ,
        required : true,
    })
    type: string = "";
    @ApiModelProperty( {
        description : "Casino id" ,
        required : true,
    })
    associatedIds: number[] = [];
    constructor(quantity:number, type: string, associatedIds: number[]) {
        this.quantity = quantity;
        this.type = type;
        this.associatedIds = associatedIds;
    }
}
