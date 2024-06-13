import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {Hero} from '@brightlayer-ui/react-native-components';

export const IconAsStringExample = (): JSX.Element => (
  <ExampleShowcase sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
    <Hero label={'String'} icon={'A'} />
    <Hero label={'Emoji'} icon={'🍇'} />
  </ExampleShowcase>
);
