import cloneDeep from 'lodash/cloneDeep';
import clone from 'lodash/clone';


/**
 * 异步克隆
 * @param arr 
 */
const asyncCloneDeep = <T>(arr: T) => {
    return new Promise<T>((resolve) => {
        const { port1, port2 } = new MessageChannel();
        port2.onmessage = function (e) {
            resolve(e.data);
        }
        port1.postMessage(arr);
    })
}


export {
    cloneDeep,
    clone,
    asyncCloneDeep,
}