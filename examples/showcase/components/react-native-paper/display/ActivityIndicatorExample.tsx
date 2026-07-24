import React, { JSX } from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Card, Text } from 'react-native-paper';

const cardStyle = { padding: 0, margin: 10, marginBottom: 5 };

export const ActivityIndicatorExample: React.FC = (): JSX.Element => (
  <Card style={cardStyle}>
    <View
      style={{
        justifyContent: 'center',
        marginHorizontal: 24,
        marginVertical: 24,
      }}
    >
      <Text>Activity Indicator</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginTop: 24,
        }}
      >
        <ActivityIndicator animating={true} size={'small'} />
        <ActivityIndicator animating={true} size={'large'} />
        <ActivityIndicator animating={true} size={'small'} />
        <ActivityIndicator animating={true} size={'large'} />
      </View>
    </View>
  </Card>
);
