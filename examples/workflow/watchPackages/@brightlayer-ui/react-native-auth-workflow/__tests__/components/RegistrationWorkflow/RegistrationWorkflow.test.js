import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { cleanup, fireEvent, render, screen, renderHook, act, waitFor, } from '@testing-library/react-native';
import { RegistrationWorkflow } from '../../../components/RegistrationWorkflow/RegistrationWorkflow.js';
import { RegistrationContextProvider, useRegistrationWorkflowContext } from '../../../contexts/index.js';
import { CreateAccountScreen } from '../../../screens/index.js';
import { registrationContextProviderProps } from '../../../testUtils/index.js';
import { Button, Text, Provider as PaperProvider, TextInput } from 'react-native-paper';
import { View } from 'react-native';
afterEach(cleanup);
const defaultProps = {
    initialScreenIndex: 0,
};
const renderer = (props = defaultProps) => render(_jsx(RegistrationContextProvider, { ...registrationContextProviderProps, children: _jsxs(RegistrationWorkflow, { ...props, children: [_jsx(Text, { children: "Screen 1" }), _jsx(Text, { children: "Screen 2" })] }) }));
describe('RegistrationWorkflow', () => {
    it('should render without crashing', () => {
        renderer();
        expect(render);
        expect(screen.getByText('Screen 1')).toBeOnTheScreen();
    });
    it('should render multiple screens', () => {
        const nextScreen = jest.fn();
        const { getByText } = render(_jsx(RegistrationContextProvider, { ...registrationContextProviderProps, children: _jsxs(RegistrationWorkflow, { children: [_jsxs(_Fragment, { children: [_jsx(Text, { children: "Indexed Screen 1" }), _jsx(Button, { onPress: () => {
                                    nextScreen({ screenId: 'Eula', values: { accepted: true } });
                                }, children: "Next" })] }), _jsx(Text, { children: "Indexed Screen 2" })] }) }));
        fireEvent.press(getByText('Next'));
        expect(screen.getByText('Indexed Screen 2')).toBeOnTheScreen();
    });
    it('should render the correct screen, when initialScreenIndex prop is passed', () => {
        renderer({ initialScreenIndex: 1 });
        expect(screen.getByText('Screen 2')).toBeOnTheScreen();
    });
    it('should call nextScreen function', () => {
        const nextScreen = jest.fn();
        const { getByText } = render(_jsx(RegistrationContextProvider, { ...registrationContextProviderProps, children: _jsxs(RegistrationWorkflow, { children: [_jsxs(_Fragment, { children: [_jsx(Text, { children: "Indexed Screen 1" }), _jsx(Button, { onPress: () => {
                                    nextScreen({ screenId: 'Eula', values: { accepted: true } });
                                }, children: "Next" })] }), _jsx(Text, { children: "Indexed Screen 2" })] }) }));
        fireEvent.press(getByText('Next'));
        expect(nextScreen).toHaveBeenCalledWith({ screenId: 'Eula', values: { accepted: true } });
    });
    it('should set screen data for default registration workflow in the context', () => {
        const wrapper = ({ children }) => (_jsx(PaperProvider, { children: _jsx(RegistrationContextProvider, { ...registrationContextProviderProps, children: _jsx(RegistrationWorkflow, { isInviteRegistration: true, initialRegistrationParams: { code: '123', email: 'emailAddress@emailAddress.com' }, ...defaultProps, children: children }) }) }));
        const { result } = renderHook(() => useRegistrationWorkflowContext(), { wrapper });
        void act(() => {
            void result.current.nextScreen({ screenId: 'Eula', values: { accepted: true } });
        });
        expect(result.current.screenData.Eula.accepted).toBeTruthy();
        expect(result.current.screenData.CreateAccount.emailAddress).toBe('emailAddress@emailAddress.com');
        expect(result.current.screenData.VerifyCode.code).toBe('123');
    });
    it('should set screen data for custom registration workflow in the context', () => {
        const wrapper = ({ children }) => (_jsx(PaperProvider, { children: _jsx(RegistrationContextProvider, { ...registrationContextProviderProps, children: _jsx(RegistrationWorkflow, { ...defaultProps, children: children }) }) }));
        const { result } = renderHook(() => useRegistrationWorkflowContext(), { wrapper });
        void act(() => {
            void result.current.nextScreen({ screenId: 'Screen1', values: { test: 'test' } });
        });
        void act(() => {
            void result.current.nextScreen({
                screenId: 'Screen2',
                values: { test2: 'test2' },
            });
        });
        // @ts-ignore
        expect(result.current.screenData.Other.Screen1.test).toBe('test');
        // @ts-ignore
        void (() => expect(result.current.screenData.Other.Screen2.test2).toBe('test2'));
    });
    it('should check for lower bound of initialScreenIndex props', () => {
        renderer({ initialScreenIndex: -1 });
        expect(screen.getByText('Screen 1')).toBeOnTheScreen();
    });
    it('should check for upper bound of initialScreenIndex props', () => {
        renderer({ initialScreenIndex: 2 });
        expect(screen.getByText('Screen 2')).toBeOnTheScreen();
    });
    it('should render custom success screen', () => {
        const props = defaultProps;
        defaultProps.successScreen = (_jsx(View, { children: _jsx(Text, { children: "Custom Success" }) }));
        const { getByTestId, getByText } = render(_jsx(PaperProvider, { children: _jsx(RegistrationContextProvider, { ...registrationContextProviderProps, children: _jsx(RegistrationWorkflow, { ...props, children: _jsx(CreateAccountScreen, {}) }) }) }));
        const verifyEmailInput = getByTestId('blui-create-account-email-text-input');
        fireEvent.changeText(verifyEmailInput, 'test@test.net');
        const nextButton = getByText('Next');
        fireEvent.press(nextButton);
        void (() => expect(screen.getByText('Custom Success')).toBeInTheDocument());
    });
    it('should render existing account screen', () => {
        defaultProps.existingAccountSuccessScreen = (_jsx(View, { children: _jsx(Text, { children: "Account Exists!!!" }) }));
        const wrapper = ({ children }) => (_jsx(PaperProvider, { children: _jsx(RegistrationContextProvider, { ...registrationContextProviderProps, children: _jsx(RegistrationWorkflow, { ...defaultProps, children: children }) }) }));
        const { result } = renderHook(() => useRegistrationWorkflowContext(), { wrapper });
        expect(result.current.screenData.Eula.accepted).toBeFalsy();
        expect(result.current.screenData.CreateAccount.emailAddress).toBe('');
        void act(() => {
            void result.current.nextScreen({ screenId: 'Eula', values: { accepted: true } });
        });
        void act(() => {
            void result.current.nextScreen({
                screenId: 'CreateAccount',
                values: { emailAddress: 'emailAddress@emailAddress.com' },
                isAccountExist: true,
            });
        });
        expect(result.current.screenData.Eula.accepted).toBeTruthy();
        expect(screen.getByText('Account Exists!!!')).toBeOnTheScreen();
    });
    it('should render existing account screen', () => {
        defaultProps.existingAccountSuccessScreen = (_jsx(View, { children: _jsx(Text, { children: "Account Exists!!!" }) }));
        const wrapper = ({ children }) => (_jsx(PaperProvider, { children: _jsx(RegistrationContextProvider, { ...registrationContextProviderProps, children: _jsx(RegistrationWorkflow, { ...defaultProps, children: children }) }) }));
        const { result } = renderHook(() => useRegistrationWorkflowContext(), { wrapper });
        expect(result.current.screenData.Eula.accepted).toBeFalsy();
        expect(result.current.screenData.CreateAccount.emailAddress).toBe('');
        void act(() => {
            void result.current.nextScreen({ screenId: 'Eula', values: { accepted: true } });
        });
        void act(() => {
            void result.current.nextScreen({
                screenId: 'CreateAccount',
                values: { emailAddress: 'emailAddress@emailAddress.com' },
                isAccountExist: true,
            });
        });
        expect(result.current.screenData.Eula.accepted).toBeTruthy();
        void (() => expect(screen.getByText('Account Exists!!!')).toBeInTheDocument());
    });
    it('should display default registration workflow', async () => {
        render(_jsx(PaperProvider, { children: _jsx(RegistrationContextProvider, { ...registrationContextProviderProps, children: _jsx(RegistrationWorkflow, {}) }) }));
        await waitFor(() => expect(screen.queryByText('Loading...')).toBeNull());
        fireEvent.press(screen.getAllByText('Next')[0]);
        expect(screen.getByText('Create an Account')).toBeOnTheScreen();
        expect(screen.getAllByText('Next').length).toBe(5);
    }, 100000);
    it('should skip create account screen in invite registration workflow', async () => {
        render(_jsx(PaperProvider, { children: _jsx(RegistrationContextProvider, { ...registrationContextProviderProps, children: _jsx(RegistrationWorkflow, { isInviteRegistration: true, initialRegistrationParams: { code: '123', email: 'emailAddress@emailAddress.com' } }) }) }));
        await waitFor(() => expect(screen.queryByText('Loading...')).toBeNull());
        fireEvent.press(screen.getAllByText('Next')[0]);
        expect(screen.queryByText('Create Account')).not.toBeOnTheScreen();
        expect(screen.getByText('Create Password')).toBeOnTheScreen();
        expect(screen.getAllByText('Next').length).toBe(3);
    });
    it('should display custom screen', () => {
        render(_jsx(PaperProvider, { children: _jsx(RegistrationContextProvider, { ...registrationContextProviderProps, children: _jsx(RegistrationWorkflow, { children: _jsx(TextInput, { testID: "blui-registration-workflow-text-input" }) }) }) }));
        expect(screen.getByTestId('blui-registration-workflow-text-input')).toBeOnTheScreen();
    });
    it('should display single screen', () => {
        render(_jsx(PaperProvider, { children: _jsx(RegistrationContextProvider, { ...registrationContextProviderProps, children: _jsx(RegistrationWorkflow, { children: _jsx(CreateAccountScreen, {}) }) }) }));
        expect(screen.getByTestId('blui-create-account-email-text-input')).toBeOnTheScreen();
    });
});
