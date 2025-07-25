import { jsx as _jsx } from 'react/jsx-runtime';
/**
 * @packageDocumentation
 * @module RegistrationWorkflowContextProvider
 */
import { useMemo } from 'react';
import { RegistrationWorkflowContext } from './context.js';
/**
 * RegistrationWorkflowContextProvider allows you to access data such as the current screen, the total number of screens and all screens data throughout registration
 * @param {RegistrationWorkflowContextProps} props - props for Registration Workflow Context Provider
 */
export const RegistrationWorkflowContextProvider = (props) => {
    // Extract the needed properties out
    // Context value will not change unless a sub function is changed
    // NOTE: When adding new props to RegistrationWorkflowContextProps be sure
    // to also add them here so the parameters are copied.
    const {
        currentScreen,
        totalScreens,
        nextScreen,
        previousScreen,
        screenData,
        updateScreenData,
        resetScreenData,
        isInviteRegistration,
    } = props;
    const memoizedProps = useMemo(() => {
        const propsForContext = {
            currentScreen,
            totalScreens,
            nextScreen,
            previousScreen,
            screenData,
            updateScreenData,
            resetScreenData,
            isInviteRegistration,
        };
        return propsForContext;
    }, [
        currentScreen,
        totalScreens,
        nextScreen,
        previousScreen,
        screenData,
        updateScreenData,
        resetScreenData,
        isInviteRegistration,
    ]);
    return _jsx(RegistrationWorkflowContext.Provider, { value: memoizedProps, children: props.children });
};
