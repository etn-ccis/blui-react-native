import { jsx as _jsx } from "react/jsx-runtime";
/**
 * @packageDocumentation
 * @module RegistrationContextProvider
 */
import { useEffect } from 'react';
import { RegistrationContext } from './context.js';
import { i18nRegistrationInstance } from './i18nRegistrationInstance.js';
import { ErrorContext } from '../ErrorContext/index.js';
import { SharedDictionaries } from '../SharedDictionaries/index.js';
import { RegistrationDictionaries } from './RegistrationDictionaries/index.js';
import { I18nextProvider, useTranslation } from 'react-i18next';
const RegistrationContextProviderContent = (props) => {
    const { children, errorConfig, ...registrationContextProps } = props;
    const { t } = useTranslation();
    const mergedErrorConfig = {
        t: t,
        title: 'bluiCommon:MESSAGES.ERROR',
        ...errorConfig,
        dialogConfig: {
            dismissLabel: 'bluiCommon:ACTIONS.OKAY',
            ...(errorConfig?.dialogConfig ?? {}),
        },
    };
    return (_jsx(RegistrationContext.Provider, { value: { ...registrationContextProps }, children: _jsx(ErrorContext.Provider, { value: mergedErrorConfig, children: children }) }));
};
/**
 * RegistrationContextProvider allow you to access shared data / configuration / API definition for registration workflow
 * @param {RegistrationContextProviderProps} props - props for Registration Context Provider
 */
export const RegistrationContextProvider = (props) => {
    const i18nInstance = props.i18n ?? i18nRegistrationInstance;
    const { language, i18n = i18nInstance, children, ...other } = props;
    if (props.i18n) {
        i18n.addResourceBundle('zh', 'bluiRegistration', RegistrationDictionaries.chinese.translation, true, false);
        i18n.addResourceBundle('zh', 'bluiCommon', SharedDictionaries.chinese.translation, true, false);
        i18n.addResourceBundle('en', 'bluiRegistration', RegistrationDictionaries.english.translation, true, false);
        i18n.addResourceBundle('en', 'bluiCommon', SharedDictionaries.english.translation, true, false);
        i18n.addResourceBundle('fr', 'bluiRegistration', RegistrationDictionaries.french.translation, true, false);
        i18n.addResourceBundle('fr', 'bluiCommon', SharedDictionaries.french.translation, true, false);
        i18n.addResourceBundle('pt', 'bluiRegistration', RegistrationDictionaries.portuguese.translation, true, false);
        i18n.addResourceBundle('pt', 'bluiCommon', SharedDictionaries.portuguese.translation, true, false);
        i18n.addResourceBundle('es', 'bluiRegistration', RegistrationDictionaries.spanish.translation, true, false);
        i18n.addResourceBundle('es', 'bluiCommon', SharedDictionaries.spanish.translation, true, false);
    }
    useEffect(() => {
        void i18n.changeLanguage(language);
    }, [i18n, language]);
    return (_jsx(I18nextProvider, { i18n: i18n, children: _jsx(RegistrationContextProviderContent, { ...other, language: language, children: children }) }));
};
