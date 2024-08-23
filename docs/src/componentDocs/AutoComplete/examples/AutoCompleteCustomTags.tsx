import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { AutoCompleteCustomTagsExample } from './AutoCompleteCustomTagsExample';

const codeSnippet = `<AutoComplete
    helperText="Helper text"
    label="Popular Cities"
    value={chipValue}
    options={['Dubai','London','New York','Paris']}
    allowCustomtag={true}
    onChange={(item = []) => {
        setChipValue(item);
    }}
/>`;

export const AutoCompleteCustomTags = (): JSX.Element => (
    <Box>
        <AutoCompleteCustomTagsExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/AutoComplete/examples/AutoCompleteCustomTagsExample.tsx"
        />
    </Box>
);
