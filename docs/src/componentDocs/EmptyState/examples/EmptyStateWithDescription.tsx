import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { EmptyStateWithDescriptionExample } from './EmptyStateWithDescriptionExample';

const codeSnippet = `<EmptyState
    icon={{name: 'location-off'}}
    title="Location Services Disabled"
    description="Enable Location Services via Settings to receive GPS information"
/>`;

export const EmptyStateWithDescription = (): JSX.Element => (
    <Box>
        <EmptyStateWithDescriptionExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="4" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/EmptyState/examples/EmptyStateWithDescriptionExample.tsx"
        />
    </Box>
);
