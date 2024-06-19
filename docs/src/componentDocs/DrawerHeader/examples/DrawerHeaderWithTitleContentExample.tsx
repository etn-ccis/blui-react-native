import React from 'react';
import {
  Drawer,
  DrawerHeader,
  ListItemTag,
} from '@brightlayer-ui/react-native-components';
import {ExampleShowcase} from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import backgroundImage from '../../../shared/images/topology_40.png';

export const DrawerHeaderWithTitleContentExample = (): JSX.Element => (
  <ExampleShowcase>
    <Drawer style={{width: 250, margin: 'auto'}}>
      <DrawerHeader
        backgroundImage={{uri: backgroundImage}}
        backgroundColor={colors.blue[500]}
        icon={{name: 'menu'}}
        fontColor={colors.white[50]}
        titleContent={
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              marginLeft: 10,
            }}>
            <Text style={{marginBottom: 5, color: colors.white[50]}}>
              API Documentation
            </Text>
            <ListItemTag
              label="v1.50.8"
              backgroundColor={colors.white[50]}
              fontColor={colors.blue[500]}
              style={{width: '50%'}}
            />
          </View>
        }
      />
    </Drawer>
  </ExampleShowcase>
);
