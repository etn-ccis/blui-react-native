import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { IconAsImageExample } from './IconAsImageExample';

const codeSnippet = `<Hero
    label={'Image'}
    icon={{
    uri: 'https://raw.githubusercontent.com/etn-ccis/blui-icons/dev/packages/png/png48/
    account_settings_black500_48dp.png',
  }}
/>`;

export const IconAsImage = (): JSX.Element => (
    <Box>
        <IconAsImageExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow copyText={codeSnippet} url="componentDocs\Icons\examples\IconAsImageExample.tsx" />
    </Box>
);
