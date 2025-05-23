/**
 Copyright (c) 2021-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { blueThemes } from '@brightlayer-ui/react-themes';
import useMediaQuery from '@mui/material/useMediaQuery';
import '@brightlayer-ui/react-themes/open-sans';
import '@fontsource/roboto';
import '@fontsource/roboto-mono';
import { App } from './app';
import './index.css';
import { store, RootState } from './redux/store';
import { useAppSelector } from './redux/hooks';
import { MDXProvider } from '@mdx-js/react';
import { componentsMap } from './__configuration__/markdownMapping';
import { GoogleAnalyticsWrapper } from './components/navigation/GoogleAnalyticsWrapper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as RNThemeProvider } from 'react-native-paper';
import * as RNBLUIThemes from '@brightlayer-ui/react-native-themes';
// Brightlayer UI Icon font
import '@brightlayer-ui/icons/BrightlayerUIIcons.css';
// prismJs
import 'prismjs/components/prism-jsx.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';

// google analytics
import ReactGA from 'react-ga4';
import { ScrollToTop } from './components/navigation/ScrollToTop';
if (import.meta.env.REACT_APP_GAID) {
    ReactGA.initialize(import.meta.env.REACT_APP_GAID);
}

const container = document.getElementById('root');

if (!container) throw new Error('Root Element was not found in the DOM');

const root = ReactDOMClient.createRoot(container);
const basename = import.meta.env.BASE_URL || '/';

// Suppress the BackHandler warning on web
if (typeof window !== 'undefined') {
    const originalWarn = console.error;
    console.error = (...args: unknown[]): void => {
        if (typeof args[0] === 'string' && args[0].includes('BackHandler is not supported on web')) {
            return;
        }
        originalWarn(...args);
    };
}

const ThemedApp = (): JSX.Element => {
    const siteTheme = useAppSelector((state: RootState) => state.appState.siteTheme);
    const siteDirection = useAppSelector((state: RootState) => state.appState.siteDirection);
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    document.dir = siteDirection;

    // force an update
    const MemoThemedApp = React.useCallback(
        () => (
            <ThemeProvider theme={{ ...blueThemes, direction: siteDirection }} defaultMode="light">
                <RNThemeProvider
                    theme={
                        siteTheme === 'dark' || (siteTheme === 'system' && prefersDarkMode)
                            ? RNBLUIThemes.blueDark
                            : RNBLUIThemes.blue
                    }
                >
                    <CssBaseline />
                    <MDXProvider components={componentsMap as any}>
                        <App />
                    </MDXProvider>
                </RNThemeProvider>
            </ThemeProvider>
        ),
        [siteTheme, siteDirection, prefersDarkMode]
    );
    return <MemoThemedApp />;
};

root.render(
    <SafeAreaProvider>
        <StyledEngineProvider injectFirst>
            <BrowserRouter basename={basename}>
                <ScrollToTop />
                <GoogleAnalyticsWrapper />
                <Provider store={store}>
                    <ThemedApp />
                </Provider>
            </BrowserRouter>
        </StyledEngineProvider>
    </SafeAreaProvider>
);
