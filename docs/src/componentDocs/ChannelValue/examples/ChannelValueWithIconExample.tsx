import React from 'react';
import { TrendingUp } from '@mui/icons-material';
import { ExampleShowcase } from '../../../shared';
import { ChannelValue } from '@brightlayer-ui/react-native-components';

export const ChannelValueWithIconExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <ChannelValue value="123" units="hz" icon={<TrendingUp />} />
    </ExampleShowcase>
);
