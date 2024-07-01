import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { BasicDrawerBodyExample } from './BasicDrawerBodyExample';

const codeSnippet = `<Drawer>
    <DrawerBody hidePadding>
        <DrawerNavGroup title={'Navigation Group'}>
            <DrawerNavItem
                itemID={'item1'}
                title={'Account'}
                icon={{ family: 'material-community', name: 'account', direction: 'auto' }}
            />
            <DrawerNavItem
                itemID={'item2'}
                title={'Notification'}
                icon={{ family: 'material-community', name: 'bell', direction: 'auto' }}
                activeItemBackgroundShape={'round'}
            />
            <DrawerNavItem
                itemID={'item3'}
                title={'Localization'}
                icon={{ family: 'material-community', name: 'circle', direction: 'auto' }}
                activeItemBackgroundShape={'round'}
            />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>
`;

export const BasicDrawerBody = (): JSX.Element => (
    <Box>
        <BasicDrawerBodyExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="2-22" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerBody/examples/BasicDrawerBodyExample.tsx"
        />
    </Box>
);
