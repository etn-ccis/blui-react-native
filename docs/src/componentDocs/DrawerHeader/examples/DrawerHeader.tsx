import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { DrawerHeaderExample } from './DrawerHeaderExample';

const codeSnippet = `<Drawer style={{width: 250, margin: 'auto'}}>
    <DrawerHeader title="Title" subtitle="Subtitle" icon={{name: 'menu'}} />
</Drawer>
`;

export const DrawerHeader = (): JSX.Element => (
    <Box>
        <DrawerHeaderExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="2" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerHeader/examples/DrawerHeaderExample.tsx"
        />
    </Box>
);
