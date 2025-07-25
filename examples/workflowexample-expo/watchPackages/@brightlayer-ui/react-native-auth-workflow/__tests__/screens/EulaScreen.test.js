import { jsx as _jsx } from 'react/jsx-runtime';
import '@testing-library/jest-dom';
import '@testing-library/jest-native/extend-expect.js';
import { cleanup, render, fireEvent, screen, waitFor } from '@testing-library/react-native';
import { EulaScreen } from '../../screens/EulaScreen/index.js';
import { RegistrationWorkflow } from '../../components/index.js';
import { RegistrationContextProvider, i18nRegistrationInstance } from '../../contexts/index.js';
import { registrationContextProviderProps } from '../../testUtils/index.js';
import { Provider as PaperProvider } from 'react-native-paper';
afterEach(cleanup);
describe('Eula Screen', () => {
    it('Eula Screen renders correctly', () => {
        const rendered = render(
            _jsx(PaperProvider, {
                children: _jsx(RegistrationContextProvider, {
                    ...registrationContextProviderProps,
                    children: _jsx(RegistrationWorkflow, { initialScreenIndex: 0, children: _jsx(EulaScreen, {}) }),
                }),
            })
        ).toJSON();
        expect(rendered).toBeTruthy();
    });
    it('check if next button is calling onNext function prop', () => {
        const nextfn = jest.fn();
        render(
            _jsx(PaperProvider, {
                children: _jsx(RegistrationContextProvider, {
                    ...registrationContextProviderProps,
                    children: _jsx(RegistrationWorkflow, {
                        initialScreenIndex: 0,
                        children: _jsx(EulaScreen, {
                            eulaContent: 'Hello',
                            checkboxLabel: 'check',
                            checkboxProps: { disabled: false },
                            WorkflowCardActionsProps: {
                                onNext: () => nextfn(),
                                showNext: true,
                                nextLabel: 'NextButton',
                            },
                        }),
                    }),
                }),
            })
        );
        const checkbox = screen.getByTestId('blui-eula-checkbox');
        fireEvent.press(checkbox);
        const nextButton = screen.getByText('NextButton');
        expect(nextButton).toBeEnabled();
        fireEvent.press(nextButton);
        expect(nextfn).toHaveBeenCalled();
    });
    it('check if previos button is calling onPrevious function prop', () => {
        const prevFn = jest.fn();
        render(
            _jsx(PaperProvider, {
                children: _jsx(RegistrationContextProvider, {
                    ...registrationContextProviderProps,
                    children: _jsx(RegistrationWorkflow, {
                        initialScreenIndex: 0,
                        children: _jsx(EulaScreen, {
                            eulaContent: 'Hello',
                            checkboxLabel: 'I have read and agree to the Terms & Conditions',
                            initialCheckboxValue: true,
                            WorkflowCardActionsProps: {
                                onPrevious: prevFn(),
                                showPrevious: true,
                                previousLabel: 'Back',
                            },
                        }),
                    }),
                }),
            })
        );
        fireEvent.press(screen.getByText('Back'));
        expect(prevFn).toHaveBeenCalled();
    });
    it('should throw error in eula and clicking refresh button should call loadEula', async () => {
        const loadFn = jest.fn().mockRejectedValue(new Error('qwertyuiop'));
        const { findByText } = render(
            _jsx(PaperProvider, {
                children: _jsx(RegistrationContextProvider, {
                    ...{
                        language: 'en',
                        i18n: i18nRegistrationInstance,
                        navigate: () => {},
                        routeConfig: {},
                        actions: {
                            loadEula: loadFn,
                            acceptEula: jest.fn(),
                            requestRegistrationCode: jest.fn(),
                            validateUserRegistrationRequest: jest.fn(),
                            createPassword: jest.fn(),
                            setAccountDetails: jest.fn(),
                            completeRegistration: jest.fn().mockImplementation(() => Promise.resolve()),
                        },
                    },
                    children: _jsx(RegistrationWorkflow, { children: _jsx(EulaScreen, {}) }),
                }),
            })
        );
        await waitFor(() => expect(screen.queryByText('Loading...')).toBeNull());
        fireEvent.press(await findByText('Retry'));
        expect(loadFn).toHaveBeenCalledTimes(2);
    }, 10000);
    it('should throw error in eula and clicking refresh button should call loadEula', async () => {
        const loadFn = jest.fn().mockRejectedValue(new Error('qwertyuiop'));
        const { findByText } = render(
            _jsx(PaperProvider, {
                children: _jsx(RegistrationContextProvider, {
                    ...{
                        language: 'en',
                        i18n: i18nRegistrationInstance,
                        navigate: () => {},
                        routeConfig: {},
                        actions: {
                            loadEula: loadFn,
                            acceptEula: jest.fn(),
                            requestRegistrationCode: jest.fn(),
                            validateUserRegistrationRequest: jest.fn(),
                            createPassword: jest.fn(),
                            setAccountDetails: jest.fn(),
                            completeRegistration: jest.fn().mockImplementation(() => Promise.resolve()),
                        },
                    },
                    children: _jsx(RegistrationWorkflow, { children: _jsx(EulaScreen, {}) }),
                }),
            })
        );
        await waitFor(() => expect(screen.queryByText('Loading...')).toBeNull());
        fireEvent.press(await findByText('Retry'));
        expect(loadFn).toHaveBeenCalledTimes(2);
    }, 10000);
    it('should be able to go to next screen when account exists in validateUserRegistrationRequest on next button pressed in case of invite registration', async () => {
        const validateFn = jest.fn().mockReturnValue({ codeValid: true, accountExists: true });
        const { getByText, queryByText, getByTestId, findByText } = render(
            _jsx(PaperProvider, {
                children: _jsx(RegistrationContextProvider, {
                    ...{
                        language: 'en',
                        i18n: i18nRegistrationInstance,
                        navigate: () => {},
                        routeConfig: {},
                        actions: {
                            loadEula: jest.fn(),
                            acceptEula: jest.fn(),
                            requestRegistrationCode: jest.fn(),
                            validateUserRegistrationRequest: validateFn,
                            createPassword: jest.fn(),
                            setAccountDetails: jest.fn(),
                            completeRegistration: jest.fn().mockImplementation(() => Promise.resolve()),
                        },
                    },
                    children: _jsx(RegistrationWorkflow, {
                        isInviteRegistration: true,
                        initialRegistrationParams: { code: '123', email: 'emailAddress@emailAddress.com' },
                        children: _jsx(EulaScreen, {
                            eulaContent: 'Hello',
                            checkboxLabel: 'check',
                            checkboxProps: { disabled: false },
                        }),
                    }),
                }),
            })
        );
        await waitFor(() => expect(queryByText('Loading...')).toBeNull());
        const checkbox = getByTestId('blui-eula-checkbox');
        fireEvent.press(checkbox);
        fireEvent.press(getByText('Next'));
        await waitFor(() => expect(queryByText('Loading...')).toBeNull());
        expect(
            await findByText(
                'Your account has been successfully created. Please log in with your Eaton account email and password.'
            )
        ).toBeOnTheScreen();
        expect(validateFn).toHaveBeenCalled();
    }, 10000);
    it('should be able to trigger error when codeValid is false in validateUserRegistrationRequest on next button pressed in case of invite registration ', async () => {
        const validateFn = jest.fn().mockReturnValue({ codeValid: false, accountExists: false });
        const { getByText, queryByText, getByTestId, findByText } = render(
            _jsx(PaperProvider, {
                children: _jsx(RegistrationContextProvider, {
                    ...{
                        language: 'en',
                        i18n: i18nRegistrationInstance,
                        navigate: () => {},
                        routeConfig: {},
                        actions: {
                            loadEula: jest.fn(),
                            acceptEula: jest.fn(),
                            requestRegistrationCode: jest.fn(),
                            validateUserRegistrationRequest: validateFn,
                            createPassword: jest.fn(),
                            setAccountDetails: jest.fn(),
                            completeRegistration: jest.fn().mockImplementation(() => Promise.resolve()),
                        },
                    },
                    children: _jsx(RegistrationWorkflow, {
                        isInviteRegistration: true,
                        initialRegistrationParams: { code: '123', email: 'emailAddress@emailAddress.com' },
                        children: _jsx(EulaScreen, {
                            eulaContent: 'Hello',
                            checkboxLabel: 'check',
                            checkboxProps: { disabled: false },
                        }),
                    }),
                }),
            })
        );
        await waitFor(() => expect(queryByText('Loading...')).toBeNull());
        const checkbox = getByTestId('blui-eula-checkbox');
        fireEvent.press(checkbox);
        fireEvent.press(getByText('Next'));
        await waitFor(() => expect(queryByText('Loading...')).toBeNull());
        expect(await findByText('Error!')).toBeOnTheScreen();
        expect(validateFn).toHaveBeenCalled();
    }, 10000);
});
