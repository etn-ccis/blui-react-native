import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { Battery } from '@brightlayer-ui/react-native-progress-icons';

export const BatteryProgressIconExample = (): React.JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <Battery
            percent={75}
            size={50}
            color="#3431d2"
            showPercentLabel={true}
            labelPosition={'bottom'}
            charging={true}
        />
    </ExampleShowcase>
);
