import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import React, { useCallback, useRef, useState } from 'react';
import { WorkflowCard } from '../../components/WorkflowCard/index.js';
import { WorkflowCardBody } from '../../components/WorkflowCard/WorkflowCardBody.js';
import { ErrorManager, PasswordTextField } from '../../components/index.js';
import { Image, View, StyleSheet, Keyboard } from 'react-native';
import { Button, Checkbox, HelperText, Text, TextInput } from 'react-native-paper';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';
import { useScreenDimensions } from '../../hooks/useScreenDimensions.js';
const makeStyles = (isTablet) =>
    StyleSheet.create({
        container: {
            flex: 1,
        },
        projectImageWrapper: {
            display: 'flex',
            maxWidth: '100%',
            marginBottom: isTablet ? 24 : 16,
        },
        inputFieldsWrapper: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginVertical: isTablet ? 32 : 24,
        },
        usernameWrapper: {
            width: '100%',
            marginVertical: isTablet ? 32 : 24,
        },
        passwordWrapper: {
            width: '100%',
        },
        rememberMeLoginRowWrapper: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: isTablet ? 24 : 16,
            marginBottom: isTablet ? 32 : 24,
        },
        rememberMeWrapper: {
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
        },
        loginButtonWrapper: {
            display: 'flex',
            flex: 1,
            justifyContent: 'flex-end',
            flexDirection: 'row',
        },
        rememberMeText: {
            display: 'flex',
            flex: 1,
        },
        loginButton: {
            width: '100%',
        },
        forgotPasswordWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            marginBottom: isTablet ? 32 : 24,
        },
        selfRegisterWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: 4,
            alignContent: 'center',
            marginBottom: isTablet ? 32 : 24,
        },
        contactSupportWrapper: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: 4,
            alignContent: 'center',
            alignItems: 'center',
            marginBottom: isTablet ? 32 : 24,
        },
        footerWrapper: { display: 'flex', justifyContent: 'center' },
        cyberSecurityBadgeWrapper: { display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 2 },
    });
/**
 * Component that renders a login screen that prompts a user to enter a username and password to login.
 *
 * @param {LoginScreenProps} props - Props of Login Screen component
 *
 * @category Component
 */
