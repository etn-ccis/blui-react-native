import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { Header } from '@brightlayer-ui/react-native-components';

export const HeaderWithExpandCollapseExample = (): JSX.Element => (
    <ExampleShowcase>
        <Header
            title={'Valley Forge'}
            subtitle={'The Last Stand'}
            expandable={true}
            collapsedHeight={56}
            expandedHeight={200}
        />

    </ExampleShowcase>
);