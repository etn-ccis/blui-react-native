import { i18nAuthInstance } from '../contexts/AuthContext/i18nAuthInstance.js';
import { i18nRegistrationInstance } from '../contexts/index.js';
export const authContextProviderProps = {
    language: 'en',
    i18n: i18nAuthInstance,
    navigate: () => {},
    routeConfig: {},
    actions: {
        initiateSecurity: jest.fn(),
        logIn: jest.fn(),
        forgotPassword: jest.fn(),
        verifyResetCode: jest.fn(),
        setPassword: jest.fn(),
        changePassword: jest.fn(),
    },
};
export const registrationContextProviderProps = {
    language: 'en',
    i18n: i18nRegistrationInstance,
    navigate: () => {},
    routeConfig: {},
    actions: {
        loadEula: jest.fn(),
        acceptEula: jest.fn(),
        requestRegistrationCode: jest.fn(),
        validateUserRegistrationRequest: jest.fn(),
        createPassword: jest.fn(),
        setAccountDetails: jest.fn(),
        completeRegistration: jest.fn().mockImplementation(() => Promise.resolve()),
    },
};
export const registrationWorkflowContextProps = {
    currentScreen: 0,
    totalScreens: 5,
    previousScreen: () => {},
    screenData: {
        Eula: { accepted: true },
        CreateAccount: { emailAddress: 'emailAddress@emailAddress.emailAddress' },
        VerifyCode: { code: '12345' },
        CreatePassword: { password: 'password', confirmPassword: 'confirmPassword' },
        AccountDetails: { firstName: 'firstName', lastName: 'lastName' },
    },
    nextScreen: function () {
        throw new Error('Function not implemented.');
    },
    updateScreenData: function () {
        throw new Error('Function not implemented.');
    },
    resetScreenData: function () {
        throw new Error('Function not implemented.');
    },
};
