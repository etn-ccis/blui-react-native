/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';
import {myVar} from 'test';
function App(): React.JSX.Element {
  return (
    <View>
      <Text> {myVar}</Text>
    </View>
  );
}

export default App;
