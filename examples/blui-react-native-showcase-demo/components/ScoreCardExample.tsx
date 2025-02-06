import React from 'react';
import { Hero, InfoListItem, ScoreCard } from '@brightlayer-ui/react-native-components';
import * as BLUIColors from '@brightlayer-ui/colors';
import { useTheme } from 'react-native-paper';

export const ScoreCardExample: React.FC = () => {
    const theme = useTheme();
    return (
        <ScoreCard
            headerTitle={'Substation 42'}
            headerSubtitle={'Normal'}
            headerInfo={'42 Devices'}
            actionIconColor={BLUIColors.error[50]}
            actionItems={[{ icon: { name: 'star-outline' } }, { icon: { name: 'more-vert' }, onPress: () => {} }]}
            badgeOffset={-55}
            badge={
                // <HeroBanner style={{ flex: 0, minWidth: 80, justifyContent: 'flex-end' }}>
                <Hero
                    iconBackgroundColor={theme.colors.surface}
                    label={'Score'}
                    iconSize={48}
                    iconColor={BLUIColors.purple[50]}
                    ChannelValueProps={{
                        value: 98,
                        units: '/100',
                    }}
                    icon={{ family: 'brightlayer-ui', name: 'grade_a' }}
                />
                // </HeroBanner>
            }
            actionRow={<InfoListItem chevron title={'View More'} hidePadding />}
        />
    );
};
