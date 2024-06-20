import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {UserMenu} from '@brightlayer-ui/react-native-components';
import {Avatar} from 'react-native-paper';
import Settings from '@mui/icons-material/Settings';

export const UserMenuHeaderExample = (): JSX.Element => (
  <ExampleShowcase sx={{display: 'flex', justifyContent: 'center'}}>
    <UserMenu
      avatar={<Avatar.Text size={30} label="MH" />}
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
