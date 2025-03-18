/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, useTheme} from 'react-native-paper';
import {Text, View} from 'react-native';
import ProgessIconExample from './src/ProgessIconExample';
import 'react-native-svg';

function App(): React.JSX.Element {
  const theme = useTheme();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>React Native Monorepo with Yarn workspaces</Text>
      <Button
        mode="contained"
        style={{
          backgroundColor: theme.colors.primary,
        }}>
        <Text style={{color: 'white'}}>Brightlayer UI</Text>
      </Button>
      <ProgessIconExample />
    </View>
  );
}

export default App;
