/// <reference types="react" />
import { ErrorManagerProps } from '../../components/Error/index.js';
import { SetPasswordProps } from '../../components/SetPassword/types.js';
import { WorkflowCardProps } from '../../components/WorkflowCard/WorkflowCard.types.js';
import { SuccessScreenProps } from '../SuccessScreen/index.js';
export type ResetPasswordScreenProps = Omit<WorkflowCardProps, 'currentStep | totalSteps'> & {
    /**
     * Pass code and email for Reset Password action calls
     */
    accountParams?: {
        /**
         * verification code for Resetting pasword
         */
        code: string;
        /**
         * email address of respective account
         */
        email?: string;
    };
    /**
     * The props that will be passed to the SetPassword component
     */
    PasswordProps?: SetPasswordProps;
    /**
     * Boolean that determines whether to show the success screen or not
     */
    showSuccessScreen?: boolean;
    /**
     * used to pass Success Screen component
     */
    SuccessScreen?: (props: SuccessScreenProps) => React.JSX.Element;
    /**
     * props applied to Success Screen
     */
    SuccessScreenProps?: SuccessScreenProps;
    /**
     * The configuration for customizing how errors are displayed
     */
    errorDisplayConfig?: ErrorManagerProps;
};
