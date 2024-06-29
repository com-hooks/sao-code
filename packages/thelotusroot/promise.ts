import { ToProtoType } from './extends/proto';

export class PromiseLotusRoot extends ToProtoType {
    constructor(self = [Function]) {
        super();
        this.selfs = self;
    }
    get _name() {
        return 'toPromised';
    }
    setup(...args: any[]) {
        return new Promise<any>(async (resolve, reject) => {
            let _result: any;
            let _carg: any[] = [];
            const newArgs = args.map(arg => {
                if (arg === '$func') {
                    return async function (...carg: any[]) {
                        _carg.push(carg);
                    }
                }
                return arg;
            });
            try {
                _result = await (this as unknown as Function).apply(this, newArgs);
                resolve([..._carg, _result]);
            } catch (err) {
                reject(err);
            }
        });
    }
}