import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useState } from 'react';
import { ErrorManager, WorkflowCard, WorkflowCardActions, WorkflowCardBody, WorkflowCardHeader, } from '../../components/index.js';
import { HelperText, TextInput } from 'react-native-paper';
import { SuccessScreenBase } from '../SuccessScreen/index.js';
/**
 * Component renders a screen with forgot password for support with the application.
 *
 * @param {ForgotPasswordScreenProps} props - props of Forgot Password Screen
 *
 * @category Component
 */
export const ForgotPasswordScreenBase = (props) => {
    const EMAIL_REGEX = /^[A-Z0-9._%+'-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const { emailLabel, initialEmailValue, emailValidator = (email) => new RegExp(EMAIL_REGEX).test(email) ? true : 'Please enter a valid email', SuccessScreen, SuccessScreenProps: successScreenProps, showSuccessScreen, errorDisplayConfig, emailTextInputProps, } = props;
    const [emailInput, setEmailInput] = useState(initialEmailValue ?? '');
    const cardBaseProps = props.WorkflowCardBaseProps ?? {};
    const headerProps = props.WorkflowCardHeaderProps ?? {};
    const cardBodyProps = props.WorkflowCardBodyProps ?? {};
    const actionsProps = props.WorkflowCardActionsProps ?? {};
    const validateEmail = () => typeof emailValidator(emailInput) !== 'string';
    const [isEmailValid, setIsEmailValid] = useState(validateEmail);
    const [emailError, setEmailError] = useState(!validateEmail() ? emailValidator(emailInput) : '');
    const [shouldValidateEmail, setShouldValidateEmail] = useState(emailInput !== '' && validateEmail);
    const handleEmailInputChange = useCallback((email) => {
        setEmailInput(email);
        const emailValidatorResponse = emailValidator(email);
        setIsEmailValid(typeof emailValidatorResponse === 'boolean' ? emailValidatorResponse : false);
        setEmailError(typeof emailValidatorResponse === 'string' ? emailValidatorResponse : '');
    }, [emailValidator]);
    const getSuccessScreen = (_props, _successScreen) => (_successScreen ? _successScreen(_props) : _jsx(SuccessScreenBase, { ..._props }));
    const clearScreenData = () => {
        setEmailInput('');
        setEmailError('');
        setIsEmailValid(true);
    };
    const handleOnNext = () => {
        const { onNext } = actionsProps;
        if (onNext) {
            onNext({ email: emailInput });
        }
        clearScreenData();
    };
    const handleOnBack = () => {
        const { onPrevious } = actionsProps;
        if (onPrevious) {
            onPrevious();
        }
        clearScreenData();
    };
    const handleCloseIconPress = () => {
        const { onIconPress } = headerProps;
        if (onIconPress) {
            onIconPress();
        }
        clearScreenData();
    };
    return (_jsx(_Fragment, { children: showSuccessScreen ? (getSuccessScreen(successScreenProps ?? {}, SuccessScreen)) : (_jsxs(WorkflowCard, { ...cardBaseProps, children: [_jsx(WorkflowCardHeader, { ...headerProps, onIconPress: handleCloseIconPress }), _jsx(WorkflowCardBody, { ...cardBodyProps, children: _jsxs(ErrorManager, { ...errorDisplayConfig, children: [_jsx(TextInput, { label: emailLabel, value: emailInput, mode: "flat", error: shouldValidateEmail && !isEmailValid, autoCapitalize: "none", testID: "blui-forgot-password-textinput", ...emailTextInputProps, onBlur: (e) => {
                                    if (emailTextInputProps?.onBlur) {
                                        emailTextInputProps.onBlur(e);
                                    }
                                    setShouldValidateEmail(true);
                                }, onChangeText: (email) => {
                                    if (emailTextInputProps?.onChangeText) {
                                        emailTextInputProps.onChangeText(email);
                                    }
                                    handleEmailInputChange(email);
                                }, onSubmitEditing: () => {
                                    if (emailInput.length > 0 && isEmailValid && actionsProps.canGoNext) {
                                        handleOnNext();
                                    }
                                } }), _jsx(HelperText, { type: "error", visible: shouldValidateEmail, children: emailError })] }) }), _jsx(WorkflowCardActions, { ...actionsProps, canGoNext: emailInput.length > 0 && isEmailValid && actionsProps.canGoNext, onNext: handleOnNext, onPrevious: handleOnBack })] })) }));
};
