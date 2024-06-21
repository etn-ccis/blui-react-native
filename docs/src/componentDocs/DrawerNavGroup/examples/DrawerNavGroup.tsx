import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { DrawerNavGroupExample } from './DrawerNavGroupExample';

const codeSnippet = `<Drawer style={{width: 250, margin: 'auto'}}>
    <DrawerBody>
        <DrawerNavGroup title="Locations" hidePadding>
            <DrawerNavItem title="Regional" itemID="1" />
            <DrawerNavItem title="National" itemID="2" />
        </DrawerNavGroup>
        <DrawerNavGroup title="Status" hidePadding>
            <DrawerNavItem title="Network" itemID="3" />
            <DrawerNavItem title="Node" itemID="4" />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>`;
export const DrawerNavGroup = (): JSX.Element => (
    <Box>
        <DrawerNavGroupExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3-10" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerNavGroup/examples/DrawerNavGroupExample.tsx"
        />
    </Box>
);
