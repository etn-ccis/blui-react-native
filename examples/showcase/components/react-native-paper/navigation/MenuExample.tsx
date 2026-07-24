import React, { JSX } from 'react';
import { View } from 'react-native';
import { Button, Card, Divider, Menu, Text } from 'react-native-paper';

const cardStyle = { padding: 0, margin: 10, marginBottom: 5 };

export const MenuExample: React.FC = (): JSX.Element => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  return (
    <Card style={cardStyle}>
      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 24,
          marginVertical: 24,
        }}
      >
        <Text>Menu</Text>
        <View style={{ marginTop: 24 }}>
          <Menu
            visible={menuVisible}
            onDismiss={(): void => setMenuVisible(false)}
            anchor={
              <Button
                mode={'contained'}
                onPress={(): void => setMenuVisible(true)}
              >
                Show menu
              </Button>
            }
          >
            <Menu.Item
              onPress={(): void => setMenuVisible(false)}
              title="Item 1"
            />
            <Menu.Item
              onPress={(): void => setMenuVisible(false)}
              title="Item 2"
            />
            <Divider />
            <Menu.Item
              onPress={(): void => setMenuVisible(false)}
              title="Item 3"
            />
            <Menu.Item
              onPress={(): void => setMenuVisible(false)}
              title="Item 4"
            />
          </Menu>
        </View>
      </View>
    </Card>
  );
};
