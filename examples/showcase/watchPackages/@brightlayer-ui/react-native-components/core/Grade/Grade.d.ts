/**
 * @format
 * @flow
 */
import React from 'react';
import { StyleProp, ViewProps, ViewStyle } from 'react-native';
import { $DeepPartial } from '@callstack/react-theme-provider';
import { ExtendedTheme } from '@brightlayer-ui/react-native-themes';
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
/**
 * A component used to render a score/grade inside of an Avatar. Includes several sub-components with predefined styles for several common grades.
 */
export declare const Grade: {
    (props: GradeProps): React.JSX.Element;
    APlus: (props: FixedGradeProps) => React.JSX.Element;
    A: (props: FixedGradeProps) => React.JSX.Element;
    AMinus: (props: FixedGradeProps) => React.JSX.Element;
    BPlus: (props: FixedGradeProps) => React.JSX.Element;
    B: (props: FixedGradeProps) => React.JSX.Element;
    BMinus: (props: FixedGradeProps) => React.JSX.Element;
    CPlus: (props: FixedGradeProps) => React.JSX.Element;
    C: (props: FixedGradeProps) => React.JSX.Element;
    CMinus: (props: FixedGradeProps) => React.JSX.Element;
    DPlus: (props: FixedGradeProps) => React.JSX.Element;
    D: (props: FixedGradeProps) => React.JSX.Element;
    DMinus: (props: FixedGradeProps) => React.JSX.Element;
    F: (props: FixedGradeProps) => React.JSX.Element;
};
/**
 * A component used to render a score/grade inside of an Avatar. Includes several sub-components with predefined styles for several common grades.
 */
export default Grade;
