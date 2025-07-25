import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { WorkflowCard, WorkflowCardActions, WorkflowCardBody, WorkflowCardHeader } from '../../components/WorkflowCard/index.js';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import { Icon } from '@brightlayer-ui/react-native-components';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';
/**
 * Component renders a screen with contact information for support with the application.
 * Contact information is pulled from the context passed into the workflow.
 *
 * @param {ContactSupportScreenProps} props - Props of Create Account Screen
 *
 * @category Component
 */
export const ContactSupportScreenBase = (props) => {
    const { icon, iconSize, emailSupportTitle, emailSupportContent, phoneSupportTitle, phoneSupportContent, contactEmail, contactPhone, dismissButtonLabel, onDismiss, } = props;
    const theme = useExtendedTheme();
    const cardBaseProps = props.WorkflowCardBaseProps ?? {};
    const headerProps = props.WorkflowCardHeaderProps ?? {};
    const cardBodyProps = props.WorkflowCardBodyProps ?? {};
    const actionsProps = props.WorkflowCardActionsProps ?? {};
    return (_jsxs(WorkflowCard, { ...cardBaseProps, children: [_jsx(WorkflowCardHeader, { ...headerProps }), icon && (_jsx(View, { style: { alignItems: 'center', marginTop: 48, marginBottom: 16 }, children: _jsx(Icon, { source: icon, size: iconSize ?? 24, color: theme.colors.disabled }) })), _jsxs(WorkflowCardBody, { ...cardBodyProps, children: [_jsx(Text, { variant: 'bodyLarge', style: { marginBottom: 8 }, children: emailSupportTitle }), _jsx(_Fragment, { children: emailSupportContent?.(contactEmail ?? '') }), _jsx(Text, { variant: 'bodyLarge', style: { marginBottom: 8, marginTop: 32 }, children: phoneSupportTitle }), _jsx(_Fragment, { children: phoneSupportContent?.(contactPhone ?? '') })] }), _jsx(WorkflowCardActions, { ...actionsProps, nextLabel: dismissButtonLabel ?? actionsProps.nextLabel, onNext: () => {
                    if (onDismiss)
                        onDismiss();
                    if (actionsProps.onNext)
                        actionsProps.onNext();
                } })] }));
};
