import React from 'react';
import { HorizontalStackedBar, HorizontalStackedBarItem } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { View } from 'react-native';

const data: HorizontalStackedBarItem[] = [
    { label: 'Critical', count: 16, variant: 'failed' },
    { label: 'Healthy', count: 52, variant: 'success' },
    { label: 'Queued', count: 7, variant: 'pending' },
    { label: 'Offline', count: 0, variant: 'canceled' },
    { label: 'Unknown', count: 0, variant: 'info' },
];

export const HorizontalStackedBarLegendBehaviorExample = (): JSX.Element => (
    <ExampleShowcase>
        <View style={{ width: '100%' }}>
            <HorizontalStackedBar data={data} hideEmptyCategories />
        </View>
    </ExampleShowcase>
);
