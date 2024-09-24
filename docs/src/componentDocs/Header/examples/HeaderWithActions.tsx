import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { HeaderWithActionsExample } from './HeaderWithActionsExample';

const codeSnippet = `<Header
    title={'Valley Forge'}
    subtitle={'The Last Stand'}
    actionItems={[
        {
            icon: { name: 'settings' },
            onPress: () => { },
        },
        {
            icon: { name: 'more-vert' },
            onPress: () => { },
        },
    ]}
    icon={{ name: 'menu' }}
    onIconPress={() => {}}
/>`;

export const HeaderWithActions = (): JSX.Element => (
    <Box>
        <HeaderWithActionsExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="4-14" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/Header/examples/HeaderWithActionsExample.tsx"
        />
    </Box>
);
