import cloneDeep from 'lodash/cloneDeep';

import { ToProtoType } from './extends/proto';

export class ProToReversed extends ToProtoType {
    constructor(self = [Array]) {
        super();
        this.selfs = self;
    }
    get _name() {
        return 'toReversed';
    }
    setup() {
        const newArr: any[] = [];
        // @ts-ignore
        let index = this.length;
        while (index) {
            index--;
            // @ts-ignore
            newArr.push(this[index]);
        }
        return newArr;
    }
}

export class ProToSorted extends ToProtoType {
    constructor(self = [Array]) {
        super();
        this.selfs = self;
    }
    get _name() {
        return 'toSorted';
    }
    setup(...arg: any[]) {
        // @ts-ignore
        const newArr: any[] = cloneDeep(this);
        // @ts-ignore
        return newArr.sort(...arg);
    }
}

export class ProToSpliced extends ToProtoType {
    constructor(self = [Array]) {
        super();
        this.selfs = self;
    }
    get _name() {
        return 'toSpliced';
    }
    setup(...arg: any[]) {
        const newArr: any = cloneDeep(this);
        newArr.splice(...arg);
        return newArr;
    }
}


export class ProtoArray {
    static install(self?: ArrayConstructor[], warn?: boolean) {
        new ProToReversed(self).install(warn);
        new ProToSorted(self).install(warn);
        new ProToSpliced(self).install(warn);
    }
}