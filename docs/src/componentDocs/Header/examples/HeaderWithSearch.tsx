import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { HeaderWithSearchExample } from './HeaderWithSearchExample';

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
    searchableConfig={{ onChangeText: () => {} }}
/>`;

export const HeaderWithSearch = (): JSX.Element => (
    <Box>
        <HeaderWithSearchExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="14" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/Header/examples/HeaderWithSearchExample.tsx"
        />
    </Box>
);
