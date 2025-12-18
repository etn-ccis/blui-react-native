import React from 'react';
import { Text } from 'react-native-paper';
import '@testing-library/jest-dom';
import { render, cleanup, screen, renderHook } from '@testing-library/react-native';
import { AuthContextProvider } from '../../contexts/AuthContext/provider';
import { useAuthContext } from '../../contexts/AuthContext';
import { authContextProviderProps } from '../../testUtils';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

afterEach(cleanup);

describe('AuthContextProvider', () => {
    it('should render AuthContextProvider without crashing', () => {
        render(
            <AuthContextProvider {...authContextProviderProps}>
                <Text>Hello Auth</Text>
            </AuthContextProvider>
        );

        expect(screen.getByText('Hello Auth')).toBeTruthy();
    });

    it('should read values from the context', () => {
        const wrapper = ({ children }: any): React.JSX.Element => (
            <AuthContextProvider {...authContextProviderProps}>{children}</AuthContextProvider>
        );
        const { result } = renderHook(() => useAuthContext(), { wrapper });

        expect(result.current.language).toBe('en');
    });

    it('should set values in the context', () => {
        const wrapper = ({ children }: any): React.JSX.Element => (
            <AuthContextProvider {...authContextProviderProps} language="es">
                {children}
            </AuthContextProvider>
        );
        const { result } = renderHook(() => useAuthContext(), { wrapper });

        expect(result.current.language).not.toBe('en');
        expect(result.current.language).toBe('es');
    });

    it('should render multiple children', () => {
        render(
            <AuthContextProvider {...authContextProviderProps}>
                <Text>Child 1</Text>
                <Text>Child 2</Text>
            </AuthContextProvider>
        );

        expect(screen.getByText('Child 1')).toBeTruthy();
        expect(screen.getByText('Child 2')).toBeTruthy();
    });

    it('should work without custom i18n instance', () => {
        const propsWithoutI18n = { ...authContextProviderProps };
        delete propsWithoutI18n.i18n;

        render(
            <AuthContextProvider {...propsWithoutI18n}>
                <Text>No custom i18n</Text>
            </AuthContextProvider>
        );

        expect(screen.getByText('No custom i18n')).toBeTruthy();
    });

    it('should add resource bundles when custom i18n is provided', async () => {
        const customI18n = i18n.createInstance();
        await customI18n.use(initReactI18next).init({
            lng: 'en',
            fallbackLng: 'en',
            interpolation: {
                escapeValue: false,
            },
        });

        const addResourceBundleSpy = jest.spyOn(customI18n, 'addResourceBundle');

        const { getByText } = render(
            <AuthContextProvider {...authContextProviderProps} i18n={customI18n}>
                <Text>Custom i18n</Text>
            </AuthContextProvider>
        );

        expect(getByText('Custom i18n')).toBeTruthy();
        // Should add resource bundles for all supported languages (zh, en, fr, pt, es) x 2 namespaces (bluiAuth, bluiCommon)
        expect(addResourceBundleSpy).toHaveBeenCalledTimes(10);
        expect(addResourceBundleSpy).toHaveBeenCalledWith('zh', 'bluiAuth', expect.any(Object), true, false);
        expect(addResourceBundleSpy).toHaveBeenCalledWith('en', 'bluiAuth', expect.any(Object), true, false);
        expect(addResourceBundleSpy).toHaveBeenCalledWith('fr', 'bluiAuth', expect.any(Object), true, false);
        expect(addResourceBundleSpy).toHaveBeenCalledWith('pt', 'bluiAuth', expect.any(Object), true, false);
        expect(addResourceBundleSpy).toHaveBeenCalledWith('es', 'bluiAuth', expect.any(Object), true, false);
    });

    it('should use custom errorConfig when provided', () => {
        const customErrorConfig = {
            title: 'Custom Error Title',
            error: 'Custom error message',
        };

        render(
            <AuthContextProvider {...authContextProviderProps} errorConfig={customErrorConfig}>
                <Text>Custom error config</Text>
            </AuthContextProvider>
        );

        expect(screen.getByText('Custom error config')).toBeTruthy();
    });

    it('should merge errorConfig with dialogConfig', () => {
        const customErrorConfig = {
            title: 'Custom Error',
            error: 'Error message',
            dialogConfig: {
                dismissLabel: 'Close',
            },
        };

        render(
            <AuthContextProvider {...authContextProviderProps} errorConfig={customErrorConfig}>
                <Text>Dialog config test</Text>
            </AuthContextProvider>
        );

        expect(screen.getByText('Dialog config test')).toBeTruthy();
    });

    it('should handle rememberMeDetails prop', () => {
        const wrapper = ({ children }: any): React.JSX.Element => (
            <AuthContextProvider
                {...authContextProviderProps}
                rememberMeDetails={{ email: 'test@example.com', rememberMe: true }}
            >
                {children}
            </AuthContextProvider>
        );
        const { result } = renderHook(() => useAuthContext(), { wrapper });

        expect(result.current.rememberMeDetails?.email).toBe('test@example.com');
        expect(result.current.rememberMeDetails?.rememberMe).toBe(true);
    });

    it('should support different languages', () => {
        const wrapper = ({ children }: any): React.JSX.Element => (
            <AuthContextProvider {...authContextProviderProps} language="fr">
                {children}
            </AuthContextProvider>
        );
        const { result } = renderHook(() => useAuthContext(), { wrapper });

        expect(result.current.language).toBe('fr');
    });

    it('should support Chinese language', () => {
        render(
            <AuthContextProvider {...authContextProviderProps} language="zh">
                <Text>Chinese language</Text>
            </AuthContextProvider>
        );

        expect(screen.getByText('Chinese language')).toBeTruthy();
    });

    it('should support Portuguese language', () => {
        render(
            <AuthContextProvider {...authContextProviderProps} language="pt">
                <Text>Portuguese language</Text>
            </AuthContextProvider>
        );

        expect(screen.getByText('Portuguese language')).toBeTruthy();
    });

    it('should provide all actions from context', () => {
        const wrapper = ({ children }: any): React.JSX.Element => (
            <AuthContextProvider {...authContextProviderProps}>{children}</AuthContextProvider>
        );
        const { result } = renderHook(() => useAuthContext(), { wrapper });

        expect(result.current.actions).toBeDefined();
        expect(result.current.actions.initiateSecurity).toBeDefined();
        expect(result.current.actions.logIn).toBeDefined();
        expect(result.current.actions.forgotPassword).toBeDefined();
        expect(result.current.actions.verifyResetCode).toBeDefined();
        expect(result.current.actions.setPassword).toBeDefined();
        expect(result.current.actions.changePassword).toBeDefined();
    });

    it('should provide navigate function from context', () => {
        const mockNavigate = jest.fn();
        const wrapper = ({ children }: any): React.JSX.Element => (
            <AuthContextProvider {...authContextProviderProps} navigate={mockNavigate}>
                {children}
            </AuthContextProvider>
        );
        const { result } = renderHook(() => useAuthContext(), { wrapper });

        expect(result.current.navigate).toBeDefined();
        expect(result.current.navigate).toBe(mockNavigate);
    });

    it('should provide routeConfig from context', () => {
        const customRouteConfig = { LOGIN: '/login', FORGOT_PASSWORD: '/forgot' };
        const wrapper = ({ children }: any): React.JSX.Element => (
            <AuthContextProvider {...authContextProviderProps} routeConfig={customRouteConfig}>
                {children}
            </AuthContextProvider>
        );
        const { result } = renderHook(() => useAuthContext(), { wrapper });

        expect(result.current.routeConfig).toBeDefined();
        expect(result.current.routeConfig).toEqual(customRouteConfig);
    });
});
