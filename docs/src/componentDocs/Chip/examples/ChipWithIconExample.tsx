import React from 'react';
import { Chip } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { Avatar } from 'react-native-paper';

export const ChipWithIconExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex' }}>
        <Chip icon={{ name: 'info' }} style={{ marginRight: 10 }}>
            Chip With Icon
        </Chip>
        <Chip mode="elevated" avatar={<Avatar.Icon size={40} icon="account-circle" />}>
            Elevated Chip With Avatar
        </Chip>
    </ExampleShowcase>
);
