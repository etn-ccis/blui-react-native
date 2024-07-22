import React from 'react';
import { IconSwitch } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { View } from 'react-native';

export const IconSwitchExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <View style={{ flexDirection: 'column' }}>
            <View style={{ padding: 10 }}>
                <IconSwitch value={false} />
            </View>
            <View style={{ padding: 10 }}>
                <IconSwitch value={true} />
            </View>
            <View style={{ padding: 10 }}>
                <IconSwitch disabled />
            </View>
            <View style={{ padding: 10 }}>
                <IconSwitch value disabled />
            </View>
        </View>
    </ExampleShowcase>
);
