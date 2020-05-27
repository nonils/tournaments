import {BaseFormatter} from "./BaseFormatter";

export interface IPrizeElement {
    quantity: number;
    type: string;
    associatedIds?: number[];
}

export class PrizeElementFormatter extends BaseFormatter implements IPrizeElement {
    public associatedIds?: number[] = undefined;
    public quantity: number = undefined;
    public type: string= undefined;

    constructor(args: any) {
        super();
        this.format(args);
    }
}
