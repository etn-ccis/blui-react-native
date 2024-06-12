import React from 'react';
import {Hero} from '@brightlayer-ui/react-native-components/core/Hero';
import {ExampleShowcase} from '../../../shared';
import BLUIIcon from '@brightlayer-ui/react-native-vector-icons';

export const HeroWithSecondaryIconExample = (): JSX.Element => (
  <ExampleShowcase>
    <Hero
      label={'Velocity'}
      ChannelValueProps={{
        icon: {name: 'trending-up'},
        value: 470,
        units: 'RPM',
      }}
      icon={<BLUIIcon name="fan" size={40} />}
    />
  </ExampleShowcase>
);
