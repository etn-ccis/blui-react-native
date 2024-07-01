import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { ScoreCard } from '@brightlayer-ui/react-native-components';
import { DRAWER_WIDTH } from '../../../utils';

export const ScoreCardExample = (): JSX.Element => (
    <ExampleShowcase>
        <ScoreCard
            style={{ width: DRAWER_WIDTH, margin: 'auto' }}
            headerTitle="Station 3"
            headerSubtitle="High Humidity Alarm"
            headerInfo="4 Devices"
        >
            <View>
                <Text>Body Content</Text>
            </View>
        </ScoreCard>
    </ExampleShowcase>
);
