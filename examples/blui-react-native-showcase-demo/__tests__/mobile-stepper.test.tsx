/**
 * @format
 */

import 'react-native';
import React from 'react';
import { MobileStepperExample } from '../components/MobileStepperExample';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeContext } from '../contexts/ThemeContext';
import { blue } from '@brightlayer-ui/react-native-themes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { it } from '@jest/globals';
import renderer from 'react-test-renderer';

it('Renders correctly and snapShot matches', () => {
    const snap = renderer
        .create(
            <SafeAreaProvider>
                <ThemeContext.Provider value={{ theme: 'light', setTheme: (): void => {} }}>
                    <PaperProvider theme={blue}>
                        <MobileStepperExample />
                    </PaperProvider>
                </ThemeContext.Provider>
            </SafeAreaProvider>
        )
        .toJSON();
    expect(snap).toMatchSnapshot();
});
