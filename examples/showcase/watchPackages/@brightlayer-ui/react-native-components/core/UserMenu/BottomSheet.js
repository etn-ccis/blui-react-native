import {useExtendedTheme} from '@brightlayer-ui/react-native-themes';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
const useStyles = (theme, props) =>
  StyleSheet.create({
    root: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    background: {
      backgroundColor: props.backgroundColor || theme.colors.surface,
    },
  });
/**
 * BottomSheet component
 *
 * This is a utility component for the UserMenu. It handles rendering the menu items in
 * a bottom sheet that appears from the bottom of the screen.
 */
export const BottomSheet = props => {
  const {show, children, onClose, styles = {}} = props;
  const theme = useExtendedTheme();
  const defaultStyles = useStyles(theme, props);
  return React.createElement(
    Modal,
    {
      isVisible: show,
      backdropOpacity: 0.5,
      onBackdropPress: onClose,
      supportedOrientations: ['portrait', 'landscape'],
      style: [defaultStyles.root, styles.root],
      statusBarTranslucent: true,
    },
    React.createElement(
      SafeAreaView,
      {style: [defaultStyles.background, styles.background]},
      children,
    ),
  );
};
