import React from 'react';
import {Hero, HeroBanner} from '@brightlayer-ui/react-native-components';
import {ExampleShowcase} from '../../../shared';
import BLUIIcon from '@brightlayer-ui/react-native-vector-icons';

export const HeroBannerExample = (): JSX.Element => (
  <ExampleShowcase>
    <HeroBanner>
      <Hero
        icon={<BLUIIcon name="grade_a" size={40} />}
        label="Efficiency"
        ChannelValueProps={{value: '98', units: '%'}}
      />
    </HeroBanner>
  </ExampleShowcase>
);
