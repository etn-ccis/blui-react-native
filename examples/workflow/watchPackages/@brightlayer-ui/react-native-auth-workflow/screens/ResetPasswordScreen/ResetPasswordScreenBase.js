import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { WorkflowCard, WorkflowCardHeader, WorkflowCardBody, SetPassword, WorkflowCardActions, ErrorManager, } from '../../components/index.js';
import { SuccessScreenBase } from '../SuccessScreen/index.js';
/**
 * Component that renders a ResetPassword screen that allows a user to reset their password and shows a success message upon a successful password reset..
 *
 * @param {ResetPasswordScreenProps} props - props for Reset Password Screen Base component.
 *
 * @category Component
 *
 */
export const ResetPasswordScreenBase = (props) => {
    const cardBaseProps = props.WorkflowCardBaseProps || {};
    const headerProps = props.WorkflowCardHeaderProps || {};
    const cardBodyProps = props.WorkflowCardBodyProps || {};
    const actionsProps = props.WorkflowCardActionsProps || {};
    const passwordProps = props.PasswordProps || { onPasswordChange: () => { } };
    const { showSuccessScreen, SuccessScreen, SuccessScreenProps: successScreenProps, errorDisplayConfig } = props;
    const getSuccessScreen = (_props, _successScreen) => (_successScreen ? _successScreen(_props) : _jsx(SuccessScreenBase, { ..._props }));
    return (_jsx(_Fragment, { children: showSuccessScreen ? (getSuccessScreen(successScreenProps ?? {}, SuccessScreen)) : (_jsxs(WorkflowCard, { ...cardBaseProps, children: [_jsx(WorkflowCardHeader, { ...headerProps }), _jsx(WorkflowCardBody, { ...cardBodyProps, children: _jsx(ErrorManager, { ...errorDisplayConfig, children: _jsx(SetPassword, { ...passwordProps }) }) }), _jsx(WorkflowCardActions, { ...actionsProps })] })) }));
};
