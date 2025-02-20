/**
 * @format
 */

import 'react-native';
import React from 'react';
import { App } from '../App';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Note: import explicitly to use the types shiped with jest.
import { it } from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    renderer.create(
        <SafeAreaProvider>
            <App navigation={{ openDrawer: jest.fn(() => true) } as any} />
        </SafeAreaProvider>
    );
});
