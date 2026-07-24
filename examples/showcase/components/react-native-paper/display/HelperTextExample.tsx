import React, { JSX } from 'react';
import { View } from 'react-native';
import { Card, HelperText, TextInput, Text } from 'react-native-paper';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

const cardStyle = { padding: 0, margin: 10, marginBottom: 5 };

export const HelperTextExample: React.FC = (): JSX.Element => {
  const theme = useExtendedTheme();
  const [helperTextInputText, setHelperTextInputText] = React.useState('');
  const helperTextInputHasErrors = (): boolean =>
    !helperTextInputText.includes('@');

  return (
    <Card style={cardStyle}>
      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 24,
          marginVertical: 24,
        }}
      >
        <Text>Helper Text</Text>
        <View style={{ marginTop: 24 }}>
          <TextInput
            label="Email"
            value={helperTextInputText}
            onChangeText={setHelperTextInputText}
            underlineColor={theme.colors.onSurfaceVariant}
          />
          <HelperText type="error" visible={helperTextInputHasErrors()}>
            Email address is invalid!
          </HelperText>
        </View>
      </View>
    </Card>
  );
};
