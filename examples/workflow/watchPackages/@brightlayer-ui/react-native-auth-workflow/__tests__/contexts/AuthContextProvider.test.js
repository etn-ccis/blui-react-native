import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { Text } from 'react-native-paper';
import '@testing-library/jest-dom';
import { render, cleanup, screen, renderHook } from '@testing-library/react-native';
import { AuthContextProvider } from '../../contexts/AuthContext/provider.js';
import { useAuthContext } from '../../contexts/AuthContext/index.js';
import { authContextProviderProps } from '../../testUtils/index.js';
afterEach(cleanup);
describe('AuthContextProvider', () => {
    it('should render AuthContextProvider without crashing', () => {
        render(
            _jsx(AuthContextProvider, { ...authContextProviderProps, children: _jsx(Text, { children: 'Hello Auth' }) })
        );
        expect(screen.getByText('Hello Auth')).toBeTruthy();
    });
    it('should read values from the context', () => {
        const wrapper = ({ children }) =>
            _jsx(AuthContextProvider, { ...authContextProviderProps, children: children });
        const { result } = renderHook(() => useAuthContext(), { wrapper });
        expect(result.current.language).toBe('en');
    });
    it('should set values in the context', () => {
        const wrapper = ({ children }) =>
            _jsx(AuthContextProvider, { ...authContextProviderProps, language: 'es', children: children });
        const { result } = renderHook(() => useAuthContext(), { wrapper });
        expect(result.current.language).not.toBe('en');
        expect(result.current.language).toBe('es');
    });
    it('should render multiple children', () => {
        render(
            _jsxs(AuthContextProvider, {
                ...authContextProviderProps,
                children: [_jsx(Text, { children: 'Child 1' }), _jsx(Text, { children: 'Child 2' })],
            })
        );
        expect(screen.getByText('Child 1')).toBeTruthy();
        expect(screen.getByText('Child 2')).toBeTruthy();
    });
});
