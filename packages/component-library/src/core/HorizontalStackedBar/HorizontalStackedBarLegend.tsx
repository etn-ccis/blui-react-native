import React, { useCallback, useRef, useState } from 'react';
import {
    LayoutChangeEvent,
    ScrollView,
    StyleProp,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
import { ExtendedTheme } from '@brightlayer-ui/react-native-themes';
import { Icon } from '../Icon';
import { IconSource } from '../__types__';
import BLUIColors from '@brightlayer-ui/colors';

type HorizontalStackedBarLegendVariant = 'failed' | 'success' | 'pending' | 'info' | 'canceled';

type HorizontalStackedBarLegendItem = {
    id: string;
    label: string;
    count: number;
    color: string;
    isCustomColor?: boolean;
    variant?: HorizontalStackedBarLegendVariant;
    icon?: IconSource | null;
    disabledIcon?: IconSource | null;
};

type HorizontalStackedBarLegendProps = {
    data: HorizontalStackedBarLegendItem[];
    selectedStatus: string;
    onSelect: (itemId: string) => void;
    styles?: {
        legendContainer?: StyleProp<ViewStyle>;
        legendItem?: StyleProp<ViewStyle>;
    };
    theme: ExtendedTheme;
    /** When true, legends are horizontally scrollable. When false (default), legends wrap to new line. */
    scrollable?: boolean;
};

const LEGEND_COLUMN_GAP = 8;

const makeLegendStyles = (
    scrollable: boolean,
    isMultiRow: boolean
): StyleSheet.NamedStyles<{
    legendScroll: ViewStyle;
    legendContent: ViewStyle;
    legendContentScrollable: ViewStyle;
    legendItem: ViewStyle;
    legendItemDisabled: ViewStyle;
    legendIcon: ViewStyle;
    legendTextContainer: ViewStyle;
}> =>
    StyleSheet.create({
        legendScroll: {
            width: '100%',
            marginBottom: 8,
        },
        legendContent: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 4,
            flexWrap: scrollable ? 'nowrap' : 'wrap',
            justifyContent: scrollable ? 'space-between' : isMultiRow ? 'flex-start' : 'space-between',
            columnGap: LEGEND_COLUMN_GAP,
            rowGap: scrollable ? 0 : 4,
        },
        legendContentScrollable: {
            minWidth: '100%',
        },
        legendItem: {
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 4,
            paddingHorizontal: 8,
            paddingVertical: 6,
            marginRight: 0,
        },
        legendItemDisabled: {
            opacity: 0.5,
        },
        legendIcon: {
            marginRight: 6,
        },
        legendTextContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
    });

const getLegendIconName = (variant?: HorizontalStackedBarLegendVariant, isDisabled?: boolean): string => {
    if (variant === undefined) return 'circle';

    const iconNames: Record<HorizontalStackedBarLegendVariant, { filled: string; outlined: string }> = {
        failed: { filled: 'alert-circle', outlined: 'alert-circle-outline' },
        success: { filled: 'check-circle', outlined: 'check-circle-outline' },
        pending: { filled: 'pending', outlined: 'pending' },
        info: { filled: 'information', outlined: 'information-outline' },
        canceled: { filled: 'close-circle', outlined: 'close-circle-outline' },
    };

    return isDisabled ? iconNames[variant].outlined : iconNames[variant].filled;
};

const getLegendIconSource = (
    variant: HorizontalStackedBarLegendVariant | undefined,
    customIcon: IconSource | null | undefined,
    customDisabledIcon: IconSource | null | undefined,
    isDisabled: boolean
): IconSource | null | undefined => {
    const iconFamily = variant === 'pending' ? 'material' : 'material-community';

    if (isDisabled) {
        if (customDisabledIcon !== undefined) return customDisabledIcon;
        if (customIcon !== undefined) return customIcon;
        return variant ? { family: iconFamily, name: getLegendIconName(variant, true) } : undefined;
    }

    if (customIcon !== undefined) return customIcon;
    return variant ? { family: iconFamily, name: getLegendIconName(variant, false) } : undefined;
};

