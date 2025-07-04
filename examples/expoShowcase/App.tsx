import 'react-native-gesture-handler';
import React, { JSX, useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { blue, blueDark } from '@brightlayer-ui/react-native-themes';
import { ThemeContext, ThemeType } from './contexts/ThemeContext';
import { MainRouter } from './router';

export default function App(): JSX.Element {
    const [theme, setTheme] = useState<ThemeType>('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <PaperProvider theme={theme === 'light' ? blue : blueDark}>
                <MainRouter />
            </PaperProvider>
        </ThemeContext.Provider>
    );
}
