import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {UserMenu} from '@brightlayer-ui/react-native-components';
import Settings from '@mui/icons-material/Settings';
import {Avatar} from 'react-native-paper';
import {Box} from '@mui/material';
import trexImage from '../images/trex.png';

export const UserMenuAvatarFormatExample = (): JSX.Element => (
  <ExampleShowcase sx={{display: 'flex', justifyContent: 'center'}}>
    <UserMenu
      avatar={
        <Box sx={{padding: '10px'}}>
          <Avatar.Image size={24} source={{uri: trexImage}} />
        </Box>
      }
      menuItems={[
        {
          title: 'Settings',
          icon: <Settings />,
        },
      ]}
    />
    <UserMenu
      avatar={<Avatar.Icon size={24} icon= "home" />}
      menuItems={[
        {
          title: 'Settings',
          icon: <Settings />,
        },
      ]}
    />
  </ExampleShowcase>
);
