import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { AutoCompleteLimitTagsExample } from './AutoCompleteLimitTagsExample';

const codeSnippet = ` <AutoComplete
    helperText="Helper text"
    label="Popular Cities"
    value={chipValue}
    options={['Dubai']}
    allowCustomtag={true}
    onChange={(item = []) => {
        setChipValue(item);
    }}
    limitTags={3}
/>`;

export const AutoCompleteLimitTags = (): JSX.Element => (
    <Box>
        <AutoCompleteLimitTagsExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/AutoComplete/examples/AutoCompleteLimitTagsExample.tsx"
        />
    </Box>
);
