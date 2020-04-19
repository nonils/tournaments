import {PrizeElementDTO} from "./PrizeElementDTO";

export class PrizeDTO {
    positionFrom: number;
    positionTo: number;
    fieldsToDefinePosition: string[];
    prizeElement: PrizeElementDTO[];

    constructor(positionFrom: number, positionTo: number, fieldsToDefinePosition: string[], prizeElement: PrizeElementDTO[]) {
        this.positionFrom = positionFrom;
        this.positionTo = positionTo;
        this.fieldsToDefinePosition = fieldsToDefinePosition;
        this.prizeElement = prizeElement;
    }
}
