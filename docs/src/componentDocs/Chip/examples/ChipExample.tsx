import React from 'react';
import { Chip } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';

export const ChipExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex' }}>
        <Chip style={{ marginRight: 10 }}>Outlined Chip</Chip>
        <Chip mode="elevated">Elevated Chip</Chip>
    </ExampleShowcase>
);
