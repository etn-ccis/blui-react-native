import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerNavGroup,
    DrawerNavItem,
    DrawerSubheader,
} from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native';

export const InteractiveDrawerSubheaderExample = (): JSX.Element => (
    <ExampleShowcase>
        <Drawer style={{ width: 250, margin: 'auto' }}>
            <DrawerHeader
                title={'Drawer Title'}
                subtitle={'Drawer Subtitle'}
                icon={{ name: 'menu', direction: 'auto' }}
            />
            <DrawerSubheader>
                <View style={{ padding: 10 }}>
                    <TextInput label={'Add Navigation Group'} mode="outlined" />
                </View>
            </DrawerSubheader>
            <DrawerBody>
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
                    />
                    <DrawerNavItem
                        itemID={'item3'}
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
