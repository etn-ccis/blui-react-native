import React, { JSX } from 'react';
import { Text } from 'react-native-paper';
import { IconComponentsExample } from './icons/IconComponentsExample';
import SignalIconExample from './icons/SignalIconExample';
import {
  ChipExample,
  DisplayExamples,
  InfoListItemExample,
  AutoCompleteExample,
  HorizontalStackedBarExample,
  ScoreCardExample,
  UserMenuExamples,
} from './display';
import { DrawerLayoutExample, MobileStepperExample } from './layout';
import BatteryLargeIconExample from './icons/BatteryLargeExample';

export const BrightlayerUIExamples: React.FC = (): JSX.Element => (
  <>
    <Text variant="headlineSmall" style={{ marginVertical: 48 }}>
      Brightlayer UI Components
    </Text>
    <ChipExample />
    <DrawerLayoutExample />
    <IconComponentsExample />
    <BatteryLargeIconExample />
    <SignalIconExample />
    <DisplayExamples />
    <InfoListItemExample />
    <AutoCompleteExample />
    <HorizontalStackedBarExample />
    <ScoreCardExample />
    <UserMenuExamples />
    <MobileStepperExample />
  </>
);
