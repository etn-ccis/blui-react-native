import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {HeaderWithBackgroundExample} from './HeaderWithBackgroundExample';

const codeSnippet = `<Header
    title={'Valley Forge'}
    subtitle={'The Last Stand'}
    backgroundImage={BackgroundImage}
/>`;

export const HeaderWithBackground = (): JSX.Element => (
  <Box>
    <HeaderWithBackgroundExample />
    <CodeBlock code={codeSnippet} language="jsx" dataLine="4" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/Header/examples/HeaderWithBackgroundExample.tsx"
    />
  </Box>
);
