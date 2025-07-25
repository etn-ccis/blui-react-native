import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { render, cleanup, screen, fireEvent } from '@testing-library/react-native';
import { ContactSupportScreenBase } from '../../screens/ContactScreen/ContactSupportScreenBase.js';
import { Icon, Text, Provider as PaperProvider } from 'react-native-paper';
afterEach(cleanup);
describe('ContactSupportScreenBase tests', () => {
    let mockOnNext;
    afterEach(() => {
        jest.clearAllMocks();
    });
    beforeEach(() => {
        mockOnNext = jest.fn();
    });
    it('renders without crashing', () => {
        render(_jsx(PaperProvider, { children: _jsx(ContactSupportScreenBase, { WorkflowCardHeaderProps: { title: 'Test Contact Us' }, icon: _jsx(Icon, { size: 24, source: "contacts" }), emailSupportTitle: "General Questions", phoneSupportTitle: "Emergency Support", contactEmail: "something@email.com", contactPhone: "1-800-123-4567", dismissButtonLabel: "Okay", emailSupportContent: (contactEmail) => (_jsxs(Text, { children: ['For questions, feedback, or support please email us at ', _jsx(Text, { children: contactEmail }), `.`] })), phoneSupportContent: (phone) => (_jsxs(Text, { children: ['For technical support, please call ', _jsx(Text, { children: phone }), `.`] })), WorkflowCardActionsProps: {
                    nextLabel: 'Okay',
                    showNext: true,
                    canGoNext: true,
                    onNext: () => { },
                    fullWidthButton: true,
                } }) }));
        expect(screen.getByText('Test Contact Us')).toBeOnTheScreen();
        expect(screen.getByText('General Questions')).toBeOnTheScreen();
        expect(screen.getByText('something@email.com')).toBeOnTheScreen();
        expect(screen.getByText('Emergency Support')).toBeOnTheScreen();
        expect(screen.getByText('1-800-123-4567')).toBeOnTheScreen();
        expect(screen.getByText('Okay')).toBeOnTheScreen();
        expect(screen.getByText(/Okay/i)).toBeEnabled();
    });
    it('calls onNext when the Okay button is clicked', () => {
        const { getByText } = render(_jsx(PaperProvider, { children: _jsx(ContactSupportScreenBase, { WorkflowCardActionsProps: {
                    onNext: mockOnNext(),
                    showNext: true,
                    nextLabel: 'Okay',
                } }) }));
        const nextButton = getByText('Okay');
        fireEvent.press(nextButton);
        expect(mockOnNext).toHaveBeenCalled();
    });
});
