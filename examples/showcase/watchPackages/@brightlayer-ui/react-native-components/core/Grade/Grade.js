/**
 * @format
 * @flow
 */
import React from 'react';
import {Avatar} from 'react-native-paper';
import {useExtendedTheme} from '@brightlayer-ui/react-native-themes';
import {useFontStyles} from '../Utility/shared.js';
const hexToRgb = hex => {
  const hexcode = hex.replace('#', '');
  const bigint = parseInt(hexcode, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
};
const mixColors = (
  color1,
  color2,
  percentage1,
  percentage2,
  transparency = 1.0,
) => {
  if (
    percentage1 < 0 ||
    percentage1 > 100 ||
    percentage2 < 0 ||
    percentage2 > 100
  ) {
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
const GradeBase = props => {
  const defaultTheme = useExtendedTheme();
  const {fontStyleBold} = useFontStyles();
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
  return React.createElement(Avatar.Text, {
    label: label,
    style: [avatarStyle, styles.root, style],
    color: fontColor,
    labelStyle: textStyle,
    size: size,
    testID: 'grade',
    ...otherViewProps,
  });
};
/**
 * A component used to render an A+ Grade
 */
// const theme = useGradeTheme();
const APlus = props => {
  const theme = useExtendedTheme();
  return React.createElement(GradeBase, {
    label: 'A+',
    fontColor: theme.colors.onSuccessFilledContainer,
    backgroundColor: theme.colors.successFilledContainer,
    ...props,
  });
};
GradeBase.APlus = APlus;
/**
 * A component used to render an A Grade
 */
const A = props => {
  const theme = useExtendedTheme();
  return React.createElement(GradeBase, {
    label: 'A',
    fontColor: theme.colors.onSuccessFilledContainer,
    backgroundColor: theme.colors.successFilledContainer,
    ...props,
  });
};
GradeBase.A = A;
/**
 * A component used to render an A- Grade
 */
const AMinus = props => {
  const theme = useExtendedTheme();
  return React.createElement(GradeBase, {
    label: 'A-',
    fontColor: theme.colors.onSuccessFilledContainer,
    backgroundColor: mixColors(
      theme.colors.warningFilledContainer,
      theme.colors.successFilledContainer,
      33,
      67,
    ),
    ...props,
  });
};
GradeBase.AMinus = AMinus;
/**
 * A component used to render a B+ Grade"
 */
const BPlus = props => {
  const theme = useExtendedTheme();
  return React.createElement(GradeBase, {
    label: 'B+',
    fontColor: theme.colors.onWarningFilledContainer,
    backgroundColor: mixColors(
      theme.colors.warningFilledContainer,
      theme.colors.successFilledContainer,
      67,
      33,
    ),
    ...props,
  });
};
GradeBase.BPlus = BPlus;
/**
 * A component used to render a B Grade
 */
const B = props => {
  const theme = useExtendedTheme();
  return React.createElement(GradeBase, {
    label: 'B',
    fontColor: theme.colors.onWarningFilledContainer,
    backgroundColor: theme.colors.warningFilledContainer,
    ...props,
  });
};
GradeBase.B = B;
/**
 * A component used to render a B- Grade
 */
const BMinus = props => {
  const theme = useExtendedTheme();
  return React.createElement(GradeBase, {
    label: 'B-',
    fontColor: theme.colors.onWarningFilledContainer,
    backgroundColor: mixColors(
      theme.colors.orangeFilledContainer,
      theme.colors.warningFilledContainer,
      33,
      67,
    ),
    ...props,
  });
};
GradeBase.BMinus = BMinus;
/**
 * A component used to render a C+ Grade
 */
const CPlus = props => {
  const theme = useExtendedTheme();
  return React.createElement(GradeBase, {
    label: 'C+',
    fontColor: theme.colors.onOrangeFilledContainer,
    backgroundColor: mixColors(
      theme.colors.orangeFilledContainer,
      theme.colors.warningFilledContainer,
      67,
      33,
    ),
    ...props,
  });
};
GradeBase.CPlus = CPlus;
/**
 * A component used to render a C Grade
 */
const C = props => {
  const theme = useExtendedTheme();
  return React.createElement(GradeBase, {
    label: 'C',
    fontColor: theme.colors.onOrangeFilledContainer,
    backgroundColor: theme.colors.orangeFilledContainer,
    ...props,
  });
};
GradeBase.C = C;
/**
 * A component used to render a C- Grade
 */
const CMinus = props => {
  const theme = useExtendedTheme();
  return React.createElement(GradeBase, {
    label: 'C-',
    fontColor: theme.colors.onOrangeFilledContainer,
    backgroundColor: mixColors(
      theme.colors.errorFilledContainer,
      theme.colors.orangeFilledContainer,
      33,
      67,
    ),
    ...props,
  });
};
GradeBase.CMinus = CMinus;
/**
 * A component used to render a D+ Grade
 */
const DPlus = props => {
  const theme = useExtendedTheme();
  return React.createElement(GradeBase, {
    label: 'D+',
    fontColor: theme.colors.onErrorFilledContainer,
    backgroundColor: mixColors(
      theme.colors.errorFilledContainer,
      theme.colors.orangeFilledContainer,
      67,
      33,
    ),
    ...props,
  });
};
GradeBase.DPlus = DPlus;
/**
 * A component used to render a D Grade
 */
const D = props => {
  const theme = useExtendedTheme();
  return React.createElement(GradeBase, {
    label: 'D',
    fontColor: theme.colors.onErrorFilledContainer,
    backgroundColor: theme.colors.errorFilledContainer,
    ...props,
  });
};
GradeBase.D = D;
/**
 * A component used to render a D- Grade
 */
const DMinus = props => {
  const theme = useExtendedTheme();
  return React.createElement(GradeBase, {
    label: 'D-',
    fontColor: theme.colors.onErrorFilledContainer,
    backgroundColor: theme.colors.errorFilledContainer,
    ...props,
  });
};
GradeBase.DMinus = DMinus;
/**
 * A component used to render an F Grade
 */
const F = props => {
  const theme = useExtendedTheme();
  return React.createElement(GradeBase, {
    label: 'F',
    fontColor: theme.colors.onPurpleFilledContainer,
    backgroundColor: theme.colors.purpleFilledContainer,
    ...props,
  });
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
