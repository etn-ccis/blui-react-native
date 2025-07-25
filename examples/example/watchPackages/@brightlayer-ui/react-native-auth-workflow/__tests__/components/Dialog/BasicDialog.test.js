import { jsx as _jsx } from 'react/jsx-runtime';
import { cleanup, fireEvent, render, screen } from '@testing-library/react-native';
import { BasicDialog } from '../../../components/index.js';
import { Provider as PaperProvider } from 'react-native-paper';
describe('BasicDialog Test', () => {
    const renderer = (props) => render(_jsx(PaperProvider, { children: _jsx(BasicDialog, { ...props }) }));
    afterEach(cleanup);
    const onDismiss = jest.fn();
    it('renders correctly', () => {
        renderer();
        expect(render).toBeTruthy();
    });
    it('should display the passed props', () => {
        renderer({ open: true, title: 'Dialog Title' });
        expect(screen.getByText('Dialog Title')).toBeOnTheScreen();
    });
    it('should call onDismiss prop, when button is pressed', () => {
        renderer({ open: true, title: 'Dialog Title', onDismiss });
        expect(screen.getByText('Okay')).toBeOnTheScreen();
        fireEvent.press(screen.getByText('Okay'));
        expect(onDismiss).toHaveBeenCalled();
    });
});
