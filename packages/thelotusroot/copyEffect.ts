import { ToProtoType } from './extends/proto';
import { pick, omit } from 'lodash';

export class ProtoCopyEffect extends ToProtoType {
    constructor(selfs = [Object]) {
        super();
        this.selfs = selfs ?? [];
    }
    get _name() {
        return 'copyEffect';
    }
    setup<T extends { [x in string]: any }, K extends (keyof T), U extends K>(object: T, pickPaths: K[] = [], omitPaths: U[] = []) {
        if (Array.isArray(this) || Object.is(this, null) || Object.is(object, null) || typeof this !== 'object' || typeof object !== 'object') {
            return this;
        }
        let tempObj = pickPaths?.length ? omit(pick(object, pickPaths), omitPaths) : omit(object, omitPaths);
        let keys = Object.keys(tempObj);
        keys.forEach(key => {
            if (object.hasOwnProperty(key)) {
                Reflect.set(this, key, object[key]);
            }
        });
        return this;
    }
}   