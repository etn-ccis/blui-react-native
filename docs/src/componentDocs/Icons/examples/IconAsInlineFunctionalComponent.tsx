import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';

const codeSnippet = `<Hero
  label={'Icon'}
  iconSize={100}
  icon={({size, ...props}) => (
    <Avatar.Icon
      size={size}
      {...props}
      icon="account-circle"
      color={'#E5E4E2'}
    />
  )}
/>`;

export const IconInlineFunctionalComponent = (): JSX.Element => (
  <Box>
    <CodeBlock code={codeSnippet} language="jsx" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs\Icons\examples\IconInlineFunctionalComponentExample.tsx"
    />
  </Box>
);
