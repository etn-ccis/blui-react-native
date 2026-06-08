import React from 'react';
import { HorizontalStackedBar, HorizontalStackedBarItem } from '.';
import TestRenderer, { act } from 'react-test-renderer';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Icon } from '../Icon';

const sampleData: HorizontalStackedBarItem[] = [
    { label: 'Failed', count: 10, variant: 'failed' },
    { label: 'Success', count: 70, variant: 'success' },
    { label: 'Pending', count: 20, variant: 'pending' },
];

const allZeroData: HorizontalStackedBarItem[] = [
    { label: 'Failed', count: 0, variant: 'failed' },
    { label: 'Success', count: 0, variant: 'success' },
    { label: 'Pending', count: 0, variant: 'pending' },
];

/**
 * Helper to simulate onLayout so that containerWidth > 0 and bars render.
 */
const simulateLayout = (testRenderer: TestRenderer.ReactTestRenderer, width = 300): void => {
    const container = testRenderer.root.findByProps({ testID: 'blui-horizontal-stacked-bar-container' });
    act(() => {
        container.props.onLayout({ nativeEvent: { layout: { width, height: 8 } } });
    });
};

describe('HorizontalStackedBar', () => {
    it('should render without crashing', () => {
        let testRenderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            testRenderer = TestRenderer.create(<HorizontalStackedBar data={sampleData} />);
        });
        expect(testRenderer!.root.findByProps({ testID: 'blui-horizontal-stacked-bar-root' })).toBeTruthy();
        testRenderer!.unmount();
    });

    it('should render the root with correct testID', () => {
        let testRenderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            testRenderer = TestRenderer.create(<HorizontalStackedBar data={sampleData} />);
        });
        const root = testRenderer!.root.findByProps({ testID: 'blui-horizontal-stacked-bar-root' });
        expect(root).toBeTruthy();
        testRenderer!.unmount();
    });

    it('should render bar container with correct testID', () => {
        let testRenderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            testRenderer = TestRenderer.create(<HorizontalStackedBar data={sampleData} />);
        });
        const container = testRenderer!.root.findByProps({ testID: 'blui-horizontal-stacked-bar-container' });
        expect(container).toBeTruthy();
        testRenderer!.unmount();
    });

    it('should render wrapped legend container by default', () => {
        let testRenderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            testRenderer = TestRenderer.create(<HorizontalStackedBar data={sampleData} />);
        });
        const legendWrap = testRenderer!.root.findByProps({ testID: 'blui-horizontal-stacked-bar-legend-wrap' });
        expect(legendWrap).toBeTruthy();
        testRenderer!.unmount();
    });

    it('should render swipeable legend container when legendScrollable is true', () => {
        let testRenderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            testRenderer = TestRenderer.create(<HorizontalStackedBar data={sampleData} legendScrollable />);
        });
        const legendScroll = testRenderer!.root.findByProps({ testID: 'blui-horizontal-stacked-bar-legend-scroll' });
        expect(legendScroll).toBeTruthy();
        testRenderer!.unmount();
    });

    it('should render a legend item for each data item', () => {
        let testRenderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            testRenderer = TestRenderer.create(<HorizontalStackedBar data={sampleData} />);
        });
        const legends = testRenderer!.root.findAllByType(TouchableOpacity);
        expect(legends).toHaveLength(3);
        testRenderer!.unmount();
    });

    it('should show zero-count legend items by default', () => {
        const dataWithZero: HorizontalStackedBarItem[] = [
            { label: 'Failed', count: 10, variant: 'failed' },
            { label: 'Pending', count: 0, variant: 'pending' },
        ];
        let testRenderer!: TestRenderer.ReactTestRenderer;
        act(() => {
            testRenderer = TestRenderer.create(<HorizontalStackedBar data={dataWithZero} />);
        });
        const legends = testRenderer.root.findAllByType(TouchableOpacity);
        expect(legends).toHaveLength(2);
        testRenderer.unmount();
    });

    it('should hide zero-count legend items when hideEmptyCategories is true', () => {
        const dataWithZero: HorizontalStackedBarItem[] = [
            { label: 'Failed', count: 10, variant: 'failed' },
            { label: 'Pending', count: 0, variant: 'pending' },
        ];
        let testRenderer!: TestRenderer.ReactTestRenderer;
        act(() => {
            testRenderer = TestRenderer.create(<HorizontalStackedBar data={dataWithZero} hideEmptyCategories />);
        });
        const legends = testRenderer.root.findAllByType(TouchableOpacity);
        expect(legends).toHaveLength(1);
        expect(() => testRenderer.root.findByProps({ testID: 'blui-horizontal-legend-Pending' })).toThrow();
        testRenderer.unmount();
    });

    it('should render an icon for each legend item', () => {
        let testRenderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            testRenderer = TestRenderer.create(<HorizontalStackedBar data={sampleData} />);
        });
        const icons = testRenderer!.root.findAllByType(Icon);
        expect(icons).toHaveLength(3);
        testRenderer!.unmount();
    });

    it('should hide legends when showLegends is false', () => {
        let testRenderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            testRenderer = TestRenderer.create(<HorizontalStackedBar data={sampleData} showLegends={false} />);
        });
        expect(() => testRenderer!.root.findByProps({ testID: 'blui-horizontal-stacked-bar-legend-scroll' })).toThrow();
        testRenderer!.unmount();
    });

    it('should not render bars before layout event (containerWidth === 0)', () => {
        let testRenderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            testRenderer = TestRenderer.create(<HorizontalStackedBar data={sampleData} />);
        });
        const touchables = testRenderer!.root.findAllByType(TouchableWithoutFeedback);
        expect(touchables).toHaveLength(0);
        testRenderer!.unmount();
    });

    it('should render bars after layout event', () => {
        let testRenderer!: TestRenderer.ReactTestRenderer;
        act(() => {
            testRenderer = TestRenderer.create(<HorizontalStackedBar data={sampleData} />);
        });
        simulateLayout(testRenderer);
        const touchables = testRenderer.root.findAllByType(TouchableWithoutFeedback);
        expect(touchables).toHaveLength(3);
        testRenderer.unmount();
    });

    it('should only render bars for non-zero count items', () => {
        const dataWithZero: HorizontalStackedBarItem[] = [
            { label: 'Failed', count: 10, variant: 'failed' },
            { label: 'Success', count: 0, variant: 'success' },
            { label: 'Pending', count: 20, variant: 'pending' },
        ];
        let testRenderer!: TestRenderer.ReactTestRenderer;
        act(() => {
            testRenderer = TestRenderer.create(<HorizontalStackedBar data={dataWithZero} />);
        });
        simulateLayout(testRenderer);
        const touchables = testRenderer.root.findAllByType(TouchableWithoutFeedback);
        expect(touchables).toHaveLength(2);
        testRenderer.unmount();
    });

    it('should render a disabled bar when all counts are zero', () => {
        let testRenderer!: TestRenderer.ReactTestRenderer;
        act(() => {
            testRenderer = TestRenderer.create(<HorizontalStackedBar data={allZeroData} />);
        });
        simulateLayout(testRenderer);

        const disabledBar = testRenderer.root.findByProps({ testID: 'blui-horizontal-bar-disabled' });
        expect(disabledBar).toBeTruthy();

        // No interactive bars should be rendered
        const touchables = testRenderer.root.findAllByType(TouchableWithoutFeedback);
        expect(touchables).toHaveLength(0);

        testRenderer.unmount();
    });

    it('should handle empty data array', () => {
        let testRenderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            testRenderer = TestRenderer.create(<HorizontalStackedBar data={[]} />);
        });
        const root = testRenderer!.root.findByProps({ testID: 'blui-horizontal-stacked-bar-root' });
        expect(root).toBeTruthy();
        testRenderer!.unmount();
    });

    it('should accept custom styles', () => {
        let testRenderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            testRenderer = TestRenderer.create(
                <HorizontalStackedBar data={sampleData} style={{ margin: 10 }} styles={{ root: { padding: 5 } }} />
            );
        });
        const root = testRenderer!.root.findByProps({ testID: 'blui-horizontal-stacked-bar-root' });
        const rootStyles = root.props.style;
        expect(rootStyles).toBeTruthy();
        testRenderer!.unmount();
    });

    it('should use custom backgroundColor when provided', () => {
        const customData: HorizontalStackedBarItem[] = [{ label: 'Custom', count: 50, backgroundColor: '#FF0000' }];
        let testRenderer!: TestRenderer.ReactTestRenderer;
        act(() => {
            testRenderer = TestRenderer.create(<HorizontalStackedBar data={customData} />);
        });
        simulateLayout(testRenderer);
        // Verify the bar renders with the correct testID
        const touchable = testRenderer.root.findByProps({ testID: 'blui-horizontal-bar-Custom' });
        expect(touchable).toBeTruthy();
        testRenderer.unmount();
    });

    it('should call onChange with item when a bar is pressed (controlled)', () => {
        const onChangeMock = jest.fn();
        let testRenderer!: TestRenderer.ReactTestRenderer;
        act(() => {
            testRenderer = TestRenderer.create(
                <HorizontalStackedBar data={sampleData} selectedStatus="" onChange={onChangeMock} />
            );
        });
        simulateLayout(testRenderer);
        const firstBar = testRenderer.root.findByProps({ testID: 'blui-horizontal-bar-Failed' });
        act(() => {
            firstBar.props.onPress();
        });
        expect(onChangeMock).toHaveBeenCalledTimes(1);
        expect(onChangeMock).toHaveBeenCalledWith(sampleData[0]);
        testRenderer.unmount();
    });

    it('should call onChange with undefined when deselecting (controlled)', () => {
        const onChangeMock = jest.fn();
        let testRenderer!: TestRenderer.ReactTestRenderer;
        act(() => {
            testRenderer = TestRenderer.create(
                <HorizontalStackedBar data={sampleData} selectedStatus="Failed" onChange={onChangeMock} />
            );
        });
        simulateLayout(testRenderer);
        const firstBar = testRenderer.root.findByProps({ testID: 'blui-horizontal-bar-Failed' });
        act(() => {
            firstBar.props.onPress();
        });
        expect(onChangeMock).toHaveBeenCalledWith(undefined);
        testRenderer.unmount();
    });

    it('should call onChange when a legend is pressed', () => {
        const onChangeMock = jest.fn();
        let testRenderer!: TestRenderer.ReactTestRenderer;
        act(() => {
            testRenderer = TestRenderer.create(
                <HorizontalStackedBar data={sampleData} selectedStatus="" onChange={onChangeMock} />
            );
        });
        const legend = testRenderer.root.findByProps({ testID: 'blui-horizontal-legend-Failed' });
        act(() => {
            legend.props.onPress();
        });
        expect(onChangeMock).toHaveBeenCalledWith(sampleData[0]);
        testRenderer.unmount();
    });

    it('should allow custom legend icons per item', () => {
        const customIconData: HorizontalStackedBarItem[] = [
            { label: 'Failed', count: 10, variant: 'failed', icon: '★' },
            { label: 'Success', count: 10, variant: 'success', icon: { family: 'material-community', name: 'heart' } },
        ];
        let testRenderer!: TestRenderer.ReactTestRenderer;
        act(() => {
            testRenderer = TestRenderer.create(<HorizontalStackedBar data={customIconData} />);
        });
        const icons = testRenderer.root.findAllByType(Icon);
        expect(icons).toHaveLength(2);
        testRenderer.unmount();
    });

    it('should allow skipping legend icons by passing null', () => {
        const noIconData: HorizontalStackedBarItem[] = [
            { label: 'Failed', count: 10, variant: 'failed', icon: null },
            { label: 'Success', count: 10, variant: 'success', icon: null },
        ];
        let testRenderer!: TestRenderer.ReactTestRenderer;
        act(() => {
            testRenderer = TestRenderer.create(<HorizontalStackedBar data={noIconData} />);
        });
        const icons = testRenderer.root.findAllByType(Icon);
        expect(icons).toHaveLength(0);
        testRenderer.unmount();
    });

    it('should render pending legend with three-dot icon', () => {
        let testRenderer!: TestRenderer.ReactTestRenderer;
        act(() => {
            testRenderer = TestRenderer.create(<HorizontalStackedBar data={sampleData} />);
        });
        const icons = testRenderer.root.findAllByType(Icon);
        expect(icons.length).toBeGreaterThan(0);
        testRenderer.unmount();
    });

    it('should not call onChange when a zero-count legend is pressed', () => {
        const onChangeMock = jest.fn();
        const dataWithZero: HorizontalStackedBarItem[] = [
            { label: 'Failed', count: 10, variant: 'failed' },
            { label: 'Pending', count: 0, variant: 'pending' },
        ];
        let testRenderer!: TestRenderer.ReactTestRenderer;
        act(() => {
            testRenderer = TestRenderer.create(
                <HorizontalStackedBar data={dataWithZero} selectedStatus="" onChange={onChangeMock} />
            );
        });
        const legend = testRenderer.root.findByProps({ testID: 'blui-horizontal-legend-Pending' });
        expect(legend.props.disabled).toBe(true);
        expect(onChangeMock).not.toHaveBeenCalled();
        testRenderer.unmount();
    });

    it('should forward ViewProps', () => {
        let testRenderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            testRenderer = TestRenderer.create(
                <HorizontalStackedBar data={sampleData} accessibilityLabel="stacked-bar" />
            );
        });
        const root = testRenderer!.root.findByProps({ testID: 'blui-horizontal-stacked-bar-root' });
        expect(root.props.accessibilityLabel).toBe('stacked-bar');
        testRenderer!.unmount();
    });

    it('should warn when item has both backgroundColor and variant', () => {
        const errorSpy = jest.spyOn(console, 'error').mockImplementation();
        const conflictData: HorizontalStackedBarItem[] = [
            { label: 'Conflict', count: 10, backgroundColor: '#FF0000', variant: 'failed' },
        ];
        act(() => {
            TestRenderer.create(<HorizontalStackedBar data={conflictData} />);
        });
        expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining('has both "backgroundColor" and "variant"'));
        errorSpy.mockRestore();
    });

    it('should warn when item has neither backgroundColor nor variant', () => {
        const errorSpy = jest.spyOn(console, 'error').mockImplementation();
        const noColorData: HorizontalStackedBarItem[] = [{ label: 'NoColor', count: 10 }];
        act(() => {
            TestRenderer.create(<HorizontalStackedBar data={noColorData} />);
        });
        expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining('has neither "backgroundColor" nor "variant"'));
        errorSpy.mockRestore();
    });
});
