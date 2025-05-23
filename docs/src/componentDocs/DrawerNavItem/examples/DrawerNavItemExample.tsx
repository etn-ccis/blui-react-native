import React from 'react';
import { Drawer, DrawerBody, DrawerNavItem } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { DRAWER_WIDTH } from '../../../utils';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

export const DrawerNavItemExample = (): JSX.Element => {
    const theme = useExtendedTheme();
    return (
        <ExampleShowcase>
            <Drawer style={{ width: DRAWER_WIDTH, margin: 'auto' }}>
                <DrawerBody>
                    <DrawerNavItem
                        hidePadding
                        itemFontColor={theme.colors.onSurface}
                        itemID={'account'}
                        title={'Account'}
                        icon={{
                            family: 'material-community',
                            name: 'account',
                            direction: 'auto',
                        }}
                    />
                    <DrawerNavItem
                        hidePadding
                        itemFontColor={theme.colors.onSurface}
                        itemID={'notification'}
                        title={'Notification'}
                        icon={{ family: 'material-community', name: 'bell', direction: 'auto' }}
                        activeItemBackgroundShape={'round'}
                    />
                    <DrawerNavItem
                        hidePadding
                        itemFontColor={theme.colors.onSurface}
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
};
