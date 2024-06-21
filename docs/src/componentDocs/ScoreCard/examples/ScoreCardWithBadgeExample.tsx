import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { ScoreCard, Hero, HeroBanner } from '@brightlayer-ui/react-native-components';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

export const ScoreCardWithBadgeExample = (): JSX.Element => {
    const theme = useExtendedTheme();
    return (
        <ExampleShowcase>
            <ScoreCard
                style={{ width: 350, margin: 'auto' }}
                headerTitle="Station 3"
                headerSubtitle="High Humidity Alarm"
                headerInfo="4 Devices"
                badge={
                    <HeroBanner
                        style={{
                            flex: 0,
                            flexBasis: 'auto',
                            minWidth: 140,
                            justifyContent: 'space-between',
                        }}
                    >
                        <Hero
                            icon={{ family: 'brightlayer-ui', name: 'temp' }}
                            label="Temperature"
                            ChannelValueProps={{ value: 98, units: '°F' }}
                            style={{ overflow: 'visible' }}
                            iconBackgroundColor={theme.colors.surface}
                        />
                        <Hero
                            icon={{ family: 'brightlayer-ui', name: 'moisture' }}
                            label="Humidity"
                            ChannelValueProps={{ value: 54, units: '%' }}
                            iconBackgroundColor={theme.colors.surface}
                        />
                    </HeroBanner>
                }
            >
                <View>
                    <Text>Body Content</Text>
                </View>
            </ScoreCard>
        </ExampleShowcase>
    );
};
