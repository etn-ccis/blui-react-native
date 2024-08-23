import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { AutoCompleteBasicExample } from './AutoCompleteBasicExample';

const codeSnippet = `<AutoComplete
    helperText="Helper text"
    label="Popular Cities"
    value={['New York']}
    options={['Dubai','London','New York','Paris']}
/>`;

export const AutoComplete = (): JSX.Element => (
    <Box>
        <AutoCompleteBasicExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/AutoComplete/examples/AutoCompleteBasicExample.tsx"
        />
    </Box>
);
