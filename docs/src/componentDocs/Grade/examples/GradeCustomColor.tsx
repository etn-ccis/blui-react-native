import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {GradeCustomColorExample} from './GradeCustomColorExample';

const codeSnippet = `<Grade label='AB' fontColor='#ff0' backgroundColor='#f00'/>`;

export const GradeCustomColor = (): JSX.Element => (
  <Box>
    <GradeCustomColorExample />
    <CodeBlock code={codeSnippet} language="jsx" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/Grade/examples/GradeCustomColourExample.tsx"
    />
  </Box>
);
