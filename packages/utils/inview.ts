import { type Ref, watchEffect } from 'vue';


/**
 * 监听元素是否可见
 * @param el 
 * @param callback 
 * @param option 
 */
export function useInview(
    el: Ref<HTMLElement>,
    callback: (enter: IntersectionObserverEntry) => void,
    option: {
        once?: boolean;
    } = {}
) {
    const obs = new IntersectionObserver(([server]) => {
        if (server.isIntersecting) {
            callback?.(server);
        }
    });
    const stopWc = watchEffect(effectCallback, {
        flush: 'post',
    });

    function effectCallback() {
        obs.unobserve(el.value);
        obs.observe(el.value);
        if (el.value && option.once) {
            stopWc();
            obs.disconnect();
        }
    }
}