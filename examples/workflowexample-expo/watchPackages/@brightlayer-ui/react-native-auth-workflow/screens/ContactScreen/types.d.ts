/// <reference types="react" />
import { IconSource } from '@brightlayer-ui/react-native-components/core/__types__/index.js';
import { WorkflowCardProps } from '../../components/WorkflowCard/WorkflowCard.types.js';
export type ContactSupportScreenProps = WorkflowCardProps & {
    /**
     * The icon to display in the header
     */
    icon?: IconSource;
    /**
     * The Size of Icon
     */
    iconSize?: number;
    /**
     * The title for the email support section
     */
    emailSupportTitle?: string;
    /**
     * The content for the email support section
     * @param {string} email - the email address for contacting support
     * @returns string | React.JSX.Element
     */
    emailSupportContent?: (email: string) => string | React.JSX.Element;
    /**
     * The title for the phone support section
     */
    phoneSupportTitle?: string;
    /**
     * The content for the phone support section
     * @param {string} phone - the phone number for contacting support
     * @returns string | React.JSX.Element
     */
    phoneSupportContent?: (phone: string) => string | React.JSX.Element;
    /**
     * The email address to display in the email support section
     */
    contactEmail?: string;
    /**
     * The phone number to display in the phone support section
     */
    contactPhone?: string;
    /**
     * The text to display on the dismiss button
     */
    dismissButtonLabel?: string;
    /**
     * The function to call when the dismiss button is clicked
     * @returns void
     */
    onDismiss?: () => void;
};
