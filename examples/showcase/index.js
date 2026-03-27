import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { AppRegistry, useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { blue, blueDark } from '@brightlayer-ui/react-native-themes';
import { ThemeContext } from './contexts/ThemeContext';
import { MainRouter } from './router';

const Wrapper = () => {
  // Get the device's current color scheme ('light' | 'dark' | null)
  const deviceColorScheme = useColorScheme();

  // Initialize theme state based on device preference
  const [theme, setThemeState] = useState(
    deviceColorScheme === 'dark' ? 'dark' : 'light',
  );

  // Track whether to follow system theme or use manual override
  const [followSystem, setFollowSystem] = useState(true);

  // When user manually sets theme, stop following system preference
  const setTheme = newTheme => {
    setFollowSystem(false);
    setThemeState(newTheme);
  };

  // Sync with device theme when followSystem is enabled and device scheme changes
  useEffect(() => {
    if (followSystem) {
      setThemeState(deviceColorScheme === 'dark' ? 'dark' : 'light');
    }
  }, [deviceColorScheme, followSystem]);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, followSystem, setFollowSystem }}
    >
      <PaperProvider theme={theme === 'light' ? blue : blueDark}>
        <MainRouter />
      </PaperProvider>
    </ThemeContext.Provider>
  );
};

AppRegistry.registerComponent(appName, () => Wrapper);
