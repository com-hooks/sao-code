import { ToProtoType } from './extends/proto';
class ProtoCompose extends ToProtoType {
    constructor(selfs = [Object]) {
        super();
        this.selfs = selfs ?? [];
    }
    get _name() {
        return 'compose';
    }
    setup(...args: any[]) {
        return (initialValue: any) => {
            if (!args.length) return this;
            return args.reduceRight((prev, curr) => curr(prev), initialValue)
        };
    }
}
export {
    ProtoCompose,
};