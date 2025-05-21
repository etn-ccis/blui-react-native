import React, { useState } from 'react';
import { ExampleShowcase } from '../../../shared';
import { Drawer, DrawerBody, DrawerNavItem } from '@brightlayer-ui/react-native-components';
import { DRAWER_WIDTH } from '../../../utils';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

export const SelectingANavItemExample = (): JSX.Element => {
    const [selected, setSelected] = useState('notification');
    const theme = useExtendedTheme();
    return (
        <ExampleShowcase>
            <Drawer style={{ width: DRAWER_WIDTH, margin: 'auto' }} activeItem={selected}>
                <DrawerBody>
                    <DrawerNavItem
                        itemFontColor={theme.colors.onSurface}
                        itemID={'account'}
                        title={'Account'}
                        icon={{
                            family: 'material-community',
                            name: 'account',
                            direction: 'auto',
                        }}
                        onPress={() => setSelected('account')}
                        activeItemBackgroundShape="round"
                    />
                    <DrawerNavItem
                        itemFontColor={theme.colors.onSurface}
                        itemID={'notification'}
                        title={'Notification'}
                        icon={{
                            family: 'material-community',
                            name: 'bell',
                            direction: 'auto',
                        }}
                        onPress={() => setSelected('notification')}
                        activeItemBackgroundShape="round"
                    />
                    <DrawerNavItem
                        itemFontColor={theme.colors.onSurface}
                        itemID={'localization'}
                        title={'Localization'}
                        icon={{
                            family: 'material-community',
                            name: 'map',
                            direction: 'auto',
                        }}
                        onPress={() => setSelected('localization')}
                        activeItemBackgroundShape="round"
                    />
                </DrawerBody>
            </Drawer>
        </ExampleShowcase>
    );
};
