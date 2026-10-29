import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { BatteryLargeProgressIconExample } from './BatteryLargeProgressIconExample';

const codeSnippet = `<BatteryLarge
    percent={75}
    size={50}
    color="#3431d2"
    showPercentLabel={true}
    labelPosition={'bottom'}
/>`;

export const BatteryLargeProgressIcon = (): React.JSX.Element => (
    <Box>
        <BatteryLargeProgressIconExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ProgressIcon/examples/BatteryLargeProgressIconExample.tsx"
        />
    </Box>
);
