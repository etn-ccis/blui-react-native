import React from 'react';
import { Drawer, DrawerBody, DrawerFooter, DrawerNavItem } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { Text } from 'react-native-paper';
import { Image, View } from 'react-native';
import EatonLogoLight from '../images/EatonLogoLight.png';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

export const DrawerFooterExample = (): JSX.Element => {
    const theme = useExtendedTheme();
    return (
        <ExampleShowcase>
            <Drawer style={{ width: 320, margin: 'auto' }}>
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
                        icon={{
                            family: 'material-community',
                            name: 'bell',
                            direction: 'auto',
                        }}
                        activeItemBackgroundShape={'round'}
                    />
                </DrawerBody>
                <DrawerFooter>
                    <View style={{ padding: 16 }}>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 12,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: theme.colors.onSurface,
                                }}
                            >
                                v2.4.2
                            </Text>
                            <Text style={{ fontSize: 12, color: theme.colors.onSurface }}>10:33:05 05/12/2024</Text>
                        </View>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Image
                                source={{ uri: EatonLogoLight }}
                                style={{ height: 32, width: '36%' }}
                                resizeMode="contain"
                            />
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: theme.colors.onSurface,
                                    width: '39%',
                                }}
                            >
                                {'Copyright © Eaton All Rights Reserved'}
                            </Text>
                        </View>
                    </View>
                </DrawerFooter>
            </Drawer>
        </ExampleShowcase>
    );
};
