import React, { JSX } from 'react';
import { View } from 'react-native';
import { Card, Checkbox, Text } from 'react-native-paper';

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

export const CheckboxIOSExample: React.FC = (): JSX.Element => {
  const [valueOne, setValueOne] = React.useState<
    'checked' | 'unchecked' | 'indeterminate'
  >('unchecked');
  const [valueTwo, setValueTwo] = React.useState<
    'checked' | 'unchecked' | 'indeterminate'
  >('checked');

  return (
    <Card style={styles.card}>
      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 24,
          marginVertical: 24,
        }}
      >
        <Text>Checkbox (iOS)</Text>
        <View style={{ marginTop: 24 }}>
          <View style={styles.row}>
            <Text style={{ flex: 1 }}>Init Unchecked</Text>
            <Checkbox.IOS
              status={valueOne}
              onPress={(): void =>
                valueOne === 'unchecked'
                  ? setValueOne('checked')
                  : setValueOne('unchecked')
              }
            />
          </View>
          <View style={styles.row}>
            <Text style={{ flex: 1 }}>Init Checked</Text>
            <Checkbox.IOS
              status={valueTwo}
              onPress={(): void =>
                valueTwo === 'unchecked'
                  ? setValueTwo('checked')
                  : setValueTwo('unchecked')
              }
            />
          </View>
          <View style={styles.row}>
            <Text style={{ flex: 1 }}>Indeterminate</Text>
            <Checkbox.IOS status={'indeterminate'} />
          </View>
          <View style={styles.row}>
            <Text style={{ flex: 1 }}>Disabled Checked</Text>
            <Checkbox.IOS status={'checked'} disabled={true} />
          </View>
          <View style={styles.row}>
            <Text style={{ flex: 1 }}>Disabled Unchecked</Text>
            <Checkbox.IOS status={'unchecked'} disabled={true} />
          </View>
        </View>
      </View>
    </Card>
  );
};
