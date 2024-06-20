import React from 'react';
import {Drawer, DrawerBody, DrawerFooter, DrawerNavItem} from '@brightlayer-ui/react-native-components';
import {ExampleShowcase} from '../../../shared';
import {Text} from 'react-native-paper';

export const DrawerFooterExample = (): JSX.Element => (
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
      </DrawerBody>
      <DrawerFooter>
        <Text variant="displayMedium" style={{alignSelf: 'center'}}>
          Footer content goes here
        </Text>
      </DrawerFooter>
    </Drawer>
  </ExampleShowcase>
);
