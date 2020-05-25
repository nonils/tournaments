import {CustomException} from "./CustomException";

export class CompetitorExistsException extends CustomException {
    constructor(userId: number, tournamentId:string) {
        super(`The user with the id: ${userId} exists in the tournament ${tournamentId}`);
        this.status = 404;
        this.description = "The competitor exists. Please check if the competitor not exists and if it not exists please contact with technical support"
    }
}

