import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {UserMenuToolbarExample} from './UserMenuToolbarExample';

const codeSnippet = `<AppBar position="relative" color="primary">
    <Toolbar>
        <Typography variant="h6">Toolbar Title</Typography>
        <Spacer />
        <UserMenu
            avatar={<Avatar>AV</Avatar>}
            menuItems={[
                {
                    title: 'Log Out',
                    icon: <ExitToApp />,
                },
            ]}
        />
    </Toolbar>
</AppBar>`;

export const UserMenuToolbar = (): JSX.Element => (
  <Box>
    <UserMenuToolbarExample />
    <CodeBlock code={codeSnippet} language="jsx" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/UserMenu/examples/UserMenuToolbarExample.tsx"
    />
  </Box>
);
