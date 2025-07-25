import { jsx as _jsx } from "react/jsx-runtime";
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import { WorkflowCardActions } from '../../../components/WorkflowCard/WorkflowCardActions.js';
describe('WorkflowCardActions Test', () => {
    afterEach(cleanup);
    it('WorkflowCardActions renders correctly', () => {
        const rendered = render(_jsx(WorkflowCardActions, { nextLabel: "Next", previousLabel: "Previous" })).toJSON();
        expect(rendered).toBeTruthy();
    });
    it('renders the nextLabel correctly', () => {
        const nextLabel = 'Next';
        const { getByText } = render(_jsx(WorkflowCardActions, { nextLabel: nextLabel, previousLabel: "Previous", showNext: true }));
        expect(getByText(nextLabel)).toBeTruthy();
    });
    it('renders the previousLabel correctly', () => {
        const previousLabel = 'Back';
        const { getByText } = render(_jsx(WorkflowCardActions, { previousLabel: previousLabel, nextLabel: "Next", showPrevious: true }));
        expect(getByText(previousLabel)).toBeTruthy();
    });
    it('calls onNext when the Next button is clicked', () => {
        const onNext = jest.fn();
        const { getByTestId } = render(_jsx(WorkflowCardActions, { previousLabel: 'Back', nextLabel: "Next", showPrevious: true, showNext: true, onNext: onNext }));
        const nextButton = getByTestId('blui-workflow-card-actions-next-button');
        fireEvent.press(nextButton);
        expect(onNext).toHaveBeenCalledTimes(1);
    });
    it('calls onPrevious when the Previous button is clicked', () => {
        const onPrevious = jest.fn();
        const { getByTestId } = render(_jsx(WorkflowCardActions, { previousLabel: 'Back', nextLabel: "Next", showPrevious: true, showNext: true, onPrevious: onPrevious }));
        const previousButton = getByTestId('blui-workflow-card-actions-previous-button');
        fireEvent.press(previousButton);
        expect(onPrevious).toHaveBeenCalledTimes(1);
    });
    it('does not calls onPrevious when button is disabled', () => {
        const onPrevious = jest.fn();
        const { getByTestId } = render(_jsx(WorkflowCardActions, { previousLabel: 'Back', nextLabel: "Next", showPrevious: true, showNext: true, canGoPrevious: () => false }));
        const previousButton = getByTestId('blui-workflow-card-actions-previous-button');
        fireEvent.press(previousButton);
        expect(onPrevious).toHaveBeenCalledTimes(0);
    });
    it('does not calls onNext when button is disabled', () => {
        const onNext = jest.fn();
        const { getByTestId } = render(_jsx(WorkflowCardActions, { previousLabel: 'Back', nextLabel: "Next", showPrevious: true, showNext: true, canGoNext: () => false }));
        const nextButton = getByTestId('blui-workflow-card-actions-next-button');
        fireEvent.press(nextButton);
        expect(onNext).toHaveBeenCalledTimes(0);
    });
});
