import React from 'react';
import { Grade, GradeProps } from '@brightlayer-ui/react-native-components';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {
    InputConfig,
    PreviewComponent,
    CodeSnippetFunction,
    getPropsToString,
    getPropsMapping,
    Playground,
} from '@brightlayer-ui/react-doc-components';
import 'prismjs/components/prism-jsx.min';

const inputConfig: InputConfig = [
    // Required Props
    {
        id: 'label',
        type: 'string',
        typeLabel: `string`,
        initialValue: 'A+',
        description: 'The text shown in the circle',
        required: true,
        category: 'Required Props',
    },
    // Optional Props
    {
        id: 'fontColor',
        type: 'color',
        initialValue: 'white',
        typeLabel: 'string',
        description: 'The color of the text label',
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'backgroundColor',
        type: 'color',
        initialValue: 'green',
        typeLabel: 'string',
        description: 'The background color of the circle',
        required: false,
        category: 'Optional Props',
        defaultValue: 'inherit',
    },
    {
        id: 'size',
        type: 'number',
        typeLabel: `number`,
        initialValue: 40,
        description: 'The size of the icon',
        required: false,
        minValue: 10,
        maxValue: 60,
        valueStep: 4,
        category: 'Optional Props',
        defaultValue: 'inherit',
    },
];

const GradePreview: PreviewComponent = ({ data }) => {
    const { ...rest } = data as unknown as GradeProps;
    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '100%' }}>
            <Grade {...rest} />
        </Stack>
    );
};

const generateSnippet: CodeSnippetFunction = (data) =>
    `<Grade 
    ${getPropsToString(getPropsMapping(data, inputConfig), { join: '\n\t' })}
/>`.replace(/^\s*$(?:\r\n?|\n)/gm, '');

export const GradePlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={GradePreview} />
    </Box>
);
