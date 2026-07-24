import React, { JSX } from 'react';
import { View } from 'react-native';
import { Button, Card, Portal, Snackbar, Text } from 'react-native-paper';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

const cardStyle = { padding: 0, margin: 10, marginBottom: 5 };

export const InverseSnackbarExample: React.FC = (): JSX.Element => {
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
              style={{ backgroundColor: theme.colors.inverseSurface }}
            >
              Im a Snackbar.
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
