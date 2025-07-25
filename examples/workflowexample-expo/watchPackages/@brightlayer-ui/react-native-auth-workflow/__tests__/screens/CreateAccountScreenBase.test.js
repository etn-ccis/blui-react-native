import { jsx as _jsx } from "react/jsx-runtime";
// import '@testing-library/jest-dom';
import { cleanup, render, fireEvent, screen } from '@testing-library/react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CreateAccountScreenBase } from '../../screens/CreateAccountScreen/index.js';
afterEach(cleanup);
describe('Create Account Base', () => {
    it('renders correctly', () => {
        render(_jsx(SafeAreaProvider, { children: _jsx(CreateAccountScreenBase, {}) }));
        expect(screen.getByTestId('blui-create-account-email-text-input')).toBeOnTheScreen();
    });
    it('renders correctly with props', () => {
        render(_jsx(SafeAreaProvider, { children: _jsx(CreateAccountScreenBase, { WorkflowCardInstructionProps: { instructions: 'Test Instructions' }, initialValue: "a", emailValidator: (email) => {
                    if (email?.length > 6) {
                        return true;
                    }
                    return 'Please enter a valid email';
                } }) }));
        expect(screen.getByText('Please enter a valid email')).toBeOnTheScreen();
    });
    it('email textinput onchange works correctly', () => {
        const updateInput = jest.fn();
        const { getByTestId } = render(_jsx(SafeAreaProvider, { children: _jsx(CreateAccountScreenBase, { WorkflowCardInstructionProps: { instructions: 'Test Instructions' }, initialValue: "a", emailValidator: (email) => {
                    if (email?.length > 6) {
                        return true;
                    }
                    return 'Please enter a valid email';
                }, emailTextFieldProps: { onChangeText: updateInput } }) }));
        const Input = getByTestId('blui-create-account-email-text-input');
        fireEvent.changeText(Input, 'email@test.com');
        expect(updateInput).toHaveBeenCalledTimes(1);
    });
});
