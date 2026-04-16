/**
 Copyright (c) 2021-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
import 'react-native-gesture-handler';
import React, { JSX, useEffect, useState } from 'react';
import { Provider as ThemeProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainRouter } from './src/navigation';
import { ThemeContext, ThemeType } from './src/contexts/ThemeContext';
import { blue, blueDark } from '@brightlayer-ui/react-native-themes';
import i18nAppInstance from './translations/i18n';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { AppContext, AppContextType } from './src/contexts/AppContextProvider';
import { Spinner } from '@brightlayer-ui/react-native-auth-workflow';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeModules, Platform, useColorScheme } from 'react-native';
import { isAuthenticated as isOktaAuthenticated, EventEmitter, getAccessToken } from '@okta/okta-react-native';

export const App = (): JSX.Element => {
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
                let locale = 'en';
                locale =
                    Platform.OS === 'ios'
                        ? NativeModules.SettingsManager.settings.AppleLocale ||
                          NativeModules.SettingsManager.settings.AppleLocale[0]
                        : NativeModules.I18nManager.localeIdentifier;
                setLanguage(locale?.substring(0, 2) || 'en');
            }
        } catch (error) {
            let locale = 'en';
            locale =
                Platform.OS === 'ios'
                    ? NativeModules.SettingsManager.settings.AppleLocale ||
                      NativeModules.SettingsManager.settings.AppleLocale[0]
                    : NativeModules.I18nManager.localeIdentifier;
            setLanguage(locale?.substring(0, 2) || 'en');
            console.error('Error getting language from Async Storage:', error);
        }
    };

    const handleSignInSuccess = (): any => {
        setAuthenticated(true);
        try {
            getAccessToken() // eslint-disable-next-line
                .then((res) => console.log(res.access_token)) // eslint-disable-next-line
                .catch((err) => console.log(err));
        } catch (error) {
            console.error('Okta error for access token', error);
        }
    };

    useEffect(() => {
        EventEmitter.addListener('signInSuccess', handleSignInSuccess);

        return (): any => {
            EventEmitter.removeAllListeners('signInSuccess');
        };
    }, []);

    // handle initialization of auth data on first load
    useEffect(() => {
        const initialize = async (): Promise<void> => {
            try {
                const authState = await isOktaAuthenticated();
                // below line is not need for okta workflow
                // const userData = await LocalStorage.readAuthData();
                // setLoginData({ email: userData.rememberMeData.user, rememberMe: userData.rememberMeData.rememberMe });
                setAuthenticated(Boolean(authState?.authenticated));
                await getLanguage();
            } catch (error) {
                console.error('Error initializing authentication state:', error);
                // handle any error state, rejected promises, etc..
            } finally {
                setIsLoading(false);
            }
        };
        // eslint-disable-next-line
        initialize();
    }, []);

    // Get the device's current color scheme ('light' | 'dark' | null)
    const deviceColorScheme = useColorScheme();

    // Initialize theme state based on device preference
    const [theme, setThemeState] = useState<ThemeType>(deviceColorScheme === 'dark' ? 'dark' : 'light');

    // Track whether to follow system theme or use manual override
    const [followSystem, setFollowSystem] = useState(true);

    // When user manually sets theme, stop following system preference
    const setTheme = (newTheme: ThemeType): void => {
        setFollowSystem(false);
        setThemeState(newTheme);
    };

    // Sync with device theme when followSystem is enabled and device scheme changes
    useEffect(() => {
        if (followSystem) {
            setThemeState(deviceColorScheme === 'dark' ? 'dark' : 'light');
        }
    }, [deviceColorScheme, followSystem]);

    return isLoading ? (
        <Spinner visible={isLoading} />
    ) : (
        <ThemeContext.Provider value={{ theme, setTheme, followSystem, setFollowSystem }}>
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
