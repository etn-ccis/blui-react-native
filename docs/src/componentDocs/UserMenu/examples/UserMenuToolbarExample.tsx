import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {Spacer, UserMenu} from '@brightlayer-ui/react-native-components';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ExitToApp from '@mui/icons-material/ExitToApp';
import {Text, Avatar} from 'react-native-paper';

export const UserMenuToolbarExample = (): JSX.Element => (
  <ExampleShowcase sx={{display: 'flex', justifyContent: 'center'}}>
    <AppBar position="relative" color="primary" sx={{width: 300}}>
      <Toolbar>
        <Text variant="headlineMedium">Toolbar Title</Text>
        <Spacer />
        <UserMenu
          avatar={<Avatar.Text size={30} label="AV" />}
          menuItems={[
            {
              title: 'Log Out',
              icon: <ExitToApp />,
            },
          ]}
        />
      </Toolbar>
    </AppBar>
  </ExampleShowcase>
);
