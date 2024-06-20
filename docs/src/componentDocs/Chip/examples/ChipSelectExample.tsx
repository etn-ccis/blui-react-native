import React from 'react';
import {Chip} from '@brightlayer-ui/react-native-components';
import {ExampleShowcase} from '../../../shared';

export const ChipSelectExample = (): JSX.Element => (
  <ExampleShowcase sx={{display: 'flex'}}>
    <Chip style={{marginRight: 10}}>Unselected Chip</Chip>
    <Chip selected>Selected Chip</Chip>
  </ExampleShowcase>
);
