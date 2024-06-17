import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { ScoreCard, Hero, InfoListItem } from '@brightlayer-ui/react-native-components';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

export const ScoreCardWithActionsExample = (): JSX.Element => {
    const theme = useExtendedTheme();
    return (
        <ExampleShowcase>
            <ScoreCard
                headerTitle="Header Actions"
                actionItems={[
                    { icon: { name: 'star-outline' } },
                    { icon: { name: 'settings' } },
                    { icon: { name: 'more-vert' } },
                ]}
                actionRow={
                    <View>
                        <InfoListItem dense chevron title="View Location" hidePadding />
                    </View>
                }
                badge={
                    <Hero
                        icon={{ family: 'brightlayer-ui', name: 'grade_a' }}
                        label="Grade"
                        iconSize={72}
                        iconBackgroundColor={theme.colors.surface}
                        ChannelValueProps={{ value: '98', units: '/100', unitSpace: 'hide' }}
                    />
                }
                badgeOffset={-54}
            >
                <View>
                    <Text>Body Content</Text>
                </View>
            </ScoreCard>
        </ExampleShowcase>
    )
}