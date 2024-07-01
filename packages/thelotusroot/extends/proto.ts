
class ToProtoType {
    selfs: (ObjectConstructor | StringConstructor | Function | Object)[];
    constructor(selfs = []) {
        this.selfs = selfs ?? [];
    }
    static get _name() {
        return 'toCloned';
    }
    install(wran = true) {

        if (wran) {
            console.groupCollapsed('不看就不看👓');
            // @ts-ignore
            this.selfs?.length && console.warn(`已给${this.selfs.map(item => String(item))} prototype添加 ${this._name} 根据需求判断是否注册使用`);
            console.groupEnd();
        }

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