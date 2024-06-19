import React from 'react';
import {Hero, HeroBanner} from '@brightlayer-ui/react-native-components';
import {ExampleShowcase} from '../../../shared';
import {View} from 'react-native';

export const HeroBannerExample = (): JSX.Element => (
  <ExampleShowcase>
    <HeroBanner>
      <Hero
        icon={{family: 'brightlayer-ui', name: 'grade_a'}}
        label="Efficiency"
        ChannelValueProps={{value: '98', units: '%'}}
      />
      <Hero
        icon={{name: 'schedule'}}
        label="Schedule"
        ChannelValueProps={{value: '1', units: 'h'}}
      />
      <Hero
        icon={{name: 'schedule'}}
        label="Schedule"
        ChannelValueProps={{value: '27', units: 'm'}}
      />
    </HeroBanner>
  </ExampleShowcase>
);
