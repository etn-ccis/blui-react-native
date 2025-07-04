import React from 'react';
import { cleanup, fireEvent, render, RenderResult, screen } from '@testing-library/react-native';
import { ErrorMessageBox } from '../../../components';
import { Provider as PaperProvider } from 'react-native-paper';

describe('ErrorMessageBox Test', () => {
    const onClose = jest.fn();

    const defaultProps = {
        title: 'Error Title',
        errorMessage: 'Error Message',
        onClose,
    };

    const renderer = (props = defaultProps): RenderResult =>
        render(
            <PaperProvider>
                <ErrorMessageBox {...props} />
            </PaperProvider>
        );

    afterEach(cleanup);

    it('renders correctly', () => {
        renderer();
        expect(render).toBeTruthy();
    });

    it('should call onDismiss prop, when button is pressed', () => {
        renderer();
        expect(screen.getByTestId('blui-error-message-box-close-icon')).toBeOnTheScreen();
        fireEvent.press(screen.getByTestId('blui-error-message-box-close-icon'));
        expect(onClose).toHaveBeenCalled();
    });
});
