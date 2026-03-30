import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {
    InputConfig,
    PreviewComponent,
    CodeSnippetFunction,
    getPropsToString,
    getPropsMapping,
    Playground,
} from '@brightlayer-ui/react-doc-components';
import { Battery, Heart, Pie, Signal, Ups } from '@brightlayer-ui/react-native-progress-icons';
import { removeEmptyProps } from '../../../utils';
import 'prismjs/components/prism-jsx.min';

const inputConfig: InputConfig = [
    {
        id: 'iconType',
        type: 'select',
        typeLabel: `'Signal' | 'Battery' | 'Pie' | 'Heart' | 'Ups'`,
        description: 'Choose which progress icon component to render',
        required: true,
        initialValue: 'Signal',
        options: [
            { label: 'Signal', value: 'Signal' },
            { label: 'Battery', value: 'Battery' },
            { label: 'Pie', value: 'Pie' },
            { label: 'Heart', value: 'Heart' },
            { label: 'Ups', value: 'Ups' },
        ],
        category: 'Required Props',
    },
    {
        id: 'color',
        type: 'color',
        typeLabel: 'string',
        description: 'Primary icon color',
        required: true,
        initialValue: '#007bc1',
        category: 'Required Props',
    },
    {
        id: 'percent',
        type: 'number',
        typeLabel: 'number',
        description: 'Progress value represented by the icon',
        required: false,
        initialValue: 50,
        minValue: 0,
        maxValue: 100,
        valueStep: 5,
        defaultValue: 100,
        category: 'Optional Props',
    },
    {
        id: 'size',
        type: 'number',
        typeLabel: 'number',
        description: 'Width and height of the icon in pixels',
        required: false,
        initialValue: 56,
        minValue: 16,
        maxValue: 120,
        valueStep: 4,
        defaultValue: 24,
        category: 'Optional Props',
    },
    {
        id: 'outlined',
        type: 'boolean',
        typeLabel: 'boolean',
        description: 'Use outlined icon variation where supported',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Optional Props',
    },
    {
        id: 'showPercentLabel',
        type: 'boolean',
        typeLabel: 'boolean',
        description: 'Show the numeric percentage label',
        required: false,
        initialValue: true,
        defaultValue: false,
        category: 'Optional Props',
    },
    {
        id: 'labelPosition',
        type: 'select',
        typeLabel: `'top' | 'bottom' | 'left' | 'right' | 'center'`,
        description: 'Placement of the percent label',
        required: false,
        initialValue: 'bottom',
        options: [
            { label: 'top', value: 'top' },
            { label: 'bottom', value: 'bottom' },
            { label: 'left', value: 'left' },
            { label: 'right', value: 'right' },
            { label: 'center', value: 'center' },
        ],
        defaultValue: 'center',
        category: 'Optional Props',
    },
    {
        id: 'labelSize',
        type: 'number',
        typeLabel: 'number',
        description: 'Font size for the percent label',
        required: false,
        initialValue: 14,
        minValue: 8,
        maxValue: 36,
        valueStep: 1,
        category: 'Optional Props',
    },
    {
        id: 'backgroundColor',
        type: 'color',
        typeLabel: 'string',
        description: 'Background fill color behind the icon',
        required: false,
        initialValue: '',
        category: 'Optional Props',
    },
    {
        id: 'labelColor',
        type: 'color',
        typeLabel: 'string',
        description: 'Color for the percent label text',
        required: false,
        initialValue: '#424e54',
        category: 'Optional Props',
    },
    {
        id: 'charging',
        type: 'boolean',
        typeLabel: 'boolean',
        description: 'Battery only: show charging indicator',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Icon-Specific Props',
    },
    {
        id: 'ring',
        type: 'number',
        typeLabel: 'number',
        description: 'Pie only: ring thickness',
        required: false,
        initialValue: 6,
        minValue: 1,
        maxValue: 10,
        valueStep: 1,
        defaultValue: 10,
        category: 'Icon-Specific Props',
    },
];

const ProgressIconPreview: PreviewComponent = ({ data }) => {
    const { iconType, charging, ring, ...commonProps } = data as {
        iconType: 'Signal' | 'Battery' | 'Pie' | 'Heart' | 'Ups';
        charging?: boolean;
        ring?: number;
        [key: string]: unknown;
    };

    const iconColor = (commonProps.color as string) || '#007bc1';
    const sanitizedProps = removeEmptyProps(commonProps as Record<string, any>);
    const ringValue = typeof ring === 'number' && !Number.isNaN(ring) ? ring : 10;
    const safeLabelColor =
        typeof sanitizedProps.labelColor === 'string' && sanitizedProps.labelColor.trim().length > 0
            ? sanitizedProps.labelColor
            : '#424e54';

    let iconElement: JSX.Element;
    switch (iconType) {
        case 'Battery':
            iconElement = (
                <Battery
                    {...sanitizedProps}
                    color={iconColor}
                    labelColor={safeLabelColor}
                    charging={Boolean(charging)}
                />
            );
            break;
        case 'Pie':
            iconElement = <Pie {...sanitizedProps} color={iconColor} labelColor={safeLabelColor} ring={ringValue} />;
            break;
        case 'Heart':
            iconElement = <Heart {...sanitizedProps} color={iconColor} labelColor={safeLabelColor} />;
            break;
        case 'Ups':
            iconElement = <Ups {...sanitizedProps} color={iconColor} labelColor={safeLabelColor} />;
            break;
        case 'Signal':
        default:
            iconElement = <Signal {...sanitizedProps} color={iconColor} labelColor={safeLabelColor} />;
            break;
    }

    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '100%' }}>
            {iconElement}
        </Stack>
    );
};

const generateSnippet: CodeSnippetFunction = (data) => {
    const componentName = (data.iconType as string) || 'Signal';
    const commonSnippet = getPropsToString(getPropsMapping(data, inputConfig), {
        join: '\n\t',
        skip: ['iconType', 'charging', 'ring'],
    });

    const iconSpecificSnippet =
        componentName === 'Battery' && data.charging
            ? 'charging={true}'
            : componentName === 'Pie' && typeof data.ring !== 'undefined'
              ? `ring={${data.ring}}`
              : '';

    return `<${componentName}
	${commonSnippet}
	${iconSpecificSnippet}
/>`
        .replace(/^\s*$(?:\r\n?|\n)/gm, '')
        .replace(/(?:^|)( {4}|\t)/gm, '    ');
};

export const ProgressIconPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={ProgressIconPreview} />
    </Box>
);
