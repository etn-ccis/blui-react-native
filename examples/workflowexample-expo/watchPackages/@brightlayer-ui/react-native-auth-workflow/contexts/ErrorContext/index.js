import { useContext } from 'react';
import { ErrorContext } from './context.js';
import { ErrorContextProvider } from './provider.js';
import { useErrorManager } from './useErrorManager.js';
/**
 * Hook to get top level error data
 *
 * @category Hooks
 * @private
 * @internal
 */
export const useErrorContext = () => {
    const context = useContext(ErrorContext);
    if (context === null) {
        throw new Error('useErrorContext must be used within ErrorContextProvider');
    }
    return context;
};
export { ErrorContext, ErrorContextProvider, useErrorManager };
