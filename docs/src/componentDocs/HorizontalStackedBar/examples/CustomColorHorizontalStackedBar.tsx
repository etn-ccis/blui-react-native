import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { CustomColorHorizontalStackedBarExample } from './CustomColorHorizontalStackedBarExample';

const codeSnippet = `const data = [
    {
        label: 'Alpha',
        backgroundColor: '#0b5fff',
        count: 25,
        icon: { family: 'material', name: 'trending-up' },
        disabledIcon: { family: 'material', name: 'trending-up' },
    },
    { label: 'Beta', backgroundColor: '#00a884', count: 35 },
    {
        label: 'Gamma',
        backgroundColor: '#ff7a00',
        count: 15,
        icon: { family: 'material', name: 'trending-down' },
        disabledIcon: { family: 'material', name: 'trending-down' },
    },
    { label: 'Delta', backgroundColor: '#5d36d6', count: 25 },
];

<HorizontalStackedBar data={data} />`;

export const CustomColorHorizontalStackedBar = (): JSX.Element => (
    <Box>
        <CustomColorHorizontalStackedBarExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/HorizontalStackedBar/examples/CustomColorHorizontalStackedBarExample.tsx"
        />
    </Box>
);
