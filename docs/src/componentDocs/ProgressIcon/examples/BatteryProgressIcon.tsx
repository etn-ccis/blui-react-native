import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { BatteryProgressIconExample } from './BatteryProgressIconExample';

const codeSnippet = `<Battery
    percent={75}
    size={50}
    color="#3431d2"
    showPercentLabel={true}
    labelPosition={'bottom'}
    charging={true}
/>`;

export const BatteryProgressIcon = (): React.JSX.Element => (
    <Box>
        <BatteryProgressIconExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ProgressIcon/examples/BatteryProgressIconExample.tsx"
        />
    </Box>
);
