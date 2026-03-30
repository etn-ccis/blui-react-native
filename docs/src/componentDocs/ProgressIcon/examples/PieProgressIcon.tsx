import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { PieProgressIconExample } from './PieProgressIconExample';

const codeSnippet = ` <Pie percent={65} size={50} color="#3431d2" showPercentLabel={true} labelPosition={'bottom'} ring={5} />`;

export const PieProgressIcon = (): React.JSX.Element => (
    <Box>
        <PieProgressIconExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ProgressIcon/examples/PieProgressIconExample.tsx"
        />
    </Box>
);
