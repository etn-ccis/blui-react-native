import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { Header } from '@brightlayer-ui/react-native-components';
import BackgroundImage from '../../../assets/farm.jpg';

export const HeaderWithBackgroundExample = (): JSX.Element => (
    <ExampleShowcase>
        <Header
            style={{ width: 350, margin: 'auto' }}
            title={'Valley Forge'}
            subtitle={'The Last Stand'}
            backgroundImage={{ uri: BackgroundImage }}
            styles={{ backgroundImage: { width: '100%' } }}
        />
    </ExampleShowcase>
);
