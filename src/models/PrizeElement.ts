import {ApiModel, ApiModelProperty, SwaggerDefinitionConstant} from "swagger-express-ts";

@ApiModel({name: "PrizeElement", description: "Prizes elements of the prize"})
export class PrizeElement {
    @ApiModelProperty({description: 'quantity of item that will receive'})
    quantity: number = 0;
    @ApiModelProperty({description: 'type of item that will receive'})
    type: string = "";
    @ApiModelProperty({description: 'In case that the prize will be a achievement must have an id associated to the booster', type:SwaggerDefinitionConstant.Parameter.Type.NUMBER})
    associatedIds: number[] = [];
}
