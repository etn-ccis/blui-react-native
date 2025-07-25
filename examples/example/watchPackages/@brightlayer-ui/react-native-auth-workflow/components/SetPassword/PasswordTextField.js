import { jsx as _jsx } from 'react/jsx-runtime';
import { forwardRef, useState } from 'react';
import { TextInput } from 'react-native-paper';
/**
 * Component that renders textfield with a visibility toggle. The toggle changes the
 * input from hidden to visible.
 *
 * @param {TextInputProps} props - all props will be passed to the underlying TextField component
 *
 * @category Component
 */
export const PasswordTextField = forwardRef((props, ref) => {
    const { ...otherProps } = props;
    const [showPassword, setShowPassword] = useState(false);
    return _jsx(TextInput, {
        ref: ref,
        testID: 'blui-password-text-field',
        secureTextEntry: !showPassword,
        mode: 'flat',
        label: 'Password',
        right: _jsx(TextInput.Icon, {
            testID: 'blui-password-text-field-toggle-button',
            icon: showPassword ? 'eye' : 'eye-off',
            onPress: () => setShowPassword(!showPassword),
        }),
        ...otherProps,
    });
});
