import React, { JSX } from 'react';
import { View } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';

const PublicDomainAlice = require('../../../assets/images/public-domain-alice.png');
const cardStyle = { padding: 0, margin: 10, marginBottom: 5 };

export const AvatarExample: React.FC = (): JSX.Element => (
  <Card style={cardStyle}>
    <View
      style={{
        justifyContent: 'center',
        marginHorizontal: 24,
        marginVertical: 24,
      }}
    >
      <Text>Avatar</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginTop: 24,
        }}
      >
        <Avatar.Icon size={40} icon="account-circle" />
        <Avatar.Image size={40} source={PublicDomainAlice} />
        <Avatar.Text size={40} label="PX" />
        <Avatar.Icon size={40} icon="account-circle" />
        <Avatar.Image size={40} source={PublicDomainAlice} />
        <Avatar.Text size={40} label="PX" />
      </View>
    </View>
  </Card>
);
