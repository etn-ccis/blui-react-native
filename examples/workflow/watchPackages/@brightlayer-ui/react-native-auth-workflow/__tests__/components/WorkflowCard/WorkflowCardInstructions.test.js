import { jsx as _jsx } from "react/jsx-runtime";
import { cleanup, render, screen } from '@testing-library/react-native';
import { WorkflowCardInstructions } from '../../../components/WorkflowCard/WorkflowCardInstructions.js';
describe('WorkflowCardInstructions Test', () => {
    afterEach(cleanup);
    it('WorkflowCardInstructions renders correctly', () => {
        render(_jsx(WorkflowCardInstructions, { instructions: 'Test Instructions' })).toJSON();
        expect(render).toBeTruthy();
        expect(screen.getByText('Test Instructions')).toBeTruthy();
    });
});
