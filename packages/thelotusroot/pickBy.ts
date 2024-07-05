import { ToProtoType } from './extends/proto';
import { pickBy } from 'lodash';

class ProtoPickBy extends ToProtoType {
    constructor(selfs = [Object]) {
        super();
        this.selfs = selfs ?? [];
    }
    get _name() {
        return 'toPickByed';
    }
    setup(...args: any[]) {
        if (!args.length) return this;
        if (args.length === 1) {
            return pickBy(this, args[0]);
        }
        if (args.length > 1) {
            return pickBy(args[0], args[1]);
        }
    }
}
export {
    ProtoPickBy,
};