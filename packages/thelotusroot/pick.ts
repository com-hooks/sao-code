import { ToProtoType } from './extends/proto';
import { Many, pick } from 'lodash';

class ProtoPick extends ToProtoType {
    constructor(selfs = [Object]) {
        super();
        this.selfs = selfs ?? [];
    }
    get _name() {
        return 'toPicked';
    }
    setup<T extends object, K extends keyof T>(object: T, paths: Array<Many<K>>) {
        return pick(object, paths);
    }
}
export {
    ProtoPick,
};