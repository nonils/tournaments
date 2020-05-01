import {CustomException} from "./CustomException";

export class UserNotFoundException extends CustomException{
    constructor(userId:string) {
        super(`The user with the id: ${userId} was not found`);
        this.status = 404;
        this.description= "The user was not found. Please check if the tournament exists and if it exists please contact with technical support"
    }
}
