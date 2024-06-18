import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {UserMenuHeaderExample} from './UserMenuHeaderExample';

const codeSnippet = `<UserMenu
    avatar={<Avatar>MH</Avatar>}
    menuItems={[
                {
                    title: 'Settings',
                    icon: <Settings />,
                }
    ]}
    menuTitle="Sample Title"
    menuSubtitle="Sample Subtitle"
/>`;

export const UserMenuHeader = (): JSX.Element => (
  <Box>
    <UserMenuHeaderExample />
    <CodeBlock code={codeSnippet} language="jsx" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/UserMenu/examples/UserMenuHeaderExample.tsx"
    />
  </Box>
);
