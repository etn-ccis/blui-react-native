import {useFontWeight} from '@brightlayer-ui/react-native-themes';
export const getPrimary500 = theme => theme.colors.primary;
export const calculateHeight = fontSize => Math.ceil((fontSize * 1.25) / 4) * 4;
export const useFontStyles = () => {
  const fontStyleLight = useFontWeight('300');
  const fontStyleRegular = useFontWeight('400');
  const fontStyleSemiBold = useFontWeight('600');
  const fontStyleBold = useFontWeight('700');
  const fontStyleExtraBold = useFontWeight('800');
  return {
    fontStyleLight,
    fontStyleRegular,
    fontStyleSemiBold,
    fontStyleBold,
    fontStyleExtraBold,
  };
};
