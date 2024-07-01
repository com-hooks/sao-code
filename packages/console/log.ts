import { SPrint } from './extends/print';
import chalk from 'chalk';
import { createSingleton } from './utils';
import { Setup } from './infterface/setup';


class SLogClass extends SPrint implements Setup {
    constructor() {
        super('log');
    }
    setup(_print: Console['log'], ...args: any[]) {
        const _console = (this as unknown as Console);
        const line = SPrint.getExecLine(new Error());
        const func = super.rcFunc?.();
        _console.group(chalk.cyan('臭宝就是爱打印，打印了又找不到🐖'));
        _print.call(this, func('ILU [START]'), ('此时的心情') + `${super.getRandomPersionEmoji()}`);
        _print.call(this, chalk.magenta(`[(臭宝)看这里]`), '🐷', ...args);
        _print.call(this, '看完后的心情' + super.getRandomPersionEmoji());
        _print.call(this, '执行栈位置', `👉`, line);
        // 处理数组
        const arrMapList = args.filter(arg => Array.isArray(arg));
        if (arrMapList.length) {
            _console.groupCollapsed('🍭数组给你转表格啦🍭 [TABLE]');
            arrMapList.forEach(arg => {
                _console.table(arg);
            });
            _console.groupEnd();
        }

        _console.groupCollapsed(chalk.grey('没事少看👓'));
        _print.call(this, chalk.blueBright(decodeURIComponent(super.getRandomMsg())));
        _console.groupEnd();
        _console.groupEnd();
        _print.call(this, '\ ');
    }
}


export const SLog = createSingleton(SLogClass);