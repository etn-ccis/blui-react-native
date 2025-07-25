import { useTheme } from 'react-native-paper';
export const fontConfig = {
    displaySmall: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 36,
        lineHeight: 48,
    },
    displayMedium: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 45,
        lineHeight: 56,
    },
    displayLarge: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 57,
        lineHeight: 72,
        letterSpacing: -0.25,
    },
    headlineSmall: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 32,
    },
    headlineMedium: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 28,
        lineHeight: 36,
    },
    headlineLarge: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 32,
        lineHeight: 40,
    },
    titleSmall: {
        fontFamily: 'OpenSans-SemiBold',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
    },
    titleMedium: {
        fontFamily: 'OpenSans-SemiBold',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15,
    },
    titleLarge: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 22,
        lineHeight: 28,
    },
    labelSmall: {
        fontFamily: 'OpenSans-SemiBold',
        fontWeight: '600',
        fontSize: 11,
        lineHeight: 16,
        letterSpacing: 0.5,
    },
    labelMedium: {
        fontFamily: 'OpenSans-SemiBold',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.2,
    },
    labelLarge: {
        fontFamily: 'OpenSans-SemiBold',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
    },
    bodySmall: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 16,
    },
    bodyMedium: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
    },
    bodyLarge: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15,
    },
};
export const useExtendedTheme = useTheme;
export const useFontWeight = (weight) => {
    switch (weight) {
        case '300':
            return {
                fontFamily: 'OpenSans-Light',
                fontWeight: '300',
            };
        case '400':
            return {
                fontFamily: 'OpenSans-Regular',
                fontWeight: '400',
            };
        case '600':
            return {
                fontFamily: 'OpenSans-SemiBold',
                fontWeight: '600',
            };
        case '700':
            return {
                fontFamily: 'OpenSans-Bold',
                fontWeight: '700',
            };
        case '800':
            return {
                fontFamily: 'OpenSans-ExtraBold',
                fontWeight: '800',
            };
        default:
            throw new Error(`Invalid font weight: ${weight}`);
    }
};
