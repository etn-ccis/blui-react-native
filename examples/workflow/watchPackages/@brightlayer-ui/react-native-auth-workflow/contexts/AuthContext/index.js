import { useContext } from 'react';
import { AuthContext } from './context.js';
import i18nAuthInstance from './i18nAuthInstance.js';
import { AuthContextProvider } from './provider.js';
import { AuthDictionaries } from './AuthDictionaries/index.js';
/**
 * Hook to get top level data in authentication workflow
 *
 * @category Hooks
 * @private
 * @internal
 */
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === null) {
        throw new Error('useAuthContext must be used within AuthContextProvider');
    }
    return context;
};
export { AuthContext, AuthContextProvider, i18nAuthInstance, AuthDictionaries };
