import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {ScoreCard, Hero} from '@brightlayer-ui/react-native-components';
import {useExtendedTheme} from '@brightlayer-ui/react-native-themes';

export const ScoreCardAdjustBadgeExample = (): JSX.Element => {
  const theme = useExtendedTheme();
  return (
    <ExampleShowcase>
      <ScoreCard
        style={{width: 350, margin: 'auto'}}
        headerTitle={'Substation 3'}
        headerSubtitle={'High Humidity Alarm'}
        headerInfo={'4 Devices'}
        badge={
          <Hero
            icon={{family: 'brightlayer-ui', name: 'grade_a'}}
            label={'Grade'}
            iconSize={72}
            iconBackgroundColor={theme.colors.surface}
            ChannelValueProps={{value: '98', units: '/100', unitSpace: 'hide'}}
          />
        }
        badgeOffset={-58}>
        <View>
          <Text>Body Content</Text>
        </View>
      </ScoreCard>
    </ExampleShowcase>
  );
};
