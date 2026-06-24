import React from 'react';
import { Box, Stack } from '@mui/material';
import {
    CodeSnippetFunction,
    getPropsMapping,
    getPropsToString,
    InputConfig,
    Playground,
    PreviewComponent,
} from '@brightlayer-ui/react-doc-components';
import {
    HorizontalStackedBar,
    HorizontalStackedBarItem,
    HorizontalStackedBarProps,
} from '@brightlayer-ui/react-native-components';
import { View } from 'react-native';
import { IconSource } from '@brightlayer-ui/react-native-components/core/__types__';

type PlaygroundData = {
    failedLabel: string;
    failedCount: number;
    failedVariant: 'failed' | 'success' | 'pending' | 'info' | 'canceled';
    failedBackgroundColor: string;
    failedIcon: string;
    failedDisabledIcon: string;
    canceledLabel: string;
    canceledCount: number;
    canceledVariant: 'failed' | 'success' | 'pending' | 'info' | 'canceled';
    canceledBackgroundColor: string;
    canceledIcon: string;
    canceledDisabledIcon: string;
    successLabel: string;
    successCount: number;
    successVariant: 'failed' | 'success' | 'pending' | 'info' | 'canceled';
    successBackgroundColor: string;
    successIcon: string;
    successDisabledIcon: string;
    pendingLabel: string;
    pendingCount: number;
    pendingVariant: 'failed' | 'success' | 'pending' | 'info' | 'canceled';
    pendingBackgroundColor: string;
    pendingIcon: string;
    pendingDisabledIcon: string;
    infoLabel: string;
    infoCount: number;
    infoVariant: 'failed' | 'success' | 'pending' | 'info' | 'canceled';
    infoBackgroundColor: string;
    infoIcon: string;
    infoDisabledIcon: string;
    showLegends: boolean;
    hideEmptyCategories: boolean;
    legendScrollable: boolean;
};

const iconOptions = [
    { label: 'undefined', value: 'undefined' },
    { label: 'alert-circle', value: 'alert-circle' },
    { label: 'check-circle', value: 'check-circle' },
    { label: 'pending', value: 'pending' },
    { label: 'information', value: 'information' },
    { label: 'close-circle', value: 'close-circle' },
];

const variantOptions = [
    { label: 'failed', value: 'failed' },
    { label: 'success', value: 'success' },
    { label: 'pending', value: 'pending' },
    { label: 'info', value: 'info' },
    { label: 'canceled', value: 'canceled' },
];

const itemInputs = (
    prefix: string,
    initialLabel: string,
    initialCount: number,
    initialVariant: string
): InputConfig => [
    {
        id: `${prefix}Label`,
        type: 'string',
        typeLabel: 'string',
        initialValue: initialLabel,
        description: `Label for the ${initialLabel} item`,
        required: true,
        category: `Data - ${initialLabel}`,
    },
    {
        id: `${prefix}Count`,
        type: 'number',
        typeLabel: 'number',
        initialValue: initialCount,
        minValue: 0,
        maxValue: 500,
        valueStep: 1,
        description: `Count for the ${initialLabel} item`,
        required: true,
        category: `Data - ${initialLabel}`,
    },
    {
        id: `${prefix}Variant`,
        type: 'select',
        typeLabel: `'failed' | 'success' | 'pending' | 'info' | 'canceled'`,
        initialValue: initialVariant,
        options: variantOptions,
        description: `Variant for the ${initialLabel} item`,
        required: false,
        category: `Data - ${initialLabel}`,
    },
    {
        id: `${prefix}BackgroundColor`,
        type: 'color',
        typeLabel: 'string',
        initialValue: '',
        description: `Custom background color for the ${initialLabel} item`,
        required: false,
        category: `Data - ${initialLabel}`,
        allowMuiColors: true,
    },
    {
        id: `${prefix}Icon`,
        type: 'select',
        typeLabel: 'IconSource',
        initialValue: 'undefined',
        options: iconOptions,
        description: `Legend icon shown when the ${initialLabel} item is enabled`,
        required: false,
        category: `Data - ${initialLabel}`,
    },
    {
        id: `${prefix}DisabledIcon`,
        type: 'select',
        typeLabel: 'IconSource',
        initialValue: 'undefined',
        options: iconOptions,
        description: `Legend icon shown when the ${initialLabel} item count is 0`,
        required: false,
        category: `Data - ${initialLabel}`,
    },
];

