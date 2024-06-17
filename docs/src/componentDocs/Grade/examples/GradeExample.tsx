import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {Grade} from '@brightlayer-ui/react-native-components';

export const GradeExample = (): JSX.Element => (
  <ExampleShowcase
    sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <Grade.APlus />
      <Grade.A />
      <Grade.AMinus />
    </div>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <Grade.BPlus />
      <Grade.B />
      <Grade.BMinus />
    </div>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <Grade.CPlus />
      <Grade.C />
      <Grade.CMinus />
    </div>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <Grade.DPlus />
      <Grade.D />
      <Grade.DMinus />
    </div>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Grade.F />
    </div>
  </ExampleShowcase>
);
