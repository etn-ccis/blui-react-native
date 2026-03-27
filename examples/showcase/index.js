import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { AppRegistry, useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { blue, blueDark } from '@brightlayer-ui/react-native-themes';
import { ThemeContext } from './contexts/ThemeContext';
import { MainRouter } from './router';

const Wrapper = () => {
  const deviceColorScheme = useColorScheme();
  const [theme, setTheme] = useState(
    deviceColorScheme === 'dark' ? 'dark' : 'light',
  );

  useEffect(() => {
    setTheme(deviceColorScheme === 'dark' ? 'dark' : 'light');
  }, [deviceColorScheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <PaperProvider theme={theme === 'light' ? blue : blueDark}>
        <MainRouter />
      </PaperProvider>
    </ThemeContext.Provider>
  );
};

AppRegistry.registerComponent(appName, () => Wrapper);
