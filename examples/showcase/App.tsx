/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { I18nManager } from 'react-native';

import { KitchenSink } from './components/KitchenSink';
import { CollapsibleHeaderLayout } from '@brightlayer-ui/react-native-components';
import { UserMenuExample } from './components/UserMenuExample';
import { useThemeContext } from './contexts/ThemeContext';
import RNRestart from 'react-native-restart';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './router';

export const toggleRTL = (): void => {
  if (I18nManager.isRTL) {
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
  } else {
    I18nManager.forceRTL(true);
  }
  RNRestart.Restart();
};

type AppProps = {
  navigation: StackNavigationProp<RootStackParamList, 'App'>;
};

export const App: React.FC<AppProps> = ({ navigation }) => {
  const { theme: themeType, setTheme } = useThemeContext();

  return (
    <CollapsibleHeaderLayout
      HeaderProps={{
        variant: 'dynamic',
        title: 'Valley Forge',
        subtitle: 'The Last Stand',
        icon: { name: 'menu' },
        info: 'hello',
        expandable: true,
        backgroundImage: require('./assets/images/farm.jpg'),
        onIconPress: (): void => {
          navigation.openDrawer();
        },
        searchableConfig: { placeholder: 'Search', autoFocus: true },
        actionItems: [
          {
            icon: { name: 'more' },
            onPress: (): void => {},
            component: (
              <UserMenuExample
                onToggleRTL={toggleRTL}
                onToggleTheme={(): void =>
                  setTheme(themeType === 'light' ? 'dark' : 'light')
                }
              />
            ),
          },
        ],
      }}
      ScrollViewProps={{
        nestedScrollEnabled: true,
        keyboardShouldPersistTaps: 'handled',
      }}
    >
      <KitchenSink />
    </CollapsibleHeaderLayout>
  );
};
