import React, {useState} from 'react';
import {ExampleShowcase} from '../../../shared';
import {
  Drawer,
  DrawerBody,
  DrawerNavItem,
} from '@brightlayer-ui/react-native-components';

export const SelectingANavItemExample = (): JSX.Element => {
  const [selected, setSelected] = useState('notification');

  return (
    <ExampleShowcase>
      <Drawer style={{width: 250, margin: 'auto'}} activeItem={selected}>
        <DrawerBody>
          <DrawerNavItem
            itemID={'account'}
            title={'Account'}
            icon={{
              family: 'material-community',
              name: 'account',
              direction: 'auto',
            }}
            onPress={() => setSelected('account')}
            activeItemBackgroundShape="round"
          />
          <DrawerNavItem
            itemID={'notification'}
            title={'Notification'}
            icon={{
              family: 'material-community',
              name: 'bell',
              direction: 'auto',
            }}
            onPress={() => setSelected('notification')}
            activeItemBackgroundShape="round"
          />
          <DrawerNavItem
            itemID={'localization'}
            title={'Localization'}
            icon={{
              family: 'material-community',
              name: 'map',
              direction: 'auto',
            }}
            onPress={() => setSelected('localization')}
            activeItemBackgroundShape="round"
          />
        </DrawerBody>
      </Drawer>
    </ExampleShowcase>
  );
};
