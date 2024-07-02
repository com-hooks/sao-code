import { base64ImageList } from './read';
import { getRandomVal } from '../../utils';

const views: HTMLDivElement[] = [];
const errorTipMsg = '呦呦呦，又报错了';

/**
 * @desc 监听全局error事件
 */
export function useEventError() {
    const eventHandler = errorEvent.bind(window, errorTipMsg);
    window.removeEventListener('error', eventHandler, true);
    window.addEventListener('error', eventHandler, true);
    useRequestIdlcallback();
    views.forEach(div => {
        try {
            div.remove();
        } catch (err) {
            console.info(err);
        }
    });
    views.push(renderImg());
}

function useRequestIdlcallback() {
    window.requestIdleCallback((IdleRequestCallback) => {
        const timeRemaining = IdleRequestCallback.timeRemaining();
        if (IdleRequestCallback.didTimeout || timeRemaining <= 5) {
            errorEvent('写的什么玩意啊，渲染速度不咋样， 渲染剩余时间：' + timeRemaining + '毫秒');
        }
        setTimeout(() => {
            useRequestIdlcallback();
        }, 4000);
    });
}

export function errorEvent(msg: string) {
    setTimeout(() => {
        // @ts-ignore
        views[0].children[0].src = getRandomVal(base64ImageList);
        views[0].children[1].innerHTML = `
            <div style="color: dodgerblue;font-weight: bold;margin-top: 10px">${msg ?? '哈哈哈'}</div>
            `;
        views[0].style.transform = 'translate(0%, 0%)';
        setTimeout(() => {
            views[0].style.transform = 'translate(-120%, 0%)';
        }, 3000);
    }, 500);
}

function renderImg() {
    const contianerTips = document.createElement('div');
    contianerTips.style.transition = 'all linear 0.4s';
    contianerTips.style.backgroundColor = 'white';
    contianerTips.style.borderRadius = '10px';
    contianerTips.style.padding = '10px';
    const img = document.createElement('img');
    img.src = getRandomVal(base64ImageList);
    img.style.width = '100%';
    contianerTips.style.width = '15vw';
    contianerTips.style.position = 'absolute';
    contianerTips.style.top = '0';
    contianerTips.style.left = '0';
    contianerTips.style.textAlign = 'left';
    contianerTips.style.transform = 'translate(-120%, 0%)';
    contianerTips.style.zIndex = '5000';
    contianerTips.setAttribute('title', '双击熊二隐藏')
    const p = document.createElement('p');
    p.style.fontSize = '1vw';
    p.innerHTML = '呦呦呦，又报错了';
    contianerTips.appendChild(img);
    contianerTips.appendChild(p);
    document.body.appendChild(contianerTips);
    contianerTips.ondblclick = function () {
        contianerTips.style.transform = 'translate(-120%, 0%)';
    }
    setTimeout(() => {
        errorEvent('我是熊二，看你写bug的');
    }, 1000);
    return contianerTips;
}

/**
 * 添加标签包图片源
 * @param list 
 */
export function pushImageSource(list: string[] = []) {
    base64ImageList.push(...list);
}