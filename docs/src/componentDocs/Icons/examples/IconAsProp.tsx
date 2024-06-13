import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {IconAsPropExample} from './IconAsPropExample';

const codeSnippet = `<Hero label={'Setting'} icon={<MatIcon name="settings" size={38} color={'green'} />} />`;

export const IconAsProp = (): JSX.Element => (
  <Box>
    <IconAsPropExample />
    <CodeBlock code={codeSnippet} language="jsx" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs\Icons\examples\IconAsPropExample.tsx"
    />
  </Box>
);
