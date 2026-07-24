import React, { JSX } from 'react';
import { View } from 'react-native';
import { Button, Card, Portal, Snackbar, Text } from 'react-native-paper';

const cardStyle = { padding: 0, margin: 10, marginBottom: 5 };

export const SnackbarExample: React.FC = (): JSX.Element => {
  const [visible, setVisible] = React.useState(false);

  return (
    <Card style={cardStyle}>
      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 24,
          marginVertical: 24,
        }}
      >
        <Text>Snackbar</Text>
        <View style={{ marginTop: 24 }}>
          <Portal>
            <Snackbar
              visible={visible}
              onDismiss={(): void => setVisible(false)}
              action={{
                label: 'Dismiss',
                onPress: (): void => {
                  setVisible(false);
                },
              }}
            >
              Hey there! I&apos;m a Snackbar.
            </Snackbar>
          </Portal>
          <Button mode={'contained'} onPress={(): void => setVisible(!visible)}>
            {visible ? 'Hide Snackbar' : 'Show Snackbar'}
          </Button>
        </View>
      </View>
    </Card>
  );
};
