import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
    Animated,
    LayoutChangeEvent,
    Platform,
    StyleProp,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
    ViewProps,
    ViewStyle,
} from 'react-native';
import { $DeepPartial } from '@callstack/react-theme-provider';
import { ExtendedTheme, useExtendedTheme } from '@brightlayer-ui/react-native-themes';

const BAR_GAP = 2;
const MIN_BAR_WIDTH = 4;
const DEFAULT_BAR_HEIGHT = 4;
const SELECTED_BAR_HEIGHT = 8;
const ANIMATION_DURATION = 300;
const BAR_HIT_SLOP = { top: 8, bottom: 8, left: 0, right: 0 };

export type HorizontalStackedBarItem = {
    /** Optional stable unique identifier for selection and React key.
     * Falls back to `label` if not provided.
     */
    id?: string;

    /** The label of the item */
    label: string;

    /** Background color for the bar segment. Must not be used together with `variant`. */
    backgroundColor?: string;

    /** The count / value to display */
    count: number;

    /** Predefined color variant. Must not be used together with `backgroundColor`.
     *
     * @default undefined
     */
    variant?: 'failed' | 'success' | 'pending' | 'info' | 'canceled';
};

/**
 * Validates each HorizontalStackedBarItem to ensure exactly one of
 * `backgroundColor` or `variant` is provided.
 */
const validateBarItems = (data: HorizontalStackedBarItem[]): void => {
    data.forEach((item) => {
        const hasBackgroundColor = item.backgroundColor !== undefined && item.backgroundColor !== '';
        const hasVariant = item.variant !== undefined;
        if (hasBackgroundColor && hasVariant) {
            console.error(
                `HorizontalStackedBar: Item "${item.label}" has both "backgroundColor" and "variant" specified. ` +
                    `Only one should be provided. "backgroundColor" will take precedence.`
            );
        }
        if (!hasBackgroundColor && !hasVariant) {
            console.error(
                `HorizontalStackedBar: Item "${item.label}" has neither "backgroundColor" nor "variant" specified. ` +
                    `Provide one of the two for a meaningful status color.`
            );
        }
    });
};

export type HorizontalStackedBarProps = ViewProps & {
    /** Array of data items to render */
    data: HorizontalStackedBarItem[];

    /** Callback when selection changes
     *
     * @param item - The selected item, or undefined if deselected
     */
    onChange?: (item: HorizontalStackedBarItem | undefined) => void;

    /** Controlled selected status */
    selectedStatus?: string;

    /** Theme value overrides specific to this component */
    theme?: $DeepPartial<ExtendedTheme>;

    /** Style overrides for internal elements */
    styles?: {
        root?: StyleProp<ViewStyle>;
        barContainer?: StyleProp<ViewStyle>;
        bar?: StyleProp<ViewStyle>;
    };
};

// --- Internal AnimatedBar sub-component ---

type AnimatedBarProps = {
    width: number;
    color: string | undefined;
    isSelected: boolean;
    onPress: () => void;
    barStyle?: StyleProp<ViewStyle>;
    selectedBarStyle: ViewStyle;
    testID?: string;
};

