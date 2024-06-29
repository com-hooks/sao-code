
class ToProtoType {
    selfs: (ObjectConstructor | StringConstructor | Function | Object)[];
    constructor(selfs = []) {
        this.selfs = selfs ?? [];
    }
    static get _name() {
        return 'toCloned';
    }
    install(wran = true) {
        // @ts-ignore
        wran && this.selfs?.length && console.warn(`已给${this.selfs.map(item => String(item))} prototype添加 ${this._name} 根据需求判断是否注册使用`);
        this.selfs.forEach(item => {
            try {
                const target = typeof item === 'function' && item?.name !== 'Promise' ? item.prototype : item;
                // @ts-ignore
                (Reflect.get(target, this._name) === void 0) && (Reflect.set(target, this._name, this.setup));
            } catch (err) {
                console.error(err);
            }
        });
    }
}

export {
    ToProtoType,
};