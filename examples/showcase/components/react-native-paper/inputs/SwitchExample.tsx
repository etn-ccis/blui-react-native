import React, { JSX } from 'react';
import { View } from 'react-native';
import { Card, Switch, Text } from 'react-native-paper';

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

export const SwitchExample: React.FC = (): JSX.Element => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  return (
    <Card style={styles.card}>
      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 24,
          marginVertical: 24,
        }}
      >
        <Text>Switch</Text>
        <View style={{ marginTop: 24, alignItems: 'center' }}>
          <View style={styles.row}>
            <Text style={{ flex: 1 }}>Enabled - On</Text>
            <Switch
              value={true}
              onValueChange={(): void => setIsSwitchOn(!isSwitchOn)}
            />
            <Switch
              value={true}
              onValueChange={(): void => setIsSwitchOn(!isSwitchOn)}
              style={{ marginLeft: 8 }}
            />
          </View>
          <View style={[styles.row, { marginTop: 24 }]}>
            <Text style={{ flex: 1 }}>Enabled - Off</Text>
            <Switch
              value={false}
              onValueChange={(): void => setIsSwitchOn(!isSwitchOn)}
            />
            <Switch
              value={false}
              onValueChange={(): void => setIsSwitchOn(!isSwitchOn)}
              style={{ marginLeft: 8 }}
            />
          </View>
          <View style={[styles.row, { marginTop: 24 }]}>
            <Text style={{ flex: 1 }}>Disabled - On</Text>
            <Switch disabled value={true} />
            <Switch
              value={true}
              onValueChange={(): void => setIsSwitchOn(!isSwitchOn)}
              disabled
              style={{ marginLeft: 8 }}
            />
          </View>
          <View style={[styles.row, { marginTop: 24 }]}>
            <Text style={{ flex: 1 }}>Disabled - Off</Text>
            <Switch disabled value={false} />
            <Switch
              value={false}
              onValueChange={(): void => setIsSwitchOn(!isSwitchOn)}
              disabled
              style={{ marginLeft: 8 }}
            />
          </View>
        </View>
      </View>
    </Card>
  );
};
