import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {Grade} from '@brightlayer-ui/react-native-components';

export const GradeExample = (): JSX.Element => (
  <ExampleShowcase
    sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <div style={{margin: '10px'}}>
        <Grade.APlus />
      </div>
      <div style={{margin: '10px'}}>
        <Grade.A />
      </div>
      <div style={{margin: '10px'}}>
        <Grade.AMinus />
      </div>
    </div>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <div style={{margin: '10px'}}>
        <Grade.BPlus />
      </div>
      <div style={{margin: '10px'}}>
        <Grade.B />
      </div>
      <div style={{margin: '10px'}}>
        <Grade.BMinus />
      </div>
    </div>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <div style={{margin: '10px'}}>
        <Grade.CPlus />
      </div>
      <div style={{margin: '10px'}}>
        <Grade.C />
      </div>
      <div style={{margin: '10px'}}>
        <Grade.CMinus />
      </div>
    </div>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <div style={{margin: '10px'}}>
        <Grade.DPlus />
      </div>
      <div style={{margin: '10px'}}>
        <Grade.D />
      </div>
      <div style={{margin: '10px'}}>
        <Grade.DMinus />
      </div>
    </div>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{margin: '10px'}}>
        <Grade.F />
      </div>
    </div>
  </ExampleShowcase>
);
