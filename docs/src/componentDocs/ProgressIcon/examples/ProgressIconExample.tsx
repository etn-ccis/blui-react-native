import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { Signal } from '@brightlayer-ui/react-native-progress-icons';

export const ProgressIconExample = (): React.JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <Signal percent={50} size={50} color="#3431d2" showPercentLabel={true} labelPosition={'bottom'} />
        <Signal
            style={{ marginLeft: 16 }}
            percent={50}
            size={50}
            color="#3431d2"
            showPercentLabel={true}
            labelPosition={'bottom'}
            outlined={true}
        />
    </ExampleShowcase>
);
