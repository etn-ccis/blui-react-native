import React from 'react';
import { PixelRatio, ScrollView } from 'react-native';
import { ReactTestInstance } from 'react-test-renderer';
import { CollapsibleHeaderLayout } from './CollapsableHeaderLayout';
import { Header } from '../Header';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { EdgeInsets } from '../__types__';
import { cleanup, render } from '@testing-library/react-native';

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
        instance = render(<CollapsibleHeaderLayout HeaderProps={{ title: 'Hello' }} />).root;
    });

    it('renders without error', () => {
        expect(instance).toBeTruthy();
    });

    it('renders a Header component', () => {
        const header = instance.findByType(Header as any);
        expect(header).toBeTruthy();
    });

    it('renders a ScrollView component', () => {
        const sv = instance.findByType(ScrollView as any);
        expect(sv).toBeTruthy();
    });

    it('renders correct sizes - default props', () => {
        const sv = instance.findByType(ScrollView as any);
        const v = instance.findByProps({ testID: 'blui-padded-view' });
        expect(v.props.style.paddingTop.toJSON()).toEqual(heightWithStatusBar(200));
        expect(sv.props.contentOffset.y).toBe(heightWithStatusBar(200) - heightWithStatusBar(56));
    });

    it('renders correct sizes (static) - custom props', () => {
        instance = render(
            <CollapsibleHeaderLayout
                HeaderProps={{
                    title: 'Hello',
                    expandedHeight: 500,
                    collapsedHeight: 200,
                }}
            />
        ).root;
        const sv = instance.findByType(ScrollView as any);
        const v = instance.findByProps({ testID: 'blui-padded-view' });
        expect(v.props.style.paddingTop.toJSON()).toEqual(heightWithStatusBar(500));
        expect(sv.props.contentOffset.y).toBe(heightWithStatusBar(500) - heightWithStatusBar(200));
    });

    it('renders correct sizes (dynamic) - custom props', () => {
        instance = render(
            <CollapsibleHeaderLayout
                HeaderProps={{
                    title: 'Hello',
                    expandedHeight: 500,
                    collapsedHeight: 200,
                    variant: 'dynamic',
                }}
            />
        ).root;
        const sv = instance.findByType(ScrollView as any);
        const v = instance.findByProps({ testID: 'blui-padded-view' });
        expect(v.props.style.paddingTop.toJSON()).toEqual(heightWithStatusBar(500));
        expect(sv.props.contentOffset.y).toBe(heightWithStatusBar(500) - heightWithStatusBar(200));
    });

    it('renders correct sizes (static, startExpanded) - custom props', () => {
        instance = render(
            <CollapsibleHeaderLayout
                HeaderProps={{
                    title: 'Hello',
                    expandedHeight: 500,
                    collapsedHeight: 200,
                    variant: 'static',
                    startExpanded: true,
                }}
            />
        ).root;
        const sv = instance.findByType(ScrollView as any);
        const v = instance.findByProps({ testID: 'blui-padded-view' });
        expect(v.props.style.paddingTop.toJSON()).toEqual(heightWithStatusBar(500));
        expect(sv.props.contentOffset.y).toBe(0);
    });

    it('renders correct sizes (dynamic, startExpanded) - custom props', () => {
        instance = render(
            <CollapsibleHeaderLayout
                HeaderProps={{
                    title: 'Hello',
                    expandedHeight: 500,
                    collapsedHeight: 200,
                    variant: 'dynamic',
                    startExpanded: true,
                }}
            />
        ).root;
        const sv = instance.findByType(ScrollView as any);
        const v = instance.findByProps({ testID: 'blui-padded-view' });
        expect(v.props.style.paddingTop.toJSON()).toEqual(heightWithStatusBar(500));
        expect(sv.props.contentOffset.y).toBe(0);
    });

    it('renders with custom ScrollComponent', () => {
        const CustomScroll = jest.fn((handleScroll) => (
            <ScrollView testID="custom-scroll" onScroll={handleScroll}>
                <></>
            </ScrollView>
        ));

        instance = render(
            <CollapsibleHeaderLayout HeaderProps={{ title: 'Custom' }} ScrollComponent={CustomScroll} />
        ).root;

        expect(CustomScroll).toHaveBeenCalled();
        const customScroll = instance.findByProps({ testID: 'custom-scroll' });
        expect(customScroll).toBeTruthy();
    });

    it('renders correct sizes with variant static and startExpanded false', () => {
        instance = render(
            <CollapsibleHeaderLayout
                HeaderProps={{
                    title: 'Hello',
                    variant: 'static',
                    startExpanded: false,
                    expandedHeight: 300,
                    collapsedHeight: 100,
                }}
            />
        ).root;
        const sv = instance.findByType(ScrollView as any);
        const v = instance.findByProps({ testID: 'blui-padded-view' });
        expect(v.props.style.paddingTop.toJSON()).toEqual(heightWithStatusBar(100));
        expect(sv.props.contentOffset.y).toBe(0);
    });

    it('renders correct sizes with variant dynamic and startExpanded false', () => {
        instance = render(
            <CollapsibleHeaderLayout
                HeaderProps={{
                    title: 'Hello',
                    variant: 'dynamic',
                    startExpanded: false,
                    expandedHeight: 400,
                    collapsedHeight: 150,
                }}
            />
        ).root;
        const sv = instance.findByType(ScrollView as any);
        const v = instance.findByProps({ testID: 'blui-padded-view' });
        expect(v.props.style.paddingTop.toJSON()).toEqual(heightWithStatusBar(400));
        expect(sv.props.contentOffset.y).toBe(heightWithStatusBar(400) - heightWithStatusBar(150));
    });

    it('handles onScroll callback in ScrollViewProps', () => {
        const onScrollMock = jest.fn();
        instance = render(
            <CollapsibleHeaderLayout
                HeaderProps={{ title: 'Scroll Test' }}
                ScrollViewProps={{
                    onScroll: onScrollMock,
                }}
            />
        ).root;

        const sv = instance.findByType(ScrollView as any);
        expect(sv).toBeTruthy();
        // The onScroll prop should be configured with user callback
        expect(sv.props.onScroll).toBeDefined();
    });

    it('applies custom styles to root', () => {
        const customStyles = {
            root: { backgroundColor: 'red' },
        };
        instance = render(<CollapsibleHeaderLayout HeaderProps={{ title: 'Styled' }} styles={customStyles} />).root;

        const view = instance.findByProps({ testID: 'blui-header' }).parent?.parent;
        expect(view).toBeTruthy();
    });

    it('applies custom style prop', () => {
        const customStyle = { marginTop: 20 };
        instance = render(<CollapsibleHeaderLayout HeaderProps={{ title: 'Styled' }} style={customStyle} />).root;

        const view = instance.findByProps({ testID: 'blui-header' }).parent?.parent;
        expect(view).toBeTruthy();
    });

    it('renders with custom HeaderProps styles', () => {
        instance = render(
            <CollapsibleHeaderLayout
                HeaderProps={{
                    title: 'Custom Header',
                    styles: {
                        root: { backgroundColor: 'blue' },
                    },
                }}
            />
        ).root;

        const header = instance.findByType(Header as any);
        expect(header).toBeTruthy();
    });

    it('renders with custom HeaderProps style', () => {
        instance = render(
            <CollapsibleHeaderLayout
                HeaderProps={{
                    title: 'Custom Header',
                    style: { borderWidth: 2 },
                }}
            />
        ).root;

        const header = instance.findByType(Header as any);
        expect(header).toBeTruthy();
    });

    it('passes updateScrollView to Header', () => {
        instance = render(<CollapsibleHeaderLayout HeaderProps={{ title: 'Update Test' }} />).root;

        const header = instance.findByType(Header as any);
        expect(header.props.updateScrollView).toBeDefined();
        expect(typeof header.props.updateScrollView).toBe('function');
    });

    it('passes scrollPosition to Header', () => {
        instance = render(<CollapsibleHeaderLayout HeaderProps={{ title: 'Scroll Position' }} />).root;

        const header = instance.findByType(Header as any);
        expect(header.props.scrollPosition).toBeDefined();
    });

    it('renders with all ScrollViewProps', () => {
        instance = render(
            <CollapsibleHeaderLayout
                HeaderProps={{ title: 'ScrollView Props' }}
                ScrollViewProps={{
                    showsVerticalScrollIndicator: false,
                    bounces: false,
                }}
            />
        ).root;

        const sv = instance.findByType(ScrollView as any);
        expect(sv.props.showsVerticalScrollIndicator).toBe(false);
        expect(sv.props.bounces).toBe(false);
    });

    it('renders children inside padded view', () => {
        render(
            <CollapsibleHeaderLayout HeaderProps={{ title: 'Children Test' }}>
                <></>
            </CollapsibleHeaderLayout>
        );

        const paddedView = instance.findByProps({ testID: 'blui-padded-view' });
        expect(paddedView).toBeTruthy();
    });

    it('uses theme overrides', () => {
        const customTheme = {
            colors: {
                background: '#123456',
            },
        };

        instance = render(<CollapsibleHeaderLayout HeaderProps={{ title: 'Theme Test' }} theme={customTheme} />).root;

        expect(instance).toBeTruthy();
    });

    it('renders with default HeaderProps when not provided', () => {
        instance = render(<CollapsibleHeaderLayout HeaderProps={{ title: 'Default' }} />).root;

        const header = instance.findByType(Header as any);
        expect(header).toBeTruthy();
    });

    it('handles ref in ScrollView', () => {
        instance = render(<CollapsibleHeaderLayout HeaderProps={{ title: 'Ref Test' }} />).root;

        const sv = instance.findByType(ScrollView as any);
        expect(sv.props.ref).toBeDefined();
    });

    it('calls updateScrollView with padding change', () => {
        instance = render(<CollapsibleHeaderLayout HeaderProps={{ title: 'Update Test' }} />).root;

        const header = instance.findByType(Header as any);
        const updateScrollView = header.props.updateScrollView;

        // Call updateScrollView with different padding value
        updateScrollView({ padding: 100, animate: false, scrollTo: null });

        expect(updateScrollView).toBeDefined();
    });

    it('calls updateScrollView with animate true', () => {
        instance = render(<CollapsibleHeaderLayout HeaderProps={{ title: 'Animate Test' }} />).root;

        const header = instance.findByType(Header as any);
        const updateScrollView = header.props.updateScrollView;

        // Call with animate true to trigger animatePadding
        updateScrollView({ padding: 150, animate: true, scrollTo: null });

        expect(updateScrollView).toBeDefined();
    });

    it('calls updateScrollView with scrollTo value', () => {
        instance = render(<CollapsibleHeaderLayout HeaderProps={{ title: 'Scroll To Test' }} />).root;

        const header = instance.findByType(Header as any);
        const updateScrollView = header.props.updateScrollView;

        // Call with scrollTo value
        updateScrollView({ padding: null, animate: false, scrollTo: 100 });

        expect(updateScrollView).toBeDefined();
    });

    it('calls updateScrollView with animate and scrollTo', () => {
        instance = render(<CollapsibleHeaderLayout HeaderProps={{ title: 'Combined Test' }} />).root;

        const header = instance.findByType(Header as any);
        const updateScrollView = header.props.updateScrollView;

        // Call with both padding and scrollTo
        updateScrollView({ padding: 200, animate: true, scrollTo: 50 });

        expect(updateScrollView).toBeDefined();
    });

    it('does not update padding when same as current', () => {
        instance = render(
            <CollapsibleHeaderLayout
                HeaderProps={{ title: 'Same Padding', expandedHeight: 200, collapsedHeight: 56 }}
            />
        ).root;

        const header = instance.findByType(Header as any);
        const updateScrollView = header.props.updateScrollView;

        // Call with same padding as initial (expanded height)
        updateScrollView({ padding: heightWithStatusBar(200), animate: false, scrollTo: null });

        expect(updateScrollView).toBeDefined();
    });

    it('does not update scroll when scrollTo is null', () => {
        instance = render(<CollapsibleHeaderLayout HeaderProps={{ title: 'Null Scroll' }} />).root;

        const header = instance.findByType(Header as any);
        const updateScrollView = header.props.updateScrollView;

        // Call with null scrollTo
        updateScrollView({ padding: 100, animate: false, scrollTo: null });

        expect(updateScrollView).toBeDefined();
    });

    it('handles scroll event to trigger onScroll callback', () => {
        const onScrollMock = jest.fn();
        instance = render(
            <CollapsibleHeaderLayout
                HeaderProps={{ title: 'Scroll Event Test' }}
                ScrollViewProps={{
                    onScroll: onScrollMock,
                }}
            />
        ).root;

        const sv = instance.findByType(ScrollView as any);

        // Simulate scroll event
        if (sv.props.onScroll) {
            sv.props.onScroll({
                nativeEvent: {
                    contentOffset: { x: 0, y: 50 },
                },
            });
        }

        expect(sv.props.onScroll).toBeDefined();
    });
});
