import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { Icon } from '@brightlayer-ui/react-native-components';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';
const makeStyles = () =>
    StyleSheet.create({
        label: {
            marginLeft: 8,
        },
    });
/**
 * Component to update password requirements.
 *
 * @param {PasswordRequirementsCheckProps} props - props of PasswordRequirementsCheck component
 *
 * @category Component
 */
export const PasswordRequirementsCheck = ({ isChecked, label }) => {
    const theme = useExtendedTheme();
    const defaultStyle = makeStyles();
    return _jsxs(View, {
        style: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
        children: [
            _jsx(Icon, { source: { name: 'check' }, color: isChecked ? theme.colors.primary : theme.colors.disabled }),
            _jsx(Text, { variant: 'bodySmall', style: defaultStyle.label, children: label }),
        ],
    });
};
