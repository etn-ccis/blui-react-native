import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { HorizontalStackedBarLegendBehaviorExample } from './HorizontalStackedBarLegendBehaviorExample';

const codeSnippet = `const data = [
    { label: 'Critical', count: 16, variant: 'failed' },
    { label: 'Healthy', count: 52, variant: 'success' },
    { label: 'Queued', count: 7, variant: 'pending' },
    { label: 'Offline', count: 0, variant: 'canceled' },
    { label: 'Unknown', count: 0, variant: 'info' },
];

<HorizontalStackedBar data={data} hideEmptyCategories />`;

export const HorizontalStackedBarLegendBehavior = (): JSX.Element => (
    <Box>
        <HorizontalStackedBarLegendBehaviorExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/HorizontalStackedBar/examples/HorizontalStackedBarLegendBehaviorExample.tsx"
        />
    </Box>
);
