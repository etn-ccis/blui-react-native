import React, { JSX } from 'react';
import { Text } from 'react-native-paper';
import {
  BannerExample,
  HelperTextExample,
  IconButtonExample,
  ActivityIndicatorExample,
  AvatarExample,
  BadgeExample,
  DividerExample,
} from './display';
import { CardExample, SurfaceExample } from './surfaces';
import { DataTableExample, ListExample } from './lists';
import { DialogExample, ModalExample } from './dialogs';
import {
  MenuExample,
  AppbarExample,
  BottomNavigationExample,
} from './navigation';
import {
  TextFieldCard,
  FabExample,
  ProgressBarExample,
  SwitchExample,
  SegmentedButtonsExample,
  FlatTextInputExample,
  OutlinedTextInputExample,
} from './inputs';
import {
  ContainedButtonExample,
  ContainedTonalButtonExample,
  ElevatedButtonExample,
  OutlinedButtonExample,
  TextButtonExample,
  ToggleButtonExample,
} from './inputs/button';
import { CheckboxAndroidExample, CheckboxIOSExample } from './inputs/checkbox';
import {
  RadioButtonAndroidExample,
  RadioButtonIOSExample,
} from './inputs/radiobutton';
import { SnackbarExample, InverseSnackbarExample } from './inputs/snackbar';

export const ReactNativePaperExamples: React.FC = (): JSX.Element => (
  <>
    <Text variant="headlineSmall" style={{ marginVertical: 48 }}>
      React Native Paper Components
    </Text>
    <TextFieldCard />
    <BannerExample />
    <CardExample />
    <DataTableExample />
    <DialogExample />
    <HelperTextExample />
    <IconButtonExample />
    <ListExample />
    <MenuExample />
    <ModalExample />
    <SurfaceExample />
    <ActivityIndicatorExample />
    <AvatarExample />
    <BadgeExample />
    <DividerExample />
    <FabExample />
    <ProgressBarExample />
    <SwitchExample />
    <SegmentedButtonsExample />
    <ContainedButtonExample />
    <ContainedTonalButtonExample />
    <ElevatedButtonExample />
    <OutlinedButtonExample />
    <TextButtonExample />
    <ToggleButtonExample />
    <CheckboxAndroidExample />
    <CheckboxIOSExample />
    <RadioButtonAndroidExample />
    <RadioButtonIOSExample />
    <SnackbarExample />
    <InverseSnackbarExample />
    <FlatTextInputExample />
    <OutlinedTextInputExample />
    <AppbarExample />
    <BottomNavigationExample />
  </>
);
