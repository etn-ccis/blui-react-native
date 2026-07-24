import React, { JSX } from 'react';
import { View } from 'react-native';
import { Card, IconButton, Text } from 'react-native-paper';

const cardStyle = { padding: 0, margin: 10, marginBottom: 5 };

export const IconButtonExample: React.FC = (): JSX.Element => (
  <Card style={cardStyle}>
    <View
      style={{
        justifyContent: 'center',
        marginHorizontal: 24,
        marginVertical: 24,
      }}
    >
      <Text>Icon Button</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 24,
        }}
      >
        <IconButton
          icon="fire"
          size={24}
          onPress={(): void => console.log('Icon Button Pressed')}
        />
        <IconButton
          icon="fire"
          size={40}
          onPress={(): void => console.log('Icon Button Pressed')}
        />
        <IconButton
          icon="fire"
          size={56}
          onPress={(): void => console.log('Icon Button Pressed')}
        />
        <IconButton
          icon="fire"
          size={72}
          onPress={(): void => console.log('Icon Button Pressed')}
        />
      </View>
    </View>
  </Card>
);
