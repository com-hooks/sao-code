import chalk from 'chalk';
import { SLog } from './log';
import { happyMessageList } from './const/message';

const des = '           🐵  🐒   😺  🐺' + '\n'
    + '         🙊                 🐫' + '\n' +
    '        😿     ' + chalk.cyan.bold('吗喽上班了') + '   😻' + '\n' +
    '         😾                 🐘' + '\n' +
    '           🐯             🐏' +  '\n' + 
    '              🐴       🐎' + '\n' + 
    '                   🐽'

export default {
    install() {
        console.log(des);
        console.groupCollapsed(chalk.blue.bold('阅读一刻 🐧'));
        console.log(chalk.underline.bold(happyMessageList.join('\n\n')));
        console.groupEnd();
        new SLog().install();
    },
}
