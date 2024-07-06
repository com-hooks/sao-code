import { ToProtoType } from './extends/proto';
import { pick } from 'lodash';

class ProtoPick extends ToProtoType {
    constructor(selfs = [Object]) {
        super();
        this.selfs = selfs ?? [];
    }
    get _name() {
        return 'toPicked';
    }
    setup(...args: any[]) {
        if (!args.length) return this;
        if (args.length === 1) {
            return pick(this, args[0]);
        }
        if (args.length > 1) {
            return pick(args[0], args[1]);
        }
    }
}
export {
    ProtoPick,
};