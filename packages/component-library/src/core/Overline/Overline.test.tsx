import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Overline } from '.';

describe('Overline', () => {
    it('Overline Renders', () => {
        let renderer: TestRenderer.ReactTestRenderer;
        TestRenderer.act(() => {
            renderer = TestRenderer.create(<Overline>Overline</Overline>);
        });
        expect(renderer!.toJSON()).toMatchSnapshot();
    });

    it('Renders the color correctly', () => {
        let renderer: TestRenderer.ReactTestRenderer;
        TestRenderer.act(() => {
            renderer = TestRenderer.create(<Overline>Overline </Overline>);
        });
        expect(renderer!.toJSON()).toMatchSnapshot();
    });

    it('Accepts style override', () => {
        let renderer: TestRenderer.ReactTestRenderer;
        TestRenderer.act(() => {
            renderer = TestRenderer.create(<Overline style={{ color: 'blue', fontSize: 9 }}>Overline </Overline>);
        });
        expect(renderer!.toJSON()).toMatchSnapshot();
    });
});
