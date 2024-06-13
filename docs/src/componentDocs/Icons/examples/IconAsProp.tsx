import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {IconAsPropExample} from './IconAsPropExample';

const codeSnippet = `<Hero label={'Setting'} icon={{family:'material', name:'settings'}} />`;

export const Icon = (): JSX.Element => (
  <Box>
    <IconAsPropExample />
    <CodeBlock code={codeSnippet} language="jsx" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs\Icons\examples\IconAsPropExample.tsx"
    />
  </Box>
);
