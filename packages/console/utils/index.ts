
/**
 * 
 * @param fn 
 * @returns 
 */
export function createSingleton<T extends object>(fn: T): T {
    let instance: T;

    const singleton = new Proxy(fn, {
        construct(target: any, args: any) {
            if (instance) {
                // 如果instance已经创建，则直接返回它
                return instance;
            }
            // 如果instance未创建，则新建一个实例
            instance = new target(...args);
            return instance;
        }
    });

    return singleton;
}