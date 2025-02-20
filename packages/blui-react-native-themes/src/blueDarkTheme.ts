/**
Copyright (c) 2020-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import { MD3DarkTheme, configureFonts } from 'react-native-paper';
import { fontConfig } from './shared';
import BLUIColors from '@brightlayer-ui/colors';
import Color from 'color';

export const MD3BluiDarkTheme = {
    ...MD3DarkTheme,
    fonts: configureFonts({ config: fontConfig }),
    colors: {
        ...MD3DarkTheme.colors,
        // React Native Paper default theme color variants
        primary: BLUIColors.primary[80],
        onPrimary: BLUIColors.primary[20],
        primaryContainer: BLUIColors.primary[30],
        onPrimaryContainer: BLUIColors.primary[90],
        secondary: BLUIColors.primary[80],
        onSecondary: BLUIColors.primary[20],
        secondaryContainer: BLUIColors.primary[30],
        onSecondaryContainer: BLUIColors.primary[90],
        tertiary: BLUIColors.primary[80],
        onTertiary: BLUIColors.primary[20],
        tertiaryContainer: BLUIColors.primary[30],
        onTertiaryContainer: BLUIColors.primary[90],
        error: BLUIColors.error[80],
        onError: BLUIColors.error[20],
        errorContainer: BLUIColors.error[30],
        onErrorContainer: BLUIColors.error[90],
        background: BLUIColors.neutral[6],
        onBackground: BLUIColors.neutral[95],
        surface: BLUIColors.neutral[6],
        onSurface: BLUIColors.neutral[95],
        surfaceVariant: BLUIColors.neutralVariant[30],
        onSurfaceVariant: BLUIColors.neutralVariant[70],
        outline: BLUIColors.neutralVariant[60],
        outlineVariant: Color(BLUIColors.neutralVariant[60]).alpha(0.25).rgb().string(),
        shadow: BLUIColors.primary[0],
        scrim: BLUIColors.primary[0],
        inverseSurface: BLUIColors.neutral[90],
        inverseOnSurface: BLUIColors.neutral[10],
        inversePrimary: BLUIColors.primary[40],
        elevation: {
            level0: 'transparent',
            // level1 is the same as surfaceContainerLowest in design files
            level1: BLUIColors.neutral[4],
            // level2 is the same as surfaceContainerLow in design files
            level2: BLUIColors.neutral[10],
            // level3 is the same as surfaceContainer in design files
            level3: BLUIColors.neutral[12],
            // level4 is the same as surfaceContainerHigh in design files
            level4: BLUIColors.neutral[17],
            // level5 is the same as surfaceContainerHighest in design files
            level5: BLUIColors.neutral[20],
        },
        // surfaceDisabled is the same as disabledContainer in design files
        surfaceDisabled: Color(BLUIColors.neutral[95]).alpha(0.1).rgb().string(),
        // onSurfaceDisabled is the same as onDisabledContainer in design files
        onSurfaceDisabled: Color(BLUIColors.neutral[95]).alpha(0.15).rgb().string(),
        backdrop: Color(BLUIColors.primary[0]).alpha(0.32).rgb().string(),

        // Custom color variants
        // High-emphasis primary non-text variant, can be used on non-text elements like icons
        primaryNonText: BLUIColors.primary[60],
        // Attention-grabbing error color can be used on non-text elements like icons, which communicate error states
        errorNonText: BLUIColors.error[60],
        // variant used to render disabled elements
        disabled: Color(BLUIColors.neutral[95]).alpha(0.25).rgb().string(),
        // warning variant fills, texts, and icons which communicate warning states
        warning: BLUIColors.warning[90],
        // can be used on non-text warning elements like icons
        warningNonText: BLUIColors.warning[80],
        // can be used on warning text and icons against warning
        onWarning: BLUIColors.warning[20],
        // Standout fill warning color against surface
        warningContainer: BLUIColors.warning[30],
        // Text and icons against warning container
        onWarningContainer: BLUIColors.warning[90],
        // success color variant fills, texts, and icons which communicate success states
        success: BLUIColors.success[80],
        // can be used on non-text success elements like icons
        successNonText: BLUIColors.success[70],
        // can be used on success text and icons against success
        onSuccess: BLUIColors.success[20],
        // Standout fill success color against surface
        successContainer: BLUIColors.success[30],
        // Text and icons against success container
        onSuccessContainer: BLUIColors.success[90],
        // orange color variant fills, texts, and icons
        orange: BLUIColors.orange[80],
        // non-text orange variant can be used on non-text elements like icons
        orangeNonText: BLUIColors.orange[70],
        // can be used on text and icons against orange
        onOrange: BLUIColors.orange[20],
        // Standout fill orange color against surface
        orangeContainer: BLUIColors.orange[30],
        // Text and icons against orange container
        onOrangeContainer: BLUIColors.orange[90],
        // purple color variant fills, texts, and icons
        purple: BLUIColors.purple[80],
        // non-text purple variant can be used on non-text elements like icons
        purpleNonText: BLUIColors.purple[60],
        // can be used on text and icons against purple
        onPurple: BLUIColors.purple[20],
        // Standout fill purple color against surface
        purpleContainer: BLUIColors.purple[30],
        // Text and icons against purple container
        onPurpleContainer: BLUIColors.purple[90],
        // Surface container is the default role, but the others are especially helpful for creating hierarchy and nested containers
        // Lowest-emphasis container color
        surfaceContainerLowest: BLUIColors.neutral[4],
        // Low-emphasis container color
        surfaceContainerLow: BLUIColors.neutral[10],
        // Default container color
        surfaceContainer: BLUIColors.neutral[12],
        // High-emphasis container color
        surfaceContainerHigh: BLUIColors.neutral[17],
        // Highest-emphasis container color
        surfaceContainerHighest: BLUIColors.neutral[20],
        // This is alias for surface disabled, used as disabled container background
        disabledContainer: Color(BLUIColors.neutral[95]).alpha(0.1).rgb().string(),
        // Text and icons against disable container
        onDisabledContainer: Color(BLUIColors.neutral[95]).alpha(0.15).rgb().string(),
        // Can be used on slider and range selector track
        sliderTrack: BLUIColors.neutral[30],
        // Disabled version of slider track color variant
        sliderTrackDisabled: Color(BLUIColors.neutral[30]).alpha(0.5).rgb().string(),
        // Attention-grabbing color against error filled surface
        errorFilledContainer: BLUIColors.error[40],
        // Text and icons against error filled container
        onErrorFilledContainer: BLUIColors.error[100],
        // Attention-grabbing color against error shaded surface
        errorShadedContainer: Color(BLUIColors.error[40]).alpha(0.3).rgb().string(),
        // Text and icons against error shaded container
        onErrorShadedContainer: BLUIColors.error[80],
        // Attention-grabbing color against error outlined container
        errorOutlinedContainerOutline: BLUIColors.error[60],
        // Text and icons against error outlined container
        onErrorOutlinedContainerOutline: BLUIColors.error[80],
        // Orange color against orange filled surface
        orangeFilledContainer: BLUIColors.orange[70],
        // Text and icons against orange filled container
        onOrangeFilledContainer: BLUIColors.orange[20],
        // Orange color against orange shaded surface
        orangeShadedContainer: Color(BLUIColors.orange[70]).alpha(0.15).rgb().string(),
        // Text and icons against orange shaded container
        onOrangeShadedContainer: BLUIColors.orange[80],
        // Orange color against orange outlined surface
        orangeOutlinedContainer: BLUIColors.orange[70],
        // Text and icons against orange outlined container
        onOrangeOutlinedContainer: BLUIColors.orange[80],
        // Warning color against warning filled surface
        warningFilledContainer: BLUIColors.warning[80],
        // Text and icons against warning filled container
        onWarningFilledContainer: BLUIColors.warning[30],
        // Warning color against warning shaded surface
        warningShadedContainer: Color(BLUIColors.warning[90]).alpha(0.1).rgb().string(),
        // Text and icons against warning shaded container
        onWarningShadedContainer: BLUIColors.warning[90],
        // Warning color against warning outlined container surface
        warningOutlinedContainerOutline: BLUIColors.warning[90],
        // Text and icons against warning outlined container surface
        onWarningOutlinedContainer: BLUIColors.warning[90],
        // Attention-grabbing color against success filled container
        successFilledContainer: BLUIColors.success[50],
        // Text and icons against success filled container
        onSuccessFilledContainer: BLUIColors.success[100],
        // Attention-grabbing color against success shaded surface
        successShadedContainer: Color(BLUIColors.success[40]).alpha(0.3).rgb().string(),
        // Attention-grabbing label color against success shaded surface
        successShadedLabel: BLUIColors.success[90],
        // Attention-grabbing color against success container
        successOutlinedContainerOutline: BLUIColors.success[70],
        // Text and icons against success outlined container
        onSuccessOutlinedContainer: BLUIColors.success[80],
        // Primary color against primary filled surface
        primaryFilledContainer: BLUIColors.primary[50],
        // Text and icons against primary filled container
        onPrimaryFilledContainer: BLUIColors.primary[100],
        // Primary color against primary shaded surface
        primaryShadedContainer: Color(BLUIColors.primary[40]).alpha(0.4).rgb().string(),
        // Text and icons against primary shaded container
        onPrimaryShadedContainer: BLUIColors.primary[80],
        // Primary color against primary outlined container
        primaryOutlinedContainerOutline: BLUIColors.primary[60],
        // Text and icons against primary outlined container
        onPrimaryOutlinedContainer: BLUIColors.primary[70],
        // Purple color against purple filled surface
        purpleFilledContainer: BLUIColors.purple[50],
        // Text and icons against purple filled container
        onPurpleFilledContainer: BLUIColors.purple[100],
        // Purple color against purple shaded surface
        purpleShadedContainer: Color(BLUIColors.purple[40]).alpha(0.4).rgb().string(),
        // Text and icons against purple shaded container
        onPurpleShadedContainer: BLUIColors.purple[80],
        // Purple color against purple outlined container
        purpleOutlinedContainerOutline: BLUIColors.purple[50],
        // Text and icons against purple outlined container
        onPurpleOutlinedContainer: BLUIColors.purple[70],
        // Neutral color against neutral filled surface
        neutralFilledContainer: BLUIColors.neutral[50],
        // Text and icons against neutral filled container
        onNeutralFilledContainer: BLUIColors.neutral[100],
        // Neutral color against neutral shaded surface
        neutralShadedContainer: Color(BLUIColors.neutral[50]).alpha(0.4).rgb().string(),
        // Text and icons against neutral shaded container
        onNeutralShadedContainer: BLUIColors.neutral[80],
        // Neutral color against neutral outlined container
        neutralOutlinedContainerOutline: BLUIColors.neutralVariant[60],
        // Text and icons against Neutral outlined container
        onNeutralOutlinedContainer: BLUIColors.neutralVariant[70],
        // Standout fill text field color against surface
        textFieldContainer: Color(BLUIColors.neutral[80]).alpha(0.2).rgb().string(),
        // Progress bar track on status color against filled surface
        progressBarTrackOnStatusFilledContainer: Color(BLUIColors.primary[0]).alpha(0.25).rgb().string(),
        // Text outline color variant
        mapTextOutline: Color(BLUIColors.primary[0]).alpha(0.7).rgb().string(),
    },
};
