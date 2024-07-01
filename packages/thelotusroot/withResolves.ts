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
        let resolve = Promise.resolve,
            reject = Promise.reject;
        // @ts-ignore
        let promise = new Promise<any>((...arg) => ([resolve, reject] = arg));
        return {
            promise,
            resolve,
            reject
        }
    }
}