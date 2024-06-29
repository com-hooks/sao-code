
import { ToProtoType } from './extends/proto';

class ProtoCatch extends ToProtoType {
    constructor(selfs = [Function]) {
        super();
        this.selfs = selfs ?? [];
    }
    get _name() {
        return 'catch';
    }
    setup(...arg: any[]) {
        if (typeof this !== 'function') return this;
        try {
            return (this as Function).apply(this, arg);
        } catch (err) {
            window.console.log(err);
            return {
                Error: err,
            };
        }
    }
}

export {
    ProtoCatch,
};