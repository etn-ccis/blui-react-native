import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { HeaderWithExpandCollapseExample } from './HeaderWithExpandCollapseExample';

const codeSnippet = `<Header
    title={'Valley Forge'}
    subtitle={'The Last Stand'}
    expandable={true}
    collapsedHeight={56}
    expandedHeight={200}
/>`;

export const HeaderWithExpandCollapse = (): JSX.Element => (
    <Box>
        <HeaderWithExpandCollapseExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="4-6" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/Header/examples/HeaderWithExpandCollapseExample.tsx"
        />
    </Box>
);
