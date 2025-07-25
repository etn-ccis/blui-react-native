import { useContext } from 'react';
import { OktaAuthContext } from './context.js';
import { OktaAuthContextProvider } from './provider.js';
/**
 * Hook to get top level data in okta authentication workflow
 *
 * @category Hooks
 * @private
 * @internal
 */
export const useOktaAuthContext = () => {
    const context = useContext(OktaAuthContext);
    if (context === null) {
        throw new Error('useOktaAuthContext must be used within OktaAuthContextProvider');
    }
    return context;
};
export { OktaAuthContext, OktaAuthContextProvider };
