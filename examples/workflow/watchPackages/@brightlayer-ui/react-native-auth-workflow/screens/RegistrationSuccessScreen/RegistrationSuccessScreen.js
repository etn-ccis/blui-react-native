import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { Trans, useTranslation } from 'react-i18next';
import { SuccessScreenBase } from '../SuccessScreen/index.js';
import { useRegistrationContext, useRegistrationWorkflowContext } from '../../contexts/index.js';
const makeStyles = () => StyleSheet.create({
    boldText: {
        fontWeight: 'bold',
    },
});
/**
 * Component that renders a success screen for when registration completes.
 *
 * @param {SuccessScreenProps} props - Props of SuccessScreen component
 *
 * @category Component
 */
export const RegistrationSuccessScreen = (props) => {
    const { t } = useTranslation();
    const styles = makeStyles();
    const { navigate, routeConfig } = useRegistrationContext();
    const { screenData: { AccountDetails: { firstName, lastName }, CreateAccount: { emailAddress: email }, Other: { 
    // @ts-ignore
    RegistrationSuccessScreen: { organizationName: organization }, }, }, resetScreenData, } = useRegistrationWorkflowContext();
    const CheckCircleIcon = { family: 'material-community', name: 'check-circle', direction: 'ltr' };
    const Bold = ({ children }) => (_jsx(Text, { style: styles.boldText, children: children }));
    const { canDismiss = true, onDismiss = () => navigate(routeConfig.LOGIN), WorkflowCardHeaderProps, WorkflowCardActionsProps, WorkflowCardBodyProps, EmptyStateProps, ...otherRegistrationSuccessScreenProps } = props;
    const workflowCardHeaderProps = {
        title: t('bluiRegistration:REGISTRATION.STEPS.COMPLETE'),
        ...WorkflowCardHeaderProps,
        onIconPress: () => {
            navigate(routeConfig.LOGIN);
            resetScreenData();
        },
    };
    const emptyStatesProps = {
        icon: CheckCircleIcon,
        title: `${t('bluiCommon:MESSAGES.WELCOME')}, ${firstName} ${lastName}!`,
        description: (_jsx(Text, { variant: 'bodyMedium', children: _jsx(Trans, { i18nKey: email
                    ? 'bluiRegistration:REGISTRATION.SUCCESS_MESSAGE_ALT'
                    : 'bluiRegistration:REGISTRATION.SUCCESS_MESSAGE_ALT_WITHOUT_EMAIL_PROVIDED', values: { email, organization }, components: { boldTag: _jsx(Bold, { children: email }) }, children: _jsxs(Text, { variant: 'bodyMedium', children: ["Your account has successfully been created with the email ", email, " belonging to the", ` ${String(organization)}`, " org."] }) }) })),
        ...EmptyStateProps,
    };
    const workflowCardBodyProps = {
        scrollable: false,
        ...WorkflowCardBodyProps,
    };
    const workflowCardActionsProps = {
        nextLabel: t('bluiCommon:ACTIONS.FINISH'),
        showNext: true,
        canGoNext: canDismiss,
        fullWidthButton: true,
        ...WorkflowCardActionsProps,
        onNext: () => {
            onDismiss();
            resetScreenData();
            WorkflowCardActionsProps?.onNext?.();
        },
    };
    return (_jsx(SuccessScreenBase, { WorkflowCardHeaderProps: workflowCardHeaderProps, WorkflowCardBodyProps: workflowCardBodyProps, WorkflowCardActionsProps: workflowCardActionsProps, EmptyStateProps: emptyStatesProps, ...otherRegistrationSuccessScreenProps }));
};
