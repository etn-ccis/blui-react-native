import React from 'react';
import { Drawer, DrawerHeader } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { DRAWER_WIDTH } from '../../../utils';

export const DrawerHeaderExample = (): JSX.Element => (
    <ExampleShowcase>
        <Drawer style={{ width: DRAWER_WIDTH, margin: 'auto' }}>
            <DrawerHeader title="Title" subtitle="Subtitle" icon={{ name: 'menu' }} />
        </Drawer>
    </ExampleShowcase>
);
