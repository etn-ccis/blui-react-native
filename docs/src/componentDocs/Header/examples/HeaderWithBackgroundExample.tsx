import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { Header } from '@brightlayer-ui/react-native-components';
import BackgroundImage from '../../../assets/farm.jpg';
import { DRAWER_WIDTH } from '../../../utils';

export const HeaderWithBackgroundExample = (): JSX.Element => (
    <ExampleShowcase>
        <Header
            style={{ width: DRAWER_WIDTH, margin: 'auto' }}
            title={'Valley Forge'}
            subtitle={'The Last Stand'}
            backgroundImage={{ uri: BackgroundImage }}
            styles={{ backgroundImage: { width: '100%' } }}
        />
    </ExampleShowcase>
);
