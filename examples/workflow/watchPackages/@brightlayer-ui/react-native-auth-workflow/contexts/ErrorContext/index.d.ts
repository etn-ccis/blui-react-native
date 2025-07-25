import { ErrorContext } from './context.js';
import { ErrorContextProvider } from './provider.js';
import { ErrorContextProviderProps } from './types.js';
import { useErrorManager } from './useErrorManager.js';
/**
 * Hook to get top level error data
 *
 * @category Hooks
 * @private
 * @internal
 */
export declare const useErrorContext: () => ErrorContextProviderProps;
export type { ErrorContextProviderProps };
export { ErrorContext, ErrorContextProvider, useErrorManager };
