import {IPrizeElement} from "./PrizeElement";
import {BaseFormatter} from "./BaseFormatter";

export interface IPrize {
    positionFrom: number;
    positionTo: number;
    fieldsToDefinePosition: string[];
    prizeElement: IPrizeElement[];
}

export class PrizeFormatter extends BaseFormatter implements IPrize {
    fieldsToDefinePosition: string[];
    positionFrom: number;
    positionTo: number;
    prizeElement: IPrizeElement[];

    constructor(args: any) {
        super();
        this.format(args);
    }
}
