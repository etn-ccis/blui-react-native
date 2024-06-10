import React from 'react';
import {CheckCircle} from '@mui/icons-material';
import {ExampleShowcase} from '../../../shared';
import {ChannelValue} from '@brightlayer-ui/react-native-components';

export const ChannelValueWithPrefixExample = (): JSX.Element => (
  <ExampleShowcase sx={{display: 'flex', justifyContent: 'center'}}>
    <ChannelValue value="12" units="$" prefix icon={<CheckCircle />} />
  </ExampleShowcase>
);
