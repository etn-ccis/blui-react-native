import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback, useEffect } from 'react';
import PasswordRequirements from './PasswordRequirements.js';
import { HelperText } from 'react-native-paper';
import { useScreenDimensions } from '../../hooks/useScreenDimensions.js';
import { StyleSheet } from 'react-native';
import { defaultPasswordRequirements } from '../../constants/index.js';
import { useTranslation } from 'react-i18next';
import { PasswordTextField } from './PasswordTextField.js';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';
const makeStyles = (isTablet, theme) => StyleSheet.create({
    passwordRequirementContainer: {
        marginTop: 8,
        marginBottom: isTablet ? 32 : 24,
    },
    errorHelperText: { marginBottom: 8 },
    successHelperText: { marginBottom: 8, color: theme.colors.success },
});
/**
 * Component that renders a change password form with a new password and confirm password inputs.
 * It includes callbacks so you can respond to changes in the inputs.
 *
 * @param {SetPasswordProps} props - props of SetPassword component
 *
 * @category Component
 */
export const SetPassword = (props) => {
    const { newPasswordLabel = 'Password', initialNewPasswordValue = '', confirmPasswordLabel = 'Confirm', initialConfirmPasswordValue = '', passwordRequirements, onPasswordChange, children, passwordRef, confirmRef, passwordNotMatchError, onSubmit, passwordTextFieldProps, confirmPasswordTextFieldProps, } = props;
    const { t } = useTranslation();
    // Local State
    const [passwordInput, setPasswordInput] = useState(initialNewPasswordValue);
    const [confirmInput, setConfirmInput] = useState(initialConfirmPasswordValue);
    const { isTablet } = useScreenDimensions();
    const theme = useExtendedTheme();
    const defaultStyle = makeStyles(isTablet, theme);
    useEffect(() => {
        setPasswordInput(initialNewPasswordValue);
        setConfirmInput(initialConfirmPasswordValue);
    }, [initialNewPasswordValue, initialConfirmPasswordValue]);
    const onPassChange = useCallback((newPassword) => {
        setPasswordInput(newPassword);
        onPasswordChange?.({ password: newPassword, confirm: confirmInput });
    }, [setPasswordInput, onPasswordChange, confirmInput]);
    const onConfirmChange = useCallback((newConfirm) => {
        setConfirmInput(newConfirm);
        onPasswordChange?.({ password: passwordInput, confirm: newConfirm });
    }, [setConfirmInput, onPasswordChange, passwordInput]);
    const hasConfirmPasswordError = useCallback(() => passwordInput.length !== 0 && confirmInput.length !== 0 && confirmInput !== passwordInput, [confirmInput, passwordInput]);
    const isValidPassword = useCallback(() => {
        const requirementsToCheck = passwordRequirements ?? defaultPasswordRequirements(t);
        for (const req of requirementsToCheck) {
            if (!new RegExp(req.regex).test(passwordInput))
                return false;
        }
        return true;
    }, [passwordRequirements, t, passwordInput]);
    return (_jsxs(_Fragment, { children: [children, _jsx(PasswordTextField, { testID: "blui-set-password-password-text-field", label: newPasswordLabel, value: passwordInput, ref: passwordRef, error: passwordInput !== '' && !isValidPassword(), ...passwordTextFieldProps, onChangeText: (text) => {
                    passwordTextFieldProps?.onChangeText?.(text);
                    onPassChange(text);
                }, returnKeyType: "next" // Show "next" button on keyboard
                , onSubmitEditing: () => confirmRef?.current?.focus() }), _jsx(PasswordRequirements, { passwordText: passwordInput, passwordRequirements: passwordRequirements, style: defaultStyle.passwordRequirementContainer }), _jsx(PasswordTextField, { testID: "blui-set-password-confirm-password-text-field", label: confirmPasswordLabel, value: confirmInput, ref: confirmRef, error: hasConfirmPasswordError(), ...confirmPasswordTextFieldProps, onChangeText: (text) => {
                    confirmPasswordTextFieldProps?.onChangeText?.(text);
                    onConfirmChange(text);
                }, returnKeyType: "done" // Show "next" button on keyboard
                , onSubmitEditing: () => {
                    if (!hasConfirmPasswordError() && isValidPassword() && onSubmit)
                        onSubmit();
                } }), hasConfirmPasswordError() && (_jsx(HelperText, { type: "error", visible: hasConfirmPasswordError(), style: defaultStyle.errorHelperText, children: passwordNotMatchError ?? t('bluiCommon:FORMS.PASS_MATCH_ERROR') })), !hasConfirmPasswordError() && confirmInput !== '' && confirmInput === passwordInput && (_jsx(HelperText, { type: "info", visible: !hasConfirmPasswordError() && confirmInput !== '' && confirmInput === passwordInput, style: defaultStyle.successHelperText, children: t('bluiCommon:FORMS.PASS_MATCH') }))] }));
};
