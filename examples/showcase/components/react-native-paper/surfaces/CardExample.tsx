import React, { JSX } from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const cardStyle = { padding: 0, margin: 10, marginBottom: 5 };

export const CardExample: React.FC = (): JSX.Element => (
  <Card style={cardStyle}>
    <View
      style={{
        justifyContent: 'center',
        marginHorizontal: 24,
        marginVertical: 24,
      }}
    >
      <Text>Card</Text>
      <View style={{ marginTop: 24 }}>
        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={props => <Avatar.Icon {...props} icon="folder" />}
          />
          <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card conteent</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </View>
    </View>
  </Card>
);
