import React from 'react';
import { ScrollView, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
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
};

const makeLegendStyles = (): StyleSheet.NamedStyles<{
    legendScroll: ViewStyle;
    legendContent: ViewStyle;
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
            paddingRight: 8,
        },
        legendItem: {
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 4,
            paddingHorizontal: 8,
            paddingVertical: 6,
            marginRight: 6,
            borderColor: 'transparent',
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

export const HorizontalStackedBarLegend: React.FC<HorizontalStackedBarLegendProps> = ({
    data,
    selectedStatus,
    onSelect,
    styles = {},
    theme,
}) => {
    const legendStyles = makeLegendStyles();

    return (
        <ScrollView
            horizontal
            style={legendStyles.legendScroll}
            contentContainerStyle={[legendStyles.legendContent, styles.legendContainer]}
            showsHorizontalScrollIndicator={false}
            testID={'blui-horizontal-stacked-bar-legend-scroll'}
        >
            {data.map((item) => {
                const isSelected = selectedStatus === item.id;
                const isDisabled = item.count === 0;
                const selectedContentColor =
                    item.variant === 'canceled' && !theme.dark ? BLUIColors.primary[0] : BLUIColors.primary[100];
                const iconColor = isSelected ? selectedContentColor : item.color;
                const textColor = isSelected ? selectedContentColor : theme.colors.onSurface;
                const iconSourceToRender = getLegendIconSource(item.variant, item.icon, item.disabledIcon, isDisabled);

                return (
                    <TouchableOpacity
                        key={`legend-${item.id}`}
                        disabled={isDisabled}
                        activeOpacity={1}
                        onPress={(): void => onSelect(item.id)}
                        accessibilityRole={'button'}
                        testID={`blui-horizontal-legend-${item.id}`}
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
            })}
        </ScrollView>
    );
};
