import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {Hero} from '@brightlayer-ui/react-native-components';

export const IconAsImageExample = (): JSX.Element => (
  <ExampleShowcase sx={{display: 'flex', justifyContent: 'center'}}>
    <Hero
    label={'Image'}
    icon={{
    uri: 'https://raw.githubusercontent.com/etn-ccis/blui-icons/dev/packages/png/png48/account_settings_black500_48dp.png',
  }}
/>
  </ExampleShowcase>
);
