import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';

const codeSnippet = `<AutoComplete
    helperText="Select a destination"
    label="Popular Cities"
    value={['New York']}
    options={['Dubai', 'London', 'New York', 'Paris']}
/>`;

export const AutoComplete = (): JSX.Element => (
    <Box>
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow copyText={codeSnippet} />
    </Box>
);
