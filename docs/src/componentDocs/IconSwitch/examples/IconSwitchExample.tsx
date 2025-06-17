import React, { useState } from 'react';
import { IconSwitch } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { View } from 'react-native';

export const IconSwitchExample = (): JSX.Element => {
    const [switch1, setSwitch1] = useState(false);
    const [switch2, setSwitch2] = useState(true);

    return (
        <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'column' }}>
                <View style={{ padding: 10 }}>
                    <IconSwitch value={switch1} onValueChange={setSwitch1} />
                </View>
                <View style={{ padding: 10 }}>
                    <IconSwitch value={switch2} onValueChange={setSwitch2} />
                </View>
                <View style={{ padding: 10 }}>
                    <IconSwitch value={false} disabled onValueChange={() => {}} />
                </View>
                <View style={{ padding: 10 }}>
                    <IconSwitch value={true} disabled onValueChange={() => {}} />
                </View>
            </View>
        </ExampleShowcase>
    );
};
