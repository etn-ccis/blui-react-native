import { jsx as _jsx } from 'react/jsx-runtime';
import { useEffect } from 'react';
import { OktaRedirectLoginScreenBase } from './OktaRedirectLoginScreenBase.js';
import { useOktaAuthContext } from '../../contexts/index.js';
import { useTranslation } from 'react-i18next';
import { createConfig, EventEmitter, signInWithBrowser } from '@okta/okta-react-native';
/**
 * Component that renders a okta login screen that prompts a user to redirect to okta login sign in page.
 *
 * @param {OktaLoginScreenProps} props - Props of okta Login Screen component
 *
 * @category Component
 */
export const OktaRedirectLoginScreen = (props) => {
    const { t } = useTranslation();
    const { navigate, routeConfig } = useOktaAuthContext();
    const {
        loginButtonLabel = t('bluiCommon:ACTIONS.OKTA_SIGN_IN'),
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
        oktaConfigObject,
    } = props;
    const onLogin = async () => {
        try {
            await signInWithBrowser();
            EventEmitter.emit('signInSuccess');
        } catch (_error) {
            // eslint-disable-next-line no-console
            console.log(_error);
        }
    };
    const createOktaConfig = async () => {
        if (oktaConfigObject) {
            await createConfig(oktaConfigObject);
        } else {
            console.error('Okta config object is undefined');
        }
    };
    useEffect(() => {
        void createOktaConfig();
    }, []);
    return _jsx(OktaRedirectLoginScreenBase, {
        loginButtonLabel: loginButtonLabel,
        onLogin: onLogin,
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
        showCyberSecurityBadge: showCyberSecurityBadge,
        projectImage: projectImage,
        header: header,
        footer: footer,
        cyberSecurityBadgeSize: cyberSecurityBadgeSize,
    });
};
