import React from 'react';
import { Box } from '@mui/material';
import { SelectingANavItemExample } from './SelectingANavItemExample';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';

const codeSnippet = `<Drawer activeItem={selected}>
  <DrawerBody>
    <DrawerNavItem
      itemID={'account'}
      title={'Account'}
      icon={{family: 'material-community', name: 'account', direction: 'auto'}}
      onPress={() => setSelected('account')}
      activeItemBackgroundShape="round"
    />
    <DrawerNavItem
      itemID={'notification'}
      title={'Notification'}
      icon={{family: 'material-community', name: 'bell', direction: 'auto'}}
      onPress={() => setSelected('notification')}
      activeItemBackgroundShape="round"
    />
    <DrawerNavItem
      itemID={'localization'}
      title={'Localization'}
      icon={{family: 'material-community', name: 'map', direction: 'auto'}}
      onPress={() => setSelected('localization')}
      activeItemBackgroundShape="round"
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
