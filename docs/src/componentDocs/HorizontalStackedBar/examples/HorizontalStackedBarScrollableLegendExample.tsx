import React from 'react';
import { HorizontalStackedBar, HorizontalStackedBarItem } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { View } from 'react-native';

const data: HorizontalStackedBarItem[] = [
    { label: 'Failed', count: 9, variant: 'failed' },
    { label: 'Success', count: 39, variant: 'success' },
    { label: 'Pending', count: 11, variant: 'pending' },
    { label: 'Info', count: 10, variant: 'info' },
    { label: 'Canceled', count: 3, variant: 'canceled' },
    { label: 'Deferred', count: 7, backgroundColor: '#7E57C2' },
    { label: 'Manual', count: 5, backgroundColor: '#8D6E63' },
];

export const HorizontalStackedBarScrollableLegendExample = (): JSX.Element => (
    <ExampleShowcase>
        <View style={{ width: '100%' }}>
            <HorizontalStackedBar data={data} legendScrollable />
        </View>
    </ExampleShowcase>
);
