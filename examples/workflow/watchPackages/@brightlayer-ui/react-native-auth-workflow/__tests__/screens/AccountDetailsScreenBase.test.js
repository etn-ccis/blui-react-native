import { jsx as _jsx } from 'react/jsx-runtime';
import { cleanup, render, screen } from '@testing-library/react-native';
import { AccountDetailsScreenBase } from '../../screens/AccountDetailsScreen/index.js';
import { Provider as PaperProvider } from 'react-native-paper';
describe('AccountDetailsScreenBase Tests', () => {
    const renderer = (props) => render(_jsx(PaperProvider, { children: _jsx(AccountDetailsScreenBase, { ...props }) }));
    afterEach(cleanup);
    it('renders without crashing', () => {
        renderer();
    });
    it('should display the initial values', () => {
        renderer({
            firstNameLabel: 'First Name',
            lastNameLabel: 'Last Name',
            initialFirstName: 'Test First Name',
            initialLastName: 'Test Last Name',
        });
        expect(screen.getByTestId('blui-account-details-first-name')).toHaveDisplayValue('Test First Name');
        expect(screen.getByTestId('blui-account-details-last-name')).toHaveDisplayValue('Test Last Name');
    });
});
