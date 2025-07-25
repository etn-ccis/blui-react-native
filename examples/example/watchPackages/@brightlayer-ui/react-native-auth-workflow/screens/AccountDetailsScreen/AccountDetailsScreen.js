import { jsx as _jsx } from 'react/jsx-runtime';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRegistrationWorkflowContext } from '../../contexts/RegistrationWorkflowContext/index.js';
import { useErrorManager } from '../../contexts/ErrorContext/index.js';
import { AccountDetailsScreenBase } from './AccountDetailsScreenBase.js';
import { useRegistrationContext } from '../../contexts/RegistrationContext/index.js';
import { timeOutDelay } from '../../constants/index.js';
/**
 * Component renders a screen with account details information for support with the application.
 * Contact information is pulled from the context passed into the workflow.
 *
 * @param {AccountDetailsScreenProps} props - Props of Create Account Screen
 *
 * @category Component
 */
export const AccountDetailsScreen = (props) => {
    const { t } = useTranslation();
    const { actions, navigate } = useRegistrationContext();
    const regWorkflow = useRegistrationWorkflowContext();
    const { nextScreen, previousScreen, screenData, currentScreen, totalScreens, resetScreenData } = regWorkflow;
    const [firstName, setFirstName] = useState(screenData.AccountDetails.firstName);
    const [lastName, setLastName] = useState(screenData.AccountDetails.lastName);
    const [isLoading, setIsLoading] = useState(false);
    const { triggerError, errorManagerConfig } = useErrorManager();
    const errorDisplayConfig = {
        ...errorManagerConfig,
        ...props.errorDisplayConfig,
        onClose: () => {
            if (props.errorDisplayConfig?.onClose) props.errorDisplayConfig.onClose();
            if (errorManagerConfig.onClose) errorManagerConfig?.onClose();
        },
    };
    const onNext = useCallback(async () => {
        try {
            setIsLoading(true);
            await actions?.setAccountDetails?.({ firstName, lastName });
            void nextScreen({
                screenId: 'AccountDetails',
                values: { firstName, lastName },
            });
        } catch (_error) {
            triggerError(_error);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, timeOutDelay);
        }
    }, [actions, firstName, lastName, nextScreen, triggerError]);
    const onPrevious = useCallback(() => {
        previousScreen({
            screenId: 'AccountDetails',
            values: { firstName, lastName },
        });
    }, [firstName, lastName, previousScreen]);
    const {
        WorkflowCardBaseProps,
        WorkflowCardHeaderProps,
        WorkflowCardInstructionProps,
        WorkflowCardBodyProps,
        WorkflowCardActionsProps,
        firstNameLabel = t('bluiCommon:FORMS.FIRST_NAME'),
        lastNameLabel = t('bluiCommon:FORMS.LAST_NAME'),
        firstNameValidator = (name) => {
            if (name?.length > 0) {
                return true;
            }
            return t('bluiCommon:FORMS.FIRST_NAME_LENGTH_ERROR');
        },
        lastNameValidator = (name) => {
            if (name?.length > 0) {
                return true;
            }
            return t('bluiCommon:FORMS.LAST_NAME_LENGTH_ERROR');
        },
        firstNameTextInputProps,
        lastNameTextInputProps,
        initialFirstName = screenData.AccountDetails.firstName,
        initialLastName = screenData.AccountDetails.lastName,
    } = props;
    const workflowCardBaseProps = {
        loading: isLoading,
        ...WorkflowCardBaseProps,
    };
    const workflowCardHeaderProps = {
        title: t('bluiRegistration:REGISTRATION.STEPS.ACCOUNT_DETAILS'),
        onIconPress: () => {
            navigate(-1);
            resetScreenData();
        },
        ...WorkflowCardHeaderProps,
    };
    const workflowCardInstructionProps = {
        instructions: t('bluiRegistration:REGISTRATION.INSTRUCTIONS.ACCOUNT_DETAILS'),
        ...WorkflowCardInstructionProps,
    };
    const workflowCardBodyProps = {
        WorkflowCardInstructionProps: workflowCardInstructionProps,
        ...WorkflowCardBodyProps,
    };
    const workflowCardActionsProps = {
        canGoNext: true,
        showNext: true,
        showPrevious: true,
        nextLabel: t('bluiCommon:ACTIONS.NEXT'),
        previousLabel: t('bluiCommon:ACTIONS.BACK'),
        totalSteps: totalScreens,
        currentStep: currentScreen,
        ...WorkflowCardActionsProps,
        onNext: () => {
            void onNext();
            WorkflowCardActionsProps?.onNext?.();
        },
        onPrevious: () => {
            void onPrevious();
            WorkflowCardActionsProps?.onPrevious?.();
        },
    };
    const onFirstNameInputChange = (text) => {
        setFirstName(text);
    };
    const onLastNameInputChange = (text) => {
        setLastName(text);
    };
    return _jsx(AccountDetailsScreenBase, {
        WorkflowCardBaseProps: workflowCardBaseProps,
        WorkflowCardHeaderProps: workflowCardHeaderProps,
        WorkflowCardBodyProps: workflowCardBodyProps,
        WorkflowCardActionsProps: workflowCardActionsProps,
        initialFirstName: firstName.length > 0 ? firstName : initialFirstName,
        initialLastName: lastName.length > 0 ? lastName : initialLastName,
        firstNameLabel: firstNameLabel,
        firstNameTextInputProps: { ...firstNameTextInputProps, onChangeText: onFirstNameInputChange },
        firstNameValidator: firstNameValidator,
        lastNameLabel: lastNameLabel,
        lastNameTextInputProps: { ...lastNameTextInputProps, onChangeText: onLastNameInputChange },
        lastNameValidator: lastNameValidator,
        errorDisplayConfig: errorDisplayConfig,
    });
};
