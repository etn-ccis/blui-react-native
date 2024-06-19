import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {Spacer, UserMenu} from '@brightlayer-ui/react-native-components';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import ExitToApp from '@mui/icons-material/ExitToApp';

export const UserMenuToolbarExample = (): JSX.Element => (
  <ExampleShowcase sx={{display: 'flex', justifyContent: 'center'}}>
    <AppBar position="relative" color="primary" sx={{ width: 300 }}>
      <Toolbar>
        <Typography variant="h6">
          Toolbar Title
        </Typography>
        <Spacer />
        <UserMenu
          avatar={<Avatar>AV</Avatar>}
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
