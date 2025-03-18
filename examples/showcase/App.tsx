/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import {Button, useTheme, Text} from 'react-native-paper';
import ProgessIconExample from './src/ProgessIconExample';
import 'react-native-svg';
import Components from './src/Components';

function App(): React.JSX.Element {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black'}} variant="titleMedium">
        React Native Monorepo with Yarn workspaces
      </Text>
      <Button
        mode="contained"
        style={{
          backgroundColor: theme.colors.primary,
          width: 200,
        }}>
        <Text style={{color: 'white'}}>Brightlayer UI</Text>
      </Button>
      <ProgessIconExample />
      <Components />
    </View>
  );
}

export default App;
