import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-native-components';
import { DRAWER_WIDTH } from '../../../utils';

export const NestedNavItemExample = (): JSX.Element => (
    <ExampleShowcase>
        <Drawer style={{ width: DRAWER_WIDTH, margin: 'auto' }}>
            <DrawerBody>
                <DrawerNavGroup>
                    <DrawerNavItem
                        itemID={'account'}
                        title={'Account'}
                        icon={{
                            family: 'material-community',
                            name: 'account',
                            direction: 'auto',
                        }}
                    />
                    <DrawerNavItem
                        itemID={'notification'}
                        title={'Notification'}
                        icon={{
                            family: 'material-community',
                            name: 'bell',
                            direction: 'auto',
                        }}
                    >
                        <DrawerNavItem itemID={'web'} title={'Web'} />
                        <DrawerNavItem itemID={'mobile'} title={'Mobile'} />
                    </DrawerNavItem>
                    <DrawerNavItem
                        itemID={'localization'}
                        title={'Localization'}
                        icon={{
                            family: 'material-community',
                            name: 'map',
                            direction: 'auto',
                        }}
                    />
                </DrawerNavGroup>
            </DrawerBody>
        </Drawer>
    </ExampleShowcase>
);
