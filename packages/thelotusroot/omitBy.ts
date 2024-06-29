import { ToProtoType } from './extends/proto';
import { Dictionary, ValueKeyIteratee, omitBy } from 'lodash';

class ProtoOmitBy extends ToProtoType {
    constructor(selfs = [Object]) {
        super();
        this.selfs = selfs ?? [];
    }
    get _name() {
        return 'toOmitByed';
    }
    setup<T extends Dictionary<T>, K extends ValueKeyIteratee<T>>(object: T, predicate?: K) {
        return omitBy(object, predicate);
    }
}
export {
    ProtoOmitBy,
};