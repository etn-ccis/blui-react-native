import React from 'react';
import {Box} from '@mui/material';
import {DrawerNavItemExample} from './DrawerNavItemExample';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';

const codeSnippet = `<Drawer>
    <DrawerBody>
        <DrawerNavItem
            itemID={'item1'}
            title={'Account'}
            icon={{ family: 'material-community', name: 'account', direction: 'auto' }}
        />
        <DrawerNavItem
            itemID={'item2'}
            title={'Notification'}
            icon={{ family: 'material-community', name: 'bell', direction: 'auto' }}
        />
        <DrawerNavItem
            itemID={'item4'}
            title={'Localization'}
            icon={{ family: 'material-community', name: 'circle', direction: 'auto' }}
        />
    </DrawerBody>
</Drawer>
`;

export const DrawerNavItem = (): JSX.Element => (
  <Box>
    <DrawerNavItemExample />
    <CodeBlock code={codeSnippet} language={'jsx'} dataLine="3-17" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/DrawerNavItem/examples/DrawerNavItemExample.tsx"
    />
  </Box>
);
