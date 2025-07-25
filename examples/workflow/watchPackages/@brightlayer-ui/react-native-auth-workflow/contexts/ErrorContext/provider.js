import { jsx as _jsx } from "react/jsx-runtime";
import { ErrorContext } from './context.js';
/**
 * ErrorContextProvider is used to configure error handling within the workflow
 * @param {ErrorContextProviderProps} props - props for Error Context Provider
 */
export const ErrorContextProvider = (props) => {
    const { children, ...ErrorContextProps } = props;
    return _jsx(ErrorContext.Provider, { value: ErrorContextProps, children: children });
};
