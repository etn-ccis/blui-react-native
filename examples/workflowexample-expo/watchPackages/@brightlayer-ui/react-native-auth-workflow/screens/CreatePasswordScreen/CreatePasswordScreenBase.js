import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ErrorManager, SetPassword, WorkflowCard, WorkflowCardActions, WorkflowCardBody, WorkflowCardHeader, } from '../../components/index.js';
/**
 * Component that displays text fields to create a new user's password.
 *
 * @param {CreatePasswordScreenProps} props - props for Create Password Screen Base component.
 *
 * @category Component
 */
export const CreatePasswordScreenBase = (props) => {
    const cardBaseProps = props.WorkflowCardBaseProps || {};
    const headerProps = props.WorkflowCardHeaderProps || {};
    const cardBodyProps = props.WorkflowCardBodyProps || {};
    const actionsProps = props.WorkflowCardActionsProps || {};
    const passwordProps = props.PasswordProps || { onPasswordChange: () => { } };
    const { errorDisplayConfig } = props;
    return (_jsxs(WorkflowCard, { ...cardBaseProps, children: [_jsx(WorkflowCardHeader, { ...headerProps }), _jsx(WorkflowCardBody, { ...cardBodyProps, children: _jsx(ErrorManager, { ...errorDisplayConfig, children: _jsx(SetPassword, { ...passwordProps }) }) }), _jsx(WorkflowCardActions, { ...actionsProps })] }));
};
