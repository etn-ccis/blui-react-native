import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { WorkflowCard } from '../../components/WorkflowCard/index.js';
import { WorkflowCardBody } from '../../components/WorkflowCard/WorkflowCardBody.js';
import { Image, View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';
import { useScreenDimensions } from '../../hooks/useScreenDimensions.js';
const makeStyles = (isTablet) =>
    StyleSheet.create({
        container: {
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around',
        },
        projectImageWrapper: {
            display: 'flex',
            maxWidth: '100%',
            marginBottom: isTablet ? 24 : 16,
        },
        loginButtonWrapper: {
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            marginTop: isTablet ? 72 : 60,
            marginBottom: isTablet ? 80 : 72,
        },
        loginButton: {
            width: '100%',
        },
        bottomBodyWrapper: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            flex: 1,
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
            marginTop: 16,
            alignContent: 'center',
            marginBottom: isTablet ? 32 : 24,
        },
        contactSupportWrapper: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: 8,
            alignContent: 'center',
            alignItems: 'center',
            marginBottom: isTablet ? 52 : 24,
        },
        footerWrapper: { display: 'flex', justifyContent: 'center' },
        cyberSecurityBadgeWrapper: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 8,
        },
    });
/**
 * Component that renders a login screen that prompts user to login via Okta.
 *
 * @param {OktaLoginScreenProps} props - Props of Login Screen component
 *
 * @category Component
 */
export const OktaRedirectLoginScreenBase = (props) => {
    const {
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
        showCyberSecurityBadge,
        cyberSecurityBadgeSize,
        projectImage,
        header,
        footer,
        ...otherProps
    } = props;
    const theme = useExtendedTheme();
    const { isTablet } = useScreenDimensions();
    const defaultStyles = makeStyles(isTablet);
    const handleSelfRegister = () => {
        if (onSelfRegister) onSelfRegister();
    };
    const handleContactSupport = () => {
        if (onContactSupport) onContactSupport();
    };
    const handleLoginWrapper = async () => {
        if (onLogin) await onLogin();
    };
    // Synchronous wrapper for the asynchronous handleLogin function
    const handleLogin = () => {
        handleLoginWrapper().catch((error) => {
            console.error('Login failed:', error);
        });
    };
    const handleForgotPassword = () => {
        if (onForgotPassword) onForgotPassword();
    };
    return _jsx(WorkflowCard, {
        testID: 'blui-okta-login-workflow-card',
        ...otherProps,
        children: _jsxs(WorkflowCardBody, {
            children: [
                header,
                _jsx(View, {
                    style: defaultStyles.projectImageWrapper,
                    testID: 'blui-okta-login-project-image-wrapper',
                    children: projectImage,
                }),
                _jsx(View, {
                    style: [defaultStyles.loginButtonWrapper, { width: '100%' }],
                    testID: 'blui-okta-login-login-button-wrapper',
                    children: _jsx(Button, {
                        testID: 'blui-okta-login-login-button',
                        onPress: handleLogin,
                        disabled: !onLogin,
                        mode: 'contained',
                        style: defaultStyles.loginButton,
                        children: loginButtonLabel ?? 'Sign In with Okta',
                    }),
                }),
                _jsxs(View, {
                    style: defaultStyles.bottomBodyWrapper,
                    testID: 'blui-okta-login-bottom-body-wrapper',
                    children: [
                        showForgotPassword &&
                            _jsx(View, {
                                style: defaultStyles.forgotPasswordWrapper,
                                testID: 'blui-okta-login-forgot-password-wrapper',
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
                                testID: 'blui-okta-login-self-register-wrapper',
                                children: [
                                    _jsx(Text, {
                                        variant: 'bodyMedium',
                                        testID: 'blui-okta-login-self-register-instruction-label',
                                        children: selfRegisterInstructions ?? 'Need an account?',
                                    }),
                                    _jsx(Text, {
                                        variant: 'labelLarge',
                                        style: { color: theme.colors.primary },
                                        onPress: handleSelfRegister,
                                        testID: 'blui-okta-login-self-register-label',
                                        children: selfRegisterButtonLabel ?? 'Register now!',
                                    }),
                                ],
                            }),
                        showContactSupport &&
                            _jsx(View, {
                                style: defaultStyles.contactSupportWrapper,
                                testID: 'blui-okta-login-contact-support-wrapper',
                                children: _jsx(Text, {
                                    variant: 'labelLarge',
                                    style: { color: theme.colors.primary },
                                    onPress: handleContactSupport,
                                    testID: 'blui-okta-login-contact-support-label',
                                    children: contactSupportLabel ?? 'Contact Support',
                                }),
                            }),
                        _jsx(View, {
                            testID: 'blui-okta-login-footer',
                            style: defaultStyles.footerWrapper,
                            children: footer,
                        }),
                        showCyberSecurityBadge &&
                            _jsx(View, {
                                style: defaultStyles.cyberSecurityBadgeWrapper,
                                testID: 'blui-okta-login-cyber-security-badge-wrapper',
                                children: _jsx(Image, {
                                    testID: 'blui-okta-login-cyber-security-badge-image',
                                    style: cyberSecurityBadgeSize,
                                    resizeMode: 'contain',
                                    source: require('../../assets/images/cybersecurity_certified.png'),
                                }),
                            }),
                    ],
                }),
            ],
        }),
    });
};
