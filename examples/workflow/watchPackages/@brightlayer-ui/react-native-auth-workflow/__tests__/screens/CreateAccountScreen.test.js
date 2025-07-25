import { jsx as _jsx } from "react/jsx-runtime";
import '@testing-library/jest-dom';
import { cleanup, render, fireEvent, screen } from '@testing-library/react-native';
import { CreateAccountScreen } from '../../screens/CreateAccountScreen/index.js';
import { RegistrationWorkflow } from '../../components/index.js';
import { RegistrationContextProvider } from '../../contexts/index.js';
import { registrationContextProviderProps } from '../../testUtils/index.js';
import { PaperProvider } from 'react-native-paper';
jest.useFakeTimers();
afterEach(cleanup);
describe('Create Account Base', () => {
    it('renders correctly', () => {
        render(_jsx(PaperProvider, { children: _jsx(RegistrationContextProvider, { ...registrationContextProviderProps, children: _jsx(RegistrationWorkflow, { initialScreenIndex: 0, children: _jsx(CreateAccountScreen, {}) }) }) }));
        expect(screen.getByTestId('blui-create-account-email-text-input')).toBeOnTheScreen();
    });
    it('should call onNext, when Next button clicked', () => {
        const nextfn = jest.fn();
        render(_jsx(PaperProvider, { children: _jsx(RegistrationContextProvider, { ...registrationContextProviderProps, children: _jsx(RegistrationWorkflow, { initialScreenIndex: 0, children: _jsx(CreateAccountScreen, { WorkflowCardActionsProps: {
                            onNext: () => nextfn(),
                            showNext: true,
                            nextLabel: 'NextButton',
                        } }) }) }) }));
        const emailInput = screen.getByTestId('blui-create-account-email-text-input');
        fireEvent.changeText(emailInput, 'email@test.com');
        fireEvent.press(screen.getByText('NextButton'));
        expect(nextfn).toHaveBeenCalled();
    });
    it('should call onPrevious, when Back button clicked', () => {
        const prevFn = jest.fn();
        render(_jsx(PaperProvider, { children: _jsx(RegistrationContextProvider, { ...registrationContextProviderProps, children: _jsx(RegistrationWorkflow, { initialScreenIndex: 0, children: _jsx(CreateAccountScreen, { WorkflowCardActionsProps: {
                            onPrevious: prevFn(),
                            showPrevious: true,
                            previousLabel: 'Back',
                        } }) }) }) }));
        const emailInput = screen.getByTestId('blui-create-account-email-text-input');
        fireEvent.changeText(emailInput, 'email@test.com');
        fireEvent.press(screen.getByText('Back'));
        expect(prevFn).toHaveBeenCalled();
    });
});
