import smoothScroll from './smoothScroll';
import { getGlobalOptions } from '../internal/globalOptions';
const globalOptions = getGlobalOptions();
const scrolling = async (endPosition, opts) => {
    const { duration, easing, offset } = Object.assign(globalOptions, opts);
    const start = window.pageYOffset;
    const end = endPosition + offset;
    await smoothScroll({ start, end, duration, easing }, (position) => {
        window.scroll(0, position);
    });
};
export default scrolling;
