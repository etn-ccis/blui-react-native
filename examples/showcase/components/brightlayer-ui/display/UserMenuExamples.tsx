import React, { JSX } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import { UserMenu } from '@brightlayer-ui/react-native-components';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

const PublicDomainAlice = require('../../../assets/images/public-domain-alice.png');

const styles = StyleSheet.create({
  card: {
    padding: 0,
    margin: 10,
    marginBottom: 5,
  },
});

export const UserMenuExamples: React.FC = (): JSX.Element => {
  const theme = useExtendedTheme();

  return (
    <Card style={styles.card}>
      <Card.Title title="User Menu Examples" />
      <View style={{ display: 'flex' }}>
        <View style={{ alignItems: 'center', marginBottom: 8 }}>
          <Card.Title title="User Menu With Text Avatar" />
          <UserMenu
            menuTitle={'John Smith'}
            menuSubtitle={'j.smith@example.com'}
            menuItems={[
              {
                title: 'Change Password',
                icon: {
                  name: 'vpn-key',
                },
              },
              {
                title: 'Preferences',
                icon: {
                  name: 'settings',
                },
              },
              { title: 'Log Out', icon: { name: 'exit-to-app' } },
            ]}
            avatar={<Avatar.Text label="JS" size={40} />}
          />
        </View>
        <View style={{ alignItems: 'center', marginBottom: 8 }}>
          <Card.Title title="User Menu With Icon" />
          <UserMenu
            menuTitle={'John Smith'}
            menuSubtitle={'j.smith@example.com'}
            menuItems={[
              {
                title: 'Change Password',
                icon: {
                  name: 'vpn-key',
                },
              },
              {
                title: 'Preferences',
                icon: {
                  name: 'settings',
                },
              },
              { title: 'Log Out', icon: { name: 'exit-to-app' } },
            ]}
            avatar={
              <Avatar.Icon
                size={40}
                icon="account-circle"
                color={theme.colors.primaryNonText}
                style={{ backgroundColor: theme.colors.primaryContainer }}
              />
            }
          />
        </View>
        <View style={{ alignItems: 'center', marginBottom: 8 }}>
          <Card.Title title="User Menu With Image Avatar" />
          <UserMenu
            menuTitle={'John Smith'}
            menuSubtitle={'j.smith@example.com'}
            menuItems={[
              {
                title: 'My Account',
              },
              { title: 'Log Out' },
            ]}
            avatar={<Avatar.Image source={PublicDomainAlice} size={40} />}
          />
        </View>
      </View>
    </Card>
  );
};
