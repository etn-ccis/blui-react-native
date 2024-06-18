import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerNavGroup,
  DrawerNavItem,
} from '@brightlayer-ui/react-native-components';
import {ExampleShowcase} from '../../../shared';
import Divider from '@mui/material/Divider';

export const DrawerNavGroupCompositionExample = (): JSX.Element => (
  <ExampleShowcase>
    <Drawer style={{width: 250, margin: 'auto'}}>
      <DrawerBody>
        <DrawerNavGroup title="Group 1" hidePadding titleDivider={false}>
          <DrawerNavItem title="Item 1" itemID="1" />
          <DrawerNavItem title="Item 2" itemID="2" />
        </DrawerNavGroup>
        <Divider />
        <DrawerNavGroup
          title="Group 2"
          hidePadding
          titleDivider={false}
          items={[
            {
              title: 'Item 3',
              itemID: '3',
            },
            {
              title: 'Item 4',
              itemID: '4',
            },
          ]}
        />
      </DrawerBody>
    </Drawer>
  </ExampleShowcase>
);
