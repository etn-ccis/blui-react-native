import React from 'react';
import {Box} from '@mui/material';
import {SelectingANavItemExample} from './SelectingANavItemExample';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';

const codeSnippet = `<Drawer activeItem="item2">
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
        />
        <DrawerNavItem
            itemID={'item4'}
            title={'Localization'}
            icon={{family: 'material-community', name: 'circle', direction: 'auto'}}
        />
    </DrawerBody>
</Drawer>`;

export const SelectingANavItem = (): JSX.Element => (
  <Box>
    <SelectingANavItemExample />
    <CodeBlock code={codeSnippet} language={'jsx'} dataLine="1" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/DrawerNavItem/examples/SelectingANavItemExample.tsx"
    />
  </Box>
);
