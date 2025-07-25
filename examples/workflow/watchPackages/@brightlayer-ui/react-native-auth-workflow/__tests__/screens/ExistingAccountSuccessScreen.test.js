import { jsx as _jsx } from "react/jsx-runtime";
import { cleanup, fireEvent, render, screen } from '@testing-library/react-native';
import { ExistingAccountSuccessScreen } from '../../screens/index.js';
import { registrationContextProviderProps } from '../../testUtils/index.js';
import { RegistrationContextProvider, RegistrationWorkflowContextProvider } from '../../contexts/index.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';
afterEach(cleanup);
const registrationWorkflowContextProps = {
    currentScreen: 0,
    totalScreens: 2,
    nextScreen: jest.fn(),
    previousScreen: jest.fn(),
    screenData: {
        Eula: { accepted: true },
        CreateAccount: { emailAddress: 'emailAddress@emailAddress.emailAddress' },
        VerifyCode: { code: '12345' },
        CreatePassword: { password: 'password', confirmPassword: 'confirmPassword' },
        AccountDetails: { firstName: 'firstName', lastName: 'lastName' },
    },
    updateScreenData: jest.fn(),
    resetScreenData: jest.fn(),
};
describe('ExistingAccountSuccessScreen', () => {
    let mockOnDismiss;
    afterEach(() => {
        jest.clearAllMocks();
    });
    beforeEach(() => {
        mockOnDismiss = jest.fn();
    });
    const renderer = (props) => render(_jsx(SafeAreaProvider, { children: _jsx(RegistrationContextProvider, { ...registrationContextProviderProps, children: _jsx(RegistrationWorkflowContextProvider, { ...registrationWorkflowContextProps, children: _jsx(ExistingAccountSuccessScreen, { ...props }) }) }) }));
    it('renders without crashing', () => {
        renderer();
        expect(screen.getByText('Account Created!')).toBeOnTheScreen();
    });
    it('should call onDismiss, when Dismiss button is pressed', () => {
        renderer({
            WorkflowCardActionsProps: {
                nextLabel: 'Dismiss',
                canGoNext: true,
                showNext: true,
                onNext: () => mockOnDismiss(),
            },
        });
        const dismissButton = screen.getByText('Dismiss');
        expect(dismissButton).toBeOnTheScreen();
        fireEvent.press(dismissButton);
        expect(mockOnDismiss).toHaveBeenCalled();
    });
});