const inputConfig: InputConfig = [
    ...itemInputs('failed', 'Failed', 10, 'failed'),
    ...itemInputs('canceled', 'Canceled', 18, 'canceled'),
    ...itemInputs('success', 'Success', 44, 'success'),
    ...itemInputs('pending', 'Pending', 28, 'pending'),
    ...itemInputs('info', 'Info', 19, 'info'),
    {
        id: 'showLegends',
        type: 'boolean',
        typeLabel: 'boolean',
        initialValue: true,
        description: 'Controls whether legends are rendered above the bars',
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'hideEmptyCategories',
        type: 'boolean',
        typeLabel: 'boolean',
        initialValue: false,
        description: 'Hides legend items with count === 0',
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'legendScrollable',
        type: 'boolean',
        typeLabel: 'boolean',
        initialValue: false,
        description: 'Uses horizontal swipe legend mode instead of wrapped legend mode',
        required: false,
        category: 'Optional Props',
    },
];

const toIconSource = (iconName: string): IconSource | undefined => {
    if (!iconName || iconName === 'undefined') return undefined;
    if (iconName === 'pending') return { family: 'material', name: 'pending' };
    return { family: 'material-community', name: iconName };
};

const buildItem = (
    prefix: 'failed' | 'canceled' | 'success' | 'pending' | 'info',
    data: PlaygroundData
): HorizontalStackedBarItem => {
    const backgroundColor = data[`${prefix}BackgroundColor` as keyof PlaygroundData] as string;
    const item: HorizontalStackedBarItem = {
        label: data[`${prefix}Label` as keyof PlaygroundData] as string,
        count: Number(data[`${prefix}Count` as keyof PlaygroundData]),
        variant: data[`${prefix}Variant` as keyof PlaygroundData] as HorizontalStackedBarItem['variant'],
        icon: toIconSource(data[`${prefix}Icon` as keyof PlaygroundData] as string),
        disabledIcon: toIconSource(data[`${prefix}DisabledIcon` as keyof PlaygroundData] as string),
    };

    if (backgroundColor) {
        item.backgroundColor = backgroundColor;
    }

    return item;
};

const HorizontalStackedBarPreview: PreviewComponent = ({ data }) => {
    const d = data as unknown as PlaygroundData & HorizontalStackedBarProps;
    const previewData = [
        buildItem('failed', d),
        buildItem('canceled', d),
        buildItem('success', d),
        buildItem('pending', d),
        buildItem('info', d),
    ];

    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '100%' }}>
            <View style={{ width: '70%' }}>
                <HorizontalStackedBar
                    data={previewData}
                    showLegends={Boolean(d.showLegends)}
                    hideEmptyCategories={Boolean(d.hideEmptyCategories)}
                    legendScrollable={Boolean(d.legendScrollable)}
                />
            </View>
        </Stack>
    );
};

const snippetItem = (item: HorizontalStackedBarItem): string => {
    const parts = [`label: '${item.label}'`, `count: ${item.count}`];

    if (item.variant) parts.push(`variant: '${item.variant}'`);
    if (item.backgroundColor) parts.push(`backgroundColor: '${item.backgroundColor}'`);
    if (item.icon && typeof item.icon === 'object' && 'name' in item.icon) {
        parts.push(`icon: { family: '${item.icon.family ?? 'material'}', name: '${item.icon.name}' }`);
    }
    if (item.disabledIcon && typeof item.disabledIcon === 'object' && 'name' in item.disabledIcon) {
        parts.push(
            `disabledIcon: { family: '${item.disabledIcon.family ?? 'material'}', name: '${item.disabledIcon.name}' }`
        );
    }

    return `    { ${parts.join(', ')} }`;
};

const generateSnippet: CodeSnippetFunction = (data) => {
    const d = data as unknown as PlaygroundData;
    const previewData = [
        buildItem('failed', d),
        buildItem('canceled', d),
        buildItem('success', d),
        buildItem('pending', d),
        buildItem('info', d),
    ];

    const propString = getPropsToString(getPropsMapping(data, inputConfig), {
        join: '\n    ',
        skip: [
            'failedLabel',
            'failedCount',
            'failedVariant',
            'failedBackgroundColor',
            'failedIcon',
            'failedDisabledIcon',
            'canceledLabel',
            'canceledCount',
            'canceledVariant',
            'canceledBackgroundColor',
            'canceledIcon',
            'canceledDisabledIcon',
            'successLabel',
            'successCount',
            'successVariant',
            'successBackgroundColor',
            'successIcon',
            'successDisabledIcon',
            'pendingLabel',
            'pendingCount',
            'pendingVariant',
            'pendingBackgroundColor',
            'pendingIcon',
            'pendingDisabledIcon',
            'infoLabel',
            'infoCount',
            'infoVariant',
            'infoBackgroundColor',
            'infoIcon',
            'infoDisabledIcon',
        ],
    });

    return `const data = [\n${previewData.map(snippetItem).join(',\n')}\n];\n\n<HorizontalStackedBar\n    data={data}${propString ? `\n    ${propString}` : ''}\n/>`;
};

export const HorizontalStackedBarPlaygroundComponent = (): React.JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground
            inputConfig={inputConfig}
            codeSnippet={generateSnippet}
            previewComponent={HorizontalStackedBarPreview}
        />
    </Box>
);
