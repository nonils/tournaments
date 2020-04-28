import {Connection, Mongoose} from "mongoose";
import {injectable} from "inversify";

const mongoose = require('mongoose');

@injectable()
export class WrapperDB {
    connection : Mongoose

    constructor() {
        this.connection = mongoose.connect(process.env.MONGO_URL);
    }


}




