/**
 Copyright (c) 2021-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Provider as ThemeProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainRouter } from './src/navigation';
import { ThemeContext, ThemeType } from './src/contexts/ThemeContext';
import { blue, blueDark } from '@brightlayer-ui/react-native-themes';
import i18nAppInstance from './translations/i18n';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { AppContext, AppContextType } from './src/contexts/AppContextProvider';
import { LocalStorage } from './src/store/local-storage';
import { Spinner } from '@brightlayer-ui/react-native-auth-workflow';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { NativeModules, Platform } from 'react-native';

export const App = (): JSX.Element => {
    const [theme, setTheme] = useState<ThemeType>('light');
    const [language, setLanguage] = useState('en');
    const [isAuthenticated, setAuthenticated] = useState<AppContextType['isAuthenticated']>(false);
    const [loginData, setLoginData] = useState<AppContextType['loginData']>({
        email: '',
        rememberMe: false,
    });
    const [isLoading, setIsLoading] = useState(true);
    const { i18n } = useTranslation();
    const getLanguage = async (): Promise<void> => {
        try {
            const storedLanguage = await AsyncStorage.getItem('userLanguage');
            if (storedLanguage !== null) {
                setLanguage(storedLanguage);
                void i18n.changeLanguage(storedLanguage);
            } else {
                const locale = 'en';
                // Platform.OS === 'ios'
                //     ? NativeModules.SettingsManager.settings.AppleLocale
                //     : NativeModules.I18nManager.localeIdentifier;
                setLanguage(locale?.substring(0, 2) || 'en');
            }
        } catch (error) {
            console.error('Error getting language from Async Storage:', error);
        }
    };
    // handle initialization of auth data on first load
    useEffect(() => {
        const initialize = async (): Promise<void> => {
            try {
                const userData = await LocalStorage.readAuthData();
                setLoginData({ email: userData.rememberMeData.user, rememberMe: userData.rememberMeData.rememberMe });
                setAuthenticated(Boolean(userData.userId));
                await getLanguage();
            } catch {
                // handle any error state, rejected promises, etc..
            } finally {
                setIsLoading(false);
            }
        };
        // eslint-disable-next-line
        initialize();
    }, []);

    return isLoading ? (
        <Spinner visible={isLoading} />
    ) : (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <I18nextProvider i18n={i18nAppInstance}>
                <AppContext.Provider
                    value={{
                        isAuthenticated,
                        onUserAuthenticated: (userData): void => {
                            setAuthenticated(true);
                            setLoginData(userData);
                        },
                        // eslint-disable-next-line
                        onUserNotAuthenticated: (userData): void => {
                            setAuthenticated(false);
                        },
                        loginData,
                        setLoginData,
                        language,
                        setLanguage,
                        setAuthenticated,
                    }}
                >
                    <ThemeProvider theme={theme === 'light' ? blue : blueDark}>
                        <SafeAreaProvider>
                            <MainRouter />
                        </SafeAreaProvider>
                    </ThemeProvider>
                </AppContext.Provider>
            </I18nextProvider>
        </ThemeContext.Provider>
    );
};

export default App;
