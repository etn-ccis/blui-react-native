import React, { JSX } from 'react';
import { View } from 'react-native';
import { Button, Card, Dialog, Portal, Text } from 'react-native-paper';

const cardStyle = { padding: 0, margin: 10, marginBottom: 5 };

export const DialogExample: React.FC = (): JSX.Element => {
  const [dialogVisible, setDialogVisible] = React.useState(false);
  const showDialog = (): void => setDialogVisible(true);
  const hideDialog = (): void => setDialogVisible(false);

  return (
    <Card style={cardStyle}>
      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 24,
          marginVertical: 24,
        }}
      >
        <Text>Dialog</Text>
        <View style={{ marginTop: 36 }}>
          <Button mode={'contained'} onPress={showDialog}>
            Show Dialog
          </Button>
          <Portal>
            <Dialog visible={dialogVisible} onDismiss={hideDialog}>
              <Dialog.Title>Alert</Dialog.Title>
              <Dialog.Content>
                <Text variant="bodyMedium">This is simple dialog</Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>Done</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </View>
    </Card>
  );
};
