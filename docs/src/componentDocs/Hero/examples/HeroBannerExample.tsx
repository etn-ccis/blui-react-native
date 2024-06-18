import React from 'react';
import {Hero, HeroBanner} from '@brightlayer-ui/react-native-components';
import {ExampleShowcase} from '../../../shared';

export const HeroBannerExample = (): JSX.Element => (
  <ExampleShowcase>
    <HeroBanner>
      <Hero
        icon={{family: 'brightlayer-ui', name: 'grade_a'}}
        label="Efficiency"
        ChannelValueProps={{value: '98', units: '%'}}
      />
    </HeroBanner>
  </ExampleShowcase>
);
