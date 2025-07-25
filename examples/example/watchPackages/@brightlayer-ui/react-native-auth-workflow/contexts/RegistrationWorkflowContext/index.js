import { useContext } from 'react';
import { RegistrationWorkflowContext } from './context.js';
import { RegistrationWorkflowContextProvider } from './provider.js';
/**
 * Hook to get the data of each registration workflow screen
 *
 * @category Hooks
 * @private
 * @internal
 */
export const useRegistrationWorkflowContext = () => {
    const context = useContext(RegistrationWorkflowContext);
    if (context === null) {
        throw new Error('useRegistrationWorkflowContext must be used within an RegistrationWorkflowContextProvider');
    }
    return context;
};
export { RegistrationWorkflowContextProvider };
export * from './types.js';
