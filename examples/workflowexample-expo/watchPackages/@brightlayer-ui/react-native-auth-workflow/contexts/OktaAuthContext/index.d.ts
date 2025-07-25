import { OktaAuthContext } from './context.js';
import { OktaAuthContextProvider } from './provider.js';
import { OktaAuthContextProviderProps } from './types.js';
/**
 * Hook to get top level data in okta authentication workflow
 *
 * @category Hooks
 * @private
 * @internal
 */
export declare const useOktaAuthContext: () => OktaAuthContextProviderProps;
export type { OktaAuthContextProviderProps };
export { OktaAuthContext, OktaAuthContextProvider };
