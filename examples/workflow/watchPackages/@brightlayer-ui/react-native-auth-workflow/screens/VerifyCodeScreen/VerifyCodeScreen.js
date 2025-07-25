import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useState } from 'react';
import { VerifyCodeScreenBase } from './VerifyCodeScreenBase.js';
import { useTranslation } from 'react-i18next';
import { useErrorManager, useRegistrationContext, useRegistrationWorkflowContext } from '../../contexts/index.js';
import { timeOutDelay } from '../../constants/index.js';
/**
 * Component that renders a screen that prompts a user to enter the confirmation code
 * that was sent to the email address that they used to register.
 *
 * @param {VerifyCodeScreenProps} props - props of VerifyCodeScreen
 *
 * @category Component
 */
export const VerifyCodeScreen = (props) => {
    const { t } = useTranslation();
    const regWorkflow = useRegistrationWorkflowContext();
    const { actions, navigate } = useRegistrationContext();
    const { nextScreen, previousScreen, screenData, currentScreen, totalScreens, updateScreenData, resetScreenData } = regWorkflow;
    const { emailAddress } = screenData.CreateAccount;
    const { triggerError, errorManagerConfig } = useErrorManager();
    const errorDisplayConfig = {
        ...errorManagerConfig,
        ...props.errorDisplayConfig,
        onClose: () => {
            props.errorDisplayConfig?.onClose?.();
            errorManagerConfig.onClose?.();
        },
    };
    const [verifyCode, setVerifyCode] = useState(screenData.VerifyCode.code);
    const [isLoading, setIsLoading] = useState(false);
    const requestResendCode = useCallback(async () => {
        try {
            setIsLoading(true);
            await actions?.requestRegistrationCode?.(emailAddress ? emailAddress : '');
        }
        catch (_error) {
            triggerError(_error);
        }
        finally {
            setIsLoading(false);
        }
    }, [actions, emailAddress, triggerError]);
    const { codeValidator = (code) => code?.length > 0 ? true : t('bluiRegistration:SELF_REGISTRATION.VERIFY_EMAIL.CODE_VALIDATOR_ERROR'), onResend = () => {
        void requestResendCode();
    }, resendInstructions = t('bluiRegistration:SELF_REGISTRATION.VERIFY_EMAIL.VERIFICATION_CODE_PROMPT'), resendLabel = t('bluiCommon:ACTIONS.RESEND'), verifyCodeInputLabel = t('bluiRegistration:SELF_REGISTRATION.VERIFY_EMAIL.VERIFICATION'), initialValue = screenData.VerifyCode.code, verifyCodeTextInputProps, } = props;
    const handleOnNext = useCallback(async (code, email) => {
        try {
            setIsLoading(true);
            if (actions?.validateUserRegistrationRequest) {
                // eslint-disable-next-line no-unsafe-optional-chaining
                const { codeValid, accountExists } = await actions?.validateUserRegistrationRequest(code, email);
                if (accountExists) {
                    updateScreenData({ screenId: 'VerifyCode', values: { code }, isAccountExist: accountExists });
                }
                else {
                    if (typeof codeValid === 'boolean') {
                        if (codeValid)
                            void nextScreen({
                                screenId: 'VerifyCode',
                                values: { code },
                                isAccountExist: accountExists,
                            });
                        else {
                            triggerError(new Error(t('bluiRegistration:SELF_REGISTRATION.VERIFY_EMAIL.CODE_VALIDATOR_ERROR')));
                        }
                    }
                    else {
                        triggerError(new Error(codeValid));
                    }
                }
            }
        }
        catch (_error) {
            triggerError(_error);
        }
        finally {
            setTimeout(() => {
                setIsLoading(false);
            }, timeOutDelay);
        }
    }, [t, actions, nextScreen, triggerError, updateScreenData]);
    const onPrevious = (code) => {
        previousScreen({
            screenId: 'VerifyCode',
            values: { code },
        });
    };
    const { WorkflowCardBaseProps, WorkflowCardHeaderProps, WorkflowCardInstructionProps, WorkflowCardBodyProps, WorkflowCardActionsProps, } = props;
    const workflowCardBaseProps = {
        loading: isLoading,
        ...WorkflowCardBaseProps,
    };
    const workflowCardHeaderProps = {
        title: t('bluiRegistration:REGISTRATION.STEPS.VERIFY_EMAIL'),
        onIconPress: () => {
            navigate(-1);
            resetScreenData();
        },
        ...WorkflowCardHeaderProps,
    };
    const workflowCardInstructionProps = {
        instructions: t('bluiRegistration:SELF_REGISTRATION.VERIFY_EMAIL.MESSAGE'),
        ...WorkflowCardInstructionProps,
    };
    const workflowCardBodyProps = {
        WorkflowCardInstructionProps: workflowCardInstructionProps,
        ...WorkflowCardBodyProps,
    };
    const workflowCardActionsProps = {
        showNext: true,
        canGoNext: true,
        nextLabel: t('bluiCommon:ACTIONS.NEXT'),
        showPrevious: true,
        previousLabel: t('bluiCommon:ACTIONS.BACK'),
        canGoPrevious: true,
        currentStep: currentScreen,
        totalSteps: totalScreens,
        ...WorkflowCardActionsProps,
        onNext: (data) => {
            setVerifyCode(data.code);
            void handleOnNext(data.code, emailAddress);
            WorkflowCardActionsProps?.onNext?.();
        },
        onPrevious: (data) => {
            void onPrevious(data.code);
            WorkflowCardActionsProps?.onPrevious?.();
        },
    };
    return (_jsx(VerifyCodeScreenBase, { WorkflowCardBaseProps: workflowCardBaseProps, WorkflowCardHeaderProps: workflowCardHeaderProps, WorkflowCardBodyProps: workflowCardBodyProps, WorkflowCardActionsProps: workflowCardActionsProps, resendInstructions: resendInstructions, resendLabel: resendLabel, verifyCodeInputLabel: verifyCodeInputLabel, initialValue: verifyCode.length > 0 ? verifyCode : initialValue, onResend: onResend, codeValidator: codeValidator, errorDisplayConfig: errorDisplayConfig, verifyCodeTextInputProps: verifyCodeTextInputProps }));
};
