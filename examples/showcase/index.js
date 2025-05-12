/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider as ThemeProvider} from 'react-native-paper';
import {blue, blueDark} from '@brightlayer-ui/react-native-themes';

export default function Main() {
  return (
    <ThemeProvider theme={blue}>
      <App />
    </ThemeProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
