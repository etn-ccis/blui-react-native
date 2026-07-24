import React, { JSX } from 'react';
import { View } from 'react-native';
import { Appbar, Card, Text } from 'react-native-paper';

const cardStyle = { padding: 0, margin: 10, marginBottom: 5 };

export const AppbarExample: React.FC = (): JSX.Element => (
  <Card style={cardStyle}>
    <View
      style={{
        justifyContent: 'center',
        marginHorizontal: 24,
        marginVertical: 24,
      }}
    >
      <Text>Appbar</Text>
      <View style={{ marginTop: 24 }}>
        <Appbar.Header style={{ marginBottom: 16 }}>
          <Appbar.BackAction onPress={(): void => console.log('Went Back')} />
          <Appbar.Content title="Title" />
          <Appbar.Action
            icon="magnify"
            onPress={(): void => console.log('Searching')}
          />
          <Appbar.Action
            icon="dots-vertical"
            onPress={(): void => console.log('Shown more')}
          />
        </Appbar.Header>
        <Appbar style={{ marginBottom: 16, marginTop: 16 }}>
          <Appbar.Content title="Title" />
          <Appbar.Action icon="magnify" />
          <Appbar.Action icon="dots-vertical" />
        </Appbar>
        <Appbar style={{ marginBottom: 16 }}>
          <Appbar.BackAction />
          <Appbar.Content title="Title" />
          <Appbar.Action icon="magnify" />
          <Appbar.Action icon="dots-vertical" />
        </Appbar>
      </View>
    </View>
  </Card>
);
