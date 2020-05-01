import {CustomException} from "./CustomException";

export class TournamentNotFoundException extends CustomException{
    constructor(tournamentId:string) {
        super(`The tournament with the id: ${tournamentId} was not found`);
        this.status = 404;
        this.description= "The tournament was not found. Please check if the tournament exists and if it exists please contact with technical support"
    }
}
