import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { render, cleanup, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-dom';
import { LoginScreenBase } from '../../screens/LoginScreen/index.js';
import { Provider as PaperProvider } from 'react-native-paper';
const EMAIL_REGEX = /^[A-Z0-9._%+'-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
afterEach(cleanup);
describe('LoginScreenBase', () => {
    test('renders all input fields with correct labels', () => {
        const { getByTestId } = render(_jsx(PaperProvider, { children: _jsx(LoginScreenBase, {}) }));
        expect(getByTestId('blui-login-username-text-field')).toBeTruthy();
        expect(getByTestId('blui-login-password-text-field')).toBeTruthy();
        expect(getByTestId('blui-login-login-button')).toBeTruthy();
    });
    test('triggers login function when login button is pressed with valid inputs', () => {
        const mockLogin = jest.fn();
        const { getByTestId } = render(_jsxs(PaperProvider, { children: [' ', _jsx(LoginScreenBase, { usernameLabel: "Email Address", usernameValidator: (username) => {
                        if (!EMAIL_REGEX.test(username)) {
                            return 'Enter a valid email address';
                        }
                        return true;
                    }, initialUsernameValue: "", passwordLabel: "Password", passwordValidator: (password) => {
                        if (password.length < 2) {
                            return 'Password must be at least 2 characters';
                        }
                        return true;
                    }, onLogin: mockLogin })] }));
        fireEvent.changeText(getByTestId('blui-login-username-text-field'), 'email@email.com');
        fireEvent.changeText(getByTestId('blui-login-password-text-field'), 'testpassword');
        fireEvent.press(getByTestId('blui-login-login-button'));
        expect(mockLogin).toHaveBeenCalledWith('email@email.com', 'testpassword', undefined);
    });
    test('does not trigger login function when login button is pressed with invalid inputs', () => {
        const mockLogin = jest.fn();
        const { getByTestId } = render(_jsx(PaperProvider, { children: _jsx(LoginScreenBase, { onLogin: mockLogin }) }));
        fireEvent.changeText(getByTestId('blui-login-username-text-field'), '');
        fireEvent.changeText(getByTestId('blui-login-password-text-field'), '');
        fireEvent.press(getByTestId('blui-login-login-button'));
        expect(mockLogin).not.toHaveBeenCalled();
    });
    test('triggers forgot password function when forgot password label is pressed', () => {
        const mockForgotPassword = jest.fn();
        const { getByTestId } = render(_jsx(PaperProvider, { children: _jsx(LoginScreenBase, { showForgotPassword: true, onForgotPassword: mockForgotPassword }) }));
        fireEvent.press(getByTestId('blui-login-forgot-password-label'));
        expect(mockForgotPassword).toHaveBeenCalled();
    });
    test('triggers self register function when self register label is pressed', () => {
        const mockSelfRegister = jest.fn();
        const { getByTestId } = render(_jsx(PaperProvider, { children: _jsx(LoginScreenBase, { showSelfRegistration: true, onSelfRegister: mockSelfRegister }) }));
        fireEvent.press(getByTestId('blui-login-self-register-label'));
        expect(mockSelfRegister).toHaveBeenCalled();
    });
    test('triggers contact support function when contact support label is pressed', () => {
        const mockContactSupport = jest.fn();
        const { getByTestId } = render(_jsx(PaperProvider, { children: _jsx(LoginScreenBase, { showContactSupport: true, onContactSupport: mockContactSupport }) }));
        fireEvent.press(getByTestId('blui-login-contact-support-label'));
        expect(mockContactSupport).toHaveBeenCalled();
    });
    test('checks if remember me checkbox is selected', () => {
        const mockRememberMeChanged = jest.fn();
        const { getByTestId } = render(_jsx(PaperProvider, { children: _jsx(LoginScreenBase, { showRememberMe: true, onRememberMeChanged: mockRememberMeChanged }) }));
        const checkbox = getByTestId('blui-login-remember-me-checkbox');
        fireEvent.press(checkbox);
        expect(mockRememberMeChanged).toHaveBeenCalled();
    });
    test('triggers onSubmitEditing when pressing enter key on username field', () => {
        const mockSubmitEditing = jest.fn();
        const { getByTestId } = render(_jsx(PaperProvider, { children: _jsx(LoginScreenBase, { usernameTextFieldProps: { onSubmitEditing: mockSubmitEditing } }) }));
        const usernameInput = getByTestId('blui-login-username-text-field');
        fireEvent(usernameInput, 'submitEditing');
        expect(mockSubmitEditing).toHaveBeenCalled();
    });
    test('triggers onSubmitEditing when pressing enter key on password field', () => {
        const mockSubmitEditing = jest.fn();
        const { getByTestId } = render(_jsx(PaperProvider, { children: _jsx(LoginScreenBase, { passwordTextFieldProps: { onSubmitEditing: mockSubmitEditing } }) }));
        const passwordInput = getByTestId('blui-login-password-text-field');
        fireEvent(passwordInput, 'submitEditing');
        expect(mockSubmitEditing).toHaveBeenCalled();
    });
});
