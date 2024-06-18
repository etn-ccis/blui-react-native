import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {UserMenu} from '@brightlayer-ui/react-native-components';
import Avatar from '@mui/material/Avatar';
import Settings from '@mui/icons-material/Settings';

export const UserMenuHeaderExample = (): JSX.Element => (
  <ExampleShowcase sx={{display: 'flex', justifyContent: 'center'}}>
    <UserMenu
      avatar={<Avatar>MH</Avatar>}
      menuItems={[
        {
          title: 'Settings',
          icon: <Settings />,
        },
      ]}
      menuTitle="Sample Title"
      menuSubtitle="Sample Subtitle"
    />
  </ExampleShowcase>
);
