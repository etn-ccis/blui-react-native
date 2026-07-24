import React, { JSX } from 'react';
import { View } from 'react-native';
import { Button, Card, Modal, Portal, Text } from 'react-native-paper';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

const cardStyle = { padding: 0, margin: 10, marginBottom: 5 };

export const ModalExample: React.FC = (): JSX.Element => {
  const theme = useExtendedTheme();
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
        <Text>Modal</Text>
        <View style={{ marginTop: 24 }}>
          <Portal>
            <Modal
              visible={visible}
              onDismiss={(): void => setVisible(false)}
              contentContainerStyle={{
                backgroundColor: theme.colors.surface,
                padding: 24,
                height: 300,
                marginHorizontal: 24,
              }}
            >
              <Text>Example Modal. Click outside this area to dismiss.</Text>
            </Modal>
          </Portal>
          <Button
            mode={'contained'}
            style={{ marginTop: 30 }}
            onPress={(): void => setVisible(true)}
          >
            Show Modal
          </Button>
        </View>
      </View>
    </Card>
  );
};
