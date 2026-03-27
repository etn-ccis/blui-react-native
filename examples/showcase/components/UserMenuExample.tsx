import {
  IconSwitch,
  InfoListItemProps,
  UserMenu,
} from '@brightlayer-ui/react-native-components';
import React from 'react';
import { Avatar } from 'react-native-paper';
import * as BLUIColors from '@brightlayer-ui/colors';
import { IconFamily } from '@brightlayer-ui/react-native-components/md3/__types__';
import { useThemeContext } from '../contexts/ThemeContext';

const SwapIcon: IconFamily = {
  family: 'material',
  name: 'swap-horiz',
  direction: 'ltr',
};
const SystemDefaultIcon: IconFamily = {
  family: 'material',
  name: 'settings-brightness',
  direction: 'ltr',
};
const LightModeIcon: IconFamily = {
  family: 'material',
  name: 'light-mode',
  direction: 'ltr',
};
const DarkModeIcon: IconFamily = {
  family: 'material',
  name: 'dark-mode',
  direction: 'ltr',
};
const CancelIcon: IconFamily = {
  family: 'material',
  name: 'cancel',
  direction: 'ltr',
};

type UserMenuExampleProps = {
  onToggleRTL: () => void;
};

export const UserMenuExample: React.FC<UserMenuExampleProps> = props => {
  const { onToggleRTL } = props;
  const { theme, setTheme, followSystem, setFollowSystem } = useThemeContext();

  const menuItems: InfoListItemProps[] = [
    { title: 'Toggle RTL', icon: SwapIcon, onPress: (): void => onToggleRTL() },
    {
      title: 'Theme: System Default',
      icon: SystemDefaultIcon,
      onPress: (): void => setFollowSystem(!followSystem),
      rightComponent: (
        <IconSwitch
          value={followSystem}
          onValueChange={(): void => setFollowSystem(!followSystem)}
          showIcon
        />
      ),
    },
    // Show Light/Dark options only when not following system
    ...(!followSystem
      ? [
          {
            title: 'Light Mode',
            icon: LightModeIcon,
            onPress: (): void => setTheme('light'),
            rightComponent: (
              <IconSwitch
                value={theme === 'light'}
                onValueChange={(): void => setTheme('light')}
                showIcon
              />
            ),
          },
          {
            title: 'Dark Mode',
            icon: DarkModeIcon,
            onPress: (): void => setTheme('dark'),
            rightComponent: (
              <IconSwitch
                value={theme === 'dark'}
                onValueChange={(): void => setTheme('dark')}
                showIcon
              />
            ),
          },
        ]
      : []),
    { title: 'Cancel', icon: CancelIcon },
  ];

  return (
    <UserMenu
      menuTitle={'John Smith'}
      menuSubtitle={'Account Manager'}
      menuItems={menuItems}
      avatar={
        <Avatar.Icon
          icon="account-circle"
          size={40}
          color={BLUIColors.primary[50]}
          style={{ backgroundColor: BLUIColors.primary[80] }}
        />
      }
    />
  );
};
