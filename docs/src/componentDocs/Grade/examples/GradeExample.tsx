import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {Grade} from '@brightlayer-ui/react-native-components';

export const GradeExample = (): JSX.Element => (
  <ExampleShowcase sx={{display: 'flex', justifyContent: 'center'}}>
    <Grade.APlus/>
    <Grade.A/>
    <Grade.AMinus/>
    <Grade.BPlus/>
    <Grade.B/>
    <Grade.BMinus/>
    <Grade.CPlus/>
    <Grade.C/>
    <Grade.CMinus/>
    <Grade.DPlus/>
    <Grade.D/>
    <Grade.DMinus/>
    <Grade.F/>
  </ExampleShowcase>
);
