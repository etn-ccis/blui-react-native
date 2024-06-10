import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {ChannelValue} from '@brightlayer-ui/react-native-components';

export const ChannelValueExample = (): JSX.Element => (
  <ExampleShowcase sx={{display: 'flex', justifyContent: 'center'}}>
    <ChannelValue value="123" units="hz" />
  </ExampleShowcase>
);
