import { ToProtoType } from './extends/proto';
class ProtoPipe extends ToProtoType {
    constructor(selfs = [Object]) {
        super();
        this.selfs = selfs ?? [];
    }
    get _name() {
        return 'pipe';
    }
    setup(...args: any[]) {
        return (initialValue: any) => {
            if (!args.length) return this;
            return args.reduce((prev, curr) => curr(prev), initialValue)
        };
    }
}
export {
    ProtoPipe,
};