import React from 'react';
import { Box } from '@mui/material';
import { InteractiveDrawerSubheaderExample } from './InteractiveDrawerSubheaderExample';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';

const codeSnippet = `<Drawer style={{width: 250, margin: 'auto'}}>
    <DrawerHeader
        title={'Drawer Title'}
        subtitle={'Drawer Subtitle'}
        icon={{name: 'menu', direction: 'auto'}}
    />
    <DrawerSubheader>
        <TextInput label={'Add Navigation Group'} mode="outlined" style={{ margin: 16 }} />
    </DrawerSubheader>
    <DrawerBody>
        <DrawerNavGroup title={'Navigation Group'}>
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
                itemID={'item3'}
                title={'Localization'}
                icon={{family: 'material-community', name: 'circle', direction: 'auto'}}
            />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>`;

export const InteractiveDrawerSubheader = (): JSX.Element => (
    <Box>
        <InteractiveDrawerSubheaderExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="7-9" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerSubheader/examples/InteractiveDrawerSubheaderExample.tsx"
        />
    </Box>
);
