/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider as ThemeProvider} from 'react-native-paper';
import * as BLUIThemes from '../../packages/themes/dist';

export default function Main() {
  return (
    <ThemeProvider theme={BLUIThemes.blue}>
      <App />
    </ThemeProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
