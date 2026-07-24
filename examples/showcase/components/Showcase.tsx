import React, { JSX } from 'react';
import { BrightlayerUIExamples } from './brightlayer-ui';
import { ReactNativePaperExamples } from './react-native-paper';

export const Showcase: React.FC = (): JSX.Element => (
  <>
    <BrightlayerUIExamples />
    <ReactNativePaperExamples />
  </>
);
