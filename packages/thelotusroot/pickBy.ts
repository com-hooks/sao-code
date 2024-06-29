import { ToProtoType } from './extends/proto';
import { Dictionary, ValueKeyIterateeTypeGuard, pickBy } from 'lodash';

class ProtoPickBy extends ToProtoType {
    constructor(selfs = [Object]) {
        super();
        this.selfs = selfs ?? [];
    }
    get _name() {
        return 'toPickByed';
    }
    setup<T extends Dictionary<T>, K extends T>(object: T, predicate: ValueKeyIterateeTypeGuard<T, K>) {
        return pickBy(object, predicate);
    }
}
export {
    ProtoPickBy,
};