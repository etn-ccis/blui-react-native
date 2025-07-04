import React from 'react';
import { Box } from '@mui/material';
import { DrawerSubheaderExample } from './DrawerSubheaderExample';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';

const codeSnippet = `<Drawer>
  <DrawerHeader title="Title" />
  <DrawerSubheader>
      <Text style={{padding: 16}}>Custom Content Goes here</Text>
  </DrawerSubheader>
  <DrawerBody hidePadding>
      <DrawerNavGroup>
          <DrawerNavItem title="Dashboard" itemID="1" />
          <DrawerNavItem title="Locations" itemID="2" />
      </DrawerNavGroup>
  </DrawerBody>
</Drawer>`;

export const DrawerSubheader = (): JSX.Element => (
    <Box>
        <DrawerSubheaderExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3-5" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerSubheader/examples/DrawerSubheaderExample.tsx"
        />
    </Box>
);
