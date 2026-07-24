import React, { JSX } from 'react';
import { View } from 'react-native';
import { Card, Divider, Text } from 'react-native-paper';

const cardStyle = { padding: 0, margin: 10, marginBottom: 5 };

export const DividerExample: React.FC = (): JSX.Element => (
  <Card style={cardStyle}>
    <View
      style={{
        justifyContent: 'center',
        marginHorizontal: 24,
        marginVertical: 24,
      }}
    >
      <Text>Divider</Text>
      <View style={{ marginTop: 24 }}>
        <Text>Item 1</Text>
        <Divider />
        <Text>Item 2</Text>
        <Divider />
        <Text>Item 3</Text>
        <Divider />
        <Text>Item 1</Text>
        <Divider />
        <Text>Item 2</Text>
        <Divider />
        <Text>Item 3</Text>
        <Divider />
      </View>
    </View>
  </Card>
);
