import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ChannelValue } from '.';

describe('ChannelValue', () => {
    it('ChannelValue Renders', async () => {
        let renderer: TestRenderer.ReactTestRenderer;
        await TestRenderer.act(() => {
            renderer = TestRenderer.create(<ChannelValue value="2" />);
        });
        expect(renderer!.toJSON()).toMatchSnapshot();
    });

    it('Renders the background color and font color correctly', async () => {
        let renderer: TestRenderer.ReactTestRenderer;
        await TestRenderer.act(() => {
            renderer = TestRenderer.create(
                <ChannelValue
                    value="50"
                    units="%"
                    icon={{ family: 'material-community', name: 'chart-pie' }}
                    iconColor="red"
                />
            );
        });
        expect(renderer!.toJSON()).toMatchSnapshot();
    });

    it('Accepts style override', async () => {
        let renderer: TestRenderer.ReactTestRenderer;
        await TestRenderer.act(() => {
            renderer = TestRenderer.create(<ChannelValue value="2" style={{ backgroundColor: 'red' }} />);
        });
        expect(renderer!.toJSON()).toMatchSnapshot();
    });
});
