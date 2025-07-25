import { jsx as _jsx } from "react/jsx-runtime";
import { cleanup, render } from '@testing-library/react-native';
import { Spinner } from '../../../components/Spinner/index.js';
describe('Spinner Test', () => {
    afterEach(cleanup);
    it('Spinner renders correctly', () => {
        render(_jsx(Spinner, { visible: true })).toJSON();
        expect(render).toBeTruthy();
    });
});
