import React from 'react';
import Divider from '@mui/material/Divider';
import {
  Drawer,
  DrawerBody,
  DrawerNavGroup,
  DrawerNavItem,
  Spacer,
} from '@brightlayer-ui/react-native-components';
import {ExampleShowcase} from '../../../shared';

export const SpacingNavGroupsExample = (): JSX.Element => (
  <ExampleShowcase>
    <Drawer style={{width: 250, margin: 'auto'}}>
      <DrawerBody>
        <DrawerNavGroup title="Group 1" hidePadding titleDivider={false}>
          <DrawerNavItem title="Item 1" itemID="1" />
          <DrawerNavItem title="Item 2" itemID="2" />
        </DrawerNavGroup>
        <Spacer height={30} style={{flexBasis: 'auto'}} />
        <Divider />
        <DrawerNavGroup title="Group 2" hidePadding titleDivider={false}>
          <DrawerNavItem title="Item 3" itemID="3" />
          <DrawerNavItem title="Item 4" itemID="4" />
        </DrawerNavGroup>
      </DrawerBody>
    </Drawer>
  </ExampleShowcase>
);
