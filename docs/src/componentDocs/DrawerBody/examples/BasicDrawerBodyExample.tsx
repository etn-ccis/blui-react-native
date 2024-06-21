import React from 'react';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';

export const BasicDrawerBodyExample = (): JSX.Element => (
    <ExampleShowcase>
        <Drawer style={{ width: 250, margin: 'auto' }}>
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
                        InfoListItemProps={{
                            iconAlign: 'center',
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
                        InfoListItemProps={{
                            iconAlign: 'center',
                        }}
                    />
                    <DrawerNavItem
                        itemID={'item3'}
                        title={'Localization'}
                        icon={{
                            family: 'material-community',
                            name: 'circle',
                            direction: 'auto',
                        }}
                        activeItemBackgroundShape={'round'}
                        InfoListItemProps={{
                            iconAlign: 'center',
                        }}
                    />
                </DrawerNavGroup>
            </DrawerBody>
        </Drawer>
    </ExampleShowcase>
);
