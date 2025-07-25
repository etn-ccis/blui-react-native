import { jsx as _jsx } from "react/jsx-runtime";
import { render, cleanup, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-dom';
import { AuthContextProvider } from '../../contexts/index.js';
import { authContextProviderProps } from '../../testUtils/index.js';
import { LoginScreen } from '../../screens/LoginScreen/index.js';
import { Provider as PaperProvider } from 'react-native-paper';
import '@testing-library/jest-native/extend-expect.js';
afterEach(cleanup);
describe('LoginScreen', () => {
    test('renders all input fields with correct labels', () => {
        const { getByTestId } = render(_jsx(AuthContextProvider, { ...authContextProviderProps, children: _jsx(PaperProvider, { children: _jsx(LoginScreen, {}) }) }));
        expect(getByTestId('blui-login-username-text-field')).toBeTruthy();
        expect(getByTestId('blui-login-password-text-field')).toBeTruthy();
        expect(getByTestId('blui-login-remember-me-checkbox')).toBeTruthy();
        expect(getByTestId('blui-login-login-button')).toBeTruthy();
        expect(getByTestId('blui-login-forgot-password-label')).toBeTruthy();
        expect(getByTestId('blui-login-self-register-label')).toBeTruthy();
        expect(getByTestId('blui-login-contact-support-label')).toBeTruthy();
    });
    test('triggers forgot password function when forgot password label is pressed', () => {
        const mockNavigate = jest.fn();
        const { getByTestId } = render(_jsx(AuthContextProvider, { ...authContextProviderProps, navigate: mockNavigate, children: _jsx(PaperProvider, { children: _jsx(LoginScreen, {}) }) }));
        fireEvent.press(getByTestId('blui-login-forgot-password-label'));
        expect(mockNavigate).toHaveBeenCalled();
    });
    test('triggers self register function when self register label is pressed', () => {
        const mockNavigate = jest.fn();
        const { getByTestId } = render(_jsx(AuthContextProvider, { ...authContextProviderProps, navigate: mockNavigate, children: _jsx(PaperProvider, { children: _jsx(LoginScreen, {}) }) }));
        fireEvent.press(getByTestId('blui-login-self-register-label'));
        expect(mockNavigate).toHaveBeenCalled();
    });
    test('triggers contact support function when contact support label is pressed', () => {
        const mockNavigate = jest.fn();
        const { getByTestId } = render(_jsx(AuthContextProvider, { ...authContextProviderProps, navigate: mockNavigate, children: _jsx(PaperProvider, { children: _jsx(LoginScreen, {}) }) }));
        fireEvent.press(getByTestId('blui-login-contact-support-label'));
        expect(mockNavigate).toHaveBeenCalled();
    });
    test('checks if remember me checkbox is selected', () => {
        const { getByTestId } = render(_jsx(AuthContextProvider, { ...authContextProviderProps, children: _jsx(PaperProvider, { children: _jsx(LoginScreen, {}) }) }));
        const checkbox = getByTestId('blui-login-remember-me-checkbox');
        expect(checkbox.props.accessibilityState.checked).toBe(false);
        fireEvent.press(checkbox);
        expect(checkbox.props.accessibilityState.checked).toBe(true);
    });
    test('triggers onSubmitEditing when pressing enter key on username field', () => {
        const mockSubmitEditing = jest.fn();
        const { getByTestId } = render(_jsx(AuthContextProvider, { ...authContextProviderProps, children: _jsx(PaperProvider, { children: _jsx(LoginScreen, { usernameTextFieldProps: { onSubmitEditing: mockSubmitEditing } }) }) }));
        const usernameInput = getByTestId('blui-login-username-text-field');
        fireEvent.changeText(getByTestId('blui-login-username-text-field'), 'email@email.com');
        fireEvent(usernameInput, 'submitEditing');
        expect(mockSubmitEditing).toHaveBeenCalled();
    });
    test('triggers onSubmitEditing when pressing enter key on password field', () => {
        const mockSubmitEditing = jest.fn();
        const { getByTestId } = render(_jsx(AuthContextProvider, { ...authContextProviderProps, children: _jsx(PaperProvider, { children: _jsx(LoginScreen, { passwordTextFieldProps: { onSubmitEditing: mockSubmitEditing } }) }) }));
        const passwordInput = getByTestId('blui-login-password-text-field');
        fireEvent.changeText(getByTestId('blui-login-password-text-field'), 'testpassword');
        fireEvent(passwordInput, 'submitEditing');
        expect(mockSubmitEditing).toHaveBeenCalled();
    });
});
