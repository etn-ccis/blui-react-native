import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {UserMenuToolbarExample} from './UserMenuToolbarExample';

const codeSnippet = `<AppBar position="relative" color="primary" sx={{width: 300}}>
    <Toolbar>
      <Text variant="headlineMedium" theme={{ colors: { primary: 'white' } }}>Toolbar Title</Text>
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
    <CodeBlock code={codeSnippet} language="jsx" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/UserMenu/examples/UserMenuToolbarExample.tsx"
    />
  </Box>
);
