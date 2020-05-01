export class CustomException extends Error {
    status: number = 0;
    message: string = "";
    description: string = "";

    constructor(message: string) {
        super(message);
        this.message = message
    }
}
