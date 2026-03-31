import { createContext, useContext } from 'react';

export type ThemeType = 'light' | 'dark';

type ThemeContextType = {
  theme: ThemeType;
  setTheme: (themeName: ThemeType) => void;
  followSystem: boolean;
  setFollowSystem: (follow: boolean) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
  followSystem: true,
  setFollowSystem: () => {},
});

export const useThemeContext = (): ThemeContextType => useContext(ThemeContext);
