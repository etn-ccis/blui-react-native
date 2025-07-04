import React from 'react';
import { Text } from 'react-native-paper';
import {
    Drawer,
    DrawerBody,
    DrawerNavGroup,
    DrawerNavItem,
    ListItemTag,
} from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { View } from 'react-native';
import { DRAWER_WIDTH } from '../../../utils';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

export const CustomNavGroupTitleContentExample = (): JSX.Element => {
    const theme = useExtendedTheme();
    return (
        <ExampleShowcase>
            <Drawer style={{ width: DRAWER_WIDTH, margin: 'auto' }}>
                <DrawerBody>
                    <DrawerNavGroup
                        hidePadding
                        titleContent={
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: 16,
                                }}
                            >
                                <Text>Nav Group Title Content</Text>
                                <ListItemTag label="v1.0.3" />
                            </View>
                        }
                    >
                        <DrawerNavItem itemFontColor={theme.colors.onSurface} title="Item 1" itemID="1" />
                        <DrawerNavItem itemFontColor={theme.colors.onSurface} title="Item 2" itemID="2" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        </ExampleShowcase>
    );
};
