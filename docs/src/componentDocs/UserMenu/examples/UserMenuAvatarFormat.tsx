import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {UserMenuAvatarFormatExample} from './UserMenuAvatarFormatExample';

const codeSnippet = `<UserMenu
      avatar={<Avatar.Image size={30} source={{uri: trexImage}} />}
      menuItems={[
        {
          title: 'Settings',
          icon: <Settings />,
        },
      ]}
    />
    <UserMenu
      avatar={<Avatar.Icon size={30} icon="home" />}
      menuItems={[
        {
          title: 'Settings',
          icon: <Settings />,
        },
      ]}
    />`;

export const UserMenuAvatarFormat = (): JSX.Element => (
  <Box>
    <UserMenuAvatarFormatExample />
    <CodeBlock code={codeSnippet} language="jsx" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/UserMenu/examples/UserMenuAvatarFormatExample.tsx"
    />
  </Box>
);
