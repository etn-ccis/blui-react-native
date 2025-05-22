import React from 'react';
import { ExampleShowcase } from '../../../shared';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerNavGroup,
    DrawerNavItem,
    DrawerSubheader,
} from '@brightlayer-ui/react-native-components';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import { DRAWER_WIDTH } from '../../../utils';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

export const DrawerExample = (): JSX.Element => {
    const theme = useExtendedTheme();
    return (
        <ExampleShowcase>
            <Drawer style={{ width: DRAWER_WIDTH, margin: 'auto' }}>
                <DrawerHeader
                    title={'Drawer Title'}
                    subtitle={'Drawer Subtitle'}
                    icon={{ name: 'menu', direction: 'auto' }}
                />
                <DrawerSubheader>
                    <View style={{ padding: 16 }}>
                        <Text>Subheader content here</Text>
                    </View>
                </DrawerSubheader>
                <DrawerBody>
                    <DrawerNavGroup title={'Navigation Group'}>
                        <DrawerNavItem
                            itemFontColor={theme.colors.onSurface}
                            itemID={'item31'}
                            title={'Item 1'}
                        ></DrawerNavItem>
                        <DrawerNavItem
                            itemFontColor={theme.colors.onSurface}
                            itemID={'item31'}
                            title={'Item 2'}
                        ></DrawerNavItem>
                        <DrawerNavItem
                            itemFontColor={theme.colors.onSurface}
                            itemID={'item31'}
                            title={'Item 3'}
                        ></DrawerNavItem>
                    </DrawerNavGroup>
                </DrawerBody>
                <DrawerFooter>
                    <View style={{ padding: 16 }}>
                        <Text>Footer content here</Text>
                    </View>
                </DrawerFooter>
            </Drawer>
        </ExampleShowcase>
    );
};
