import React from 'react';
import {Text} from 'react-native-paper';
import {
  Drawer,
  DrawerBody,
  DrawerNavGroup,
  DrawerNavItem,
  ListItemTag,
} from '@brightlayer-ui/react-native-components';
import {ExampleShowcase} from '../../../shared';
import {View} from 'react-native';
import * as colors from '@brightlayer-ui/colors';

export const CustomNavGroupTitleContentExample = (): JSX.Element => (
  <ExampleShowcase>
    <Drawer
      style={{width: 250, margin: 'auto', backgroundColor: colors.white[100]}}>
      <DrawerBody>
        <DrawerNavGroup
          hidePadding
          titleContent={
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
              }}>
              <Text>Nav Group Title Content</Text>
              <ListItemTag label="v1.0.3" />
            </View>
          }>
          <DrawerNavItem title="Item 1" itemID="1" />
          <DrawerNavItem title="Item 2" itemID="2" />
        </DrawerNavGroup>
      </DrawerBody>
    </Drawer>
  </ExampleShowcase>
);
