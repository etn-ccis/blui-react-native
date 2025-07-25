import { jsx as _jsx } from "react/jsx-runtime";
import { cleanup, render } from '@testing-library/react-native';
import { WorkflowCard, WorkflowCardBody } from '../../../components/index.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';
describe('WorkflowCard Test', () => {
    afterEach(cleanup);
    it('WorkflowCard renders correctly', () => {
        render(_jsx(SafeAreaProvider, { children: _jsx(WorkflowCard, { loading: true, children: _jsx(WorkflowCardBody, { children: _jsx(Text, { children: "This is workflow card body content." }) }) }) })).toJSON();
        expect(render).toBeTruthy();
    });
    it('WorkflowCardHeader true test', () => {
        render(_jsx(SafeAreaProvider, { children: _jsx(WorkflowCard, { children: _jsx(WorkflowCardBody, { children: _jsx(Text, { children: "This is workflow card body content." }) }) }) })).toJSON();
        expect(render).toBeTruthy();
    });
    it('WorkflowCardHeader false test', () => {
        render(_jsx(SafeAreaProvider, { children: _jsx(WorkflowCard, { children: _jsx(Text, { children: "This is workflow card body content." }) }) })).toJSON();
        expect(render).toBeTruthy();
    });
});
