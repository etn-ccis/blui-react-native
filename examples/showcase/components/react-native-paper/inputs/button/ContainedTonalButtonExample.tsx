import React, { JSX } from 'react';
import { View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

const cardStyle = { padding: 20, margin: 10 };

export const ContainedTonalButtonExample: React.FC = (): JSX.Element => {
  const theme = useExtendedTheme();

  return (
    <Card style={cardStyle}>
      <Text>Contained-Tonal Button</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button
          mode="contained-tonal"
          onPress={(): void => console.log('Pressed Contained-tonal Button')}
        >
          Label
        </Button>
        <Button
          icon="plus"
          mode="contained-tonal"
          onPress={(): void => console.log('Pressed Contained-tonal Button')}
        >
          Label
        </Button>
        <Button
          icon="plus"
          mode="contained-tonal"
          contentStyle={{ flexDirection: 'row-reverse' }}
          onPress={(): void => console.log('Pressed Contained-tonal Button')}
        >
          Label
        </Button>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button
          mode="contained-tonal"
          buttonColor={theme.colors.errorContainer}
          textColor={theme.colors.onErrorContainer}
          onPress={(): void => console.log('Pressed Contained-tonal Button')}
          style={{ marginTop: 24 }}
        >
          Label
        </Button>
        <Button
          icon="plus"
          mode="contained-tonal"
          buttonColor={theme.colors.errorContainer}
          textColor={theme.colors.onErrorContainer}
          onPress={(): void => console.log('Pressed Contained-tonal Button')}
          style={{ marginTop: 24 }}
        >
          Label
        </Button>
        <Button
          icon="plus"
          mode="contained-tonal"
          buttonColor={theme.colors.errorContainer}
          textColor={theme.colors.onErrorContainer}
          contentStyle={{ flexDirection: 'row-reverse' }}
          onPress={(): void => console.log('Pressed Contained-tonal Button')}
          style={{ marginTop: 24 }}
        >
          Label
        </Button>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button mode="contained-tonal" disabled style={{ marginTop: 24 }}>
          Label
        </Button>
        <Button
          icon="plus"
          mode="contained-tonal"
          disabled
          style={{ marginTop: 24 }}
        >
          Label
        </Button>
        <Button
          icon="plus"
          mode="contained-tonal"
          disabled
          contentStyle={{ flexDirection: 'row-reverse' }}
          style={{ marginTop: 24 }}
        >
          Label
        </Button>
      </View>
    </Card>
  );
};
