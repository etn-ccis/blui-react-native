/**
 * @format
 * @flow
 */

import React from 'react';
import { StyleProp, ViewProps, ViewStyle } from 'react-native';
import { Avatar } from 'react-native-paper';
import { $DeepPartial } from '@callstack/react-theme-provider';
import { ExtendedTheme, useExtendedTheme } from '@brightlayer-ui/react-native-themes';
import { useFontStyles } from '../Utility/shared';

/**
 * Props for the Grade component.
 * @typedef {object} GradeProps
 * @prop {string} label - The text that you want to display.
 * @prop {string} [fontColor] - Text color for the Label (Default is theme.colors.onPrimary).
 * @prop {string} [backgroundColor] - Background color of the Label (Default is theme.colors.primary).
 * @prop {number} [size] - The diameter of the circular view.
 * @prop {$DeepPartial<ExtendedTheme>} [theme] - Theme value overrides specific to this component.
 */
export type GradeProps = ViewProps & {
    /**
     * The text shown in the circle
     */
    label: string;
    /**
     * The color of the text label
     * @default theme.colors.onPrimary
     */
    fontColor?: string;
    /**
     * The color of the text label
     * @default theme.colors.primary
     */
    backgroundColor?: string;
    /**
     * The size of the circle in px
     * @default 40
     */
    size?: number;
    /**
     * Theme value overrides
     */
    theme?: $DeepPartial<ExtendedTheme>;
    /**
     * Style overrides for internal elements. The styles you provide will be combined with the default styles.
     */
    styles?: {
        root?: StyleProp<ViewStyle>;
    };
};

