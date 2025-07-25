import { jsx as _jsx } from 'react/jsx-runtime';
import { render, fireEvent } from '@testing-library/react-native';
import { OktaRedirectLoginScreenBase } from '../../screens/index.js';
import { Image, Text } from 'react-native';
describe('OktaRedirectLoginScreenBase', () => {
    const defaultProps = {
        loginButtonLabel: 'Sign In with Okta',
        onLogin: jest.fn(),
        showForgotPassword: true,
        forgotPasswordLabel: 'Forgot your password?',
        onForgotPassword: jest.fn(),
        errorDisplayConfig: {},
        showSelfRegistration: true,
        selfRegisterButtonLabel: 'Register now!',
        selfRegisterInstructions: 'Need an account?',
        onSelfRegister: jest.fn(),
        showContactSupport: true,
        contactSupportLabel: 'Contact Support',
        onContactSupport: jest.fn(),
        showCyberSecurityBadge: true,
        cyberSecurityBadgeSize: { width: 50, height: 50 },
        projectImage: _jsx(Image, { source: { uri: require('../assets/images/eaton_stacked_logo.png') } }),
        header: _jsx(Text, { children: 'Header' }),
        footer: _jsx(Text, { children: 'Footer' }),
    };
    it('renders the WorkflowCard', () => {
        const { getByTestId } = render(_jsx(OktaRedirectLoginScreenBase, { ...defaultProps }));
        expect(getByTestId('blui-okta-login-workflow-card')).toBeTruthy();
    });
    it('renders the project image wrapper', () => {
        const { getByTestId } = render(_jsx(OktaRedirectLoginScreenBase, { ...defaultProps }));
        expect(getByTestId('blui-okta-login-project-image-wrapper')).toBeTruthy();
    });
    it('renders the login button wrapper and button', () => {
        const { getByTestId } = render(_jsx(OktaRedirectLoginScreenBase, { ...defaultProps }));
        expect(getByTestId('blui-okta-login-login-button-wrapper')).toBeTruthy();
        expect(getByTestId('blui-okta-login-login-button')).toBeTruthy();
    });
    it('renders the bottom body wrapper', () => {
        const { getByTestId } = render(_jsx(OktaRedirectLoginScreenBase, { ...defaultProps }));
        expect(getByTestId('blui-okta-login-bottom-body-wrapper')).toBeTruthy();
    });
    it('renders the forgot password wrapper and label', () => {
        const { getByTestId } = render(_jsx(OktaRedirectLoginScreenBase, { ...defaultProps }));
        expect(getByTestId('blui-okta-login-forgot-password-wrapper')).toBeTruthy();
        expect(getByTestId('blui-login-forgot-password-label')).toBeTruthy();
    });
    it('renders the self-register wrapper, instruction label, and button label', () => {
        const { getByTestId } = render(_jsx(OktaRedirectLoginScreenBase, { ...defaultProps }));
        expect(getByTestId('blui-okta-login-self-register-wrapper')).toBeTruthy();
        expect(getByTestId('blui-okta-login-self-register-instruction-label')).toBeTruthy();
        expect(getByTestId('blui-okta-login-self-register-label').props.children).toBe('Register now!');
    });
    it('calls onSelfRegister when self-register label is pressed', () => {
        const { getByTestId } = render(_jsx(OktaRedirectLoginScreenBase, { ...defaultProps }));
        fireEvent.press(getByTestId('blui-okta-login-self-register-label'));
        expect(defaultProps.onSelfRegister).toHaveBeenCalled();
    });
    it('renders the contact support wrapper and label', () => {
        const { getByTestId } = render(_jsx(OktaRedirectLoginScreenBase, { ...defaultProps }));
        expect(getByTestId('blui-okta-login-contact-support-wrapper')).toBeTruthy();
        expect(getByTestId('blui-okta-login-contact-support-label').props.children).toBe('Contact Support');
    });
    test('calls handleContactSupport when contact support label is pressed', () => {
        const handleContactSupport = jest.fn();
        const { getByTestId } = render(
            _jsx(OktaRedirectLoginScreenBase, { showContactSupport: true, onContactSupport: handleContactSupport })
        );
        const contactSupportLabel = getByTestId('blui-okta-login-contact-support-label');
        fireEvent.press(contactSupportLabel);
        expect(handleContactSupport).toHaveBeenCalled();
    });
    it('renders the footer', () => {
        const { getByTestId } = render(_jsx(OktaRedirectLoginScreenBase, { ...defaultProps }));
        expect(getByTestId('blui-okta-login-footer').props.children).toMatchSnapshot('Footer');
    });
    it('renders the cyber security badge wrapper and image', () => {
        const imgSource = require('../../assets/images/cybersecurity_certified.png');
        const { getByTestId, queryByTestId } = render(_jsx(OktaRedirectLoginScreenBase, { ...defaultProps }));
        expect(getByTestId('blui-okta-login-cyber-security-badge-wrapper')).toBeTruthy();
        expect(queryByTestId('blui-okta-login-cyber-security-badge-image')?.props.source).toBe(imgSource);
    });
    it('calls onLogin when login button is pressed', () => {
        const { getByTestId } = render(_jsx(OktaRedirectLoginScreenBase, { ...defaultProps }));
        fireEvent.press(getByTestId('blui-okta-login-login-button'));
        expect(defaultProps.onLogin).toHaveBeenCalled();
    });
    it('calls onForgotPassword when forgot password label is pressed', () => {
        const { getByTestId } = render(_jsx(OktaRedirectLoginScreenBase, { ...defaultProps }));
        fireEvent.press(getByTestId('blui-login-forgot-password-label'));
        expect(defaultProps.onForgotPassword).toHaveBeenCalled();
    });
    it('calls onContactSupport when contact support label is pressed', () => {
        const { getByTestId } = render(_jsx(OktaRedirectLoginScreenBase, { ...defaultProps }));
        fireEvent.press(getByTestId('blui-okta-login-contact-support-label'));
        expect(defaultProps.onContactSupport).toHaveBeenCalled();
    });
});
