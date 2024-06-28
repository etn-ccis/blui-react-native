import React from 'react';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { DRAWER_WIDTH } from '../../../utils';

export const DrawerNavGroupExample = (): JSX.Element => (
    <ExampleShowcase>
        <Drawer style={{ width: DRAWER_WIDTH, margin: 'auto' }}>
            <DrawerBody>
                <DrawerNavGroup title="Locations" hidePadding>
                    <DrawerNavItem title="Regional" itemID="1" />
                    <DrawerNavItem title="National" itemID="2" />
                </DrawerNavGroup>
                <DrawerNavGroup title="Status" hidePadding>
                    <DrawerNavItem title="Network" itemID="3" />
                    <DrawerNavItem title="Node" itemID="4" />
                </DrawerNavGroup>
            </DrawerBody>
        </Drawer>
    </ExampleShowcase>
);
