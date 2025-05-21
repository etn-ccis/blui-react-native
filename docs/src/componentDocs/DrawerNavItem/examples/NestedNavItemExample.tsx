import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-native-components';
import { DRAWER_WIDTH } from '../../../utils';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

export const NestedNavItemExample = (): JSX.Element => {
    const theme = useExtendedTheme();
    return (
        <ExampleShowcase>
            <Drawer style={{ width: DRAWER_WIDTH, margin: 'auto' }}>
                <DrawerBody>
                    <DrawerNavGroup>
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
                            icon={{
                                family: 'material-community',
                                name: 'bell',
                                direction: 'auto',
                            }}
                        >
                            <DrawerNavItem
                                hidePadding
                                itemFontColor={theme.colors.onSurface}
                                itemID={'web'}
                                title={'Web'}
                            />
                            <DrawerNavItem
                                hidePadding
                                itemFontColor={theme.colors.onSurface}
                                itemID={'mobile'}
                                title={'Mobile'}
                            />
                        </DrawerNavItem>
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
                        />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        </ExampleShowcase>
    );
};
