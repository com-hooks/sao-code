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
    setup<T extends object, K extends string[]>(object: T, paths: K) {
        return omit(object, paths);
    }
}
export {
    ProtoOmit,
};