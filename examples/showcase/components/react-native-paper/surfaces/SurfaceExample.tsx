import React, { JSX } from 'react';
import { View } from 'react-native';
import { Card, Surface, Text } from 'react-native-paper';

const cardStyle = { padding: 0, margin: 10, marginBottom: 5 };
const surfaceStyle = {
  padding: 8,
  height: 100,
  width: 100,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

export const SurfaceExample: React.FC = (): JSX.Element => (
  <Card style={cardStyle}>
    <View
      style={{
        justifyContent: 'center',
        marginHorizontal: 24,
        marginVertical: 24,
      }}
    >
      <Text>Surface</Text>
      <View style={{ marginTop: 24 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Surface elevation={1} style={surfaceStyle}>
            <Text>Surface 1</Text>
          </Surface>
          <Surface elevation={2} style={surfaceStyle}>
            <Text>Surface 2</Text>
          </Surface>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 24,
          }}
        >
          <Surface elevation={3} style={surfaceStyle}>
            <Text>Surface 3</Text>
          </Surface>
          <Surface elevation={4} style={surfaceStyle}>
            <Text>Surface 4</Text>
          </Surface>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 24,
          }}
        >
          <Surface elevation={5} style={surfaceStyle}>
            <Text>Surface 5</Text>
          </Surface>
        </View>
      </View>
    </View>
  </Card>
);