const getContrastForeground = (background: string | undefined, lightColor: string, darkColor: string): string => {
    if (!background) return lightColor;

    const hex = background.trim().replace('#', '');
    const normalized =
        hex.length === 3
            ? `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
            : hex.length === 6
              ? hex
              : undefined;

    if (!normalized || Number.isNaN(Number.parseInt(normalized, 16))) {
        return lightColor;
    }

    const r = Number.parseInt(normalized.substring(0, 2), 16) / 255;
    const g = Number.parseInt(normalized.substring(2, 4), 16) / 255;
    const b = Number.parseInt(normalized.substring(4, 6), 16) / 255;

    const toLinear = (channel: number): number =>
        channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;

    const luminance = 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);

    return luminance > 0.179 ? darkColor : lightColor;
};

export const HorizontalStackedBarLegend: React.FC<HorizontalStackedBarLegendProps> = ({
    data,
    selectedStatus,
    onSelect,
    styles = {},
    theme,
    scrollable = false,
}) => {
    // Refs collect measurements with zero re-renders. A single boolean state
    // update fires once everything is measured, causing exactly one extra render.
    const containerWidthRef = useRef(0);
    const itemWidthsRef = useRef<number[]>([]);
    const [layoutState, setLayoutState] = useState<{ isMultiRow: boolean; ready: boolean }>({
        isMultiRow: false,
        ready: scrollable,
    });

    const commitLayout = useCallback(() => {
        const cw = containerWidthRef.current;
        const widths = itemWidthsRef.current;
        if (cw <= 0 || widths.filter(Boolean).length < data.length) return;
        const totalWidth = widths.reduce((sum, w) => sum + w, 0) + Math.max(0, widths.length - 1) * LEGEND_COLUMN_GAP;
        setLayoutState({ isMultiRow: totalWidth > cw, ready: true });
    }, [data.length]);

    const handleContainerLayout = useCallback(
        (e: LayoutChangeEvent) => {
            containerWidthRef.current = e.nativeEvent.layout.width;
            commitLayout();
        },
        [commitLayout]
    );

    const handleItemLayout = useCallback(
        (index: number, e: LayoutChangeEvent) => {
            itemWidthsRef.current[index] = e.nativeEvent.layout.width;
            commitLayout();
        },
        [commitLayout]
    );

    const selectedLightContentColor = BLUIColors?.primary?.[100] ?? theme.colors.onPrimary; //@todo: remove usage of BLUIColors in favor of theme tokens once they are available
    const selectedCanceledLightModeColor = BLUIColors?.primary?.[0] ?? theme.colors.onSurface; //@todo: remove usage of BLUIColors in favor of theme tokens once they are available
    const disabledColor = theme.colors.disabled;
    const legendStyles = makeLegendStyles(scrollable, layoutState.isMultiRow);

    const legendItems = data.map((item, index) => {
        const isSelected = selectedStatus === item.id;
        const isDisabled = item.count === 0;
        const selectedCustomContentColor = getContrastForeground(
            item.color,
            selectedLightContentColor,
            selectedCanceledLightModeColor
        );
        const selectedContentColor = item.isCustomColor
            ? selectedCustomContentColor
            : item.variant === 'canceled' && !theme.dark
              ? selectedCanceledLightModeColor
              : selectedLightContentColor;
        const iconColor = isDisabled ? disabledColor : isSelected ? selectedContentColor : item.color;
        const textColor = isDisabled ? disabledColor : isSelected ? selectedContentColor : theme.colors.onSurface;
        const iconSourceToRender = getLegendIconSource(item.variant, item.icon, item.disabledIcon, isDisabled);

        return (
            <TouchableOpacity
                key={`legend-${item.id}`}
                disabled={isDisabled}
                activeOpacity={1}
                onPress={(): void => onSelect(item.id)}
                accessibilityRole={'button'}
                testID={`blui-horizontal-legend-${item.id}`}
                onLayout={(e): void => handleItemLayout(index, e)}
                style={[
                    legendStyles.legendItem,
                    {
                        backgroundColor: isSelected ? item.color : 'transparent',
                        borderColor: isSelected ? item.color : theme.colors.neutralOutlinedContainerOutline,
                    },
                    isDisabled && legendStyles.legendItemDisabled,
                    styles.legendItem,
                ]}
            >
                {iconSourceToRender !== null && iconSourceToRender !== undefined ? (
                    <View style={legendStyles.legendIcon}>
                        <Icon source={iconSourceToRender} color={iconColor} size={18} />
                    </View>
                ) : null}
                <View style={legendStyles.legendTextContainer}>
                    <Text
                        style={{
                            color: textColor,
                            fontSize: 12,
                            fontWeight: '600',
                        }}
                    >
                        {item.count}
                    </Text>
                    <Text
                        style={{
                            color: textColor,
                            fontSize: 12,
                            fontWeight: '400',
                            marginLeft: 4,
                        }}
                    >
                        {item.label}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    });

    if (scrollable) {
        return (
            <ScrollView
                horizontal
                style={legendStyles.legendScroll}
                contentContainerStyle={[
                    legendStyles.legendContent,
                    legendStyles.legendContentScrollable,
                    styles.legendContainer,
                ]}
                showsHorizontalScrollIndicator={false}
                testID={'blui-horizontal-stacked-bar-legend-scroll'}
            >
                {legendItems}
            </ScrollView>
        );
    }

    return (
        <View
            style={[legendStyles.legendScroll, styles.legendContainer, !layoutState.ready && { opacity: 0 }]}
            testID={'blui-horizontal-stacked-bar-legend-wrap'}
            onLayout={handleContainerLayout}
        >
            <View style={legendStyles.legendContent}>{legendItems}</View>
        </View>
    );
};
