import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import { StyleSheet, ViewStyle } from 'react-native';
import { Spacer } from './Spacer';

describe('spacer', () => {
    it('renders the correct default style', async () => {
        let renderer: TestRenderer.ReactTestRenderer;
        await act(() => {
            renderer = TestRenderer.create(<Spacer />);
        });
        const spacer = renderer!.root.find((x: any) => x.props.testID === 'spacer-root');
        expect(spacer.props.style).toMatchObject([
            {
                flex: 1,
                width: 'auto',
                height: 'auto',
            },
            undefined,
            undefined,
        ]);
    });

    it('passes in the inherited view props', async () => {
        let renderer: TestRenderer.ReactTestRenderer;
        await act(() => {
            renderer = TestRenderer.create(<Spacer removeClippedSubviews={true} />);
        });
        const spacer = renderer!.root.find((x: any) => x.props.testID === 'spacer-root');
        expect(spacer.props).toMatchObject({ removeClippedSubviews: true });
    });

    it('renders flex properties', async () => {
        let renderer: TestRenderer.ReactTestRenderer;
        await act(() => {
            renderer = TestRenderer.create(<Spacer flex={2} />);
        });
        let spacer = renderer!.root.find((x: any) => x.props.testID === 'spacer-root');
        expect(spacer.props.style).toMatchObject([
            {
                flex: 2,
                width: 'auto',
                height: 'auto',
            },
            undefined,
            undefined,
        ]);

        await act(() => {
            renderer = TestRenderer.create(<Spacer flex={3} />);
        });
        spacer = renderer!.root.find((x: any) => x.props.testID === 'spacer-root');
        expect(spacer.props.style).toMatchObject([
            {
                flex: 3,
                width: 'auto',
                height: 'auto',
            },
            undefined,
            undefined,
        ]);

        await act(() => {
            renderer = TestRenderer.create(<Spacer flex={0} />);
        });
        spacer = renderer!.root.find((x: any) => x.props.testID === 'spacer-root');
        expect(spacer.props.style).toMatchObject([
            {
                flex: 0,
                width: 'auto',
                height: 'auto',
            },
            undefined,
            undefined,
        ]);
    });

    it('renders static properties', () => {
        let renderer: TestRenderer.ReactTestRenderer;
        act(() => {
            renderer = TestRenderer.create(<Spacer flex={0} width={42} height={123} />);
        });
        const spacer = renderer!.root.find((x: any) => x.props.testID === 'spacer-root');
        expect(spacer.props.style).toMatchObject([
            {
                flex: 0,
                width: 42,
                height: 123,
            },
            undefined,
            undefined,
        ]);
    });

    it('accepts style overrides', () => {
        const spacerStyles: StyleSheet.NamedStyles<{
            root: ViewStyle;
        }> = StyleSheet.create({
            root: {
                flexGrow: 12,
                color: 'red',
                height: '30%',
                width: '100%',
            },
        });
        let renderer: TestRenderer.ReactTestRenderer;
        act(() => {
            renderer = TestRenderer.create(<Spacer styles={spacerStyles} style={{ borderRadius: 3 }} />);
        });
        const spacer = renderer!.root.find((x: any) => x.props.testID === 'spacer-root');
        expect(spacer.props.style).toMatchObject([
            { flex: 1, height: 'auto', width: 'auto' },
            { color: 'red', flexGrow: 12, height: '30%', width: '100%' },
            { borderRadius: 3 },
        ]);
    });
});
