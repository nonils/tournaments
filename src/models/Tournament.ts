import {Prize} from "./Prize";
import {arrayProp, prop, Ref} from '@typegoose/typegoose';
import {Competitor} from "./Competitor";
import {ApiModel, ApiModelProperty, SwaggerDefinitionConstant} from "swagger-express-ts";
import {SoftDeleteableBean} from "./SoftDeleteableBean";

@ApiModel({name: "Tournament", description: "Tournament"})
export class Tournament extends SoftDeleteableBean {
    @ApiModelProperty({description: 'Id of the casino'})
    @prop()
    casinoId: number = 0;
    @ApiModelProperty({description: 'Tournament namee'})
    @prop()
    tournamentName: string = "";
    @ApiModelProperty({description: 'Cost to access to the tournament'})
    @prop()
    cost: number = 0;
    @ApiModelProperty({description: 'Is the most win matches the thing that deefines the tournament'})
    @prop()
    mostWinMatches: boolean = false;
    @ApiModelProperty({description: 'From where is valid the tournament'})
    @prop()
    from: Date = new Date();
    @ApiModelProperty({description: 'To where is valid the tournament'})
    @prop()
    to: Date = new Date();
    @ApiModelProperty({description: 'From where is valid the inscription to the tournament'})
    @prop()
    inscriptionFrom: Date = new Date();
    @ApiModelProperty({description: 'To where is valid the inscription to the tournament'})
    @prop()
    inscriptionTo: Date = new Date();
    @ApiModelProperty({description: 'Whats is the game id valid if its one, all games are valid', type: SwaggerDefinitionConstant.Parameter.Type.STRING})
    @prop()
    gameId: number = 0;
    @ApiModelProperty({description: 'What are the prizes', type:"Prize"})
    @prop()
    prizes: Prize[] = [];
    @arrayProp({ref: Competitor})
    competitors?: Ref<Competitor>[] = [];

}


