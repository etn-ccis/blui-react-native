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
import { SlashedBLUISvgMaskIcon } from '@brightlayer-ui/react-native-vector-icons';
import { Path } from 'react-native-svg';
import 'prismjs/components/prism-jsx.min';

const inputConfig: InputConfig = [
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
        initialValue: '#ca3c3d',
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

const SlashedIconMaskPreview: PreviewComponent = ({ data }) => (
    <Stack alignItems="center" justifyContent="center" sx={{ width: '100%', height: '100%' }}>
        <SlashedBLUISvgMaskIcon {...data} containerStyle={{ alignSelf: 'center' }}>
            <Path d="M4 4H20V20H4Z" fill="#007bc1" />
        </SlashedBLUISvgMaskIcon>
    </Stack>
);

const generateSnippet: CodeSnippetFunction = (data) => {
    const props = getPropsToString(getPropsMapping(data, inputConfig), { join: '\n    ' });
    return `import { SlashedBLUISvgMaskIcon } from '@brightlayer-ui/react-native-vector-icons';
import { Path } from 'react-native-svg';

<SlashedBLUISvgMaskIcon
    ${props}
>
    <Path d="M4 4H20V20H4Z" fill="#007bc1" />
</SlashedBLUISvgMaskIcon>`;
};

export const SlashedIconMaskPlaygroundComponent = (): React.JSX.Element => (
    <Box sx={{ width: '100%', height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' } }}>
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={SlashedIconMaskPreview} />
    </Box>
);
