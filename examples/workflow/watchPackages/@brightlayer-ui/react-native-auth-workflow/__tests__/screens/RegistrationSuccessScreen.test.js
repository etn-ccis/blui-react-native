import { jsx as _jsx } from "react/jsx-runtime";
import { cleanup, fireEvent, render, screen } from '@testing-library/react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RegistrationSuccessScreen } from '../../screens/index.js';
import { registrationContextProviderProps } from '../../testUtils/index.js';
import { RegistrationContextProvider, RegistrationWorkflowContextProvider } from '../../contexts/index.js';
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
        Other: { RegistrationSuccessScreen: { organizationName: 'Acme Co.' } },
    },
    updateScreenData: jest.fn(),
    resetScreenData: jest.fn(),
};
describe('RegistrationSuccessScreen', () => {
    let mockOnNext;
    afterEach(() => {
        jest.clearAllMocks();
    });
    beforeEach(() => {
        mockOnNext = jest.fn();
    });
    const renderer = (props) => render(_jsx(SafeAreaProvider, { children: _jsx(RegistrationContextProvider, { ...registrationContextProviderProps, children: _jsx(RegistrationWorkflowContextProvider, { ...registrationWorkflowContextProps, children: _jsx(RegistrationSuccessScreen, { ...props }) }) }) }));
    it('renders without crashing', () => {
        renderer();
        expect(screen.getByText('Account Created!')).toBeOnTheScreen();
    });
    it('should display email id and organization name on success screen', () => {
        renderer();
        expect(screen.getByText('Your account has been successfully created with the email emailAddress@emailAddress.emailAddress. Your account has already been added to the Acme Co. organization.')).toBeOnTheScreen();
    });
    it('should call onNext, when click on Continue button', () => {
        renderer({
            WorkflowCardActionsProps: {
                onNext: mockOnNext(),
            },
        });
        const continueButton = screen.getByText('Finish');
        expect(continueButton).toBeOnTheScreen();
        fireEvent.press(continueButton);
        expect(mockOnNext).toHaveBeenCalled();
    });
});
