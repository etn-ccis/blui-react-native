import React, {ReactNode, useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Modal from 'react-native-modal';
import {useExtendedTheme} from '@brightlayer-ui/react-native-themes';

type BottomSheetProps = {
  show?: boolean;
  children?: ReactNode;
  dismissBottomSheet?: () => void;
};

export const BottomSheetScreen: React.FC<BottomSheetProps> = props => {
  const {show, children, dismissBottomSheet} = props;
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(
    show ? true : false,
  );
  const theme = useExtendedTheme();
  useEffect((): void => {
    setIsBottomSheetVisible(show ? true : false);
  }, [show]);

  return (
    <Modal
      isVisible={isBottomSheetVisible}
      backdropOpacity={0.5}
      onBackdropPress={dismissBottomSheet}
      supportedOrientations={['portrait', 'landscape']}
      style={{justifyContent: 'flex-end', margin: 0}}>
      <SafeAreaView style={{backgroundColor: theme.colors.background}}>
        {children}
      </SafeAreaView>
    </Modal>
  );
};
