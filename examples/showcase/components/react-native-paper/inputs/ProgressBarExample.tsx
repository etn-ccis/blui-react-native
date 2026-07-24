import React, { JSX } from 'react';
import { View } from 'react-native';
import { Card, ProgressBar, Text } from 'react-native-paper';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

const cardStyle = { padding: 0, margin: 10, marginBottom: 5 };

export const ProgressBarExample: React.FC = (): JSX.Element => {
  const theme = useExtendedTheme();

  return (
    <Card style={cardStyle}>
      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 24,
          marginVertical: 24,
        }}
      >
        <Text>Progress Bar</Text>
        <View style={{ marginTop: 24 }}>
          <ProgressBar
            progress={0}
            // @ts-ignore
            style={{ backgroundColor: theme.colors.surfaceContainerHighest }}
          />
          <ProgressBar
            progress={0.5}
            // @ts-ignore
            style={{
              marginTop: 24,
              backgroundColor: theme.colors.surfaceContainerHighest,
            }}
          />
          <ProgressBar
            progress={1.0}
            // @ts-ignore
            style={{
              marginTop: 24,
              backgroundColor: theme.colors.surfaceContainerHighest,
            }}
          />
          <ProgressBar
            indeterminate
            // @ts-ignore
            style={{
              marginTop: 24,
              backgroundColor: theme.colors.surfaceContainerHighest,
            }}
          />
        </View>
      </View>
    </Card>
  );
};
