import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { HorizontalStackedBarExample } from './HorizontalStackedBarExample';

const codeSnippet = `const data = [
    { label: 'Failed', variant: 'failed', count: 10 },
    { label: 'Canceled', variant: 'canceled', count: 20 },
    { label: 'Success', variant: 'success', count: 35 },
    { label: 'Pending', variant: 'pending', count: 15 },
    { label: 'Info', variant: 'info', count: 20 },
];

<HorizontalStackedBar data={data} />`;

export const HorizontalStackedBar = (): JSX.Element => (
    <Box>
        <HorizontalStackedBarExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/HorizontalStackedBar/examples/HorizontalStackedBarExample.tsx"
        />
    </Box>
);
