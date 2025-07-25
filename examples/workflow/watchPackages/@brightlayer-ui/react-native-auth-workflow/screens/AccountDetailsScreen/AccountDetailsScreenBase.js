import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import React, { useCallback, useEffect, useRef } from 'react';
import { TextInput, HelperText } from 'react-native-paper';
import {
    WorkflowCard,
    WorkflowCardActions,
    WorkflowCardBody,
    WorkflowCardHeader,
} from '../../components/WorkflowCard/index.js';
import { ErrorManager } from '../../components/index.js';
import { StyleSheet } from 'react-native';
const makeStyles = () =>
    StyleSheet.create({
        textInput: {
            marginTop: 24,
        },
    });
/**
 * Component renders a screen with account details information for support with the application.
 * Contact information is pulled from the context passed into the workflow.
 *
 * @param {AccountDetailsScreenProps} props - Props of Create Account Screen
 *
 * @category Component
 */
export const AccountDetailsScreenBase = (props) => {
    const {
        firstNameLabel,
        initialFirstName,
        firstNameValidator = () => {},
        firstNameTextInputProps,
        lastNameLabel,
        initialLastName,
        lastNameValidator = () => {},
        lastNameTextInputProps,
        errorDisplayConfig,
    } = props;
    const styles = makeStyles();
    const cardBaseProps = props.WorkflowCardBaseProps ?? {};
    const headerProps = props.WorkflowCardHeaderProps ?? {};
    const cardBodyProps = props.WorkflowCardBodyProps ?? {};
    const actionsProps = props.WorkflowCardActionsProps ?? {};
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const [firstNameInput, setFirstNameInput] = React.useState(initialFirstName ?? '');
    const [lastNameInput, setLastNameInput] = React.useState(initialLastName ?? '');
    const [isFirstNameValid, setIsFirstNameValid] = React.useState(false);
    const [isLastNameValid, setIsLastNameValid] = React.useState(false);
    const [firstNameError, setFirstNameError] = React.useState('');
    const [lastNameError, setLastNameError] = React.useState('');
    const [shouldValidateFirstName, setShouldValidateFirstName] = React.useState(false);
    const [shouldValidateLastName, setShouldValidateLastName] = React.useState(false);
    const handleFirstNameInputChange = useCallback(
        (firstName) => {
            setFirstNameInput(firstName);
            const firstNameValidatorResponse = firstNameValidator(firstName);
            setIsFirstNameValid(typeof firstNameValidatorResponse === 'boolean' ? firstNameValidatorResponse : false);
            setFirstNameError(typeof firstNameValidatorResponse === 'string' ? firstNameValidatorResponse : '');
        },
        [firstNameValidator]
    );
    const handleLastNameInputChange = useCallback(
        (lastName) => {
            setLastNameInput(lastName);
            const lastNameValidatorResponse = lastNameValidator(lastName);
            setIsLastNameValid(typeof lastNameValidatorResponse === 'boolean' ? lastNameValidatorResponse : false);
            setLastNameError(typeof lastNameValidatorResponse === 'string' ? lastNameValidatorResponse : '');
        },
        [lastNameValidator]
    );
    useEffect(() => {
        if (firstNameInput.length > 0) {
            setShouldValidateFirstName(true);
            handleFirstNameInputChange(firstNameInput);
        }
        if (lastNameInput.length > 0) {
            setShouldValidateLastName(true);
            handleLastNameInputChange(lastNameInput);
        }
    }, []);
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
                            testID: 'blui-account-details-first-name',
                            mode: 'flat',
                            ref: firstNameRef,
                            label: firstNameLabel,
                            value: firstNameInput,
                            error: shouldValidateFirstName && !isFirstNameValid,
                            ...firstNameTextInputProps,
                            onChangeText: (text) => {
                                if (firstNameTextInputProps?.onChangeText) {
                                    firstNameTextInputProps.onChangeText(text);
                                }
                                handleFirstNameInputChange(text);
                            },
                            onSubmitEditing: () => {
                                lastNameRef?.current?.focus();
                            },
                            onBlur: () => setShouldValidateFirstName(true),
                        }),
                        shouldValidateFirstName && _jsx(HelperText, { type: 'error', children: firstNameError }),
                        _jsx(TextInput, {
                            testID: 'blui-account-details-last-name',
                            mode: 'flat',
                            ref: lastNameRef,
                            label: lastNameLabel,
                            value: lastNameInput,
                            error: shouldValidateLastName && !isLastNameValid,
                            style: [styles.textInput],
                            ...lastNameTextInputProps,
                            onChangeText: (text) => {
                                if (lastNameTextInputProps?.onChangeText) {
                                    lastNameTextInputProps.onChangeText(text);
                                }
                                handleLastNameInputChange(text);
                            },
                            onSubmitEditing: () => {
                                if (isFirstNameValid && isLastNameValid && actionsProps.canGoNext)
                                    actionsProps.onNext?.();
                            },
                            onBlur: () => setShouldValidateLastName(true),
                        }),
                        shouldValidateLastName && _jsx(HelperText, { type: 'error', children: lastNameError }),
                    ],
                }),
            }),
            _jsx(WorkflowCardActions, {
                ...actionsProps,
                canGoNext: actionsProps.canGoNext && isFirstNameValid && isLastNameValid,
            }),
        ],
    });
};
