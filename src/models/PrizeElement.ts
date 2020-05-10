import {BaseFormatter} from "./BaseFormatter";

export interface IPrizeElement {
    quantity: number;
    type: string;
    associatedIds: number[];
}

export class PrizeElementFormatter extends BaseFormatter implements IPrizeElement {
    associatedIds: number[];
    quantity: number;
    type: string;

    constructor(args: any) {
        super();
        this.format(args);
    }
}
