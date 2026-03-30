import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { UpsProgressIconExample } from './UpsProgressIconExample';

const codeSnippet = ` <Ups percent={90} size={50} color="#d23161" showPercentLabel={true} labelPosition={'bottom'} />`;

export const UpsProgressIcon = (): React.JSX.Element => (
    <Box>
        <UpsProgressIconExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ProgressIcon/examples/UpsProgressIconExample.tsx"
        />
    </Box>
);
