import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { HorizontalStackedBarScrollableLegendExample } from './HorizontalStackedBarScrollableLegendExample';

const codeSnippet = `const data = [
    { label: 'Failed', count: 9, variant: 'failed' },
    { label: 'Success', count: 39, variant: 'success' },
    { label: 'Pending', count: 11, variant: 'pending' },
    { label: 'Info', count: 10, variant: 'info' },
    { label: 'Canceled', count: 3, variant: 'canceled' },
    { label: 'Deferred', count: 7, backgroundColor: '#7E57C2' },
    { label: 'Manual', count: 5, backgroundColor: '#8D6E63' },
];

<HorizontalStackedBar data={data} legendScrollable />`;

export const HorizontalStackedBarScrollableLegend = (): JSX.Element => (
    <Box>
        <HorizontalStackedBarScrollableLegendExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/HorizontalStackedBar/examples/HorizontalStackedBarScrollableLegendExample.tsx"
        />
    </Box>
);
