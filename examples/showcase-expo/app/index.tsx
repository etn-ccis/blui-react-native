import '../src/gesture-handler';
import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { blue, blueDark } from '@brightlayer-ui/react-native-themes';
import { ThemeContext, ThemeType } from '../src/contexts/ThemeContext';
import { MainRouter } from '../src/router';

export default function Index() {
    const [theme, setTheme] = useState<ThemeType>('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <PaperProvider theme={theme === 'light' ? blue : blueDark}>
                <MainRouter />
            </PaperProvider>
        </ThemeContext.Provider>
    );
}
