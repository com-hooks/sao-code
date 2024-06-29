import cloneDeep from 'lodash/cloneDeep';
import clone from 'lodash/clone';
import { ToProtoType } from './extends/proto';

class ProtoClone extends ToProtoType {
    constructor(selfs = [Object, String]) {
        super();
        this.selfs = selfs ?? [];
    }
    get _name() {
        return 'toCloned';
    }
    setup(deep: boolean) {
        return deep ? cloneDeep(this) : clone(this);
    }
}

export {
    ProtoClone,
};