import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { IconAsPropExample } from './IconAsPropExample';

const codeSnippet = `<Hero iconColor="green" label={'Setting'} icon={{family: 'material', name: 'settings'}}/>`;

export const IconAsProp = (): JSX.Element => (
    <Box>
        <IconAsPropExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow copyText={codeSnippet} url="componentDocs\Icons\examples\IconAsPropExample.tsx" />
    </Box>
);
