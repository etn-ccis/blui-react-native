import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {ChannelValue} from '@brightlayer-ui/react-native-components';

export const ChannelValueWithIconExample = (): JSX.Element => (
  <ExampleShowcase sx={{display: 'flex', justifyContent: 'center'}}>
    <ChannelValue
      value="123"
      units="hz"
      icon={{family: 'material', name: 'trending-up'}}
    />
  </ExampleShowcase>
);
