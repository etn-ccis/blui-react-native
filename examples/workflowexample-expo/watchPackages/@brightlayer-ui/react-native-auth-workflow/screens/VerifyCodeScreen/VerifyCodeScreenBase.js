import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import React, { useCallback, useEffect } from 'react';
import {
    ErrorManager,
    WorkflowCard,
    WorkflowCardActions,
    WorkflowCardBody,
    WorkflowCardHeader,
} from '../../components/index.js';
import { HelperText, Text, TextInput } from 'react-native-paper';
import { Text as RNText, View } from 'react-native';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';
/**
 * Component that renders a screen that prompts a user to enter the confirmation code
 * that was sent to the email address that they used to register.
 *
 * @param {VerifyCodeScreenProps} props - props of Verify Code Screen Base component
 *
 * @category Component
 */
export const VerifyCodeScreenBase = (props) => {
    const {
        codeValidator,
        onResend,
        resendInstructions,
        resendLabel,
        verifyCodeInputLabel,
        initialValue,
        errorDisplayConfig,
        verifyCodeTextInputProps,
    } = props;
    const cardBaseProps = props.WorkflowCardBaseProps ?? {};
    const headerProps = props.WorkflowCardHeaderProps ?? {};
    const cardBodyProps = props.WorkflowCardBodyProps ?? {};
    const actionsProps = props.WorkflowCardActionsProps ?? {};
    const [verifyCode, setVerifyCode] = React.useState(initialValue ?? '');
    const [shouldValidateCode, setShouldValidateCode] = React.useState(false);
    const [isCodeValid, setIsCodeValid] = React.useState(codeValidator ? codeValidator(initialValue ?? '') : false);
    const [codeError, setCodeError] = React.useState('');
    const theme = useExtendedTheme();
    const handleVerifyCodeInputChange = useCallback(
        (code) => {
            setVerifyCode(code);
            if (codeValidator) {
                const validatorResponse = codeValidator(code);
                setIsCodeValid(typeof validatorResponse === 'boolean' ? validatorResponse : false);
                setCodeError(typeof validatorResponse === 'string' ? validatorResponse : '');
            }
        },
        [codeValidator]
    );
    useEffect(() => {
        if (verifyCode.length > 0) {
            setShouldValidateCode(true);
            handleVerifyCodeInputChange(verifyCode);
        }
    }, []);
    const handleOnNext = () => {
        const { onNext } = actionsProps;
        if (onNext) onNext({ code: verifyCode });
    };
    const handleOnPrevious = () => {
        const { onPrevious } = actionsProps;
        if (onPrevious) onPrevious({ code: verifyCode });
    };
    return _jsxs(WorkflowCard, {
        ...cardBaseProps,
        children: [
            _jsx(WorkflowCardHeader, { ...headerProps }),
            _jsx(WorkflowCardBody, {
                ...cardBodyProps,
                children: _jsxs(ErrorManager, {
                    ...errorDisplayConfig,
                    children: [
                        _jsx(TextInput, {
                            label: verifyCodeInputLabel,
                            mode: 'flat',
                            testID: 'blui-verify-code-text-input',
                            value: verifyCode,
                            onChangeText: handleVerifyCodeInputChange,
                            error: shouldValidateCode && !isCodeValid,
                            autoCapitalize: 'none',
                            ...verifyCodeTextInputProps,
                            onSubmitEditing: () => {
                                if (verifyCode.length > 0 && isCodeValid && actionsProps.canGoNext) handleOnNext();
                            },
                            onBlur: (e) => {
                                if (verifyCodeTextInputProps?.onBlur) {
                                    verifyCodeTextInputProps.onBlur(e);
                                }
                                setShouldValidateCode(true);
                            },
                        }),
                        _jsx(HelperText, {
                            type: 'error',
                            visible: shouldValidateCode,
                            style: { height: 30 },
                            children: codeError,
                        }),
                        _jsx(View, {
                            children: _jsxs(Text, {
                                variant: 'bodyMedium',
                                children: [
                                    resendInstructions,
                                    ' ',
                                    _jsx(RNText, {
                                        style: {
                                            color: theme.colors.primary,
                                            fontWeight: 'bold',
                                            textDecorationLine: 'underline',
                                        },
                                        testID: 'blui-verify-code-resend-code-button',
                                        onPress: onResend,
                                        children: resendLabel,
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            _jsx(WorkflowCardActions, {
                ...actionsProps,
                canGoNext: verifyCode.length > 0 && isCodeValid && actionsProps.canGoNext,
                onNext: handleOnNext,
                onPrevious: handleOnPrevious,
            }),
        ],
    });
};
