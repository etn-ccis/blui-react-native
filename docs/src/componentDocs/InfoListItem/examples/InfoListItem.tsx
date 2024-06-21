import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { InfoListItemExample } from './InfoListItemExample';

const codeSnippet = `<InfoListItem
    title="Info List Item Title"
    subtitle="Info List Item Subtitle"
    icon={{ name: 'alarm' }}
/>`;

export const InfoListItem = (): JSX.Element => (
    <Box>
        <InfoListItemExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow copyText={codeSnippet} url="componentDocs/Header/examples/InfoListItemExample.tsx" />
    </Box>
);
