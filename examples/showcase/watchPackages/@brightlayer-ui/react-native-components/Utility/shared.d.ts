import { MD3Theme } from 'react-native-paper';
import { useFontWeight } from '@brightlayer-ui/react-native-themes';
export declare const getPrimary500: (theme: MD3Theme) => string | undefined;
export declare const calculateHeight: (fontSize: number) => number;
type FontStyles = {
    fontStyleLight: ReturnType<typeof useFontWeight>;
    fontStyleRegular: ReturnType<typeof useFontWeight>;
    fontStyleSemiBold: ReturnType<typeof useFontWeight>;
    fontStyleBold: ReturnType<typeof useFontWeight>;
    fontStyleExtraBold: ReturnType<typeof useFontWeight>;
};
export declare const useFontStyles: () => FontStyles;
export {};
