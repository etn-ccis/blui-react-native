import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {UserMenuBottomSheetExample} from './UserMenuBottomSheetExample';

const codeSnippet = `<UserMenu
    avatar={<Avatar>BS</Avatar>}
    backgroundColor="#f5f5f5" //light grey
    fontColor="#333333" //dark grey
    iconColor="#ff0000" //red
    menuItems={[
                {
                    title: 'Settings',
                    icon: <Settings />,
                },
                {
                    title: 'Contact Us',
                    icon: <Email />,
                },
                {
                    title: 'Log Out',
                    icon: <ExitToApp />,
                },
    ]}
    styles={{
        bottomsheet: {
            width: 1000,
        }
    }}
/>`;

export const UserMenuBottomSheet = (): JSX.Element => (
  <Box>
    <UserMenuBottomSheetExample />
    <CodeBlock code={codeSnippet} language="jsx" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/UserMenu/examples/UserMenuBottomSheet.tsx"
    />
  </Box>
);
