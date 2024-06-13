import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {HeaderExample} from './HeaderExample';

const codeSnippet = `<Header
    title={'Valley Forge'}
    subtitle={'The Last Stand'}
/>`;

export const Header = (): JSX.Element => (
  <Box>
    <HeaderExample />
    <CodeBlock code={codeSnippet} language="jsx" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/Header/examples/HeaderExample.tsx"
    />
  </Box>
);
