import React, { JSX } from 'react';
import { StyleSheet, View } from 'react-native';
import { Hero } from '@brightlayer-ui/react-native-components';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

type IconToggleProps = {
  icon: JSX.Element;
  label: string;
  active: boolean;
  onPress: () => void;
};

const styles = StyleSheet.create({
  iconContainer: {
    margin: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const IconToggle: React.FC<IconToggleProps> = props => {
  const { icon, label, active, onPress } = props;
  const { iconContainer } = styles;
  const theme = useExtendedTheme();
  const color = active
    ? theme.colors.primaryNonText
    : theme.colors.surfaceVariant;

  return (
    <View style={iconContainer}>
      <Hero
        icon={icon}
        style={{ maxWidth: 96 }}
        label={label}
        iconColor={color}
        onPress={onPress}
      ></Hero>
    </View>
  );
};
