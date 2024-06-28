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

export const DrawerSubheaderExample = (): JSX.Element => (
    <ExampleShowcase>
        <Drawer style={{ width: 250, margin: 'auto' }}>
            <DrawerHeader title="Title" />
            <DrawerSubheader>
                <Text style={{ padding: 16 }}>Custom Content Goes here</Text>
            </DrawerSubheader>
            <DrawerBody>
                <DrawerNavGroup>
                    <DrawerNavItem title="Dashboard" itemID="1" />
                    <DrawerNavItem title="Locations" itemID="2" />
                </DrawerNavGroup>
            </DrawerBody>
        </Drawer>
    </ExampleShowcase>
);
