import { ToProtoType } from './extends/proto';

export class WithResolves extends ToProtoType {
    constructor(self = [Promise]) {
        super();
        this.selfs = self;
    }
    get _name() {
        return 'withResolvers';
    }
    setup() {
        let resolve,
            reject;
        let promise = new Promise((...arg) => ([resolve, reject] = arg));
        return {
            promise,
            resolve,
            reject
        }
    }
}