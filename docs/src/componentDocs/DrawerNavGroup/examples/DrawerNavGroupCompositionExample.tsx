import React from 'react';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import Divider from '@mui/material/Divider';
import { DRAWER_WIDTH } from '../../../utils';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

export const DrawerNavGroupCompositionExample = (): JSX.Element => {
    const theme = useExtendedTheme();
    return (
        <ExampleShowcase>
            <Drawer style={{ width: DRAWER_WIDTH, margin: 'auto' }}>
                <DrawerBody>
                    <DrawerNavGroup title="Group 1" hidePadding titleDivider={false}>
                        <DrawerNavItem itemFontColor={theme.colors.onSurface} title="Item 1" itemID="1" />
                        <DrawerNavItem itemFontColor={theme.colors.onSurface} title="Item 2" itemID="2" />
                    </DrawerNavGroup>
                    <Divider />
                    <DrawerNavGroup
                        itemFontColor={theme.colors.onSurface}
                        title="Group 2"
                        hidePadding
                        titleDivider={false}
                        items={[
                            {
                                title: 'Item 3',
                                itemID: '3',
                            },
                            {
                                title: 'Item 4',
                                itemID: '4',
                            },
                        ]}
                    />
                </DrawerBody>
            </Drawer>
        </ExampleShowcase>
    );
};
