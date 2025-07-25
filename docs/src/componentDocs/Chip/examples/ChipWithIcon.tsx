import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ChipWithIconExample } from './ChipWithIconExample';

const codeSnippet = `<Chip icon={{name: 'info'}}>Chip With Icon</Chip>
<Chip mode="elevated" avatar={<Avatar.Icon size={20} icon="account-circle" />}>Elevated Chip With Avatar</Chip>`;

export const ChipWithIcon = (): JSX.Element => (
    <Box>
        <ChipWithIconExample />
        <CodeBlock code={codeSnippet} language={'jsx'} />
        <CodeBlockActionButtonRow copyText={codeSnippet} url="componentDocs/Chip/examples/ChipWithIconExample.tsx" />
    </Box>
);
