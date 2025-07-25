import React from 'react';
import { StyleSheet, View } from 'react-native';
const spacerStyles = (props, flex) => StyleSheet.create({
    root: {
        flex: flex,
        height: props.height || 'auto',
        width: props.width || 'auto',
    },
});
/**
 * [Spacer](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--spacer) component
 *
 * This is a helpful utility component for adding spacer elements
 * when working within flexbox containers. You can give it a flexible
 * or a fixed size.
 */
export const Spacer = (props) => {
    const { children, style, styles = {}, 
    // ignore unused vars so that we can do prop transferring to the root element
    /* eslint-disable @typescript-eslint/no-unused-vars */
    flex = 1, height, width, 
    /* eslint-enable @typescript-eslint/no-unused-vars */
    ...otherViewProps } = props;
    const defaultStyles = spacerStyles(props, flex);
    return (React.createElement(View, { testID: 'spacer-root', style: [defaultStyles.root, styles.root, style], ...otherViewProps }, children));
};
Spacer.displayName = 'Spacer';
