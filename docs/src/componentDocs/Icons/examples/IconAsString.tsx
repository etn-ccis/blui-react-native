import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {IconAsStringExample} from './IconAsStringExample';

const codeSnippet = `<Hero label={'String'} icon={'A'} />
<Hero label={'Emoji'} icon={'🍇'} />`;

export const IconAsString = (): JSX.Element => (
  <Box>
    <IconAsStringExample />
    <CodeBlock code={codeSnippet} language="jsx" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs\Icons\examples\IconAsStringExample.tsx"
    />
  </Box>
);
