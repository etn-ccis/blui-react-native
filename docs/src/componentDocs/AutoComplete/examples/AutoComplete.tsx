import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { AutoCompleteExample } from './AutoCompleteExample';

const codeSnippet = `<AutoComplete
    label="Popular Cities"
    helperText="Helper text"
    onChange={(arr) => {
        setChipValue(arr);
    }}
    onDelete={(item) => {
        let arr = chipValue.filter((str) => str !== item);
        setChipValue(arr);
    }}
    value={['New York']}
    options={['Dubai', 'London', 'Paris', 'Shanghai', 'Sydney', 'San Francisco']}
/>`;

export const AutoComplete = (): JSX.Element => (
    <Box>
        <AutoCompleteExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/AutoComplete/examples/AutoCompleteExample.tsx"
        />
    </Box>
);
