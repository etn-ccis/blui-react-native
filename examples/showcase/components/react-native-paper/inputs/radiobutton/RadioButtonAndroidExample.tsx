import React, { JSX } from 'react';
import { View } from 'react-native';
import { Card, RadioButton, Text } from 'react-native-paper';

const styles = {
  card: {
    padding: 0,
    margin: 10,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row' as const,
    justifyContent: 'space-evenly' as const,
    alignItems: 'center' as const,
  },
};

export const RadioButtonAndroidExample: React.FC = (): JSX.Element => {
  const [value, setValue] = React.useState('first');

  return (
    <Card style={styles.card}>
      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 24,
          marginVertical: 24,
        }}
      >
        <Text>Radio Button (Android)</Text>
        <View style={{ marginTop: 24 }}>
          <RadioButton.Group
            onValueChange={(val: string): void => setValue(val)}
            value={value}
          >
            <View style={styles.row}>
              <Text style={{ flex: 1 }}>First Item</Text>
              <RadioButton.Android value="first" />
            </View>
            <View style={styles.row}>
              <Text style={{ flex: 1 }}>Second Item</Text>
              <RadioButton.Android value="second" />
            </View>
            <View style={styles.row}>
              <Text style={{ flex: 1 }}>Third Item</Text>
              <RadioButton.Android value="third" />
            </View>
          </RadioButton.Group>
        </View>
      </View>
    </Card>
  );
};
