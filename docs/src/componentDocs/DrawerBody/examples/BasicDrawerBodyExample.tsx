import React from 'react';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { DRAWER_WIDTH } from '../../../utils';

export const BasicDrawerBodyExample = (): JSX.Element => (
    <ExampleShowcase>
        <Drawer style={{ width: DRAWER_WIDTH, margin: 'auto' }}>
            <DrawerBody hidePadding>
                <DrawerNavGroup title={'Navigation Group'}>
                    <DrawerNavItem
                        itemID={'item1'}
                        title={'Account'}
                        icon={{
                            family: 'material-community',
                            name: 'account',
                            direction: 'auto',
                        }}
                    />
                    <DrawerNavItem
                        itemID={'item2'}
                        title={'Notification'}
                        icon={{
                            family: 'material-community',
                            name: 'bell',
                            direction: 'auto',
                        }}
                        activeItemBackgroundShape={'round'}
                    />
                    <DrawerNavItem
                        itemID={'item3'}
                        title={'Localization'}
                        icon={{
                            family: 'material-community',
                            name: 'map',
                            direction: 'auto',
                        }}
                        activeItemBackgroundShape={'round'}
                    />
                </DrawerNavGroup>
            </DrawerBody>
        </Drawer>
    </ExampleShowcase>
);
