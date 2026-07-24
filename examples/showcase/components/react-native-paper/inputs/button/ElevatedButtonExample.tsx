import React, { JSX } from 'react';
import { View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

const cardStyle = { padding: 20, margin: 10 };

export const ElevatedButtonExample: React.FC = (): JSX.Element => {
  const theme = useExtendedTheme();

  return (
    <Card style={cardStyle}>
      <Text>Elevated Button</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}
      >
        <Button
          mode="elevated"
          onPress={(): void => console.log('Pressed Elevated Button')}
          buttonColor={theme.colors.surfaceContainerLow}
        >
          Label
        </Button>
        <Button
          icon="plus"
          mode="elevated"
          onPress={(): void => console.log('Pressed Elevated Button')}
          buttonColor={theme.colors.surfaceContainerLow}
        >
          Label
        </Button>
        <Button
          icon="plus"
          mode="elevated"
          contentStyle={{ flexDirection: 'row-reverse' }}
          onPress={(): void => console.log('Pressed Elevated Button')}
          buttonColor={theme.colors.surfaceContainerLow}
        >
          Label
        </Button>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button
          mode="elevated"
          textColor={theme.colors.error}
          onPress={(): void => console.log('Pressed Elevated Button')}
          buttonColor={theme.colors.surfaceContainerLow}
          style={{ marginTop: 24 }}
        >
          Label
        </Button>
        <Button
          icon="plus"
          mode="elevated"
          textColor={theme.colors.error}
          onPress={(): void => console.log('Pressed Elevated Button')}
          buttonColor={theme.colors.surfaceContainerLow}
          style={{ marginTop: 24 }}
        >
          Label
        </Button>
        <Button
          icon="plus"
          mode="elevated"
          textColor={theme.colors.error}
          contentStyle={{ flexDirection: 'row-reverse' }}
          onPress={(): void => console.log('Pressed Elevated Button')}
          buttonColor={theme.colors.surfaceContainerLow}
          style={{ marginTop: 24 }}
        >
          Label
        </Button>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button
          mode="elevated"
          disabled
          style={{ marginTop: 24 }}
          buttonColor={theme.colors.surfaceContainerLow}
        >
          Label
        </Button>
        <Button
          icon="plus"
          mode="elevated"
          disabled
          style={{ marginTop: 24 }}
          buttonColor={theme.colors.surfaceContainerLow}
        >
          Label
        </Button>
        <Button
          icon="plus"
          mode="elevated"
          disabled
          contentStyle={{ flexDirection: 'row-reverse' }}
          style={{ marginTop: 24 }}
          buttonColor={theme.colors.surfaceContainerLow}
        >
          Label
        </Button>
      </View>
    </Card>
  );
};
