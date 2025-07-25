import { jsx as _jsx } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';
import { LoginScreenBase } from './LoginScreenBase.js';
import { useAuthContext } from '../../contexts/index.js';
import { useErrorManager } from '../../contexts/ErrorContext/useErrorManager.js';
import { useTranslation } from 'react-i18next';
const EMAIL_REGEX = /^[A-Z0-9._%+'-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
/**
 * Component that renders a login screen that prompts a user to enter a username and password to login.
 *
 * @param {LoginScreenProps} props - Props of Login Screen component
 *
 * @category Component
 */
export const LoginScreen = (props) => {
    const { t } = useTranslation();
    const auth = useAuthContext();
    const { actions, navigate, routeConfig, rememberMeDetails } = auth;
    const { triggerError, errorManagerConfig } = useErrorManager();
    const [isLoading, setIsLoading] = useState(false);
    const errorDisplayConfig = {
        ...errorManagerConfig,
        ...props.errorDisplayConfig,
        onClose: () => {
            if (props.errorDisplayConfig?.onClose) props.errorDisplayConfig.onClose();
            if (errorManagerConfig.onClose) errorManagerConfig.onClose();
        },
    };
    useEffect(() => {
        void actions.initiateSecurity();
    }, []);
    const {
        usernameLabel = t('bluiCommon:LABELS.EMAIL'),
        usernameTextFieldProps,
        usernameValidator = (username) => {
            if (!EMAIL_REGEX.test(username)) {
                return t('bluiCommon:MESSAGES.EMAIL_ENTRY_ERROR');
            }
            return true;
        },
        initialUsernameValue = rememberMeDetails?.email ?? '',
        passwordLabel = t('bluiCommon:LABELS.PASSWORD'),
        passwordTextFieldProps,
        passwordValidator = (password) => {
            if (password.length < 1) {
                return t('bluiCommon:MESSAGES.PASSWORD_REQUIRED_ERROR');
            }
            return true;
        },
        showRememberMe = true,
        rememberMeLabel = t('bluiCommon:ACTIONS.REMEMBER'),
        rememberMeInitialValue = rememberMeDetails?.rememberMe ?? false,
        onRememberMeChanged = (value) => {
            props.onRememberMeChanged?.(value);
        },
        loginButtonLabel = t('bluiCommon:ACTIONS.LOG_IN'),
        showForgotPassword = true,
        forgotPasswordLabel = t('bluiCommon:LABELS.FORGOT_PASSWORD'),
        onForgotPassword = () => navigate(routeConfig.FORGOT_PASSWORD),
        showSelfRegistration = true,
        selfRegisterInstructions = t('bluiCommon:LABELS.NEED_ACCOUNT'),
        selfRegisterButtonLabel = t('bluiCommon:ACTIONS.CREATE_ACCOUNT'),
        onSelfRegister = () => navigate(routeConfig.REGISTER_SELF),
        showContactSupport = true,
        contactSupportLabel = t('bluiCommon:MESSAGES.CONTACT'),
        onContactSupport = () => navigate(routeConfig.SUPPORT),
        showCyberSecurityBadge = true,
        projectImage,
        header,
        footer,
        cyberSecurityBadgeSize,
    } = props;
    return _jsx(LoginScreenBase, {
        loading: isLoading,
        usernameLabel: usernameLabel,
        usernameTextFieldProps: usernameTextFieldProps,
        usernameValidator: usernameValidator,
        initialUsernameValue: initialUsernameValue,
        passwordLabel: passwordLabel,
        passwordTextFieldProps: passwordTextFieldProps,
        passwordValidator: passwordValidator,
        showRememberMe: showRememberMe,
        rememberMeLabel: rememberMeLabel,
        rememberMeInitialValue: rememberMeInitialValue,
        onRememberMeChanged: onRememberMeChanged,
        loginButtonLabel: loginButtonLabel,
        onLogin: async (username, password, rememberMe) => {
            try {
                setIsLoading(true);
                await actions.logIn(username, password, rememberMe);
                await props.onLogin?.(username, password, rememberMe);
            } catch (_error) {
                triggerError(_error);
            } finally {
                setIsLoading(false);
            }
        },
        showForgotPassword: showForgotPassword,
        forgotPasswordLabel: forgotPasswordLabel,
        onForgotPassword: onForgotPassword,
        showSelfRegistration: showSelfRegistration,
        selfRegisterButtonLabel: selfRegisterButtonLabel,
        selfRegisterInstructions: selfRegisterInstructions,
        onSelfRegister: onSelfRegister,
        showContactSupport: showContactSupport,
        contactSupportLabel: contactSupportLabel,
        onContactSupport: onContactSupport,
        errorDisplayConfig: errorDisplayConfig,
        showCyberSecurityBadge: showCyberSecurityBadge,
        projectImage: projectImage,
        header: header,
        footer: footer,
        cyberSecurityBadgeSize: cyberSecurityBadgeSize,
    });
};
