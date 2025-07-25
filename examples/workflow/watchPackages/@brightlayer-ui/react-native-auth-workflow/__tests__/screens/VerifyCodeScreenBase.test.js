import { jsx as _jsx } from "react/jsx-runtime";
import '@testing-library/jest-dom';
import '@testing-library/jest-native/extend-expect.js';
import { cleanup, fireEvent, render, screen } from '@testing-library/react-native';
import { VerifyCodeScreenBase } from '../../screens/VerifyCodeScreen/index.js';
import { PaperProvider } from 'react-native-paper';
describe('VerifyCodeScreenBase  Tests', () => {
    afterEach(cleanup);
    let mockOnPrevious;
    beforeEach(() => {
        mockOnPrevious = jest.fn();
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('VerifyCodeScreenBase renders correctly', () => {
        render(_jsx(PaperProvider, { children: _jsx(VerifyCodeScreenBase, {}) }));
        expect(screen.getByTestId('blui-verify-code-text-input')).toBeOnTheScreen();
    });
    it('should call input handle function', () => {
        render(_jsx(PaperProvider, { children: _jsx(VerifyCodeScreenBase, {}) }));
        const input = screen.getByTestId('blui-verify-code-text-input');
        fireEvent.changeText(input, '123');
        expect(input.props.value).toBe('123');
    });
    it('should call onNext callBack function', () => {
        const mockOnNext = jest.fn();
        render(_jsx(PaperProvider, { children: _jsx(VerifyCodeScreenBase, { codeValidator: () => true, initialValue: "456789", WorkflowCardActionsProps: {
                    showNext: true,
                    nextLabel: 'Next',
                    onNext: mockOnNext,
                } }) }));
        const nextButton = screen.getByText('Next');
        expect(nextButton).toBeEnabled();
        fireEvent.press(nextButton);
        expect(mockOnNext).toHaveBeenCalled();
    });
    it('should call onPrevious callBack function', () => {
        render(_jsx(PaperProvider, { children: _jsx(VerifyCodeScreenBase, { codeValidator: () => true, initialValue: "456789", WorkflowCardActionsProps: {
                    showPrevious: true,
                    previousLabel: 'Back',
                    onPrevious: mockOnPrevious(),
                } }) }));
        const prevButton = screen.getByText('Back');
        fireEvent.press(prevButton);
        expect(mockOnPrevious).toHaveBeenCalled();
    });
});
