import React, { JSX } from 'react';
import { View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

const cardStyle = { padding: 20, margin: 10 };

export const TextButtonExample: React.FC = (): JSX.Element => {
  const theme = useExtendedTheme();

  return (
    <Card style={cardStyle}>
      <Text>Text Button</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button
          mode="text"
          onPress={(): void => console.log('Pressed Text Button')}
        >
          Label
        </Button>
        <Button
          icon="plus"
          mode="text"
          onPress={(): void => console.log('Pressed Text Button')}
        >
          Label
        </Button>
        <Button
          icon="plus"
          mode="text"
          contentStyle={{ flexDirection: 'row-reverse' }}
          onPress={(): void => console.log('Pressed Text Button')}
        >
          Label
        </Button>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button
          mode="text"
          textColor={theme.colors.error}
          onPress={(): void => console.log('Pressed Text Button')}
          style={{ marginTop: 24 }}
        >
          Label
        </Button>
        <Button
          icon="plus"
          mode="text"
          textColor={theme.colors.error}
          onPress={(): void => console.log('Pressed Text Button')}
          style={{ marginTop: 24 }}
        >
          Label
        </Button>
        <Button
          icon="plus"
          mode="text"
          textColor={theme.colors.error}
          contentStyle={{ flexDirection: 'row-reverse' }}
          onPress={(): void => console.log('Pressed Text Button')}
          style={{ marginTop: 24 }}
        >
          Label
        </Button>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button mode="text" disabled style={{ marginTop: 24 }}>
          Label
        </Button>
        <Button icon="plus" mode="text" disabled style={{ marginTop: 24 }}>
          Label
        </Button>
        <Button
          icon="plus"
          mode="text"
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