export type FixedGradeProps = Omit<GradeProps, 'label' | 'fontColor' | 'backgroundColor'>;
const hexToRgb = (hex: string): number[] => {
    const hexcode = hex.replace('#', '');

    const bigint = parseInt(hexcode, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return [r, g, b];
};

const mixColors = (
    color1: string | number[],
    color2: string | number[],
    percentage1: number,
    percentage2: number,
    transparency = 1.0
): string => {
    if (percentage1 < 0 || percentage1 > 100 || percentage2 < 0 || percentage2 > 100) {
        throw new Error('Percentages must be between 0 and 100');
    }

    if (transparency < 0 || transparency > 1) {
        throw new Error('Transparency must be between 0 and 1');
    }

    const rgb1 = Array.isArray(color1) ? color1.slice(0, 3) : hexToRgb(color1);
    const rgb2 = Array.isArray(color2) ? color2.slice(0, 3) : hexToRgb(color2);

    const mixedRgb = [
        Math.round(rgb1[0] * (percentage1 / 100) + rgb2[0] * (percentage2 / 100)),
        Math.round(rgb1[1] * (percentage1 / 100) + rgb2[1] * (percentage2 / 100)),
        Math.round(rgb1[2] * (percentage1 / 100) + rgb2[2] * (percentage2 / 100)),
    ];

    const mixedColor = `rgba(${mixedRgb[0]}, ${mixedRgb[1]}, ${mixedRgb[2]}, ${transparency})`;
    return mixedColor;
};

const GradeBase = (props: GradeProps): React.JSX.Element => {
    const defaultTheme = useExtendedTheme();
    const { fontStyleBold } = useFontStyles();
    const {
        label,
        fontColor,
        backgroundColor,
        size = 40,
        styles = {},
        style,
        theme: themeOverride,
        ...otherViewProps
    } = props;

    const theme = useExtendedTheme(themeOverride || props.theme || defaultTheme);

    // Define styles for Avatar.Text component

    const avatarStyle = {
        backgroundColor: backgroundColor || theme.colors.primary,
    };

    // Define styles for text within Avatar.Text
    const textStyle = {
        color: fontColor || theme.colors.onPrimary,
        ...fontStyleBold,
    };

    return (
        <Avatar.Text
            label={label}
            style={[avatarStyle, styles.root, style]}
            color={fontColor}
            labelStyle={textStyle}
            size={size}
            testID="grade"
            {...otherViewProps}
        />
    );
};

/**
 * A component used to render an A+ Grade
 */
// const theme = useGradeTheme();
const APlus = (props: FixedGradeProps): React.JSX.Element => {
    const theme = useExtendedTheme();
    return (
        <GradeBase
            label={'A+'}
            fontColor={theme.colors.onSuccessFilledContainer}
            backgroundColor={theme.colors.successFilledContainer}
            {...props}
        />
    );
};
GradeBase.APlus = APlus;
/**
 * A component used to render an A Grade
 */
const A = (props: FixedGradeProps): React.JSX.Element => {
    const theme = useExtendedTheme();
    return (
        <GradeBase
            label={'A'}
            fontColor={theme.colors.onSuccessFilledContainer}
            backgroundColor={theme.colors.successFilledContainer}
            {...props}
        />
    );
};
GradeBase.A = A;
/**
 * A component used to render an A- Grade
 */
const AMinus = (props: FixedGradeProps): React.JSX.Element => {
    const theme = useExtendedTheme();
    return (
        <GradeBase
            label={'A-'}
            fontColor={theme.colors.onSuccessFilledContainer}
            backgroundColor={mixColors(
                theme.colors.warningFilledContainer,
                theme.colors.successFilledContainer,
                33,
                67
            )}
            {...props}
        />
    );
};
GradeBase.AMinus = AMinus;
/**
 * A component used to render a B+ Grade"
 */
const BPlus = (props: FixedGradeProps): React.JSX.Element => {
    const theme = useExtendedTheme();
    return (
        <GradeBase
            label={'B+'}
            fontColor={theme.colors.onWarningFilledContainer}
            backgroundColor={mixColors(
                theme.colors.warningFilledContainer,
                theme.colors.successFilledContainer,
                67,
                33
            )}
            {...props}
        />
    );
};
GradeBase.BPlus = BPlus;
/**
 * A component used to render a B Grade
 */
const B = (props: FixedGradeProps): React.JSX.Element => {
    const theme = useExtendedTheme();
    return (
        <GradeBase
            label={'B'}
            fontColor={theme.colors.onWarningFilledContainer}
            backgroundColor={theme.colors.warningFilledContainer}
            {...props}
        />
    );
};
GradeBase.B = B;
/**
 * A component used to render a B- Grade
 */
const BMinus = (props: FixedGradeProps): React.JSX.Element => {
    const theme = useExtendedTheme();
    return (
        <GradeBase
            label={'B-'}
            fontColor={theme.colors.onWarningFilledContainer}
            backgroundColor={mixColors(theme.colors.orangeFilledContainer, theme.colors.warningFilledContainer, 33, 67)}
            {...props}
        />
    );
};
GradeBase.BMinus = BMinus;
/**
 * A component used to render a C+ Grade
 */
const CPlus = (props: FixedGradeProps): React.JSX.Element => {
    const theme = useExtendedTheme();
    return (
        <GradeBase
            label={'C+'}
            fontColor={theme.colors.onOrangeFilledContainer}
            backgroundColor={mixColors(theme.colors.orangeFilledContainer, theme.colors.warningFilledContainer, 67, 33)}
            {...props}
        />
    );
};
GradeBase.CPlus = CPlus;
/**
 * A component used to render a C Grade
 */
const C = (props: FixedGradeProps): React.JSX.Element => {
    const theme = useExtendedTheme();
    return (
        <GradeBase
            label={'C'}
            fontColor={theme.colors.onOrangeFilledContainer}
            backgroundColor={theme.colors.orangeFilledContainer}
            {...props}
        />
    );
};
GradeBase.C = C;
/**
 * A component used to render a C- Grade
 */
const CMinus = (props: FixedGradeProps): React.JSX.Element => {
    const theme = useExtendedTheme();
    return (
        <GradeBase
            label={'C-'}
            fontColor={theme.colors.onOrangeFilledContainer}
            backgroundColor={mixColors(theme.colors.errorFilledContainer, theme.colors.orangeFilledContainer, 33, 67)}
            {...props}
        />
    );
};
GradeBase.CMinus = CMinus;
/**
 * A component used to render a D+ Grade
 */
const DPlus = (props: FixedGradeProps): React.JSX.Element => {
    const theme = useExtendedTheme();
    return (
        <GradeBase
            label={'D+'}
            fontColor={theme.colors.onErrorFilledContainer}
            backgroundColor={mixColors(theme.colors.errorFilledContainer, theme.colors.orangeFilledContainer, 67, 33)}
            {...props}
        />
    );
};
GradeBase.DPlus = DPlus;
/**
 * A component used to render a D Grade
 */
const D = (props: FixedGradeProps): React.JSX.Element => {
    const theme = useExtendedTheme();
    return (
        <GradeBase
            label={'D'}
            fontColor={theme.colors.onErrorFilledContainer}
            backgroundColor={theme.colors.errorFilledContainer}
            {...props}
        />
    );
};
GradeBase.D = D;
/**
 * A component used to render a D- Grade
 */
const DMinus = (props: FixedGradeProps): React.JSX.Element => {
    const theme = useExtendedTheme();
    return (
        <GradeBase
            label={'D-'}
            fontColor={theme.colors.onErrorFilledContainer}
            backgroundColor={theme.colors.errorFilledContainer}
            {...props}
        />
    );
};
GradeBase.DMinus = DMinus;
/**
 * A component used to render an F Grade
 */
const F = (props: FixedGradeProps): React.JSX.Element => {
    const theme = useExtendedTheme();
    return (
        <GradeBase
            label={'F'}
            fontColor={theme.colors.onPurpleFilledContainer}
            backgroundColor={theme.colors.purpleFilledContainer}
            {...props}
        />
    );
};
GradeBase.F = F;

/**
 * A component used to render a score/grade inside of an Avatar. Includes several sub-components with predefined styles for several common grades.
 */
export const Grade = GradeBase;

/**
 * A component used to render a score/grade inside of an Avatar. Includes several sub-components with predefined styles for several common grades.
 */
export default Grade;
