import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { blue, blueDark } from '@brightlayer-ui/react-native-themes';
import { ThemeContext, ThemeType } from './contexts/ThemeContext';
import { MainRouter } from './router';

const Wrapper = (): JSX.Element => {
    const [theme, setTheme] = useState<ThemeType>('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <PaperProvider theme={theme === 'light' ? blue : blueDark}>
                <MainRouter />
            </PaperProvider>
        </ThemeContext.Provider>
    );
};

AppRegistry.registerComponent(appName, () => Wrapper);
