import { ToProtoType } from './extends/proto';
import { omitBy } from 'lodash';

class ProtoOmitBy extends ToProtoType {
    constructor(selfs = [Object]) {
        super();
        this.selfs = selfs ?? [];
    }
    get _name() {
        return 'toOmitByed';
    }
    setup(...args: any[]) {
        if (!args.length) return this;
        if (args.length === 1) {
            return omitBy(this, args[0]);
        }
        if (args.length > 1) {
            return omitBy(args[0], args[1]);
        }
    }
}
export {
    ProtoOmitBy,
};