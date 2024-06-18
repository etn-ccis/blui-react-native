import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {UserMenu} from '@brightlayer-ui/react-native-components';
import Avatar from '@mui/material/Avatar';
import Settings from '@mui/icons-material/Settings';
import Pets from '@mui/icons-material/Pets';

export const UserMenuAvatarFormatExample = (): JSX.Element => (
  <ExampleShowcase sx={{display: 'flex', justifyContent: 'center'}}>
    <UserMenu
      avatar={<Avatar src="../images/trex.png" alt={'User Avatar'} />}
      menuItems={[
        {
          title: 'Settings',
          icon: <Settings />,
        },
      ]}
    />
    <UserMenu
      avatar={
        <Avatar>
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
