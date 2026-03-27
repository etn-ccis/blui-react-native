import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { Pie } from '@brightlayer-ui/react-native-progress-icons';

export const PieProgressIconExample = (): React.JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pie percent={65} size={50} color="#3431d2" showPercentLabel={true} labelPosition={'bottom'} ring={5} />
    </ExampleShowcase>
);
