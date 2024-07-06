import omit from 'lodash/omit';

import { ToProtoType } from './extends/proto';

class ProtoOmit extends ToProtoType {
    constructor(selfs = [Object]) {
        super();
        this.selfs = selfs ?? [];
    }
    get _name() {
        return 'toOmited';
    }
    setup(...args: any[]) {
        if (!args.length) return this;
        if (args.length === 1) {
            return omit(this, args[0]);
        }
        if (args.length > 1) {
            return omit(args[0], args[1]);
        }
    }
}
export {
    ProtoOmit,
};