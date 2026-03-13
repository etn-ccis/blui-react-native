import React, { useEffect, useState } from 'react';
import { OktaLoginScreenProps } from './types';
import { OktaRedirectLoginScreenBase } from './OktaRedirectLoginScreenBase';
import { useOktaAuthContext } from '../../contexts';
import { useTranslation } from 'react-i18next';
import { createConfig, EventEmitter, signInWithBrowser } from '@okta/okta-react-native';
/**
 * Component that renders a okta login screen that prompts a user to redirect to okta login sign in page.
 *
 * @param {OktaLoginScreenProps} props - Props of okta Login Screen component
 *
 * @category Component
 */

export const OktaRedirectLoginScreen: React.FC<React.PropsWithChildren<OktaLoginScreenProps>> = (props) => {
    const { t } = useTranslation();
    const { navigate, routeConfig } = useOktaAuthContext();
    const [loading, setLoading] = useState(false);

    const {
        loginButtonLabel = t('bluiCommon:ACTIONS.OKTA_SIGN_IN'),
        showForgotPassword = true,
        forgotPasswordLabel = t('bluiCommon:LABELS.FORGOT_PASSWORD'),
        onForgotPassword = (): void => navigate(routeConfig.FORGOT_PASSWORD!),
        showSelfRegistration = true,
        selfRegisterInstructions = t('bluiCommon:LABELS.NEED_ACCOUNT'),
        selfRegisterButtonLabel = t('bluiCommon:ACTIONS.CREATE_ACCOUNT'),
        onSelfRegister = (): void => navigate(routeConfig.REGISTER_SELF!),
        showContactSupport = true,
        contactSupportLabel = t('bluiCommon:MESSAGES.CONTACT'),
        onContactSupport = (): void => navigate(routeConfig.SUPPORT!),
        showCyberSecurityBadge = true,
        projectImage,
        header,
        footer,
        cyberSecurityBadgeSize,
        oktaConfigObject,
    } = props;

    const onLogin = async (): Promise<void> => {
        try {
            setLoading(true);
            await signInWithBrowser();
            EventEmitter.emit('signInSuccess');
        } catch (_error) {
            // eslint-disable-next-line no-console
            console.log(_error as Error);
        } finally {
            setLoading(false);
        }
    };

    const createOktaConfig = async (): Promise<void> => {
        if (oktaConfigObject) {
            await createConfig(oktaConfigObject);
        } else {
            console.error('Okta config object is undefined');
        }
    };

    useEffect(() => {
        void createOktaConfig();
    }, []);

    return (
        <OktaRedirectLoginScreenBase
            loginButtonLabel={loginButtonLabel}
            onLogin={onLogin}
            showForgotPassword={showForgotPassword}
            forgotPasswordLabel={forgotPasswordLabel}
            onForgotPassword={onForgotPassword}
            showSelfRegistration={showSelfRegistration}
            selfRegisterButtonLabel={selfRegisterButtonLabel}
            selfRegisterInstructions={selfRegisterInstructions}
            onSelfRegister={onSelfRegister}
            showContactSupport={showContactSupport}
            contactSupportLabel={contactSupportLabel}
            onContactSupport={onContactSupport}
            showCyberSecurityBadge={showCyberSecurityBadge}
            projectImage={projectImage}
            header={header}
            footer={footer}
            cyberSecurityBadgeSize={cyberSecurityBadgeSize}
            loading={loading}
        />
    );
};
