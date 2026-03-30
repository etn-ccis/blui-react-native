import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ProgressIconExample } from './ProgressIconExample';

const codeSnippet = `<Signal percent={50} size={50} color="#3431d2" showPercentLabel={true} labelPosition="bottom" />
<Signal
    percent={50}
    size={50}
    color="#3431d2"
    showPercentLabel={true}
    labelPosition="bottom"
    outlined={true}
/>`;
export const ProgressIcon = (): React.JSX.Element => (
    <Box>
        <ProgressIconExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ProgressIcon/examples/ProgressIconExample.tsx"
        />
    </Box>
);
