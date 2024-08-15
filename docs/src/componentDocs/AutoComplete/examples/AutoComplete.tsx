import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { AutoCompleteExample } from './AutoCompleteExample';

const codeSnippet = `<AutoComplete
    label="Popular Cities"
    helperText="Helper text"
    value={chipValue}
    onChange={(arr) => {
        setChipValue(arr);
    }}
    onDelete={(item) => {
        let arr = chipValue.filter((str) => str !== item);
        setChipValue(arr);
    }}
    options={['Dubai', 'London', 'New York', 'Paris', 'Shanghai', 'Sydney', 'San Francisco']}
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
