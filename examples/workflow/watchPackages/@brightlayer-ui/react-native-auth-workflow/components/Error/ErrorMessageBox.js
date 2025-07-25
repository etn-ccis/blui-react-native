import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';
import Icon from 'react-native-vector-icons/MaterialIcons.js';
const makeStyles = (theme, props, dismissible) =>
    StyleSheet.create({
        errorMessageBox: {
            width: '100%',
            backgroundColor: props.backgroundColor ?? theme.colors.error,
            borderRadius: 16,
            padding: 16,
            marginVertical: 8,
            display: 'flex',
            flexDirection: dismissible ? 'row-reverse' : undefined,
            justifyContent: 'space-between',
        },
        title: {
            color: props.fontColor ?? theme.colors.onError,
        },
        message: {
            color: props.fontColor ?? theme.colors.onError,
        },
        icon: {
            color: props.fontColor ?? theme.colors.onError,
        },
    });
/**
 * Component that renders a basic message box with an error message and a configurable dismiss button
 *
 * @param {ErrorMessageBoxProps} props - Props of Error Message Box
 *
 * @category Component
 */
export const ErrorMessageBox = (props) => {
    const { title, errorMessage, dismissible = true, onClose = () => {}, style } = props;
    const theme = useExtendedTheme();
    const defaultStyles = makeStyles(theme, props, dismissible);
    return _jsxs(View, {
        style: [defaultStyles.errorMessageBox, style],
        children: [
            dismissible &&
                // @ts-ignore
                _jsx(Icon, {
                    testID: 'blui-error-message-box-close-icon',
                    name: 'close',
                    size: 20,
                    // @ts-ignore
                    style: [defaultStyles.icon],
                    onPress: () => {
                        onClose();
                    },
                }),
            _jsxs(View, {
                children: [
                    _jsx(Text, { style: [defaultStyles.title], variant: 'titleMedium', children: title }),
                    _jsx(Text, { style: [defaultStyles.message], variant: 'bodyMedium', children: errorMessage }),
                ],
            }),
        ],
    });
};