export const LoginScreenBase = (props) => {
    const {
        usernameLabel,
        usernameTextFieldProps,
        usernameValidator,
        initialUsernameValue,
        passwordTextFieldProps,
        passwordValidator,
        showRememberMe,
        rememberMeLabel,
        rememberMeInitialValue,
        onRememberMeChanged,
        loginButtonLabel,
        onLogin,
        showForgotPassword,
        forgotPasswordLabel,
        onForgotPassword,
        showSelfRegistration,
        selfRegisterButtonLabel,
        selfRegisterInstructions,
        onSelfRegister,
        showContactSupport,
        contactSupportLabel,
        onContactSupport,
        errorDisplayConfig,
        showCyberSecurityBadge,
        projectImage,
        header,
        footer,
        cyberSecurityBadgeSize,
        ...otherProps
    } = props;
    const theme = useExtendedTheme();
    const { isTablet } = useScreenDimensions();
    const [username, setUsername] = React.useState(initialUsernameValue ?? '');
    const [password, setPassword] = React.useState('');
    const [rememberMe, setRememberMe] = React.useState(rememberMeInitialValue);
    const [shouldValidateUsername, setShouldValidateUsername] = React.useState(false);
    const [shouldValidatePassword, setShouldValidatePassword] = React.useState(false);
    const passwordField = useRef(null);
    const [isUsernameValid, setIsUsernameValid] = useState(usernameValidator ? usernameValidator(username) : true);
    const [isPasswordValid, setIsPasswordValid] = useState(passwordValidator ? passwordValidator(password) : true);
    const [usernameError, setUsernameError] = useState(isUsernameValid === true ? '' : isUsernameValid);
    const [passwordError, setPasswordError] = useState(isPasswordValid === true ? '' : isPasswordValid);
    const defaultStyles = makeStyles(isTablet);
    const handleUsernameInputChange = useCallback(
        (value) => {
            setUsername(value);
            const validatorResponse = usernameValidator?.(value);
            setIsUsernameValid(typeof validatorResponse === 'boolean' ? validatorResponse : false);
            setUsernameError(typeof validatorResponse === 'string' ? validatorResponse : '');
        },
        [usernameValidator]
    );
    const handlePasswordInputChange = useCallback(
        (value) => {
            setPassword(value);
            const validatorResponse = passwordValidator?.(value);
            setIsPasswordValid(typeof validatorResponse === 'boolean' ? validatorResponse : false);
            setPasswordError(typeof validatorResponse === 'string' ? validatorResponse : '');
        },
        [passwordValidator]
    );
    const handleForgotPassword = () => {
        if (onForgotPassword) onForgotPassword();
    };
    const handleSelfRegister = () => {
        if (onSelfRegister) onSelfRegister();
    };
    const handleContactSupport = () => {
        if (onContactSupport) onContactSupport();
    };
    const handleRememberMeChanged = (value) => {
        Keyboard.dismiss();
        if (onRememberMeChanged) {
            onRememberMeChanged(value);
            setRememberMe(value);
        }
    };
    const isFormValid = () =>
        typeof isUsernameValid === 'boolean' &&
        isUsernameValid &&
        typeof isPasswordValid === 'boolean' &&
        isPasswordValid;
    const handleLogin = () => {
        Keyboard.dismiss();
        if (isFormValid() && onLogin) void onLogin(username, password, rememberMe);
    };
    const handleLoginSubmit = () => {
        if (isFormValid()) {
            handleLogin();
        }
    };
    return _jsx(WorkflowCard, {
        testID: 'blui-login-workflow-card',
        ...otherProps,
        children: _jsxs(WorkflowCardBody, {
            children: [
                header,
                _jsx(View, {
                    style: defaultStyles.projectImageWrapper,
                    testID: 'blui-login-project-image-wrapper',
                    children: projectImage,
                }),
                _jsx(ErrorManager, {
                    ...errorDisplayConfig,
                    children: _jsxs(View, {
                        style: defaultStyles.inputFieldsWrapper,
                        testID: 'blui-login-input-fields-wrapper',
                        children: [
                            _jsxs(View, {
                                style: defaultStyles.usernameWrapper,
                                children: [
                                    _jsx(TextInput, {
                                        testID: 'blui-login-username-text-field',
                                        label: usernameLabel ?? 'Username',
                                        value: username,
                                        error: shouldValidateUsername && !isUsernameValid,
                                        autoCapitalize: 'none',
                                        mode: 'flat',
                                        ...usernameTextFieldProps,
                                        onChangeText: (e) => {
                                            usernameTextFieldProps?.onChangeText?.(e);
                                            handleUsernameInputChange(e);
                                        },
                                        onSubmitEditing: (e) => {
                                            usernameTextFieldProps?.onSubmitEditing?.(e);
                                            if (passwordField.current) passwordField.current.focus();
                                        },
                                        onBlur: (e) => {
                                            usernameTextFieldProps?.onBlur?.(e);
                                            setShouldValidateUsername(true);
                                        },
                                    }),
                                    shouldValidateUsername &&
                                        !isUsernameValid &&
                                        _jsx(HelperText, { type: 'error', children: usernameError }),
                                ],
                            }),
                            _jsxs(View, {
                                style: defaultStyles.passwordWrapper,
                                children: [
                                    _jsx(PasswordTextField, {
                                        testID: 'blui-login-password-text-field',
                                        ref: passwordField,
                                        onChangeText: (e) => {
                                            passwordTextFieldProps?.onChange?.(e);
                                            handlePasswordInputChange(e);
                                        },
                                        onSubmitEditing: (e) => {
                                            if (passwordTextFieldProps?.onSubmitEditing) {
                                                passwordTextFieldProps.onSubmitEditing(e);
                                            }
                                            handleLoginSubmit();
                                        },
                                        onBlur: (e) => {
                                            passwordTextFieldProps?.onBlur?.(e);
                                            setShouldValidatePassword(true);
                                        },
                                    }),
                                    shouldValidatePassword &&
                                        !isPasswordValid &&
                                        _jsx(HelperText, { type: 'error', children: passwordError }),
                                ],
                            }),
                        ],
                    }),
                }),
                _jsxs(View, {
                    style: defaultStyles.rememberMeLoginRowWrapper,
                    testID: 'blui-login-remember-me-row-wrapper',
                    children: [
                        showRememberMe &&
                            _jsxs(View, {
                                style: defaultStyles.rememberMeWrapper,
                                testID: 'blui-login-remember-me-wrapper',
                                children: [
                                    _jsx(Checkbox.Android, {
                                        status: rememberMe ? 'checked' : 'unchecked',
                                        onPress: () => handleRememberMeChanged(!rememberMe),
                                        testID: 'blui-login-remember-me-checkbox',
                                    }),
                                    _jsx(Text, {
                                        variant: 'bodyLarge',
                                        testID: 'blui-login-remember-me-login',
                                        style: defaultStyles.rememberMeText,
                                        children: rememberMeLabel ?? 'Remember Me',
                                    }),
                                ],
                            }),
                        _jsx(View, {
                            style: [
                                defaultStyles.loginButtonWrapper,
                                {
                                    width: showRememberMe ? 'auto' : '100%',
                                },
                            ],
                            testID: 'blui-login-login-button-wrapper',
                            children: _jsx(Button, {
                                testID: 'blui-login-login-button',
                                onPress: handleLogin,
                                disabled: !isFormValid(),
                                mode: 'contained',
                                style: defaultStyles.loginButton,
                                children: loginButtonLabel ?? 'Log In',
                            }),
                        }),
                    ],
                }),
                showForgotPassword &&
                    _jsx(View, {
                        style: defaultStyles.forgotPasswordWrapper,
                        testID: 'blui-login-forgot-password-wrapper',
                        children: _jsx(Text, {
                            variant: 'labelLarge',
                            style: { color: theme.colors.primary },
                            onPress: handleForgotPassword,
                            testID: 'blui-login-forgot-password-label',
                            children: forgotPasswordLabel ?? 'Forgot your password?',
                        }),
                    }),
                showSelfRegistration &&
                    _jsxs(View, {
                        style: defaultStyles.selfRegisterWrapper,
                        testID: 'blui-login-self-register-wrapper',
                        children: [
                            _jsx(Text, {
                                variant: 'bodyMedium',
                                testID: 'blui-login-self-register-instruction-label',
                                children: selfRegisterInstructions ?? 'Need an account?',
                            }),
                            _jsx(Text, {
                                variant: 'labelLarge',
                                style: { color: theme.colors.primary },
                                onPress: handleSelfRegister,
                                testID: 'blui-login-self-register-label',
                                children: selfRegisterButtonLabel ?? 'Register now!',
                            }),
                        ],
                    }),
                showContactSupport &&
                    _jsx(View, {
                        style: defaultStyles.contactSupportWrapper,
                        testID: 'blui-login-contact-support-wrapper',
                        children: _jsx(Text, {
                            variant: 'labelLarge',
                            style: { color: theme.colors.primary },
                            onPress: handleContactSupport,
                            testID: 'blui-login-contact-support-label',
                            children: contactSupportLabel ?? 'Contact Support',
                        }),
                    }),
                _jsx(View, { style: defaultStyles.footerWrapper, children: footer }),
                showCyberSecurityBadge &&
                    _jsx(View, {
                        style: defaultStyles.cyberSecurityBadgeWrapper,
                        testID: 'blui-login-cyber-security-badge-wrapper',
                        children: _jsx(
                            Image,
                            //@ts-ignore
                            {
                                //@ts-ignore
                                style: { ...cyberSecurityBadgeSize },
                                resizeMode: 'contain',
                                source: require('../../assets/images/cybersecurity_certified.png'),
                            }
                        ),
                    }),
            ],
        }),
    });
};
