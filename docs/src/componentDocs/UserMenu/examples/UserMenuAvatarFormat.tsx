import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {UserMenuAvatarFormatExample} from './UserMenuAvatarFormatExample';

const codeSnippet = `<UserMenu
    avatar={<Avatar src='../images/trex.png' alt={'User Avatar'} />}
    menuItems={[
                {
                    title: 'Settings',
                    icon: <Settings />,
                },
    ]}
/>
<UserMenu
    avatar={
        <Avatar>
            <Pets />
        </Avatar>
    }
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
