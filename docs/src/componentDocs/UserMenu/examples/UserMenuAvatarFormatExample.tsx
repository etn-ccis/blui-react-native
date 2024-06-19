import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {UserMenu} from '@brightlayer-ui/react-native-components';
import Avatar from '@mui/material/Avatar';
import Settings from '@mui/icons-material/Settings';
import Pets from '@mui/icons-material/Pets';
import {Avatar as PaperAvatar} from 'react-native-paper';
import {Box} from '@mui/material';

export const UserMenuAvatarFormatExample = (): JSX.Element => (
  <ExampleShowcase sx={{display: 'flex', justifyContent: 'center'}}>
    <UserMenu
      avatar={
        <Box sx={{padding: '10px'}}>
          <PaperAvatar.Image size={24} source={require('../images/trex.png')} />
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
      avatar={
        <Avatar sx={{padding: '10px'}}>
          <Pets />
        </Avatar>
      }
      menuItems={[
        {
          title: 'Settings',
          icon: <Settings />,
        },
      ]}
    />
  </ExampleShowcase>
);
