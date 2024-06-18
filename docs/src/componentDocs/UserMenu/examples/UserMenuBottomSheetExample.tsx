import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {UserMenu} from '@brightlayer-ui/react-native-components';
import Avatar from '@mui/material/Avatar';
import ExitToApp from '@mui/icons-material/ExitToApp';
import Settings from '@mui/icons-material/Settings';
import Email from '@mui/icons-material/Email';

export const UserMenuBottomSheetExample = (): JSX.Element => (
  <ExampleShowcase sx={{display: 'flex', justifyContent: 'center'}}>
    <UserMenu
      avatar={<Avatar>BS</Avatar>}
      backgroundColor="#f5f5f5" //light grey
      fontColor="#333333" //dark grey
      iconColor="#ff0000" //red
      menuItems={[
        {
          title: 'Settings',
          icon: <Settings />,
        },
        {
          title: 'Contact Us',
          icon: <Email />,
        },
        {
          title: 'Log Out',
          icon: <ExitToApp />,
        },
      ]}
      styles={{
        bottomsheet: {
          width: 1000,
        },
      }}
    />
  </ExampleShowcase>
);
