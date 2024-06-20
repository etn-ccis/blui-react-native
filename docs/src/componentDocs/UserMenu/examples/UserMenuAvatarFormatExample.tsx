import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {UserMenu} from '@brightlayer-ui/react-native-components';
import Settings from '@mui/icons-material/Settings';
import {Avatar} from 'react-native-paper';
import trexImage from '../images/trex.png';
import {View} from 'react-native';
import {Box} from '@mui/material';

export const UserMenuAvatarFormatExample = (): JSX.Element => (
  <ExampleShowcase sx={{display: 'flex', justifyContent: 'center'}}>
    <Box sx={{display: 'flex', justifyContent: 'space-between', width: 150}}>
      <UserMenu
        avatar={
          <View style={{marginRight: 20}}>
            <Avatar.Image size={30} source={{uri: trexImage}} />
          </View>
        }
        menuItems={[
          {
            title: 'Settings',
            icon: <Settings />,
          },
        ]}
      />
      <UserMenu
        avatar={<Avatar.Icon size={30} icon="home" />}
        menuItems={[
          {
            title: 'Settings',
            icon: <Settings />,
          },
        ]}
      />
    </Box>
  </ExampleShowcase>
);
