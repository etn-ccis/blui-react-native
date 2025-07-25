import React, { useCallback, useState } from 'react';
import { VerifyCodeScreenProps } from './types';
import { VerifyCodeScreenBase } from './VerifyCodeScreenBase';
import { useTranslation } from 'react-i18next';
import { useErrorManager, useRegistrationContext, useRegistrationWorkflowContext } from '../../contexts';
import { timeOutDelay } from '../../constants';

/**
 * Component that renders a screen that prompts a user to enter the confirmation code
 * that was sent to the email address that they used to register.
 *
 * @param {VerifyCodeScreenProps} props - props of VerifyCodeScreen
 *
 * @category Component
 */
export const VerifyCodeScreen: React.FC<VerifyCodeScreenProps> = (props) => {
    const { t } = useTranslation();
    const regWorkflow = useRegistrationWorkflowContext();
    const { actions, navigate } = useRegistrationContext();
    const { nextScreen, previousScreen, screenData, currentScreen, totalScreens, updateScreenData, resetScreenData } =
        regWorkflow;
    const { emailAddress } = screenData.CreateAccount;
    const { triggerError, errorManagerConfig } = useErrorManager();
    const errorDisplayConfig = {
        ...errorManagerConfig,
        ...props.errorDisplayConfig,
        onClose: (): void => {
            props.errorDisplayConfig?.onClose?.();
            errorManagerConfig.onClose?.();
        },
    };

    const [verifyCode, setVerifyCode] = useState(screenData.VerifyCode.code);
    const [isLoading, setIsLoading] = useState(false);

    const requestResendCode = useCallback(async (): Promise<void> => {
        try {
            setIsLoading(true);
            await actions?.requestRegistrationCode?.(emailAddress ? emailAddress : '');
        } catch (_error) {
            triggerError(_error as Error);
        } finally {
            setIsLoading(false);
        }
    }, [actions, emailAddress, triggerError]);

    const {
        codeValidator = (code: string): boolean | string =>
            code?.length > 0 ? true : t('bluiRegistration:SELF_REGISTRATION.VERIFY_EMAIL.CODE_VALIDATOR_ERROR'),
        onResend = (): void => {
            void requestResendCode();
        },
        resendInstructions = t('bluiRegistration:SELF_REGISTRATION.VERIFY_EMAIL.VERIFICATION_CODE_PROMPT'),
        resendLabel = t('bluiCommon:ACTIONS.RESEND'),
        verifyCodeInputLabel = t('bluiRegistration:SELF_REGISTRATION.VERIFY_EMAIL.VERIFICATION'),
        initialValue = screenData.VerifyCode.code,
        verifyCodeTextInputProps,
    } = props;

    const handleOnNext = useCallback(
        async (code: string, email?: string) => {
            try {
                setIsLoading(true);
                if (actions?.validateUserRegistrationRequest) {
                    // eslint-disable-next-line no-unsafe-optional-chaining
                    const { codeValid, accountExists } = await actions?.validateUserRegistrationRequest(code, email);

                    if (accountExists) {
                        updateScreenData({ screenId: 'VerifyCode', values: { code }, isAccountExist: accountExists });
                    } else {
                        if (typeof codeValid === 'boolean') {
                            if (codeValid)
                                void nextScreen({
                                    screenId: 'VerifyCode',
                                    values: { code },
                                    isAccountExist: accountExists,
                                });
                            else {
                                triggerError(
                                    new Error(t('bluiRegistration:SELF_REGISTRATION.VERIFY_EMAIL.CODE_VALIDATOR_ERROR'))
                                );
                            }
                        } else {
                            triggerError(new Error(codeValid));
                        }
                    }
                }
            } catch (_error) {
                triggerError(_error as Error);
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, timeOutDelay);
            }
        },
        [t, actions, nextScreen, triggerError, updateScreenData]
    );

    const onPrevious = (code: string): void => {
        previousScreen({
            screenId: 'VerifyCode',
            values: { code },
        });
    };

    const {
        WorkflowCardBaseProps,
        WorkflowCardHeaderProps,
        WorkflowCardInstructionProps,
        WorkflowCardBodyProps,
        WorkflowCardActionsProps,
    } = props;

    const workflowCardBaseProps = {
        loading: isLoading,
        ...WorkflowCardBaseProps,
    };

    const workflowCardHeaderProps = {
        title: t('bluiRegistration:REGISTRATION.STEPS.VERIFY_EMAIL'),
        onIconPress: (): void => {
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
        onNext: (data: any): void => {
            setVerifyCode(data.code);
            void handleOnNext(data.code, emailAddress);
            WorkflowCardActionsProps?.onNext?.();
        },
        onPrevious: (data: any): void => {
            void onPrevious(data.code);
            WorkflowCardActionsProps?.onPrevious?.();
        },
    };

    return (
        <VerifyCodeScreenBase
            WorkflowCardBaseProps={workflowCardBaseProps}
            WorkflowCardHeaderProps={workflowCardHeaderProps}
            WorkflowCardBodyProps={workflowCardBodyProps}
            WorkflowCardActionsProps={workflowCardActionsProps}
            resendInstructions={resendInstructions}
            resendLabel={resendLabel}
            verifyCodeInputLabel={verifyCodeInputLabel}
            initialValue={verifyCode.length > 0 ? verifyCode : initialValue}
            onResend={onResend}
            codeValidator={codeValidator}
            errorDisplayConfig={errorDisplayConfig}
            verifyCodeTextInputProps={verifyCodeTextInputProps}
        />
    );
};
