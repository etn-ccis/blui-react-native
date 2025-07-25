import { useState } from 'react';
import { useErrorContext } from './index.js';
export const useErrorManager = () => {
    const errorConfig = useErrorContext();
    const [error, setError] = useState(new Error());
    const isAuthError = (err) => err.cause !== undefined;
    const getErrorDisplayConfig = (err) => {
        if (isAuthError(err)) {
            return {
                ...errorConfig,
                dialogConfig: { ...errorConfig.dialogConfig, title: err.cause.title },
                error: err.cause.errorMessage,
                errorOptions: err.cause.errorOptions,
                titleOptions: err.cause.titleOptions,
                onClose: () => {
                    setError(new Error());
                },
            };
        }
        return {
            ...errorConfig,
            error: err.message,
            onClose: () => {
                setError(new Error());
            },
        };
    };
    const triggerError = (err) => {
        if (isAuthError(err)) {
            setError({
                cause: {
                    title: err.cause.title,
                    errorMessage: err.cause.errorMessage,
                    errorOptions: err.cause.errorOptions,
                    titleOptions: err.cause.titleOptions,
                },
            });
        }
        else {
            setError(err);
        }
    };
    return { triggerError: triggerError, errorManagerConfig: getErrorDisplayConfig(error) };
};
