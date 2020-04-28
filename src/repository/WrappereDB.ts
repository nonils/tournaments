import {Connection} from "mongoose";
import {injectable} from "inversify";

const mongoose = require('mongoose');

@injectable()
export class WrapperDB {
    connection : Connection

    constructor() {
        this.connection = mongoose.connect(process.env.MONGO_URL);
    }


}




