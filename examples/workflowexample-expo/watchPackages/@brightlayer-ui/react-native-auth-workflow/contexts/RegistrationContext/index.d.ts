import { RegistrationContext } from './context.js';
import i18nRegistrationInstance from './i18nRegistrationInstance.js';
import { RegistrationContextProviderProps, RegistrationUIActions, AccountDetails } from './types.js';
import { RegistrationContextProvider } from './provider.js';
import { RegistrationDictionaries } from './RegistrationDictionaries/index.js';
/**
 * Hook to get the data of each registration workflow screen
 *
 * @category Hooks
 * @private
 * @internal
 */
export declare const useRegistrationContext: () => RegistrationContextProviderProps;
export type { RegistrationContextProviderProps, RegistrationUIActions, AccountDetails };
export { RegistrationContext, RegistrationContextProvider, i18nRegistrationInstance, RegistrationDictionaries };
