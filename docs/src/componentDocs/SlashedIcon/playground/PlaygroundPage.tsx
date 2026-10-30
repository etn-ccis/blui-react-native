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
import { SlashedBLUIIcon, SlashedBLUISvgGlyphIconProps } from '@brightlayer-ui/react-native-vector-icons';
import 'prismjs/components/prism-jsx.min';

const inputConfig: InputConfig = [
    {
        id: 'name',
        type: 'select',
        typeLabel: "SlashedBLUISvgGlyphIconProps['name']",
        description: 'Base Brightlayer UI glyph to slash',
        required: true,
        initialValue: 'air_filter',
        options: [
            { label: 'Air Filter', value: 'air_filter' },
            { label: 'AC', value: 'ac' },
            { label: 'UPS', value: 'ups' },
            { label: 'Water', value: 'water' },
            { label: 'Motor', value: 'motor' },
        ],
        category: 'Required Props',
    },
    {
        id: 'color',
        type: 'color',
        typeLabel: 'ColorValue',
        description: 'Fill color of the base icon',
        required: false,
        initialValue: '#007bc1',
        defaultValue: 'currentColor',
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
        id: 'slashColor',
        type: 'color',
        typeLabel: 'ColorValue',
        description: 'Fill color of the diagonal slash',
        required: false,
        initialValue: '#007bc1',
        defaultValue: 'currentColor',
        category: 'Optional Props',
    },
    {
        id: 'slashGapVisible',
        type: 'boolean',
        typeLabel: 'boolean',
        description: 'Create a transparent gap around the slash',
        required: false,
        initialValue: true,
        defaultValue: true,
        category: 'Optional Props',
    },
    {
        id: 'slashGapOffsetX',
        type: 'number',
        typeLabel: 'number',
        description: 'Horizontal offset of the clipping gap in viewBox units',
        required: false,
        initialValue: 0,
        minValue: -4,
        maxValue: 4,
        valueStep: 0.5,
        defaultValue: 0,
        category: 'Optional Props',
    },
    {
        id: 'slashGapOffsetY',
        type: 'number',
        typeLabel: 'number',
        description: 'Vertical offset of the clipping gap in viewBox units',
        required: false,
        initialValue: 0,
        minValue: -4,
        maxValue: 4,
        valueStep: 0.5,
        defaultValue: 0,
        category: 'Optional Props',
    },
];

const SlashedIconPreview: PreviewComponent = ({ data }) => (
    <Stack alignItems="center" justifyContent="center" sx={{ width: '100%', height: '100%' }}>
        <SlashedBLUIIcon {...(data as SlashedBLUISvgGlyphIconProps)} containerStyle={{ alignSelf: 'center' }} />
    </Stack>
);

const generateSnippet: CodeSnippetFunction = (data) => {
    const props = getPropsToString(getPropsMapping(data, inputConfig), { join: '\n    ' });
    return `import { SlashedBLUIIcon } from '@brightlayer-ui/react-native-vector-icons';

<SlashedBLUIIcon
    ${props}
/>`;
};

export const SlashedIconPlaygroundComponent = (): React.JSX.Element => (
    <Box sx={{ width: '100%', height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' } }}>
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={SlashedIconPreview} />
    </Box>
);
