import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { IconAsObjectExample } from './IconAsObjectExample';

const codeSnippet = `<Hero label={'Device'} icon={{ family: 'brightlayer-ui', name: 'device' }} />`;

export const IconAsObject = (): JSX.Element => (
    <Box>
        <IconAsObjectExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow copyText={codeSnippet} url="componentDocs\Icons\examples\IconAsObjectExample.tsx" />
    </Box>
);
