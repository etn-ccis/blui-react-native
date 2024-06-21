import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { OverlineExample } from './OverlineExample';

const codeSnippet = `<Overline>Overline</Overline>`;

export const Overline = (): JSX.Element => (
    <Box>
        <OverlineExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow copyText={codeSnippet} url="componentDocs/Overline/examples/OverlineExample.tsx" />
    </Box>
);
