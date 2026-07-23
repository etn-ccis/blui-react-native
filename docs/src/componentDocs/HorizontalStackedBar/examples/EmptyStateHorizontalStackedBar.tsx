import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { EmptyStateHorizontalStackedBarExample } from './EmptyStateHorizontalStackedBarExample';

const codeSnippet = `const data = [
    { label: 'Failed', variant: 'failed', count: 0 },
    { label: 'Canceled', variant: 'canceled', count: 0 },
    { label: 'Success', variant: 'success', count: 0 },
    { label: 'Pending', variant: 'pending', count: 0 },
    { label: 'Info', variant: 'info', count: 0 },
];

<HorizontalStackedBar data={data} />`;

export const EmptyStateHorizontalStackedBar = (): JSX.Element => (
    <Box>
        <EmptyStateHorizontalStackedBarExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/HorizontalStackedBar/examples/EmptyStateHorizontalStackedBarExample.tsx"
        />
    </Box>
);
