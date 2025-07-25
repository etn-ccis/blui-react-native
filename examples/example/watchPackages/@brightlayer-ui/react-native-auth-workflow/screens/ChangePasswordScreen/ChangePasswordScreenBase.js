import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { StyleSheet } from 'react-native';
import { PasswordTextField, SetPassword } from '../../components/SetPassword/index.js';
import { SuccessScreenBase } from '../index.js';
import {
    WorkflowCard,
    WorkflowCardActions,
    WorkflowCardBody,
    WorkflowCardHeader,
} from '../../components/WorkflowCard/index.js';
import { ErrorManager } from '../../components/Error/index.js';
const makeStyles = () =>
    StyleSheet.create({
        textInput: {
            marginBottom: 24,
        },
    });
/**
 * Base Component that renders a textField to enter current password and a change password form with a new password and confirm password inputs.
 * It includes callbacks so you can respond to changes in the inputs.
 *
 * @param {ChangePasswordScreenProps} props - props of Change Password Base component
 *
 * @category Component
 */
export const ChangePasswordScreenBase = (props) => {
    const {
        currentPasswordLabel,
        errorDisplayConfig,
        currentPasswordTextInputProps,
        currentPasswordChange,
        showSuccessScreen,
        slotProps,
        slots,
    } = props;
    const styles = makeStyles();
    const cardBaseProps = props.WorkflowCardBaseProps || {};
    const headerProps = props.WorkflowCardHeaderProps || {};
    const cardBodyProps = props.WorkflowCardBodyProps || {};
    const actionsProps = props.WorkflowCardActionsProps || {};
    const passwordProps = props.PasswordProps || { onPasswordChange: () => {} };
    const getSuccessScreen = (
        _props,
        // eslint-disable-next-line
        SuccessScreen
    ) => (SuccessScreen ? SuccessScreen(_props) : _jsx(SuccessScreenBase, { ..._props }));
    const handleChange = (text) => {
        currentPasswordChange?.(text);
    };
    return showSuccessScreen
        ? getSuccessScreen(slotProps?.SuccessScreen ?? {}, slots?.SuccessScreen)
        : _jsxs(WorkflowCard, {
              ...cardBaseProps,
              children: [
                  _jsx(WorkflowCardHeader, { ...headerProps }),
                  _jsx(WorkflowCardBody, {
                      ...cardBodyProps,
                      children: _jsx(ErrorManager, {
                          ...errorDisplayConfig,
                          children: _jsx(SetPassword, {
                              ...passwordProps,
                              children: _jsx(PasswordTextField, {
                                  testID: 'blui-change-password-current-password-text-field',
                                  style: [styles.textInput],
                                  label: currentPasswordLabel,
                                  ...currentPasswordTextInputProps,
                                  onChangeText: (text) => {
                                      if (currentPasswordTextInputProps?.onChangeText) {
                                          currentPasswordTextInputProps.onChangeText(text);
                                      }
                                      handleChange(text);
                                  },
                                  returnKeyType: 'done', // Show "next" button on keyboard
                              }),
                          }),
                      }),
                  }),
                  _jsx(WorkflowCardActions, { totalSteps: 0, ...actionsProps }),
              ],
          });
};
