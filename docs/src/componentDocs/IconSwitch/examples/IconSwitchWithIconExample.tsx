import React from 'react';
import { IconSwitch } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { View } from 'react-native';

export const IconSwitchWithIconExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <View style={{ flexDirection: 'column' }}>
            <View style={{ padding: 10 }}>
                <IconSwitch value={false} showIcon />
            </View>
            <View style={{ padding: 10 }}>
                <IconSwitch value={true} showIcon />
            </View>
            <View style={{ padding: 10 }}>
                <IconSwitch disabled showIcon />
            </View>
            <View style={{ padding: 10 }}>
                <IconSwitch value disabled showIcon />
            </View>
        </View>
    </ExampleShowcase>
);
