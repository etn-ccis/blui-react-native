import { jsx as _jsx } from 'react/jsx-runtime';
import { cleanup, render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { RegistrationContextProvider } from '../../contexts/index.js';
import { RegistrationWorkflow } from '../../components/index.js';
import { registrationContextProviderProps } from '../../testUtils/index.js';
import { AccountDetailsScreen } from '../../screens/AccountDetailsScreen/index.js';
afterEach(cleanup);
describe('Account Details Screen', () => {
    let mockOnNext;
    let mockOnPrevious;
    afterEach(() => {
        jest.clearAllMocks();
    });
    beforeEach(() => {
        mockOnNext = jest.fn();
        mockOnPrevious = jest.fn();
    });
    const renderer = (props) =>
        render(
            _jsx(PaperProvider, {
                children: _jsx(RegistrationContextProvider, {
                    ...registrationContextProviderProps,
                    children: _jsx(RegistrationWorkflow, {
                        initialScreenIndex: 0,
                        children: _jsx(AccountDetailsScreen, { ...props }),
                    }),
                }),
            })
        );
    it('renders without crashing', () => {
        renderer();
        expect(screen.getByText('Account Details')).toBeOnTheScreen();
    });
    it('should update values when passed as props', () => {
        renderer({
            WorkflowCardHeaderProps: {
                title: 'Test Title',
            },
        });
        expect(screen.getByText('Test Title')).toBeOnTheScreen();
    });
    it('should update instruction when passed as props', () => {
        renderer({
            WorkflowCardInstructionProps: {
                instructions: 'Test Instruction',
            },
        });
        expect(screen.getByText('Test Instruction')).toBeOnTheScreen();
    });
    it('should call onNext, when Next button clicked', async () => {
        renderer({
            WorkflowCardActionsProps: {
                onNext: mockOnNext(),
                showNext: true,
                nextLabel: 'Next',
            },
        });
        const firstNameInput = screen.getByTestId('blui-account-details-first-name');
        expect(firstNameInput.props.value).toBe('');
        const lastNameInput = screen.getByTestId('blui-account-details-last-name');
        expect(lastNameInput.props.value).toBe('');
        const nextButton = screen.getByText('Next');
        expect(nextButton).toBeDisabled();
        fireEvent.changeText(firstNameInput, 'Test First Name');
        fireEvent.changeText(lastNameInput, 'Test Last Name');
        expect(nextButton).toBeEnabled();
        fireEvent.press(nextButton);
        expect(mockOnNext).toHaveBeenCalled();
        await waitFor(() => expect(screen.getByTestId('blui-spinner')).toBeOnTheScreen());
    });
    it('should call onPrevious, when Back button clicked', () => {
        renderer({
            WorkflowCardActionsProps: {
                onPrevious: mockOnPrevious(),
                showPrevious: true,
                previousLabel: 'Back',
            },
        });
        const backButton = screen.getByText('Back');
        expect(backButton).toBeEnabled();
        fireEvent.press(backButton);
        expect(mockOnPrevious).toHaveBeenCalled();
    });
    it('should enable Next button, when both the inputs are valid', () => {
        renderer();
        const firstNameInput = screen.getByTestId('blui-account-details-first-name');
        fireEvent.changeText(firstNameInput, 'Test First Name');
        const lastNameInput = screen.getByTestId('blui-account-details-last-name');
        fireEvent.changeText(lastNameInput, 'Test Last Name');
        expect(screen.getByText('Next')).toBeEnabled();
    });
    it('should disable Next button, when the first name input is invalid', () => {
        renderer();
        const firstNameInput = screen.getByTestId('blui-account-details-first-name');
        fireEvent.changeText(firstNameInput, '');
        const lastNameInput = screen.getByTestId('blui-account-details-last-name');
        fireEvent.changeText(lastNameInput, 'Test Last Name');
        expect(screen.getByText('Next')).toBeDisabled();
    });
    it('should disable Next button, when the last name input is invalid', () => {
        renderer();
        const firstNameInput = screen.getByTestId('blui-account-details-first-name');
        fireEvent.changeText(firstNameInput, 'Test First Name');
        const lastNameInput = screen.getByTestId('blui-account-details-last-name');
        fireEvent.changeText(lastNameInput, '');
        expect(screen.getByText('Next')).toBeDisabled();
    });
    it('should set firstNameLabel, when passed as a prop', () => {
        renderer({ firstNameLabel: 'Test First', lastNameLabel: 'Test Last' });
        expect(screen.getAllByText('Test First')[0]).toBeOnTheScreen();
        expect(screen.getAllByText('Test Last')[0]).toBeOnTheScreen();
    });
    it('should display loader, when next button is pressed', async () => {
        renderer();
        const firstNameInput = screen.getByTestId('blui-account-details-first-name');
        fireEvent.changeText(firstNameInput, 'Test First Name');
        const lastNameInput = screen.getByTestId('blui-account-details-last-name');
        fireEvent.changeText(lastNameInput, 'Test Last Name');
        const nextButton = screen.getByText('Next');
        expect(nextButton).toBeOnTheScreen();
        fireEvent.press(nextButton);
        await waitFor(() => expect(screen.getByTestId('blui-spinner')).toBeOnTheScreen());
    });
});
