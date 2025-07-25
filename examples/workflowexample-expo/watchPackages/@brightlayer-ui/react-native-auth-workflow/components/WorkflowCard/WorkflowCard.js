import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { useScreenDimensions } from '../../hooks/useScreenDimensions.js';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Spinner } from '../Spinner/index.js';
import { WorkflowCardHeader } from './WorkflowCardHeader.js';
const defaultImage = require('../../assets/images/background.png');
const MAX_CARD_HEIGHT = 730;
const MAX_CARD_WIDTH = 450;
const makeStyles = ({ insets, theme }) =>
    StyleSheet.create({
        mobile: {
            paddingBottom: insets.bottom,
            height: '100%',
            width: '100%',
            borderRadius: 0,
        },
        tablet: {
            height: MAX_CARD_HEIGHT,
            width: MAX_CARD_WIDTH,
            borderRadius: theme.roundness * 6,
            overflow: 'hidden',
        },
    });
function hasWorkflowCardHeaderRecursive(children) {
    return React.Children.toArray(children).some((child) => child.type === WorkflowCardHeader);
}
/**
 * Component that renders the workflow card that is used for all screen components.
 *
 * @param {WorkflowCardBaseProps} props - Props of WorkflowCardBase component
 *
 * @category Component
 */
export const WorkflowCard = (props) => {
    const { loading, backgroundImage, children, style, ...otherImageProps } = props;
    const theme = useExtendedTheme();
    const { isTablet, width, height } = useScreenDimensions();
    const hasWorkflowCardHeader = hasWorkflowCardHeaderRecursive(children);
    const insets = useSafeAreaInsets();
    const styles = makeStyles({ insets, theme });
    return _jsx(ImageBackground, {
        source: backgroundImage ?? defaultImage,
        resizeMode: 'repeat',
        style: [
            {
                flex: 1,
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: isTablet ? 'center' : 'stretch',
                backgroundColor: theme.colors.primary,
            },
            ...(Array.isArray(style) ? style : [style]),
        ],
        ...otherImageProps,
        children: _jsxs(Card, {
            style: {
                maxHeight: height,
                maxWidth: width,
                borderRadius: isTablet ? theme.roundness * 6 : 0,
            },
            contentStyle: [
                isTablet ? styles.tablet : styles.mobile,
                {
                    backgroundColor: theme.colors.surfaceContainer,
                    paddingTop: !isTablet && !hasWorkflowCardHeader ? insets.top : 0,
                    position: 'relative',
                },
            ],
            children: [children, loading && _jsx(Spinner, { visible: loading })],
        }),
    });
};
