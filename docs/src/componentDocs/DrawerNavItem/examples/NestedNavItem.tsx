import React from 'react';
import { Box } from '@mui/material';
import { NestedNavItemExample } from './NestedNavItemExample';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';

const codeSnippet = `<Drawer>
    <DrawerBody hidePadding>
        <DrawerNavItem
            itemID={'account'}
            title={'Account'}
            icon={{family: 'material-community', name: 'account', direction: 'auto'}}
        />
        <DrawerNavItem
            itemID={'notification'}
            title={'Notification'}
            icon={{family: 'material-community', name: 'bell', direction: 'auto'}}
        >
            <DrawerNavItem itemID={'web'} title={'Web'} />
            <DrawerNavItem itemID={'mobile'} title={'Mobile'} />
        </DrawerNavItem>
        <DrawerNavItem
            itemID={'localization'}
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
