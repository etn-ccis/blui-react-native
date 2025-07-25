import { jsx as _jsx } from "react/jsx-runtime";
import { useRegistrationContext, useRegistrationWorkflowContext } from '../../contexts/index.js';
import { SuccessScreenBase } from '../SuccessScreen/index.js';
import { useTranslation } from 'react-i18next';
/**
 * Full screen component that renders a Success Screen for the accounts that already exists in the records
 *
 * @param {SuccessScreenProps} props - Props of SuccessScreen component
 *
 * @category Component
 */
export const ExistingAccountSuccessScreen = (props) => {
    const { t } = useTranslation();
    const { navigate, routeConfig } = useRegistrationContext();
    const { resetScreenData } = useRegistrationWorkflowContext();
    const { canDismiss = true, onDismiss = () => navigate(routeConfig.LOGIN), WorkflowCardHeaderProps, WorkflowCardActionsProps, WorkflowCardBodyProps, EmptyStateProps, ...otherExistingAccountSuccessScreenProps } = props;
    const workflowCardHeaderProps = {
        title: t('bluiRegistration:REGISTRATION.STEPS.COMPLETE'),
        ...WorkflowCardHeaderProps,
        onIconPress: () => {
            navigate(routeConfig.LOGIN);
            resetScreenData();
        },
    };
    const workflowCardBodyProps = {
        scrollable: false,
        ...WorkflowCardBodyProps,
    };
    const workflowCardActionsProps = {
        nextLabel: t('bluiCommon:ACTIONS.CONTINUE'),
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
    const icon = { family: 'material', name: 'person' };
    const emptyStatesProps = {
        icon: icon,
        title: t('bluiCommon:MESSAGES.WELCOME'),
        description: t('bluiRegistration:REGISTRATION.SUCCESS_EXISTING'),
        ...EmptyStateProps,
    };
    return (_jsx(SuccessScreenBase, { WorkflowCardHeaderProps: workflowCardHeaderProps, WorkflowCardActionsProps: workflowCardActionsProps, WorkflowCardBodyProps: workflowCardBodyProps, EmptyStateProps: emptyStatesProps, ...otherExistingAccountSuccessScreenProps }));
};
