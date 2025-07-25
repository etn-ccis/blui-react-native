import { RegistrationContext } from './context.js';
import i18nRegistrationInstance from './i18nRegistrationInstance.js';
import { RegistrationContextProvider } from './provider.js';
import { RegistrationDictionaries } from './RegistrationDictionaries/index.js';
import { useContext } from 'react';
/**
 * Hook to get the data of each registration workflow screen
 *
 * @category Hooks
 * @private
 * @internal
 */
export const useRegistrationContext = () => {
    const context = useContext(RegistrationContext);
    if (context === null) {
        throw new Error('useRegistrationContext must be used within an RegistrationContextProvider');
    }
    return context;
};
export { RegistrationContext, RegistrationContextProvider, i18nRegistrationInstance, RegistrationDictionaries };
