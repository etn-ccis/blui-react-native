import { Box } from '@mui/material';
import React from 'react';
import { DrawerExample } from './DrawerExample';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';

const codeSnippet = `<Drawer style={{width: 250, margin: 'auto'}}>
    <DrawerHeader
        title={'Drawer Title'}
        subtitle={'Drawer Subtitle'}
        icon={{name: 'menu', direction: 'auto'}}
    />
    <DrawerSubheader>
        <View style={{padding: 16}}>
            <Text>Subheader content here</Text>
        </View>
    </DrawerSubheader>
    <DrawerBody>
        <DrawerNavGroup title={'Navigation Group'}>
            <DrawerNavItem itemID={'item31'} title={'Item 1'}></DrawerNavItem>
            <DrawerNavItem itemID={'item31'} title={'Item 2'}></DrawerNavItem>
            <DrawerNavItem itemID={'item31'} title={'Item 3'}></DrawerNavItem>
        </DrawerNavGroup>
    </DrawerBody>
    <DrawerFooter>
        <View style={{padding: 16}}>
            <Text>Footer content here</Text>
        </View>
    </DrawerFooter>
</Drawer>`;

export const Drawer = (): JSX.Element => (
    <Box>
        <DrawerExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow copyText={codeSnippet} url="componentDocs/Drawer/examples/DrawerExample.tsx" />
    </Box>
);
