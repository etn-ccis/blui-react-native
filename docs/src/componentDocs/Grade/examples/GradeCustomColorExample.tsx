import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {Grade} from '@brightlayer-ui/react-native-components';

export const GradeCustomColorExample = (): JSX.Element => (
  <ExampleShowcase sx={{display: 'flex', justifyContent: 'center'}}>
    <Grade label="AB" fontColor="#ffff00" backgroundColor="#ff0000" />
  </ExampleShowcase>
);
