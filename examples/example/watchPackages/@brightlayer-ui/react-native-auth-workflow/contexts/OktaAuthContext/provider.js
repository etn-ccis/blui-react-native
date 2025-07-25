import { jsx as _jsx } from 'react/jsx-runtime';
import { useEffect } from 'react';
import { OktaAuthContext } from './context.js';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { ErrorContext } from '../ErrorContext/index.js';
import { AuthDictionaries } from '../AuthContext/AuthDictionaries/index.js';
import { SharedDictionaries } from '../SharedDictionaries/index.js';
import { i18nAuthInstance } from '../AuthContext/i18nAuthInstance.js';
const OktaAuthContextProviderContent = (props) => {
    const { children, errorConfig, ...oktaAuthContextProps } = props;
    const { t } = useTranslation();
    const mergedErrorConfig = {
        t: t,
        title: 'bluiCommon:MESSAGES.ERROR',
        error: 'bluiAuth:LOGIN.INVALID_CREDENTIALS',
        ...errorConfig,
        dialogConfig: {
            dismissLabel: 'bluiCommon:ACTIONS.OKAY',
            ...(errorConfig?.dialogConfig ?? {}),
        },
    };
    return _jsx(OktaAuthContext.Provider, {
        value: { ...oktaAuthContextProps },
        children: _jsx(ErrorContext.Provider, { value: mergedErrorConfig, children: children }),
    });
};
export const OktaAuthContextProvider = (props) => {
    const i18nInstance = props.i18n ?? i18nAuthInstance;
    const { language, i18n = i18nInstance, children, ...other } = props;
    if (props.i18n) {
        i18n.addResourceBundle('zh', 'bluiAuth', AuthDictionaries.chinese.translation, true, false);
        i18n.addResourceBundle('zh', 'bluiCommon', SharedDictionaries.chinese.translation, true, false);
        i18n.addResourceBundle('zh', 'bluiAuth', AuthDictionaries.english.translation, true, false);
        i18n.addResourceBundle('en', 'bluiCommon', SharedDictionaries.english.translation, true, false);
        i18n.addResourceBundle('zh', 'bluiAuth', AuthDictionaries.french.translation, true, false);
        i18n.addResourceBundle('fr', 'bluiCommon', SharedDictionaries.french.translation, true, false);
        i18n.addResourceBundle('zh', 'bluiAuth', AuthDictionaries.portuguese.translation, true, false);
        i18n.addResourceBundle('pt', 'bluiCommon', SharedDictionaries.portuguese.translation, true, false);
        i18n.addResourceBundle('zh', 'bluiAuth', AuthDictionaries.spanish.translation, true, false);
        i18n.addResourceBundle('es', 'bluiCommon', SharedDictionaries.spanish.translation, true, false);
    }
    useEffect(() => {
        void i18n.changeLanguage(language);
    }, [i18n, language]);
    return _jsx(I18nextProvider, {
        i18n: i18n,
        children: _jsx(OktaAuthContextProviderContent, { ...other, language: language, children: children }),
    });
};
