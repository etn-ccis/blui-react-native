import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { HeartProgressIconExample } from './HeartProgressIconExample';

const codeSnippet = ` <Heart percent={80} size={50} color="#d23161" showPercentLabel={true} labelPosition={'bottom'} />`;

export const HeartProgressIcon = (): React.JSX.Element => (
    <Box>
        <HeartProgressIconExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ProgressIcon/examples/HeartProgressIconExample.tsx"
        />
    </Box>
);
