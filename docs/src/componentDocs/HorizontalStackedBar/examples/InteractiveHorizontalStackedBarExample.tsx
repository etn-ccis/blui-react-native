import React, { useState } from 'react';
import { HorizontalStackedBar, HorizontalStackedBarItem } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { Text, View } from 'react-native';

const data: HorizontalStackedBarItem[] = [
    { label: 'Failed', count: 12, variant: 'failed' },
    { label: 'Canceled', count: 16, variant: 'canceled' },
    { label: 'Success', count: 48, variant: 'success' },
    { label: 'Pending', count: 24, variant: 'pending' },
    { label: 'Info', count: 0, variant: 'info' },
];

export const InteractiveHorizontalStackedBarExample = (): JSX.Element => {
    const [selected, setSelected] = useState<HorizontalStackedBarItem | undefined>();

    return (
        <ExampleShowcase>
            <View style={{ width: '100%' }}>
                <HorizontalStackedBar data={data} hideEmptyCategories onChange={setSelected} />
                <Text style={{ marginTop: 8, fontSize: 12, color: '#6B7280' }}>
                    {selected ? `Selected: ${selected.label}` : 'Click a legend item or bar segment to select'}
                </Text>
            </View>
        </ExampleShowcase>
    );
};
