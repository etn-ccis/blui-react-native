import { jsx as _jsx } from 'react/jsx-runtime';
import { useCallback, useRef, useState } from 'react';
import { CreatePasswordScreenBase } from './CreatePasswordScreenBase.js';
import { defaultPasswordRequirements, timeOutDelay } from '../../constants/index.js';
import { useRegistrationContext, useRegistrationWorkflowContext } from '../../contexts/index.js';
import { useErrorManager } from '../../contexts/ErrorContext/useErrorManager.js';
import { useTranslation } from 'react-i18next';
/**
 * The component renders a screen with the password and confirm password field for creating a new password.
 *
 * @param {CreatePasswordScreenProps} props - Props of Create Password Screen
 *
 * @category Component
 */
export const CreatePasswordScreen = (props) => {
    const { t } = useTranslation();
    const { actions, navigate } = useRegistrationContext();
    const regWorkflow = useRegistrationWorkflowContext();
    const {
        nextScreen,
        previousScreen,
        screenData: {
            CreatePassword: { password, confirmPassword },
        },
        currentScreen,
        totalScreens,
        resetScreenData,
    } = regWorkflow;
    const {
        WorkflowCardBaseProps,
        WorkflowCardHeaderProps,
        WorkflowCardInstructionProps,
        WorkflowCardBodyProps,
        WorkflowCardActionsProps,
        PasswordProps,
    } = props;
    const passwordRef = useRef(null);
    const confirmRef = useRef(null);
    const [passwordInput, setPasswordInput] = useState(
        password !== '' ? password : (PasswordProps?.initialNewPasswordValue ?? '')
    );
    const [confirmInput, setConfirmInput] = useState(
        confirmPassword !== '' ? confirmPassword : (PasswordProps?.initialConfirmPasswordValue ?? '')
    );
    const [isLoading, setIsLoading] = useState(false);
    const passwordReqs = PasswordProps?.passwordRequirements ?? defaultPasswordRequirements(t);
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
            await actions?.createPassword?.(passwordInput);
            void nextScreen({
                screenId: 'CreatePassword',
                values: { password: passwordInput, confirmPassword: confirmInput },
            });
        } catch (_error) {
            triggerError(_error);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, timeOutDelay);
        }
    }, [actions, passwordInput, nextScreen, confirmInput, triggerError]);
    const onPrevious = useCallback(() => {
        previousScreen({
            screenId: 'CreatePassword',
            values: { password: passwordInput, confirmPassword: confirmInput },
        });
    }, [confirmInput, passwordInput, previousScreen]);
    const updateFields = useCallback(
        (fields) => {
            setPasswordInput(fields.password);
            setConfirmInput(fields.confirm);
        },
        [setPasswordInput, setConfirmInput]
    );
    const areValidMatchingPasswords = useCallback(() => {
        if (passwordReqs?.length === 0) {
            return confirmInput === passwordInput;
        }
        for (const req of passwordReqs) {
            if (!new RegExp(req.regex).test(passwordInput)) return false;
        }
        return confirmInput === passwordInput;
    }, [passwordReqs, passwordInput, confirmInput]);
    const passwordProps = {
        newPasswordLabel: t('bluiCommon:FORMS.PASSWORD'),
        confirmPasswordLabel: t('bluiCommon:FORMS.CONFIRM_PASSWORD'),
        passwordNotMatchError: t('bluiCommon:FORMS.PASS_MATCH_ERROR'),
        passwordRequirements: passwordReqs,
        passwordRef,
        confirmRef,
        ...PasswordProps,
        initialNewPasswordValue: passwordInput,
        initialConfirmPasswordValue: confirmInput,
        onPasswordChange: (passwordData) => {
            updateFields(passwordData);
            PasswordProps?.onPasswordChange?.(passwordData);
        },
        onSubmit: () => {
            if (areValidMatchingPasswords()) {
                void onNext();
                WorkflowCardActionsProps?.onNext?.();
                PasswordProps?.onSubmit?.();
            }
        },
    };
    const workflowCardBaseProps = {
        loading: isLoading,
        ...WorkflowCardBaseProps,
    };
    const workflowCardHeaderProps = {
        title: t('bluiRegistration:REGISTRATION.STEPS.PASSWORD'),
        onIconPress: () => {
            navigate(-1);
            resetScreenData();
        },
        ...WorkflowCardHeaderProps,
    };
    const workflowCardInstructionProps = {
        instructions: t('bluiRegistration:REGISTRATION.INSTRUCTIONS.PASSWORD_INFO'),
        ...WorkflowCardInstructionProps,
    };
    const workflowCardBodyProps = {
        WorkflowCardInstructionProps: workflowCardInstructionProps,
        ...WorkflowCardBodyProps,
    };
    const workflowCardActionsProps = {
        showNext: true,
        nextLabel: t('bluiCommon:ACTIONS.NEXT'),
        canGoNext: passwordInput !== '' && confirmInput !== '' && areValidMatchingPasswords(),
        showPrevious: true,
        previousLabel: t('bluiCommon:ACTIONS.BACK'),
        canGoPrevious: true,
        currentStep: currentScreen,
        totalSteps: totalScreens,
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
    return _jsx(CreatePasswordScreenBase, {
        WorkflowCardBaseProps: workflowCardBaseProps,
        WorkflowCardHeaderProps: workflowCardHeaderProps,
        WorkflowCardBodyProps: workflowCardBodyProps,
        WorkflowCardActionsProps: workflowCardActionsProps,
        PasswordProps: passwordProps,
        errorDisplayConfig: errorDisplayConfig,
    });
};
