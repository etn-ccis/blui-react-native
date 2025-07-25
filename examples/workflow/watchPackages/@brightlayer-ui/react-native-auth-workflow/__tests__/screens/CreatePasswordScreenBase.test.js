import { jsx as _jsx } from 'react/jsx-runtime';
import '@testing-library/jest-dom';
import { CreatePasswordScreenBase } from '../../screens/index.js';
import { render, screen } from '@testing-library/react-native';
import { PaperProvider } from 'react-native-paper';
jest.useFakeTimers();
describe('CreatePasswordScreenBase Tests', () => {
    it('should render correctly', () => {
        render(_jsx(PaperProvider, { children: _jsx(CreatePasswordScreenBase, {}) }));
        expect(screen.getByTestId('blui-set-password-password-text-field')).toBeOnTheScreen();
        expect(screen.getByTestId('blui-set-password-confirm-password-text-field')).toBeOnTheScreen();
    });
});
