import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { Ups } from '@brightlayer-ui/react-native-progress-icons';

export const UpsProgressIconExample = (): React.JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <Ups percent={90} size={50} color="#d23161" showPercentLabel={true} labelPosition={'bottom'} />
    </ExampleShowcase>
);
