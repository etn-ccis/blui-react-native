import { ImageStyle, StyleProp } from 'react-native';
import { WorkflowCardBaseProps } from '../../components/WorkflowCard/WorkflowCard.types';

export type OktaLoginScreenProps = WorkflowCardBaseProps & {
    // configure Login
    /**
     * The label for the login button
     */
    loginButtonLabel?: string;

    /**
     * Callback function that is called when the login button is clicked
     * @returns Promise<void> | void
     */
    onLogin?: () => Promise<void> | void;

    // configure Forgot Password
    /**
     * whether or not to show the 'forgot password' link
     */
    showForgotPassword?: boolean;

    /**
     * The label for the 'forgot password' link
     */
    forgotPasswordLabel?: string;

    /**
     * The callback function that is called when the 'forgot password' link is clicked
     * @returns void
     */
    onForgotPassword?: () => void;

    // configure Self Registration
    /**
     * whether or not to show the 'self registration' link
     */
    showSelfRegistration?: boolean;

    /**
     * The label for the 'self registration' link
     */
    selfRegisterButtonLabel?: string;

    /**
     * The instructions for the 'self registration' link
     */
    selfRegisterInstructions?: string;

    /**
     * The callback function that is called when the 'self registration' link is clicked
     * @returns void
     */
    onSelfRegister?: () => void;

    // configure Support
    /**
     * whether or not to show the 'contact support' link
     */
    showContactSupport?: boolean;

    /**
     * The label for the 'contact support' link
     */
    contactSupportLabel?: string;

    /**
     * The callback function that is called when the 'contact support' link is clicked
     * @returns void
     */
    onContactSupport?: () => void;

    /**
     * whether or not to show the cyber security badge
     */
    showCyberSecurityBadge?: boolean;

    /**
     * The image to display at the top of the screen
     */
    projectImage?: React.ReactNode;

    /**
     * The header to display at the top of the screen
     */
    header?: React.JSX.Element;

    /**
     * The footer to display at the bottom of the screen
     */
    footer?: React.JSX.Element;

    /**
     * The size of the cyber security image
     */
    cyberSecurityBadgeSize?: StyleProp<ImageStyle>;

    /**
     * oktaConfigObject is an object containing configuration settings required for integrating with Okta.
     */
    oktaConfigObject?: {
        clientId: string;
        redirectUri: string;
        endSessionRedirectUri: string;
        discoveryUri: string;
        scopes: string[];
        requireHardwareBackedKeyStore: boolean;
    };
};
