import React from 'react';
import { cleanup, fireEvent, render, RenderResult, screen } from '@testing-library/react-native';
import { ErrorMessageBox } from '../../../components';
import { Provider as PaperProvider } from 'react-native-paper';
import { ErrorMessageBoxProps } from '../../../components/Error/types';

describe('ErrorMessageBox Test', () => {
    const onClose = jest.fn();

    const defaultProps = {
        title: 'Error Title',
        errorMessage: 'Error Message',
        onClose,
    };

    const renderer = (props: ErrorMessageBoxProps): RenderResult =>
        render(
            <PaperProvider>
                <ErrorMessageBox {...props} />
            </PaperProvider>
        );

    afterEach(cleanup);

    it('renders correctly', () => {
        renderer(defaultProps);
        expect(render).toBeTruthy();
    });

    it('should call onDismiss prop, when button is pressed', () => {
        renderer(defaultProps);
        expect(screen.getByTestId('blui-error-message-box-close-icon')).toBeOnTheScreen();
        fireEvent.press(screen.getByTestId('blui-error-message-box-close-icon'));
        expect(onClose).toHaveBeenCalled();
    });

    it('should not render close icon when dismissible is false', () => {
        renderer({ ...defaultProps, dismissible: false });
        expect(screen.queryByTestId('blui-error-message-box-close-icon')).not.toBeOnTheScreen();
    });

    it('should use default onClose callback when not provided', () => {
        const { title, errorMessage } = defaultProps;
        const { getByTestId } = render(
            <PaperProvider>
                <ErrorMessageBox title={title} errorMessage={errorMessage} />
            </PaperProvider>
        );
        expect(screen.getByText('Error Title')).toBeOnTheScreen();
        expect(screen.getByText('Error Message')).toBeOnTheScreen();

        // Press the close button to trigger the default onClose callback
        const closeIcon = getByTestId('blui-error-message-box-close-icon');
        fireEvent.press(closeIcon);
        // Should not throw error even without onClose handler
    });

    it('should render with custom backgroundColor', () => {
        const { getByText } = renderer({ ...defaultProps, backgroundColor: '#FF0000' });
        expect(getByText('Error Title')).toBeOnTheScreen();
    });

    it('should render with custom fontColor', () => {
        const { getByText } = renderer({ ...defaultProps, fontColor: '#FFFFFF' });
        expect(getByText('Error Title')).toBeOnTheScreen();
    });

    it('should apply custom style prop', () => {
        const customStyle = { marginTop: 20 };
        const { getByText } = renderer({ ...defaultProps, style: customStyle });
        expect(getByText('Error Title')).toBeOnTheScreen();
    });
});
