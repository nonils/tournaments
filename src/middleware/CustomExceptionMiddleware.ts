import { NextFunction, Request, Response } from 'express';
import {CustomException} from "../exceptions/CustomException";


const  errorMiddleware = (error: CustomException, request: Request, response: Response, next: NextFunction) => {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';
    const description = error.description || 'An error was ocurred. Please, if the error persist send an email to support@powgaming.com'
    response
        .status(status)
        .send({
            status,
            message,
            description
        });
};

export default errorMiddleware;
