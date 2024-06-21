import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { UserMenuToolbarExample } from './UserMenuToolbarExample';

const codeSnippet = `<AppBar position="relative" color="primary" sx={{width: 300}}>
    <Toolbar>
      <Text style={{ color: 'white' }} variant="headlineMedium">Toolbar Title</Text>
      <Spacer />
      <UserMenu
        avatar={<Avatar.Text size={30} label="AV" />}
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
        <CodeBlock code={codeSnippet} language="jsx" dataLine="5-13" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/UserMenu/examples/UserMenuToolbarExample.tsx"
        />
    </Box>
);
