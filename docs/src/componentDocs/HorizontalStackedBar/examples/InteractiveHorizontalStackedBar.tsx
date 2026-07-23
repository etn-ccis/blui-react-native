import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { InteractiveHorizontalStackedBarExample } from './InteractiveHorizontalStackedBarExample';

const codeSnippet = `const data = [
    { label: 'Failed', count: 12, variant: 'failed' },
    { label: 'Canceled', count: 16, variant: 'canceled' },
    { label: 'Success', count: 48, variant: 'success' },
    { label: 'Pending', count: 24, variant: 'pending' },
    { label: 'Info', count: 0, variant: 'info' },
];

const [selected, setSelected] = useState<HorizontalStackedBarItem | undefined>();

<HorizontalStackedBar data={data} hideEmptyCategories onChange={setSelected} />`;

export const InteractiveHorizontalStackedBar = (): JSX.Element => (
    <Box>
        <InteractiveHorizontalStackedBarExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/HorizontalStackedBar/examples/InteractiveHorizontalStackedBarExample.tsx"
        />
    </Box>
);
