import { jsx as _jsx } from "react/jsx-runtime";
import { ForgotPasswordScreen } from '../../screens/index.js';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import { AuthContextProvider } from '../../contexts/index.js';
import { authContextProviderProps } from '../../testUtils/index.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';
afterEach(cleanup);
describe('Forgot Password Screen Tests', () => {
    let mockFunction;
    beforeEach(() => {
        mockFunction = jest.fn();
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    const renderer = (props) => render(_jsx(AuthContextProvider, { ...authContextProviderProps, children: _jsx(SafeAreaProvider, { children: _jsx(ForgotPasswordScreen, { ...props }) }) }));
    it('renders correctly', () => {
        renderer({
            description: (time) => _jsx(View, { children: time }),
        });
        expect(screen.getByText('Forgot Password')).toBeOnTheScreen();
    });
    it('should call handleOnClose on click of close icon', () => {
        renderer();
        const closeIcon = screen.getByTestId('blui-workflow-card-header-icon');
        fireEvent.press(closeIcon);
        expect(render).toBeTruthy();
    });
    it('Clicking on Back button test', () => {
        renderer({
            WorkflowCardActionsProps: {
                onPrevious: mockFunction(),
            },
        });
        const prevButton = screen.getByTestId('blui-workflow-card-actions-previous-button');
        fireEvent.press(prevButton);
        expect(mockFunction).toHaveBeenCalled();
    });
    it('Clicking on next button should call handleOnNext callback function', async () => {
        renderer();
        const emailInput = screen.getByTestId('blui-forgot-password-textinput');
        const nextButton = screen.getByTestId('blui-workflow-card-actions-next-button-text');
        expect(nextButton).toBeDisabled();
        fireEvent.changeText(emailInput, 'test@eaton.com');
        expect(nextButton).toBeEnabled();
        fireEvent.press(nextButton);
        expect(screen.getByTestId('blui-spinner')).toBeOnTheScreen();
        await waitFor(() => {
            fireEvent.press(screen.getByText('Done'));
        });
    });
});
