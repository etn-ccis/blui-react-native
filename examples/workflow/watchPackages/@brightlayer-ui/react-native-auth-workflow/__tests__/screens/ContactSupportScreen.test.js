import { jsx as _jsx } from 'react/jsx-runtime';
import { cleanup, render, screen, fireEvent } from '@testing-library/react-native';
import { AuthContextProvider } from '../../contexts/index.js';
import { authContextProviderProps } from '../../testUtils/index.js';
import { ContactSupportScreen } from '../../screens/ContactScreen/index.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';
afterEach(cleanup);
describe('Contact Support Screen', () => {
    let mockOnNext;
    afterEach(() => {
        jest.clearAllMocks();
    });
    beforeEach(() => {
        mockOnNext = jest.fn();
    });
    const renderer = (props) =>
        render(
            _jsx(AuthContextProvider, {
                ...authContextProviderProps,
                children: _jsx(SafeAreaProvider, { children: _jsx(ContactSupportScreen, { ...props }) }),
            })
        );
    it('rendering the screen without any props', () => {
        renderer();
        expect(screen.getByText('Contact Us')).toBeOnTheScreen();
    });
    it('should display default content', () => {
        renderer();
        expect(screen.getByText('Contact Us')).toBeOnTheScreen();
        expect(screen.getByText('General Questions')).toBeOnTheScreen();
        expect(screen.getByText('something@email.com')).toBeOnTheScreen();
        expect(screen.getByText('Emergency Support')).toBeOnTheScreen();
        expect(screen.getByText('1-800-123-4567')).toBeOnTheScreen();
        expect(screen.getByText('Okay')).toBeOnTheScreen();
        expect(screen.getByText(/Okay/i)).toBeEnabled();
    });
    it('calls onNext when the Okay button is clicked', () => {
        renderer({
            WorkflowCardActionsProps: {
                onNext: mockOnNext(),
                showNext: true,
                nextLabel: 'Next',
            },
        });
        const nextButton = screen.getByText('Okay');
        fireEvent.press(nextButton);
        expect(mockOnNext).toHaveBeenCalled();
    });
});
