import React from 'react';
import { HorizontalStackedBar, HorizontalStackedBarItem } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';

const data: HorizontalStackedBarItem[] = [
    { label: 'Failed', variant: 'failed', count: 10 },
    { label: 'Canceled', variant: 'canceled', count: 20 },
    { label: 'Success', variant: 'success', count: 35 },
    { label: 'Pending', variant: 'pending', count: 15 },
    { label: 'Info', variant: 'info', count: 20 },
];

export const HorizontalStackedBarExample = (): React.JSX.Element => (
    <ExampleShowcase>
        <HorizontalStackedBar data={data} />
    </ExampleShowcase>
);
