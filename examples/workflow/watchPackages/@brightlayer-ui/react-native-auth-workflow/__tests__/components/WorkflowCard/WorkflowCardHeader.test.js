import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import { WorkflowCardHeader } from '../../../components/WorkflowCard/index.js';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // Or the appropriate library
describe('WorkflowCardHeader', () => {
    afterEach(cleanup);
    it('WorkflowCardHeader renders correctly', () => {
        const rendered = render(_jsx(SafeAreaProvider, { children: _jsx(WorkflowCardHeader, { title: 'title', onIconPress: jest.fn() }) })).toJSON();
        expect(rendered).toBeTruthy();
    });
    it('WorkflowCardHeader renders correctly with custom icon', () => {
        const rendered = render(_jsx(SafeAreaProvider, { children: _jsx(WorkflowCardHeader, { title: 'title', backgroundColor: "#fff", onIconPress: jest.fn(), icon: { name: 'close' } }) })).toJSON();
        expect(rendered).toBeTruthy();
    });
    it('renders the title and subtitle correctly', () => {
        const title = 'Test Title';
        const subtitle = 'subtitle';
        const { getByText } = render(_jsxs(SafeAreaProvider, { children: [' ', _jsx(WorkflowCardHeader, { title: title, subTitle: subtitle, onIconPress: jest.fn() })] }));
        expect(getByText(title)).toBeTruthy();
        expect(getByText(subtitle)).toBeTruthy();
    });
    it('calls onIconPress when the icon is pressed', () => {
        const onIconPress = jest.fn();
        const { getByTestId } = render(_jsx(SafeAreaProvider, { children: _jsx(WorkflowCardHeader, { title: "Test Title", onIconPress: onIconPress }) }));
        const icon = getByTestId('blui-workflow-card-header-icon');
        fireEvent.press(icon);
        expect(onIconPress).toHaveBeenCalledTimes(1);
    });
});
