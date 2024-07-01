import React from 'react';
import { Drawer, DrawerBody, DrawerNavItem } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { DRAWER_WIDTH } from '../../../utils';

export const DrawerNavItemExample = (): JSX.Element => (
    <ExampleShowcase>
        <Drawer style={{ width: DRAWER_WIDTH, margin: 'auto' }}>
            <DrawerBody>
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
                    icon={{ family: 'material-community', name: 'bell', direction: 'auto' }}
                    activeItemBackgroundShape={'round'}
                />
                <DrawerNavItem
                    itemID={'localization'}
                    title={'Localization'}
                    icon={{
                        family: 'material-community',
                        name: 'map',
                        direction: 'auto',
                    }}
                    activeItemBackgroundShape={'round'}
                />
            </DrawerBody>
        </Drawer>
    </ExampleShowcase>
);
