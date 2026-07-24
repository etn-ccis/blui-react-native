import React, { JSX, useState } from 'react';
import { View } from 'react-native';
import { Card, FAB, Portal, Text } from 'react-native-paper';

const cardStyle = { padding: 0, margin: 10, marginBottom: 5 };

export const FabExample: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <Card style={cardStyle}>
      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 24,
          marginVertical: 24,
        }}
      >
        <Text>Fab</Text>
        <View style={{ marginTop: 24, alignItems: 'center' }}>
          <FAB
            style={{ margin: 16, width: 40 }}
            size="small"
            icon="plus"
            onPress={(): void => console.log('Pressed Small Fab')}
          />
          <FAB
            style={{ margin: 16, width: 56 }}
            icon="plus"
            onPress={(): void => console.log('Pressed Default Fab')}
          />
          <FAB
            style={{ margin: 16 }}
            label={'Extended Fab'}
            icon="check"
            onPress={(): void => console.log('Pressed Extended Fab')}
          />
        </View>
      </View>
      <Portal>
        <FAB.Group
          visible
          open={open}
          icon={open ? 'calendar-today' : 'plus'}
          actions={[
            { icon: 'plus', onPress: (): void => console.log('Pressed add') },
            {
              icon: 'star',
              label: 'Star',
              onPress: (): void => console.log('Pressed star'),
            },
            {
              icon: 'email',
              label: 'Email',
              onPress: (): void => console.log('Pressed email'),
            },
            {
              icon: 'bell',
              label: 'Remind',
              onPress: (): void => console.log('Pressed notifications'),
            },
          ]}
          onStateChange={({ open: nextOpen }): void => setOpen(nextOpen)}
          onPress={(): void => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Card>
  );
};
