import {prop} from "@typegoose/typegoose";

import {Document} from 'mongoose';

export abstract class SoftDeleteableBean extends Document {
    @prop()
    active: boolean = true;
}
