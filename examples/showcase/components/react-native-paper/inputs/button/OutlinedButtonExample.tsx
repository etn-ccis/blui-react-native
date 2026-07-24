import React, { JSX } from 'react';
import { View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

const cardStyle = { padding: 20, margin: 10 };

export const OutlinedButtonExample: React.FC = (): JSX.Element => {
  const theme = useExtendedTheme();

  return (
    <Card style={cardStyle}>
      <Text>Outlined Button</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button
          mode="outlined"
          onPress={(): void => console.log('Pressed Outlined Button')}
        >
          Label
        </Button>
        <Button
          icon="plus"
          mode="outlined"
          onPress={(): void => console.log('Pressed Outlined Button')}
        >
          Label
        </Button>
        <Button
          icon="plus"
          mode="outlined"
          contentStyle={{ flexDirection: 'row-reverse' }}
          onPress={(): void => console.log('Pressed Outlined Button')}
        >
          Label
        </Button>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button
          mode="outlined"
          textColor={theme.colors.error}
          onPress={(): void => console.log('Pressed Outlined Button')}
          style={{ marginTop: 24 }}
        >
          Label
        </Button>
        <Button
          icon="plus"
          mode="outlined"
          textColor={theme.colors.error}
          onPress={(): void => console.log('Pressed Outlined Button')}
          style={{ marginTop: 24 }}
        >
          Label
        </Button>
        <Button
          icon="plus"
          mode="outlined"
          textColor={theme.colors.error}
          contentStyle={{ flexDirection: 'row-reverse' }}
          onPress={(): void => console.log('Pressed Outlined Button')}
          style={{ marginTop: 24 }}
        >
          Label
        </Button>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button mode="outlined" disabled style={{ marginTop: 24 }}>
          Label
        </Button>
        <Button icon="plus" mode="outlined" disabled style={{ marginTop: 24 }}>
          Label
        </Button>
        <Button
          icon="plus"
          mode="outlined"
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
