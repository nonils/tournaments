import {ImmutabilityHelper} from '../utils';

export abstract class BaseFormatter {
    public id: string;
    public _id: string;

    protected format(args: any = {}): void {
        if (typeof args.toJSON === 'function') args = args.toJSON();
        Object.getOwnPropertyNames(this).forEach(key => {
            if (args[key] !== undefined) {
                if(args[key] instanceof Date) {
                    this[key] = new Date(args[key])
                } else {
                    this[key] = ImmutabilityHelper.copy(args[key]);
                }
            }
        });
        if (args._id) this.id = this._id = args._id;
    }
}
