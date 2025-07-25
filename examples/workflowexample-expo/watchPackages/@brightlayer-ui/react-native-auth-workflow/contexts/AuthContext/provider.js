import { jsx as _jsx } from "react/jsx-runtime";
/**
 * @packageDocumentation
 * @module AuthContextProvider
 */
import { useEffect } from 'react';
import { AuthContext } from './context.js';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { i18nAuthInstance } from './i18nAuthInstance.js';
import { ErrorContext } from '../ErrorContext/index.js';
import { AuthDictionaries } from './AuthDictionaries/index.js';
import { SharedDictionaries } from '../SharedDictionaries/index.js';
const AuthContextProviderContent = (props) => {
    const { t } = useTranslation();
    const { children, errorConfig, ...authContextProps } = props;
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
    return (_jsx(AuthContext.Provider, { value: { ...authContextProps }, children: _jsx(ErrorContext.Provider, { value: mergedErrorConfig, children: children }) }));
};
/**
 * AuthContextProvider allow you to access shared data / configuration / API definition for authentication screens
 * @param {AuthContextProviderProps} props - props for Auth Context Provider
 */
export const AuthContextProvider = (props) => {
    const i18nInstance = props.i18n ?? i18nAuthInstance;
    const { language, i18n = i18nInstance, children, ...other } = props;
    if (props.i18n) {
        i18n.addResourceBundle('zh', 'bluiAuth', AuthDictionaries.chinese.translation, true, false);
        i18n.addResourceBundle('zh', 'bluiCommon', SharedDictionaries.chinese.translation, true, false);
        i18n.addResourceBundle('en', 'bluiAuth', AuthDictionaries.english.translation, true, false);
        i18n.addResourceBundle('en', 'bluiCommon', SharedDictionaries.english.translation, true, false);
        i18n.addResourceBundle('fr', 'bluiAuth', AuthDictionaries.french.translation, true, false);
        i18n.addResourceBundle('fr', 'bluiCommon', SharedDictionaries.french.translation, true, false);
        i18n.addResourceBundle('pt', 'bluiAuth', AuthDictionaries.portuguese.translation, true, false);
        i18n.addResourceBundle('pt', 'bluiCommon', SharedDictionaries.portuguese.translation, true, false);
        i18n.addResourceBundle('es', 'bluiAuth', AuthDictionaries.spanish.translation, true, false);
        i18n.addResourceBundle('es', 'bluiCommon', SharedDictionaries.spanish.translation, true, false);
    }
    useEffect(() => {
        void i18n.changeLanguage(language);
    }, [i18n, language]);
    return (_jsx(I18nextProvider, { i18n: i18n, children: _jsx(AuthContextProviderContent, { ...other, language: language, children: children }) }));
};
