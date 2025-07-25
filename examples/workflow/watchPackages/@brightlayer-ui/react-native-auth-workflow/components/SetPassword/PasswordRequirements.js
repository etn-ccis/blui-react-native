import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import { defaultPasswordRequirements } from '../../constants/index.js';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { PasswordRequirementsCheck } from './PasswordRequirementsCheck.js';
/**
 * Component to update password requirements.
 *
 * @param {PasswordRequirementsProps} props - props of PasswordRequirements component
 *
 * @category Component
 */
export const PasswordRequirements = (props) => {
    const { t } = useTranslation();
    const { passwordText, passwordRequirements = defaultPasswordRequirements(t), style, ...otherProps } = props;
    useEffect(() => {
        // Ensure password requirements are translated if necessary
        passwordRequirements.forEach((req) => (req.description = t(req.description)));
    }, [t, passwordRequirements]);
    return (_jsx(View, { style: style, ...otherProps, children: passwordRequirements.map((req, ind) => (_jsx(PasswordRequirementsCheck, { label: req.description, isChecked: new RegExp(req.regex).test(passwordText) }, `password_requirement_${ind}`))) }));
};
export default PasswordRequirements;
