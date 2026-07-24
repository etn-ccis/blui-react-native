import React, { JSX, useState } from 'react';
import { Card, SegmentedButtons, Text } from 'react-native-paper';

const cardStyle = { padding: 0, margin: 10, marginBottom: 5 };

export const SegmentedButtonsExample: React.FC = (): JSX.Element => {
  const [text, setText] = useState('');
  const [icon, setIcon] = React.useState('');
  const [value, setValue] = React.useState('');

  return (
    <Card style={cardStyle}>
      <Card.Title title="Segmented Buttons" />
      <Card.Content>
        <Text variant="labelLarge" style={{ marginBottom: 16 }}>
          Label Only
        </Text>
        <SegmentedButtons
          value={text}
          onValueChange={setText}
          buttons={[
            { value: 'walk', label: 'Walking' },
            { value: 'train', label: 'Transit' },
            { value: 'drive', label: 'Driving' },
          ]}
          style={{ marginBottom: 20 }}
        />

        <Text variant="labelLarge" style={{ marginBottom: 16 }}>
          Icon Only
        </Text>
        <SegmentedButtons
          value={icon}
          onValueChange={setIcon}
          buttons={[
            { value: 'walk', icon: 'walk' },
            { value: 'train', icon: 'train' },
            { value: 'drive', icon: 'car' },
          ]}
          style={{ marginBottom: 20 }}
        />

        <Text variant="labelLarge" style={{ marginBottom: 16 }}>
          Label and Icon
        </Text>
        <SegmentedButtons
          value={value}
          onValueChange={setValue}
          buttons={[
            { value: 'walk', label: 'Walking', icon: 'walk' },
            { value: 'train', label: 'Transit', icon: 'train' },
            { value: 'drive', label: 'Driving', icon: 'car' },
          ]}
          style={{ marginBottom: 10 }}
        />
      </Card.Content>
    </Card>
  );
};
