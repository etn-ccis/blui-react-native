import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { BatteryLarge } from '@brightlayer-ui/react-native-progress-icons';

export const BatteryLargeProgressIconExample = (): React.JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <BatteryLarge percent={75} size={50} color="#3431d2" showPercentLabel={true} labelPosition={'bottom'} />
    </ExampleShowcase>
);
