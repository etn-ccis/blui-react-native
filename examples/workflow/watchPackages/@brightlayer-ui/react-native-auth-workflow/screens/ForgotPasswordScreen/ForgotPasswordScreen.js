import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useAuthContext, useErrorManager } from '../../contexts/index.js';
import { ForgotPasswordScreenBase } from './ForgotPasswordScreenBase.js';
import { Linking, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';
const makeStyles = (theme) => StyleSheet.create({
    boldText: {
        fontWeight: 'bold',
    },
    textStyles: {
        color: theme.colors.primary,
    },
});
/**
 * Component renders a screen with forgot password for support with the application.
 *
 * @param {ForgotPasswordScreenProps} props - props of Forgot Password Screen
 *
 * @category Component
 */
export const ForgotPasswordScreen = (props) => {
    const { t } = useTranslation();
    const { actions, navigate, routeConfig } = useAuthContext();
    const { triggerError, errorManagerConfig } = useErrorManager();
    const theme = useExtendedTheme();
    const styles = makeStyles(theme);
    const EMAIL_REGEX = /^[A-Z0-9._%+'-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const { emailLabel = t('bluiCommon:LABELS.EMAIL'), contactPhone = '1-800-123-4567', initialEmailValue, description, responseTime = t('bluiAuth:FORGOT_PASSWORD.RESPONSE_TIME'), emailValidator = (email) => new RegExp(EMAIL_REGEX).test(email) ? true : t('bluiCommon:MESSAGES.EMAIL_ENTRY_ERROR'), WorkflowCardBaseProps, WorkflowCardHeaderProps, WorkflowCardInstructionProps, WorkflowCardBodyProps, WorkflowCardActionsProps, showSuccessScreen: enableSuccessScreen = true, SuccessScreen, SuccessScreenProps, emailTextInputProps, } = props;
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
    const [emailInput, setEmailInput] = useState(initialEmailValue ?? '');
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccessScreen, setShowSuccessScreen] = useState(false);
    const Bold = ({ children }) => (_jsx(Text, { style: styles.boldText, children: children }));
    const Link = ({ children }) => (_jsx(Text, { style: styles.textStyles, onPress: () => Linking.openURL(`tel:${contactPhone ?? ''}`), children: children }));
    const handleOnNext = useCallback(async (email) => {
        try {
            setIsLoading(true);
            await actions.forgotPassword(email);
            if (props.showSuccessScreen === false) {
                navigate(routeConfig.LOGIN);
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
    }, [actions, triggerError]);
    const clearEmailInput = () => {
        setEmailInput('');
    };
    const workflowCardBaseProps = {
        loading: isLoading,
        ...WorkflowCardBaseProps,
    };
    const workflowCardHeaderProps = {
        title: t('bluiAuth:HEADER.FORGOT_PASSWORD'),
        onIconPress: () => {
            navigate(-1);
            clearEmailInput();
        },
        ...WorkflowCardHeaderProps,
    };
    const workflowCardInstructionProps = {
        instructions: description ? (_jsxs(View, { children: [" ", description(responseTime), " "] })) : (_jsx(Text, { variant: "bodyLarge", children: _jsx(Trans, { i18nKey: 'bluiAuth:FORGOT_PASSWORD.INSTRUCTIONS', values: { phone: contactPhone, time: responseTime }, components: { boldTag: _jsx(Bold, { children: responseTime }), tel: _jsx(Link, { children: contactPhone }) } }) })),
        ...WorkflowCardInstructionProps,
    };
    const workflowCardBodyProps = {
        WorkflowCardInstructionProps: workflowCardInstructionProps,
        ...WorkflowCardBodyProps,
    };
    const workflowCardActionsProps = {
        showNext: true,
        showPrevious: true,
        nextLabel: t('bluiCommon:ACTIONS.SUBMIT'),
        previousLabel: t('bluiCommon:ACTIONS.BACK'),
        canGoNext: true,
        canGoPrevious: true,
        totalSteps: 0,
        ...WorkflowCardActionsProps,
        onNext: () => {
            void handleOnNext(emailInput);
            WorkflowCardActionsProps?.onNext?.();
        },
        onPrevious: () => {
            navigate(routeConfig.LOGIN);
            WorkflowCardActionsProps?.onPrevious?.();
            clearEmailInput();
        },
    };
    const emailInputProps = {
        ...emailTextInputProps,
        onChangeText: (email) => {
            // eslint-disable-next-line
            emailTextInputProps?.onChangeText && emailTextInputProps?.onChangeText(email);
            setEmailInput(email);
        },
    };
    return (_jsx(ForgotPasswordScreenBase, { WorkflowCardBaseProps: workflowCardBaseProps, WorkflowCardHeaderProps: workflowCardHeaderProps, WorkflowCardBodyProps: workflowCardBodyProps, WorkflowCardActionsProps: workflowCardActionsProps, emailLabel: emailLabel, initialEmailValue: emailInput, emailValidator: emailValidator, emailTextInputProps: emailInputProps, showSuccessScreen: enableSuccessScreen && showSuccessScreen, SuccessScreen: SuccessScreen, SuccessScreenProps: {
            EmptyStateProps: {
                icon: { name: 'check-circle' },
                title: t('bluiCommon:MESSAGES.EMAIL_SENT'),
                description: (_jsx(Text, { variant: "bodyLarge", children: _jsx(Trans, { i18nKey: 'bluiAuth:FORGOT_PASSWORD.LINK_SENT', values: { email: emailInput }, components: { boldTag: _jsx(Bold, { children: emailInput }) } }) })),
            },
            WorkflowCardHeaderProps: {
                title: t('bluiAuth:HEADER.FORGOT_PASSWORD'),
            },
            WorkflowCardActionsProps: {
                showNext: true,
                nextLabel: t('bluiCommon:ACTIONS.DONE'),
                canGoNext: true,
                fullWidthButton: true,
                onNext: () => {
                    clearEmailInput();
                    navigate(routeConfig.LOGIN);
                    setShowSuccessScreen(false);
                },
            },
            ...SuccessScreenProps,
        }, errorDisplayConfig: errorDisplayConfig }));
};
