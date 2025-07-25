import { AuthContext } from './context.js';
import i18nAuthInstance from './i18nAuthInstance.js';
import { AuthContextProvider } from './provider.js';
import { AuthContextProviderProps, AuthUIActions } from './types.js';
import { AuthDictionaries } from './AuthDictionaries/index.js';
/**
 * Hook to get top level data in authentication workflow
 *
 * @category Hooks
 * @private
 * @internal
 */
export declare const useAuthContext: () => AuthContextProviderProps;
export type { AuthContextProviderProps, AuthUIActions };
export { AuthContext, AuthContextProvider, i18nAuthInstance, AuthDictionaries };
