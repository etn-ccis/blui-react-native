import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerNavGroup,
  DrawerNavItem,
} from '@brightlayer-ui/react-native-components';
import {ExampleShowcase} from '../../../shared';
import {Person, Notifications, Circle} from '@mui/icons-material';
import * as colors from '@brightlayer-ui/colors';

export const BasicDrawerBodyExample = (): JSX.Element => (
  <ExampleShowcase>
    <Drawer
      style={{width: 250, margin: 'auto', backgroundColor: colors.white[100]}}>
      <DrawerBody hidePadding>
        <DrawerNavGroup title={'Navigation Group'}>
          <DrawerNavItem
            itemID={'item1'}
            title={'Account'}
            icon={<Person />}
            InfoListItemProps={{
              iconAlign: 'center',
            }}
          />
          <DrawerNavItem
            itemID={'item2'}
            title={'Notification'}
            icon={<Notifications />}
            activeItemBackgroundShape={'round'}
            InfoListItemProps={{
              iconAlign: 'center',
            }}
          />
          <DrawerNavItem
            itemID={'item3'}
            title={'Localization'}
            icon={<Circle />}
            activeItemBackgroundShape={'round'}
            InfoListItemProps={{
              iconAlign: 'center',
            }}
          />
        </DrawerNavGroup>
      </DrawerBody>
    </Drawer>
  </ExampleShowcase>
);
