import {CustomException} from "./CustomException";

export class CompetitorNotFoundException extends CustomException {
    constructor(competitorId: string) {
        super(`The competitor with the id: ${competitorId} was not found`);
        this.status = 404;
        this.description = "The competitor was not found. Please check if the competitor exists and if it exists please contact with technical support"
    }
}

