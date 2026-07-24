import React, { JSX, useState } from 'react';
import { View } from 'react-native';
import { Card, ToggleButton, Text } from 'react-native-paper';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

const cardStyle = { padding: 0, margin: 10, marginBottom: 5 };

export const ToggleButtonExample: React.FC = (): JSX.Element => {
  const theme = useExtendedTheme();
  const [toggleButtonValue, setToggleButtonValue] = useState('left');
  const [toggleButtonFontValue, setToggleButtonFontValue] = useState('bold');

  return (
    <Card style={cardStyle}>
      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 24,
          marginVertical: 24,
        }}
      >
        <Text>Toggle Button</Text>
        <View style={{ marginTop: 24, alignItems: 'center' }}>
          <ToggleButton.Row
            onValueChange={(val: string): void => setToggleButtonValue(val)}
            value={toggleButtonValue}
          >
            <ToggleButton
              icon="format-align-left"
              value="left"
              iconColor={
                toggleButtonValue === 'left'
                  ? theme.colors.onPrimaryContainer
                  : theme.colors.onSurface
              }
              style={{
                backgroundColor:
                  toggleButtonValue === 'left'
                    ? theme.colors.primaryContainer
                    : 'transparent',
                borderWidth: 1,
              }}
              rippleColor={'transparent'}
            />
            <ToggleButton
              icon="format-align-center"
              value="center"
              iconColor={
                toggleButtonValue === 'center'
                  ? theme.colors.onPrimaryContainer
                  : theme.colors.onSurface
              }
              style={{
                backgroundColor:
                  toggleButtonValue === 'center'
                    ? theme.colors.primaryContainer
                    : 'transparent',
                borderWidth: 1,
              }}
              rippleColor={'transparent'}
            />
            <ToggleButton
              icon="format-align-right"
              value="right"
              iconColor={
                toggleButtonValue === 'right'
                  ? theme.colors.onPrimaryContainer
                  : theme.colors.onSurface
              }
              style={{
                backgroundColor:
                  toggleButtonValue === 'right'
                    ? theme.colors.primaryContainer
                    : 'transparent',
                borderWidth: 1,
              }}
              rippleColor={'transparent'}
            />
          </ToggleButton.Row>

          <ToggleButton.Row
            onValueChange={(val: string): void => setToggleButtonFontValue(val)}
            value={toggleButtonFontValue}
            style={{ marginTop: 10 }}
          >
            <ToggleButton
              icon="format-bold"
              value="bold"
              iconColor={
                toggleButtonFontValue === 'bold'
                  ? theme.colors.onPrimaryContainer
                  : theme.colors.onSurface
              }
              style={{
                backgroundColor:
                  toggleButtonFontValue === 'bold'
                    ? theme.colors.primaryContainer
                    : 'transparent',
                borderWidth: 1,
              }}
              rippleColor={'transparent'}
            />
            <ToggleButton
              icon="format-italic"
              value="italic"
              iconColor={
                toggleButtonFontValue === 'italic'
                  ? theme.colors.onPrimaryContainer
                  : theme.colors.onSurface
              }
              style={{
                backgroundColor:
                  toggleButtonFontValue === 'italic'
                    ? theme.colors.primaryContainer
                    : 'transparent',
                borderWidth: 1,
              }}
              rippleColor={'transparent'}
            />
            <ToggleButton
              icon="format-underline"
              value="underline"
              iconColor={
                toggleButtonFontValue === 'underline'
                  ? theme.colors.onPrimaryContainer
                  : theme.colors.onSurface
              }
              style={{
                backgroundColor:
                  toggleButtonFontValue === 'underline'
                    ? theme.colors.primaryContainer
                    : 'transparent',
                borderWidth: 1,
              }}
              rippleColor={'transparent'}
            />
          </ToggleButton.Row>
        </View>
      </View>
    </Card>
  );
};
