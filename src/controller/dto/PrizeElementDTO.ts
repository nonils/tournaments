export class PrizeElementDTO {
    quantity: number = 0;
    type: string = "";
    associatedIds: number[] = [];
    constructor(quantity:number, type: string, associatedIds: number[]) {
        this.quantity = quantity;
        this.type = type;
        this.associatedIds = associatedIds;
    }
}
