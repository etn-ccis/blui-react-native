/**
 * usePrevious hook
 *
 * This hook is used to track the previous version of a variable from a prior
 * render for the purposes of conditionally updating aspects of a component based on
 * whether particular variables have changed.
 */
export declare const usePrevious: <T>(value: T) => T | undefined;
