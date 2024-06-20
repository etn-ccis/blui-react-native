import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerNavItem,
} from '@brightlayer-ui/react-native-components';
import {ExampleShowcase} from '../../../shared';
import {Text} from 'react-native-paper';
import {Image, View} from 'react-native';
import eatonLogo from '../images/eatonLogo.png';
import eatonCopyrightText from '../images/EatonCopyrightText.png';

export const DrawerFooterExample = (): JSX.Element => (
  <ExampleShowcase>
    <Drawer style={{width: 320, margin: 'auto'}}>
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
        <View style={{padding: 16}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 12,
            }}>
            <Text
              style={{
                fontSize: 12,
                color: '#44474E',
              }}>
              v2.4.2
            </Text>
            <Text style={{fontSize: 12, color: '#44474E'}}>
              10:33:05 05/12/2024
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Image
              source={{uri: eatonLogo}}
              style={{height: 32, width: '36%'}}
              resizeMode="contain"
            />
            <Image
              source={{uri: eatonCopyrightText}}
              style={{height: 32, width: '33%'}}
              resizeMode="contain"
            />
          </View>
        </View>
      </DrawerFooter>
    </Drawer>
  </ExampleShowcase>
);
