import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import '@testing-library/jest-dom';
import { cleanup, render, renderHook } from '@testing-library/react-native';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { registrationContextProviderProps } from '../../testUtils/index.js';
import { RegistrationContextProvider, useRegistrationContext } from '../../contexts/index.js';
afterEach(cleanup);
describe('RegistrationContextProvider', () => {
    it('should render RegistrationContextProvider without crashing', () => {
        const { getByText } = render(
            _jsx(RegistrationContextProvider, {
                ...registrationContextProviderProps,
                children: _jsx(Text, { children: 'Hello Registration' }),
            })
        );
        expect(getByText('Hello Registration')).toBeTruthy();
    });
    it('should read values from the context', () => {
        const wrapper = ({ children }) =>
            _jsx(RegistrationContextProvider, { ...registrationContextProviderProps, children: children });
        const { result } = renderHook(() => useRegistrationContext(), { wrapper });
        expect(result.current.language).toBe('en');
    });
    it('should set values in the context', () => {
        const wrapper = ({ children }) =>
            _jsx(RegistrationContextProvider, {
                ...registrationContextProviderProps,
                language: 'es',
                children: children,
            });
        const { result } = renderHook(() => useRegistrationContext(), { wrapper });
        expect(result.current.language).not.toBe('en');
        expect(result.current.language).toBe('es');
    });
    it('should render multiple children', () => {
        const { getByText } = render(
            _jsxs(RegistrationContextProvider, {
                ...registrationContextProviderProps,
                children: [
                    _jsx(View, { children: _jsx(Text, { children: 'Child 1' }) }),
                    _jsx(View, { children: _jsx(Text, { children: 'Child 2' }) }),
                ],
            })
        );
        expect(getByText('Child 1')).toBeTruthy();
        expect(getByText('Child 2')).toBeTruthy();
    });
});
