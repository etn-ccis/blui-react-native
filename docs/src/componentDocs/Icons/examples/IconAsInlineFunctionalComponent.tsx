import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { IconAsInlineFunctionalComponentExample } from './IconAsInlineFunctionalComponentExample';

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

export const IconAsInlineFunctionalComponent = (): JSX.Element => (
    <Box>
        <IconAsInlineFunctionalComponentExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs\Icons\examples\IconAsInlineFunctionalComponentExample.tsx"
        />
    </Box>
);
