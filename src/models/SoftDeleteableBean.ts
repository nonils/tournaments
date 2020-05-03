import {prop} from "@typegoose/typegoose";

export abstract class SoftDeleteableBean {
    @prop()
    active:boolean= true;
}