const AnimatedBar: React.FC<AnimatedBarProps> = ({
    width,
    color,
    isSelected,
    onPress,
    barStyle,
    selectedBarStyle,
    testID,
}) => {
    const animatedWidth = useRef(new Animated.Value(width)).current;
    const animatedHeight = useRef(new Animated.Value(DEFAULT_BAR_HEIGHT)).current;

    useEffect(() => {
        Animated.timing(animatedWidth, {
            toValue: width,
            duration: ANIMATION_DURATION,
            useNativeDriver: false,
        }).start();
    }, [width, animatedWidth]);

    useEffect(() => {
        Animated.timing(animatedHeight, {
            toValue: isSelected ? SELECTED_BAR_HEIGHT : DEFAULT_BAR_HEIGHT,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }, [isSelected, animatedHeight]);

    return (
        <TouchableWithoutFeedback onPress={onPress} testID={testID} hitSlop={BAR_HIT_SLOP}>
            <Animated.View
                style={[
                    {
                        width: animatedWidth,
                        height: animatedHeight,
                        backgroundColor: color,
                    },
                    isSelected && selectedBarStyle,
                    barStyle,
                ]}
                testID={`${testID}-bar`}
            />
        </TouchableWithoutFeedback>
    );
};

const makeStyles = (): StyleSheet.NamedStyles<{
    root: ViewStyle;
    barContainer: ViewStyle;
}> =>
    StyleSheet.create({
        root: {
            width: '100%',
        },
        barContainer: {
            height: SELECTED_BAR_HEIGHT,
            flexDirection: 'row',
            alignItems: 'center',
            gap: BAR_GAP,
        },
    });

/**
 * Displays a horizontal bar chart where each segment represents the percentage
 * of a category relative to the whole. Supports animated width transitions and
 * optional selection highlighting.
 */
export const HorizontalStackedBar: React.FC<HorizontalStackedBarProps> = (props) => {
    const theme = useExtendedTheme(props.theme);
    const { data, onChange, selectedStatus: controlledSelectedStatus, style, styles = {}, ...viewProps } = props;

    if (__DEV__) {
        validateBarItems(data);
    }

    const [internalSelectedStatus, setInternalSelectedStatus] = useState<string>('');
    const [containerWidth, setContainerWidth] = useState<number>(0);

    const isControlled = controlledSelectedStatus !== undefined;
    const selectedStatus = isControlled ? controlledSelectedStatus : internalSelectedStatus;

    const selectedStatusRef = useRef(selectedStatus);
    selectedStatusRef.current = selectedStatus;

    const totalCount = data.reduce((acc, item) => acc + item.count, 0);
    const visibleItems = data.filter((item) => item.count > 0);
    const totalGapWidth = Math.max(0, (visibleItems.length - 1) * BAR_GAP);
    const availableWidth = Math.max(0, containerWidth - totalGapWidth);

    // Two-pass width calculation to prevent MIN_BAR_WIDTH overflow:
    // Pass 1: identify segments that need clamping to MIN_BAR_WIDTH
    // Pass 2: distribute remaining width proportionally among unclamped segments
    const barWidths = useMemo((): number[] => {
        if (totalCount === 0 || visibleItems.length === 0 || availableWidth <= 0) return [];

        const rawWidths = visibleItems.map((item) => (item.count / totalCount) * availableWidth);
        const clamped = rawWidths.map((w) => w < MIN_BAR_WIDTH);
        const clampedCount = clamped.filter(Boolean).length;
        const clampedTotal = clampedCount * MIN_BAR_WIDTH;
        const unclampedRawTotal = rawWidths.reduce((sum, w, i) => (clamped[i] ? sum : sum + w), 0);
        const remainingWidth = availableWidth - clampedTotal;

        return rawWidths.map((w, i) => {
            if (clamped[i]) return MIN_BAR_WIDTH;
            if (unclampedRawTotal === 0) return remainingWidth / (visibleItems.length - clampedCount);
            return (w / unclampedRawTotal) * remainingWidth;
        });
    }, [totalCount, visibleItems, availableWidth]);

    const defaultStyles = makeStyles();

    const variantColors: Record<string, string> = {
        failed: theme.colors.errorNonText,
        canceled: theme.colors.warningContainer,
        success: theme.colors.successNonText,
        pending: theme.colors.neutralFilledContainer,
        info: theme.colors.primaryNonText,
    };

    const selectedBarStyle: ViewStyle = Platform.select({
        ios: {
            shadowColor: theme.colors.neutralOutlinedContainerOutline,
            shadowOffset: { width: 0, height: 0.5 },
            shadowOpacity: 0.6,
            shadowRadius: 4,
        },
        default: {
            shadowColor: theme.colors.shadow,
            elevation: 4,
        },
    });

    const getItemId = useCallback((item: HorizontalStackedBarItem): string => item.id ?? item.label, []);

    const handleSelectionChange = useCallback(
        (item: HorizontalStackedBarItem): void => {
            const itemId = getItemId(item);
            const current = selectedStatusRef.current;
            const newSelection = current !== itemId ? itemId : '';
            if (!isControlled) {
                setInternalSelectedStatus(newSelection);
            }
            onChange?.(newSelection ? item : undefined);
        },
        [isControlled, onChange, getItemId]
    );

    const handleLayout = useCallback((event: LayoutChangeEvent): void => {
        setContainerWidth(event.nativeEvent.layout.width);
    }, []);

    return (
        <View
            style={[defaultStyles.root, styles.root, style]}
            testID={'blui-horizontal-stacked-bar-root'}
            {...viewProps}
        >
            <View
                style={[defaultStyles.barContainer, styles.barContainer]}
                onLayout={handleLayout}
                testID={'blui-horizontal-stacked-bar-container'}
            >
                {containerWidth > 0 && totalCount === 0 && (
                    <View
                        style={[
                            {
                                width: '100%',
                                height: DEFAULT_BAR_HEIGHT,
                                backgroundColor: theme.colors.disabled,
                            },
                            styles.bar,
                        ]}
                        testID={'blui-horizontal-bar-disabled'}
                    />
                )}
                {containerWidth > 0 &&
                    totalCount > 0 &&
                    visibleItems.map((item, index) => {
                        const itemId = getItemId(item);
                        const barWidth = barWidths[index] ?? MIN_BAR_WIDTH;
                        const barColor =
                            item.backgroundColor || (item.variant ? variantColors[item.variant] : undefined);
                        return (
                            <AnimatedBar
                                key={itemId}
                                width={barWidth}
                                color={barColor}
                                isSelected={selectedStatus === itemId}
                                onPress={(): void => handleSelectionChange(item)}
                                barStyle={styles.bar}
                                selectedBarStyle={selectedBarStyle}
                                testID={`blui-horizontal-bar-${itemId}`}
                            />
                        );
                    })}
            </View>
        </View>
    );
};

HorizontalStackedBar.displayName = 'HorizontalStackedBar';
