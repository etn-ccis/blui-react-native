import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {Header} from '@brightlayer-ui/react-native-components';
// import BackgroundImage from '../../../assets/farm.jpg';

export const HeaderWithBackgroundExample = (): JSX.Element => (
  <ExampleShowcase>
    <Header
      title={'Valley Forge'}
      subtitle={'The Last Stand'}
      // backgroundImage={BackgroundImage}
      // backgroundImage={require('../../../assets/farm.jpg')}
    />
  </ExampleShowcase>
);
