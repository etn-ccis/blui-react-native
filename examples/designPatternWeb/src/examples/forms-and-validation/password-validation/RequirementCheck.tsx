import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import {useExtendedTheme} from '@brightlayer-ui/react-native-themes';
import type { ThemeProp } from 'react-native-paper/lib/typescript/types';

const makeStyles = (): Record<string, any> =>
  StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    text: {
      paddingLeft: 10,
    },
  });

type RequirementCheckProps = {
  isChecked: boolean;
  text: string;
  theme?: ThemeProp;
};

export const RequirementCheck: React.FC<RequirementCheckProps> = props => {
  const {isChecked, text} = props;
  const theme = useExtendedTheme();
  const styles = makeStyles();

  function iconColorIfValid(valid: boolean): string {
    return valid ? theme.colors.primary : theme.colors.onSurfaceVariant;
  }

  function textColorIfValid(valid: boolean): string {
    return valid ? theme.colors.onSurfaceVariant : theme.colors.onSurface;
  }

  return (
    <View style={styles.itemContainer}>
      <MatIcon name={'check'} size={24} color={iconColorIfValid(isChecked)} />
      <Text
        variant="headlineMedium"
        style={[styles.text, {color: textColorIfValid(isChecked)}]}>
        {text}
      </Text>
    </View>
  );
};
