import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { defaultPasswordRequirements } from '../../constants/index.js';
import { useAuthContext, useErrorManager } from '../../contexts/index.js';
import { ChangePasswordScreenBase } from './ChangePasswordScreenBase.js';
export const ChangePasswordScreen = (props) => {
    const { t } = useTranslation();
    const passwordRef = useRef(null);
    const confirmRef = useRef(null);
    const { currentPasswordLabel = t('bluiCommon:LABELS.CURRENT_PASSWORD'), PasswordProps, WorkflowCardBaseProps, WorkflowCardHeaderProps, WorkflowCardInstructionProps, WorkflowCardBodyProps, WorkflowCardActionsProps, currentPasswordTextInputProps, onFinish, slots = {}, slotProps = {}, } = props;
    const [currentInput, setCurrentInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [confirmInput, setConfirmInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccessScreen, setShowSuccessScreen] = useState(false);
    const { actions, navigate } = useAuthContext();
    const { triggerError, errorManagerConfig } = useErrorManager();
    const errorDisplayConfig = {
        ...errorManagerConfig,
        ...props.errorDisplayConfig,
        onClose: () => {
            if (props.errorDisplayConfig?.onClose)
                props.errorDisplayConfig.onClose();
            if (errorManagerConfig.onClose)
                errorManagerConfig?.onClose();
        },
    };
    const passwordRequirements = defaultPasswordRequirements(t);
    const updateFields = useCallback((fields) => {
        setPasswordInput(fields.password);
        setConfirmInput(fields.confirm);
    }, [setPasswordInput, setConfirmInput]);
    const areValidMatchingPasswords = useCallback(() => {
        if (PasswordProps?.passwordRequirements?.length === 0) {
            return confirmInput === passwordInput;
        }
        for (const req of passwordRequirements) {
            if (!new RegExp(req.regex).test(passwordInput))
                return false;
        }
        return confirmInput === passwordInput;
    }, [PasswordProps?.passwordRequirements?.length, passwordRequirements, passwordInput, confirmInput]);
    const checkPasswords = currentInput !== '' && passwordInput !== '' && confirmInput !== '' && areValidMatchingPasswords();
    const changePasswordSubmit = useCallback(async () => {
        if (checkPasswords) {
            try {
                setIsLoading(true);
                await actions.changePassword(currentInput, passwordInput);
                if (props.showSuccessScreen === false) {
                    onFinish?.();
                }
                else {
                    setShowSuccessScreen(true);
                }
            }
            catch (_error) {
                triggerError(_error);
            }
            finally {
                setIsLoading(false);
            }
        }
    }, [
        checkPasswords,
        currentInput,
        passwordInput,
        actions,
        setIsLoading,
        onFinish,
        props.showSuccessScreen,
        triggerError,
    ]);
    const clearScreenData = () => {
        setCurrentInput('');
        setConfirmInput('');
        setPasswordInput('');
    };
    const passwordProps = {
        newPasswordLabel: t('bluiAuth:CHANGE_PASSWORD.NEW_PASSWORD'),
        confirmPasswordLabel: t('bluiAuth:CHANGE_PASSWORD.CONFIRM_NEW_PASSWORD'),
        passwordRef,
        confirmRef,
        initialNewPasswordValue: passwordInput,
        initialConfirmPasswordValue: confirmInput,
        passwordRequirements,
        passwordNotMatchError: t('bluiCommon:FORMS.PASS_MATCH_ERROR'),
        ...PasswordProps,
        onPasswordChange: (passwordData) => {
            updateFields(passwordData);
            PasswordProps?.onPasswordChange?.(passwordData);
        },
        onSubmit: async () => {
            await changePasswordSubmit();
            PasswordProps?.onSubmit?.();
        },
    };
    const onNext = async () => {
        await changePasswordSubmit();
    };
    const workflowCardBaseProps = {
        loading: isLoading,
        ...WorkflowCardBaseProps,
    };
    const workflowCardHeaderProps = {
        title: t('bluiAuth:CHANGE_PASSWORD.PASSWORD'),
        onIconPress: () => {
            clearScreenData();
            navigate(-1);
        },
        ...WorkflowCardHeaderProps,
    };
    const workflowCardInstructionProps = {
        instructions: t('bluiAuth:CHANGE_PASSWORD.PASSWORD_INFO'),
        ...WorkflowCardInstructionProps,
    };
    const workflowCardBodyProps = {
        WorkflowCardInstructionProps: workflowCardInstructionProps,
        ...WorkflowCardBodyProps,
    };
    const workflowCardActionsProps = {
        showPrevious: false,
        fullWidthButton: true,
        showNext: true,
        nextLabel: t('bluiCommon:ACTIONS.SUBMIT'),
        canGoNext: passwordInput !== '' && confirmInput !== '' && areValidMatchingPasswords(),
        ...WorkflowCardActionsProps,
        onNext: () => {
            void onNext();
            WorkflowCardActionsProps?.onNext?.();
        },
    };
    return (_jsx(ChangePasswordScreenBase, { WorkflowCardBaseProps: workflowCardBaseProps, WorkflowCardHeaderProps: workflowCardHeaderProps, WorkflowCardBodyProps: workflowCardBodyProps, WorkflowCardActionsProps: workflowCardActionsProps, currentPasswordLabel: currentPasswordLabel, currentPasswordChange: (currentPwd) => {
            setCurrentInput(currentPwd);
            props?.currentPasswordChange?.(currentPwd);
        }, enableButton: checkPasswords, PasswordProps: passwordProps, currentPasswordTextInputProps: { ...currentPasswordTextInputProps, value: currentInput }, slots: slots, slotProps: {
            SuccessScreen: {
                EmptyStateProps: {
                    icon: { family: 'material', name: 'check-circle' },
                    title: t('bluiAuth:PASSWORD_RESET.SUCCESS_MESSAGE'),
                    description: t('bluiAuth:CHANGE_PASSWORD.SUCCESS_MESSAGE'),
                },
                onDismiss: () => {
                    onFinish?.();
                },
                WorkflowCardActionsProps: {
                    showPrevious: false,
                    fullWidthButton: true,
                    showNext: true,
                    nextLabel: t('bluiCommon:ACTIONS.DONE'),
                    onNext: () => {
                        onFinish?.();
                        setShowSuccessScreen(false);
                        clearScreenData();
                    },
                },
                ...slotProps.SuccessScreen,
            },
        }, showSuccessScreen: showSuccessScreen, errorDisplayConfig: errorDisplayConfig }));
};
