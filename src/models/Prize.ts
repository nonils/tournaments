import {PrizeElement} from "./PrizeElement";
import {prop} from "@typegoose/typegoose";
import {ApiModel, ApiModelProperty} from "swagger-express-ts";

@ApiModel({name: "Prize", description: "Prizes of the tournament"})
export class Prize {
    @ApiModelProperty({description: 'position from the prize is valid'})
    @prop()
    positionFrom: number = 0;
    @ApiModelProperty({description: 'position to the prize is valid'})
    @prop()
    positionTo: number = 0;
    @ApiModelProperty({description: 'fields to define the position as: inscription date, points etcetera'})
    @prop()
    fieldsToDefinePosition: string[] = [];
    @ApiModelProperty({description: 'quantity of item that will receive', itemType:"PrizeElement"})
    @prop()
    prizeElement: PrizeElement[] = [];
}
