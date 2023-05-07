import { get } from 'svelte/store';
import { globalOptions } from '../store';
const globalOpts = get(globalOptions);
export const getGlobalOptions = () => {
    return globalOpts;
};
/**
 * Override global options
 *
 * @param options - The global options
 */
const setGlobalOptions = (options) => {
    globalOptions.update(() => Object.assign(globalOpts, options));
};
export default setGlobalOptions;
