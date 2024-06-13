import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {Header} from '@brightlayer-ui/react-native-components';

export const HeaderWithBackgroundExample = (): JSX.Element => (
  <ExampleShowcase>
    <Header
      title={'Valley Forge'}
      subtitle={'The Last Stand'}
      // backgroundImage={require('../assets/images/farm.jpg')}
    />
  </ExampleShowcase>
);
