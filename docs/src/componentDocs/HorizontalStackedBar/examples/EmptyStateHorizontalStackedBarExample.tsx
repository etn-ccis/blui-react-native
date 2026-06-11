import React from 'react';
import { HorizontalStackedBar, HorizontalStackedBarItem } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { View } from 'react-native';

const data: HorizontalStackedBarItem[] = [
    { label: 'Failed', variant: 'failed', count: 0 },
    { label: 'Canceled', variant: 'canceled', count: 0 },
    { label: 'Success', variant: 'success', count: 0 },
    { label: 'Pending', variant: 'pending', count: 0 },
    { label: 'Info', variant: 'info', count: 0 },
];

export const EmptyStateHorizontalStackedBarExample = (): JSX.Element => (
    <ExampleShowcase>
        <View style={{ width: '100%' }}>
            <HorizontalStackedBar data={data} />
        </View>
    </ExampleShowcase>
);
