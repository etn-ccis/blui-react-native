import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {
  Drawer,
  DrawerBody,
  DrawerNavItem,
} from '@brightlayer-ui/react-native-components';

export const SelectingANavItemExample = (): JSX.Element => (
  <ExampleShowcase>
    <Drawer style={{width: 250, margin: 'auto'}} activeItem="item2">
      <DrawerBody>
        <DrawerNavItem
          itemID={'item1'}
          title={'Account'}
          icon={{
            family: 'material-community',
            name: 'account',
            direction: 'auto',
          }}
        />
        <DrawerNavItem
          itemID={'item2'}
          title={'Notification'}
          icon={{family: 'material-community', name: 'bell', direction: 'auto'}}
        />
        <DrawerNavItem
          itemID={'item4'}
          title={'Localization'}
          icon={{
            family: 'material-community',
            name: 'map',
            direction: 'auto',
          }}
        />
      </DrawerBody>
    </Drawer>
  </ExampleShowcase>
);
