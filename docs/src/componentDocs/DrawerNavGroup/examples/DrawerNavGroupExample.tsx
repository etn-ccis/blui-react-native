import React from 'react';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { DRAWER_WIDTH } from '../../../utils';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

export const DrawerNavGroupExample = (): JSX.Element => {
    const theme = useExtendedTheme();
    return (
        <ExampleShowcase>
            <Drawer style={{ width: DRAWER_WIDTH, margin: 'auto' }}>
                <DrawerBody>
                    <DrawerNavGroup title="Locations" hidePadding>
                        <DrawerNavItem itemFontColor={theme.colors.onSurface} title="Regional" itemID="1" />
                        <DrawerNavItem itemFontColor={theme.colors.onSurface} title="National" itemID="2" />
                    </DrawerNavGroup>
                    <DrawerNavGroup title="Status" hidePadding>
                        <DrawerNavItem itemFontColor={theme.colors.onSurface} title="Network" itemID="3" />
                        <DrawerNavItem itemFontColor={theme.colors.onSurface} title="Node" itemID="4" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        </ExampleShowcase>
    );
};
