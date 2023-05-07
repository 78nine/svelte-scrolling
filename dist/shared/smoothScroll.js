import { now } from 'svelte/internal';
const currentPosition = (start, end, elapsed, duration, easing) => {
    if (elapsed > duration)
        return end;
    return start + (end - start) * easing(elapsed / duration);
};
const smoothScroll = async (options, callback) => {
    return new Promise(resolve => {
        const { start, end, duration, easing } = options;
        const clock = now();
        const step = () => {
            const elapsed = now() - clock;
            const position = currentPosition(start, end, elapsed, duration, easing);
            callback(position);
            if (elapsed > duration)
                return resolve();
            window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
    });
};
export default smoothScroll;
