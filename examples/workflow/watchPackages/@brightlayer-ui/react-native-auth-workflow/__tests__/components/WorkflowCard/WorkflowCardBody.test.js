import { jsx as _jsx } from "react/jsx-runtime";
import { cleanup, render, screen } from '@testing-library/react-native';
import { WorkflowCardBody } from '../../../components/WorkflowCard/WorkflowCardBody.js';
import { Text } from 'react-native-paper';
describe('WorkflowCardBody Test', () => {
    afterEach(cleanup);
    it('WorkflowCardBody renders correctly', () => {
        render(_jsx(WorkflowCardBody, { children: _jsx(Text, { children: "This is workflow card body content." }) })).toJSON();
        expect(render).toBeTruthy();
        expect(screen.getByText('This is workflow card body content.')).toBeTruthy();
    });
});
