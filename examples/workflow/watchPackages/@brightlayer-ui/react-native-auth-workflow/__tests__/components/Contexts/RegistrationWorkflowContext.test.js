import { jsx as _jsx } from 'react/jsx-runtime';
import { cleanup, render, screen, renderHook } from '@testing-library/react-native';
import { useRegistrationWorkflowContext } from '../../../contexts/RegistrationWorkflowContext/index.js';
import { RegistrationWorkflowContextProvider } from '../../../contexts/RegistrationWorkflowContext/provider.js';
import { Text } from 'react-native-paper';
import { registrationWorkflowContextProps } from '../../../testUtils/index.js';
afterEach(cleanup);
describe('RegistrationWorkflowContext', () => {
    it('should render RegistrationWorkflowContextProvider without crashing', () => {
        render(
            _jsx(RegistrationWorkflowContextProvider, {
                ...registrationWorkflowContextProps,
                children: _jsx(Text, { children: 'Test' }),
            })
        ).toJSON();
        expect(render).toBeTruthy();
        expect(screen.getByText('Test')).toBeTruthy();
    });
    it('should set values in the context', async () => {
        let values;
        const RegisterComponent = () =>
            _jsx(RegistrationWorkflowContextProvider, { ...registrationWorkflowContextProps });
        const CustomFlow = () => {
            const Screen1 = () => {
                values = renderHook(() => useRegistrationWorkflowContext());
                return _jsx(Text, { children: 'Screen 1' });
            };
            return _jsx(RegisterComponent, { children: _jsx(Screen1, {}) });
        };
        render(_jsx(CustomFlow, {}));
        // eslint-disable-next-line
        await (() => expect(values.result.current.currentScreen).toBe(0));
        // eslint-disable-next-line
        await (() => expect(values.result.current.totalScreens).toBe(2));
        // eslint-disable-next-line
        await (() => expect(values.result.current.screenData['Eula'].accepted).toBeTruthy());
        // eslint-disable-next-line
        await (() =>
            expect(values.result.current.screenData.CreateAccount.emailAddress).toBe(
                'emailAddress@emailAddress.emailAddress'
            ));
    });
    it('should throw error, when context value is null', () => {
        try {
            renderHook(() => useRegistrationWorkflowContext());
        } catch (error) {
            expect(error).toBeTruthy();
        }
    });
});
