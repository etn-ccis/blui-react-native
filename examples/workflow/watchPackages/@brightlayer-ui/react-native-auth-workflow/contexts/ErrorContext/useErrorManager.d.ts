import { AuthError, ErrorManagerProps } from '../../components/Error/index.js';
export declare const useErrorManager: () => {
    triggerError: (error: Error | AuthError) => void;
    errorManagerConfig: ErrorManagerProps;
};
