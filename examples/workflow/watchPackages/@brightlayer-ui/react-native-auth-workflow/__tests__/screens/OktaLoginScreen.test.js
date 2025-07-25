import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react-native';
import { useOktaAuthContext } from '../../contexts/index.js';
import { OktaRedirectLoginScreen } from '../../screens/index.js';
// Mock the useAuthContext hook
jest.mock('../../contexts', () => ({
    useOktaAuthContext: jest.fn(),
}));
// Mock the useTranslation hook
jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key) => key,
    }),
}));
describe('OktaRedirectLoginScreen', () => {
    const mockNavigate = jest.fn();
    const mockRouteConfig = {
        FORGOT_PASSWORD: '/forgot-password',
        REGISTER_SELF: '/register-self',
        SUPPORT: '/support',
    };
    beforeEach(() => {
        useOktaAuthContext.mockReturnValue({
            navigate: mockNavigate,
            routeConfig: mockRouteConfig,
        });
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should call navigate with FORGOT_PASSWORD route when forgot password is clicked', () => {
        render(_jsx(OktaRedirectLoginScreen, {}));
        fireEvent.press(screen.getByText('bluiCommon:LABELS.FORGOT_PASSWORD'));
        expect(mockNavigate).toHaveBeenCalledWith(mockRouteConfig.FORGOT_PASSWORD);
    });
    it('should call navigate with REGISTER_SELF route when self register is clicked', () => {
        render(_jsx(OktaRedirectLoginScreen, {}));
        fireEvent.press(screen.getByText('bluiCommon:ACTIONS.CREATE_ACCOUNT'));
        expect(mockNavigate).toHaveBeenCalledWith(mockRouteConfig.REGISTER_SELF);
    });
    it('should call navigate with SUPPORT route when contact support is clicked', () => {
        render(_jsx(OktaRedirectLoginScreen, {}));
        fireEvent.press(screen.getByText('bluiCommon:MESSAGES.CONTACT'));
        expect(mockNavigate).toHaveBeenCalledWith(mockRouteConfig.SUPPORT);
    });
    it('should render custom props correctly', () => {
        const customProps = {
            loginButtonLabel: 'Custom Login',
            forgotPasswordLabel: 'Custom Forgot Password',
            selfRegisterButtonLabel: 'Custom Register',
            contactSupportLabel: 'Custom Contact Support',
        };
        render(_jsx(OktaRedirectLoginScreen, { ...customProps }));
        expect(screen.getByText('Custom Login').props.children).toBe('Custom Login');
        expect(screen.getByText('Custom Forgot Password').props.children).toBe('Custom Forgot Password');
        expect(screen.getByText('Custom Register').props.children).toBe('Custom Register');
        expect(screen.getByText('Custom Contact Support').props.children).toBe('Custom Contact Support');
    });
});
