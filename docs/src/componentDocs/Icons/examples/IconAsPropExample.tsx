import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {Hero} from '@brightlayer-ui/react-native-components';
import MatIcon from '@react-native-vector-icons/material-icons';

export const IconAsPropExample = (): JSX.Element => (
  <ExampleShowcase sx={{display: 'flex', justifyContent: 'center'}}>
    <Hero label={'Setting'} icon={<MatIcon name="settings" size={38} color={'green'} />} />;
  </ExampleShowcase>
);
