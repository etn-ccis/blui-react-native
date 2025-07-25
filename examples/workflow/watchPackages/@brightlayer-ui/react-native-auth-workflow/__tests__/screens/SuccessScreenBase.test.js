import { jsx as _jsx } from "react/jsx-runtime";
import { cleanup, fireEvent, render, screen } from '@testing-library/react-native';
import { SuccessScreenBase } from '../../screens/SuccessScreen/SuccessScreenBase.js';
import { Provider as PaperProvider } from 'react-native-paper';
describe('SuccessScreenBase Test', () => {
    afterEach(cleanup);
    const onDismiss = jest.fn();
    it('SuccessScreenBase renders correctly', () => {
        render(_jsx(PaperProvider, { children: _jsx(SuccessScreenBase, {}) })).toJSON();
        expect(render).toBeTruthy();
    });
    it('should call onDismiss, when Dismiss button is pressed', () => {
        render(_jsx(PaperProvider, { children: _jsx(SuccessScreenBase, { WorkflowCardActionsProps: {
                    nextLabel: 'Dismiss',
                    canGoNext: true,
                    showNext: true,
                    onNext: () => onDismiss(),
                } }) }));
        fireEvent.press(screen.getByText('Dismiss'));
        expect(onDismiss).toHaveBeenCalled();
    });
});
