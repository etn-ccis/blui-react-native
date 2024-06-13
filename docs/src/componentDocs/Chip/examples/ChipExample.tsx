import React from 'react';
import {Chip} from '@brightlayer-ui/react-native-components';
import {ExampleShowcase} from '../../../shared';
import * as BLUIColors from '@brightlayer-ui/colors';
import {Avatar} from 'react-native-paper';

export const ChipExample = (): JSX.Element => (
  <ExampleShowcase
    sx={{
      display: 'flex',
      flexFlow: 'row wrap',
    }}>
    <Chip style={{marginRight: 5}}>Outlined Chip</Chip>
    <Chip style={{marginRight: 5}} icon={{name: 'info'}}>
      Outlined Chip With Icon
    </Chip>
    <Chip
      style={{marginRight: 5}}
      avatar={<Avatar.Icon size={40} icon="account-circle" />}>
      Outlined Chip With Avatar
    </Chip>
    <Chip style={{marginRight: 5}} closeIcon="delete" onClose={() => {}}>
      Outlined Chip With Close Icon
    </Chip>
    <Chip selected>Selected Outlined Chip</Chip>
    <Chip style={{marginTop: 10, marginRight: 5}} selected showSelectedOverlay>
      Selected Outlined Chip With Overlay
    </Chip>
    <Chip style={{marginTop: 10, marginRight: 5}} selected showSelectedCheck>
      Selected Outlined Chip With Check
    </Chip>
    <Chip
      //   rippleColor={BLUIColors.primary[50]}
      onPress={() => console.log('ripple effect')}
      style={{marginTop: 10, marginRight: 5}}>
      Outlined Chip With Ripple Color
    </Chip>
    <Chip disabled style={{marginTop: 10, marginRight: 5}}>
      Disabled Outlined Chip
    </Chip>
    <Chip
      onPress={() => console.log('outlined chip pressed')}
      style={{marginTop: 10, marginRight: 5}}>
      Outlined Chip On Press
    </Chip>
    <Chip
      onPress={() => console.log('outlined chip pressed')}
      onLongPress={() => console.log('outlined chip long pressed')}
      style={{marginTop: 10, marginRight: 5}}>
      Outlined Chip On Long Press
    </Chip>
    <Chip
      onPressIn={() => console.log('outlined chip on press in')}
      style={{marginTop: 10, marginRight: 5}}>
      Outlined Chip On Press In
    </Chip>
    <Chip
      onPressOut={() => console.log('outlined chip on press out')}
      style={{marginTop: 10, marginRight: 5}}>
      Outlined Chip On Press Out
    </Chip>
    <Chip
      onClose={(): void => {
        console.log('outlined chip on close');
      }}
      style={{marginTop: 10, marginRight: 5}}>
      Outlined Chip On Close
    </Chip>
    <Chip
      delayLongPress={3000}
      onPress={() => console.log('outlined chip pressed')}
      onLongPress={() =>
        console.log('outlined chip long pressed for 3 seconds')
      }
      style={{marginTop: 10, marginRight: 5}}>
      Outlined Chip Delay Long Press
    </Chip>
    <Chip
      compact
      style={{
        marginTop: 10,
        marginRight: 5,
      }}>
      Compact Outlined Chip
    </Chip>
    <Chip
      //   textStyle={{color: BLUIColors.neutralVariant[50]}}
      style={{
        marginTop: 10,
        marginRight: 5,
      }}>
      Outlined Chip With Text Style
    </Chip>
    <Chip
      style={{
        marginTop: 10,
        marginRight: 5,
        // backgroundColor: BLUIColors.neutralVariant[50],
      }}>
      Outlined Chip With Style
    </Chip>
    <Chip
      ellipsizeMode="middle"
      style={{
        marginTop: 10,
        marginRight: 5,
      }}>
      Outlined Chip With Ellipsize Mode Outlined Chip With Ellipsize Mode
    </Chip>
    <Chip
      icon={{name: 'info'}}
      //   iconColor={BLUIColors.error[50]}
      style={{
        marginTop: 10,
        marginRight: 5,
      }}>
      Outlined Chip With Icon Color
    </Chip>
    <Chip
      //   chipColor={BLUIColors.primary[50]}
      style={{
        marginTop: 10,
        marginRight: 5,
      }}>
      Outlined Chip With Chip Color
    </Chip>
    <Chip
      //   borderColor={BLUIColors.primary[50]}
      style={{
        marginTop: 10,
        marginRight: 5,
      }}>
      Outlined Chip With Border Color
    </Chip>
  </ExampleShowcase>
);
