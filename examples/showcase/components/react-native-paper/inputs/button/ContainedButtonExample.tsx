import React, { JSX } from 'react';
import { View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

const cardStyle = { padding: 20, margin: 10 };

export const ContainedButtonExample: React.FC = (): JSX.Element => {
  const theme = useExtendedTheme();

  return (
    <Card style={cardStyle}>
      <Text>Contained Button</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button
          mode="contained"
          onPress={(): void => console.log('Pressed Contained Button')}
        >
          Label
        </Button>
        <Button
          icon="plus"
          mode="contained"
          onPress={(): void => console.log('Pressed Contained Button')}
        >
          Label
        </Button>
        <Button
          icon="plus"
          mode="contained"
          contentStyle={{ flexDirection: 'row-reverse' }}
          onPress={(): void => console.log('Pressed Contained Button')}
        >
          Label
        </Button>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button
          mode="contained"
          buttonColor={theme.colors.error}
          textColor={theme.colors.onError}
          onPress={(): void => console.log('Pressed Contained Button')}
          style={{ marginTop: 24 }}
        >
          Label
        </Button>
        <Button
          icon="plus"
          mode="contained"
          buttonColor={theme.colors.error}
          textColor={theme.colors.onError}
          onPress={(): void => console.log('Pressed Contained Button')}
          style={{ marginTop: 24 }}
        >
          Label
        </Button>
        <Button
          icon="plus"
          mode="contained"
          buttonColor={theme.colors.error}
          textColor={theme.colors.onError}
          contentStyle={{ flexDirection: 'row-reverse' }}
          onPress={(): void => console.log('Pressed Contained Button')}
          style={{ marginTop: 24 }}
        >
          Label
        </Button>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button mode="contained" disabled style={{ marginTop: 24 }}>
          Label
        </Button>
        <Button icon="plus" mode="contained" disabled style={{ marginTop: 24 }}>
          Label
        </Button>
        <Button
          icon="plus"
          mode="contained"
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
