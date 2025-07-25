/// <reference types="react" />
import { TextInputProps } from 'react-native-paper';
import { SuccessScreenProps } from '../index.js';
import { SetPasswordProps } from '../../components/SetPassword/index.js';
import { WorkflowCardProps } from '../../components/WorkflowCard/index.js';
import { ErrorManagerProps } from '../../components/Error/index.js';
export type ChangePasswordScreenSlots = {
    SuccessScreen?: (props?: SuccessScreenProps) => React.JSX.Element;
};
export type ChangePasswordScreenSlotsProps = {
    SuccessScreen?: SuccessScreenProps;
};
export type ChangePasswordScreenProps = WorkflowCardProps & {
    PasswordProps?: SetPasswordProps;
} & {
    /**
     * The label to display for the current password field
     */
    currentPasswordLabel?: string;
    /**
     * Function called when the current password field changes
     * @param {string} currentPassword - the updated value from the currentPassword field
     * @returns void
     */
    currentPasswordChange?: (currentPassword: string) => void;
    /**
     * Configure whether the next button is enabled or disabled.
     */
    enableButton?: boolean | (() => boolean);
    /**
     * Function called when the button is clicked on success screen
     * @returns void
     */
    onFinish?: () => void;
    /**
     * The props to pass to the current password field.
     * See React Native Paper [TextInputProps API](https://callstack.github.io/react-native-paper/docs/components/TextInput/) for more details.
     */
    currentPasswordTextInputProps?: TextInputProps;
    /**
     * Used to determine whether to show a success screen after the form is submitted
     */
    showSuccessScreen?: boolean;
    /**
     * Used for ChangePasswordScreen SuccessScreen
     */
    slots?: ChangePasswordScreenSlots;
    /**
     * Applied to slot from SuccessScreen
     */
    slotProps?: ChangePasswordScreenSlotsProps;
    /**
     * The configuration for customizing how errors are displayed
     */
    errorDisplayConfig?: ErrorManagerProps;
};
