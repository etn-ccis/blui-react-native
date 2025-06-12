import React from 'react';
import { PixelRatio, ScrollView } from 'react-native';
import TestRenderer, { act, ReactTestInstance } from 'react-test-renderer';
import { CollapsibleHeaderLayout } from './CollapsableHeaderLayout';
import { Header } from '../Header';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { EdgeInsets } from '../__types__';
import { cleanup } from '@testing-library/react-native';

jest.mock('react-native-safe-area-context', () => ({
    useSafeAreaInsets: (): EdgeInsets => ({
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }),
}));

const useInsets = (): EdgeInsets => useSafeAreaInsets();

describe('CollapsibleHeaderLayout', () => {
    afterEach(cleanup);
    let instance: ReactTestInstance;
    let insets: EdgeInsets;
    let fontScale: number;
    let heightWithStatusBar: (height: number) => number;

    beforeEach(() => {
        insets = useInsets();
        fontScale = PixelRatio.getFontScale();
        heightWithStatusBar = (height: number): number => height * fontScale + insets.top;
    });

    it('renders without error', () => {
        let renderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            renderer = TestRenderer.create(<CollapsibleHeaderLayout HeaderProps={{ title: 'Hello' }} />);
        });
        instance = renderer!.root;

        expect(instance).toBeTruthy();
    });

    it('renders a Header component', () => {
        let renderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            renderer = TestRenderer.create(<CollapsibleHeaderLayout HeaderProps={{ title: 'Hello' }} />);
        });
        instance = renderer!.root;
        const header = instance.findByType(Header as any);

        expect(header).toBeTruthy();
    });

    it('renders a ScrollView component', () => {
        let renderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            renderer = TestRenderer.create(<CollapsibleHeaderLayout HeaderProps={{ title: 'Hello' }} />);
        });
        instance = renderer!.root;
        const sv = instance.findByType(ScrollView as any);

        expect(sv).toBeTruthy();
    });

    it('renders correct sizes - default props', () => {
        let renderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            renderer = TestRenderer.create(<CollapsibleHeaderLayout HeaderProps={{ title: 'Hello' }} />);
        });
        instance = renderer!.root;
        const sv = instance.findByType(ScrollView as any);
        const v = instance.findByProps({ testID: 'blui-padded-view' });

        expect(v.props.style.paddingTop.toJSON()).toEqual(heightWithStatusBar(200));
        expect(sv.props.contentOffset.y).toBe(heightWithStatusBar(200) - heightWithStatusBar(56));
    });

    it('renders correct sizes (static) - custom props', () => {
        let renderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            renderer = TestRenderer.create(
                <CollapsibleHeaderLayout
                    HeaderProps={{
                        title: 'Hello',
                        expandedHeight: 500,
                        collapsedHeight: 200,
                    }}
                />
            );
        });
        instance = renderer!.root;
        const sv = instance.findByType(ScrollView as any);
        const v = instance.findByProps({ testID: 'blui-padded-view' });

        expect(v.props.style.paddingTop.toJSON()).toEqual(heightWithStatusBar(500));
        expect(sv.props.contentOffset.y).toBe(heightWithStatusBar(500) - heightWithStatusBar(200));
    });

    it('renders correct sizes (dynamic) - custom props', () => {
        let renderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            renderer = TestRenderer.create(
                <CollapsibleHeaderLayout
                    HeaderProps={{
                        title: 'Hello',
                        expandedHeight: 500,
                        collapsedHeight: 200,
                        variant: 'dynamic',
                    }}
                />
            );
        });
        instance = renderer!.root;
        const sv = instance.findByType(ScrollView as any);
        const v = instance.findByProps({ testID: 'blui-padded-view' });

        expect(v.props.style.paddingTop.toJSON()).toEqual(heightWithStatusBar(500));
        expect(sv.props.contentOffset.y).toBe(heightWithStatusBar(500) - heightWithStatusBar(200));
    });

    it('renders correct sizes (static, startExpanded) - custom props', () => {
        let renderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            renderer = TestRenderer.create(
                <CollapsibleHeaderLayout
                    HeaderProps={{
                        title: 'Hello',
                        expandedHeight: 500,
                        collapsedHeight: 200,
                        variant: 'static',
                        startExpanded: true,
                    }}
                />
            );
        });
        instance = renderer!.root;
        const sv = instance.findByType(ScrollView as any);
        const v = instance.findByProps({ testID: 'blui-padded-view' });

        expect(v.props.style.paddingTop.toJSON()).toEqual(heightWithStatusBar(500));
        expect(sv.props.contentOffset.y).toBe(0);
    });

    it('renders correct sizes (dynamic, startExpanded) - custom props', () => {
        let renderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            renderer = TestRenderer.create(
                <CollapsibleHeaderLayout
                    HeaderProps={{
                        title: 'Hello',
                        expandedHeight: 500,
                        collapsedHeight: 200,
                        variant: 'dynamic',
                        startExpanded: true,
                    }}
                />
            );
        });
        instance = renderer!.root;
        const sv = instance.findByType(ScrollView as any);
        const v = instance.findByProps({ testID: 'blui-padded-view' });

        expect(v.props.style.paddingTop.toJSON()).toEqual(heightWithStatusBar(500));
        expect(sv.props.contentOffset.y).toBe(0);
    });
});
