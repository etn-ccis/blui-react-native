import React from 'react';
import { SlashedBLUIIcon } from '@brightlayer-ui/react-native-vector-icons';
import { ExampleShowcase } from '../../../shared';

export const SlashedIconExample = (): React.JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
        <SlashedBLUIIcon name="air_filter" size={48} color="#007bc1" slashColor="#007bc1" />
        <SlashedBLUIIcon name="water" size={48} color="#007bc1" slashColor="#ca3c3d" />
        <SlashedBLUIIcon name="ups" size={48} color="#007bc1" slashColor="#007bc1" slashGapVisible={false} />
    </ExampleShowcase>
);
