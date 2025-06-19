import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerNavGroup,
    DrawerNavItem,
    DrawerSubheader,
} from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { Text } from 'react-native-paper';
import { DRAWER_WIDTH } from '../../../utils';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

export const DrawerSubheaderExample = (): JSX.Element => {
    const theme = useExtendedTheme();
    return (
        <ExampleShowcase>
            <Drawer style={{ width: DRAWER_WIDTH, margin: 'auto' }}>
                <DrawerHeader title="Title" />
                <DrawerSubheader>
                    <Text style={{ padding: 16 }}>Custom Content Goes here</Text>
                </DrawerSubheader>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemFontColor={theme.colors.onSurface} title="Dashboard" itemID="1" />
                        <DrawerNavItem itemFontColor={theme.colors.onSurface} title="Locations" itemID="2" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        </ExampleShowcase>
    );
};
