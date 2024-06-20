import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerNavGroup,
  DrawerNavItem,
} from '@brightlayer-ui/react-native-components';

export const CustomizableDrawerExample = (): JSX.Element => (
  <ExampleShowcase>
    <Drawer activeItem="item1" style={{width: 250, margin: 'auto'}}>
      <DrawerHeader
        title={'Drawer Title'}
        subtitle={'Drawer Subtitle'}
        icon={{name: 'menu', direction: 'auto'}}
      />
      <DrawerBody>
        {/* Using children */}
        <DrawerNavGroup title={'Navigation Group 1'}>
          <DrawerNavItem
            itemID={'item1'}
            title={'Account'}
            icon={{
              family: 'material-community',
              name: 'account',
              direction: 'auto',
            }}
            InfoListItemProps={{
              iconAlign: 'center',
            }}
          />
          <DrawerNavItem
            itemID={'item2'}
            title={'Notification'}
            icon={{
              family: 'material-community',
              name: 'bell',
              direction: 'auto',
            }}
            activeItemBackgroundShape={'round'}
            InfoListItemProps={{
              iconAlign: 'center',
            }}>
            <DrawerNavItem itemID={'item3'} title={'Web'} />
            <DrawerNavItem itemID={'item31'} title={'Mobile'} />
          </DrawerNavItem>
          <DrawerNavItem
            itemID={'item4'}
            title={'Localization'}
            icon={{
              family: 'material-community',
              name: 'map',
              direction: 'auto',
            }}
            activeItemBackgroundShape={'round'}
            InfoListItemProps={{
              iconAlign: 'center',
            }}
          />
        </DrawerNavGroup>
        {/* Using 'items' prop */}
        <DrawerNavGroup
          title={'Navigation Group 2'}
          items={[
            {
              title: 'Sensors',
              itemID: 'id1',
            },
            {
              title: 'Devices',
              itemID: 'id2',
            },
          ]}
        />
      </DrawerBody>
    </Drawer>
  </ExampleShowcase>
);
