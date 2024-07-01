import { colorFuncs } from '../const/chalk.funcs';
import { messageList } from '../const/message';
import emoji from '../const/emoji';
import chalk from 'chalk';
export type ConsoleKey = (keyof Console);

export class SPrint {
    private _name: ConsoleKey;
    constructor(name: ConsoleKey) {
        this._name = name;
    }
    rcFunc(...arg: string[]) {
        const index = Math.floor(Math.random() * colorFuncs.length);
        const fname = colorFuncs[index];
        // @ts-ignore
        return chalk[fname].bind(chalk, ...arg);
    }
    getRandomPersionEmoji() {
        return SPrint.getRandomVal(emoji.emojipersiotn);
    }
    getRandomMsg() {
        return SPrint.getRandomVal(messageList);
    }
    public static getRandomVal(values: string | any[]) {
        const index = Math.floor(Math.random() * values.length);
        const fname = values[index];
        return fname;
    }
    public static getExecLine(err: Error) {
        let stack = err.stack;
        let line = '';
        if (stack) {
            line = stack.split?.('\n')[2]?.trim?.().match?.(/\(([^]+.)\)/)?.[1] || '';
        }
        return line;
    }
    install(_name = this._name): Console[keyof Console] {
        if (!_name) {
            console.warn('_name is not defined');
        };
        return ((_console) => {
            const _print = (_console as any)[_name];
            (window.console as any)[_name] = this.setup.bind(_console, _print);
            return _print;
        })(window.console);
    }
    setup(_print: ((...data: any[]) => void) | ((condition?: boolean | undefined, ...data: any[]) => void) | (() => void) | ((label?: string | undefined) => void) | ((label?: string | undefined) => void) | ((...data: any[]) => void) | ((item?: any, options?: any) => void) | ((...data: any[]) => void) | ((...data: any[]) => void) | ((...data: any[]) => void) | ((...data: any[]) => void) | (() => void) | ((...data: any[]) => void) | ((...data: any[]) => void) | ((tabularData?: any, properties?: string[] | undefined) => void) | ((label?: string | undefined) => void) | ((label?: string | undefined) => void) | ((label?: string | undefined, ...data: any[]) => void) | ((label?: string | undefined) => void) | ((...data: any[]) => void)): any {
        throw new Error("Method not implemented.");
    }
}