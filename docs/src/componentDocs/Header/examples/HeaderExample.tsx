import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { Header } from '@brightlayer-ui/react-native-components';
import { DRAWER_WIDTH } from '../../../utils';

export const HeaderExample = (): JSX.Element => (
    <ExampleShowcase>
        <Header style={{ width: DRAWER_WIDTH, margin: 'auto' }} title={'Valley Forge'} subtitle={'The Last Stand'} />
    </ExampleShowcase>
);
