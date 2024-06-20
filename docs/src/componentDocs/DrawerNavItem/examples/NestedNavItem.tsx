import React from 'react';
import {Box} from '@mui/material';
import {NestedNavItemExample} from './NestedNavItemExample';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';

const codeSnippet = `<Drawer>
    <DrawerBody>
        <DrawerNavItem
            itemID={'item1'}
            title={'Account'}
            icon={{family: 'material-community', name: 'account', direction: 'auto'}}
        />
        <DrawerNavItem
            itemID={'item2'}
            title={'Notification'}
            icon={{family: 'material-community', name: 'bell', direction: 'auto'}}
        >
            <DrawerNavItem itemID={'item21'} title={'Web'} />
            <DrawerNavItem itemID={'item22'} title={'Mobile'} />
        </DrawerNavItem>
        <DrawerNavItem
            itemID={'item3'}
            title={'Localization'}
            icon={{family: 'material-community', name: 'map', direction: 'auto'}}
        />
    </DrawerBody>
</Drawer>`;

export const NestedNavItem = (): JSX.Element => (
  <Box>
    <NestedNavItemExample />
    <CodeBlock code={codeSnippet} language={'jsx'} dataLine="8-15" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/DrawerNavItem/examples/NestedNavItemExample.tsx"
    />
  </Box>
);
