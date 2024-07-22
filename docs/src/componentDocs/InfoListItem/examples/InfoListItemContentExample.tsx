import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { InfoListItem, ChannelValue } from '@brightlayer-ui/react-native-components';
import { DEMO_WIDTH } from '../../../utils';

export const InfoListItemContentExample = (): JSX.Element => (
    <ExampleShowcase>
        <InfoListItem
            title="Battery Fully Charged"
            subtitle="Your device is ready to use"
            icon={{ name: 'battery-charging-full' }}
            iconColor="#2ca618"
            leftComponent={
                <View>
                    <Text style={{ fontWeight: 'bold' }}>8:32 AM</Text>
                    <Text>11/21/21</Text>
                </View>
            }
            rightComponent={<ChannelValue value={'15'} units={'A'} />}
            style={{ width: DEMO_WIDTH, margin: 'auto' }}
        />
    </ExampleShowcase>
);
