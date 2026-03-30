import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { Heart } from '@brightlayer-ui/react-native-progress-icons';

export const HeartProgressIconExample = (): React.JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <Heart percent={80} size={50} color="#d23161" showPercentLabel={true} labelPosition={'bottom'} />
    </ExampleShowcase>
);
