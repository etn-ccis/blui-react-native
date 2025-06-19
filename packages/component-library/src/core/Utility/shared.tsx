import { MD3Theme } from 'react-native-paper';
import { useFontWeight } from '@brightlayer-ui/react-native-themes';

export const getPrimary500 = (theme: MD3Theme): string | undefined => theme.colors.primary;

export const calculateHeight = (fontSize: number): number => Math.ceil((fontSize * 1.25) / 4) * 4;

type FontStyles = {
    fontStyleLight: ReturnType<typeof useFontWeight>;
    fontStyleRegular: ReturnType<typeof useFontWeight>;
    fontStyleSemiBold: ReturnType<typeof useFontWeight>;
    fontStyleBold: ReturnType<typeof useFontWeight>;
    fontStyleExtraBold: ReturnType<typeof useFontWeight>;
};
export const useFontStyles = (): FontStyles => {
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
