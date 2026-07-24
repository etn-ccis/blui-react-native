import React, { JSX, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';
import { IconSwitch, Icon } from '@brightlayer-ui/react-native-components';

const styles = StyleSheet.create({
  card: {
    padding: 0,
    margin: 10,
    marginBottom: 5,
  },
});

export const IconComponentsExample: React.FC = (): JSX.Element => {
  const [toggledIconValue, setToggledIconValue] = useState([
    true,
    true,
    false,
    false,
    true,
    true,
    false,
    false,
  ]);

  const handleIconSwitchChange = (indexNumber: number): void => {
    setToggledIconValue(prevState => {
      const newState = [...prevState];
      newState[indexNumber] = !newState[indexNumber];
      return newState;
    });
  };

  return (
    <>
      <Card style={styles.card}>
        <Card.Title title="Icon" />
        <Card.Content>
          <Icon source={{ family: 'brightlayer-ui', name: 'device' }} />
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="Icon Switch" />
        <Card.Content>
          {toggledIconValue.map((valueState, indexNumber) => (
            <View key={`icon-switch-${indexNumber}`} style={{ padding: 10 }}>
              <IconSwitch
                value={valueState}
                onValueChange={(): void => handleIconSwitchChange(indexNumber)}
                showIcon={indexNumber % 2 === 1}
                disabled={indexNumber >= 4}
              />
            </View>
          ))}
        </Card.Content>
      </Card>
    </>
  );
};
