import React from 'react';
import { HorizontalStackedBar, HorizontalStackedBarItem } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { View } from 'react-native';

const data: HorizontalStackedBarItem[] = [
    {
        label: 'Alpha',
        backgroundColor: '#0B5FFF',
        count: 25,
        icon: { family: 'material', name: 'trending-up' },
        disabledIcon: { family: 'material', name: 'trending-up' },
    },
    {
        label: 'Beta',
        backgroundColor: '#00A884',
        count: 35,
    },
    {
        label: 'Gamma',
        backgroundColor: '#FF7A00',
        count: 15,
        icon: { family: 'material', name: 'trending-down' },
        disabledIcon: { family: 'material', name: 'trending-down' },
    },
    {
        label: 'Delta',
        backgroundColor: '#5D36D6',
        count: 25,
    },
];

export const CustomColorHorizontalStackedBarExample = (): JSX.Element => (
    <ExampleShowcase>
        <View style={{ width: '100%' }}>
            <HorizontalStackedBar data={data} />
        </View>
    </ExampleShowcase>
);
