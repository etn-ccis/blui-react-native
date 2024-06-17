import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { ScoreCard } from '@brightlayer-ui/react-native-components';

export const ScoreCardExample = (): JSX.Element => (
    <ExampleShowcase>
        <ScoreCard
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