import { version } from 'vue';
const isVue2 = parseFloat(version) < 3;

const config = {
    inserted: isVue2 ? 'inserted' : 'onMounted',
    unbind: isVue2 ? 'unbind' : 'onUnMounted',
} as const;

/**
 * vue 图片懒加载指令
 */
export const lazyImage = {
    [config.inserted](el: HTMLImageElement, binding: { value: string }) {
        const obs = new IntersectionObserver(([server]) => {
            if (server.isIntersecting) {
                el.src = binding.value;
                obs.unobserve(el);
                obs.disconnect();
            }
        });
        setTimeout(() => {
            obs.observe(el);
        });
    },
    [config.unbind](el: HTMLImageElement) {
        if (!el.src) return;
        URL.revokeObjectURL(el.src);
    }
}