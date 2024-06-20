import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {UserMenu} from '@brightlayer-ui/react-native-components';
import {Avatar} from 'react-native-paper';
import Settings from '@mui/icons-material/Settings';
import {Box} from '@mui/material';

export const UserMenuHeaderExample = (): JSX.Element => (
  <ExampleShowcase sx={{display: 'flex', justifyContent: 'center'}}>
    <Box>
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
    </Box>
  </ExampleShowcase>
);
