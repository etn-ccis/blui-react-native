import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerNavItem,
} from '@brightlayer-ui/react-native-components';
import {ExampleShowcase} from '../../../shared';

export const DrawerNavItemExample = (): JSX.Element => (
  <ExampleShowcase>
    <Drawer style={{width: 250, margin: 'auto'}}>
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
          activeItemBackgroundShape={'round'}
        />
        <DrawerNavItem
          itemID={'item4'}
          title={'Localization'}
          icon={{
            family: 'material-community',
            name: 'map',
            direction: 'auto',
          }}
          activeItemBackgroundShape={'round'}
        />
      </DrawerBody>
    </Drawer>
  </ExampleShowcase>
);
