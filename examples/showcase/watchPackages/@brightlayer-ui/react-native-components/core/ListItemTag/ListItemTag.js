import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { useFontScale } from '../__contexts__/font-scale-context.js';
import { calculateHeight, useFontStyles } from '../Utility/shared.js';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';
const listItemTagStyles = (props, theme, fontScale, fontSize, fontStyleBold) => StyleSheet.create({
    root: {
        backgroundColor: props.backgroundColor || theme.colors.primaryFilledContainer,
        color: props.fontColor || theme.colors.onPrimaryFilledContainer,
        height: calculateHeight(fontSize) * fontScale,
        padding: 0,
        paddingLeft: 4 * fontScale,
        paddingRight: 3 * fontScale, // to account for the 1px letter spacing on the last letter
        borderRadius: 4 * fontScale,
        ...fontStyleBold,
        overflow: 'hidden',
        lineHeight: calculateHeight(fontSize),
        fontSize,
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
});
/**
 * [ListItemTag](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--list-item-tag) component
 *
 * This component is primarily used as a tag for list elements. It is a stylized
 * text item with a colored background and rounded corners.
 */
export const ListItemTag = (props) => {
    const { label, style, styles = {}, theme: themeOverride, 
    /* eslint-disable @typescript-eslint/no-unused-vars */
    fontColor, backgroundColor, 
    /* eslint-enable @typescript-eslint/no-unused-vars */
    ...otherTextProps } = props;
    const { fontStyleBold } = useFontStyles();
    const theme = useExtendedTheme(themeOverride);
    const fontScale = useFontScale();
    const defaultStyles = listItemTagStyles(props, theme, fontScale, props.fontSize || 10, fontStyleBold);
    return (React.createElement(Text, { variant: 'bodyMedium', style: [defaultStyles.root, styles.root, style], ...otherTextProps }, label));
};
ListItemTag.displayName = 'ListItemTag';
