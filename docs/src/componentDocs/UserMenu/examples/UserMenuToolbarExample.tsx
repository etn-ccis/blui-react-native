import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { Spacer, UserMenu } from '@brightlayer-ui/react-native-components';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ExitToApp from '@mui/icons-material/ExitToApp';
import { Text, Avatar } from 'react-native-paper';
import { DRAWER_WIDTH } from '../../../utils';

export const UserMenuToolbarExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <AppBar position="relative" color="primary" sx={{ width: DRAWER_WIDTH }}>
            <Toolbar>
                <Text style={{ color: 'white' }} variant="headlineMedium">
                    Toolbar Title
                </Text>
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
