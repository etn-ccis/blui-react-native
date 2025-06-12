import React from 'react';
import TestRenderer from 'react-test-renderer';
import { IconSwitch } from './IconSwitch';

describe('IconSwitch component', () => {
    const mockOnValueChange = jest.fn();

    test('should render with default props', async () => {
        let renderer: TestRenderer.ReactTestRenderer;
        await TestRenderer.act(() => {
            renderer = TestRenderer.create(<IconSwitch value={false} onValueChange={mockOnValueChange} />);
        });
        expect(renderer!.toJSON()).toMatchSnapshot();
    });

    test('should render with turned on state', async () => {
        let renderer: TestRenderer.ReactTestRenderer;
        await TestRenderer.act(() => {
            renderer = TestRenderer.create(<IconSwitch value={true} onValueChange={mockOnValueChange} />);
        });
        expect(renderer!.toJSON()).toMatchSnapshot();
    });

    test('should render with turned on state and icon', async () => {
        let renderer: TestRenderer.ReactTestRenderer;
        await TestRenderer.act(() => {
            renderer = TestRenderer.create(<IconSwitch value={true} showIcon onValueChange={mockOnValueChange} />);
        });
        expect(renderer!.toJSON()).toMatchSnapshot();
    });

    test('should render disabled switch with turned on state', async () => {
        let renderer: TestRenderer.ReactTestRenderer;
        await TestRenderer.act(() => {
            renderer = TestRenderer.create(<IconSwitch value={true} disabled onValueChange={mockOnValueChange} />);
        });
        expect(renderer!.toJSON()).toMatchSnapshot();
    });

    test('should render disabled switch with turned on state and icon', async () => {
        let renderer: TestRenderer.ReactTestRenderer;
        await TestRenderer.act(() => {
            renderer = TestRenderer.create(
                <IconSwitch value={true} showIcon disabled onValueChange={mockOnValueChange} />
            );
        });
        expect(renderer!.toJSON()).toMatchSnapshot();
    });

    test('should render disabled switch', async () => {
        let renderer: TestRenderer.ReactTestRenderer;
        await TestRenderer.act(() => {
            renderer = TestRenderer.create(<IconSwitch value={false} disabled onValueChange={mockOnValueChange} />);
        });
        expect(renderer!.toJSON()).toMatchSnapshot();
    });
});
