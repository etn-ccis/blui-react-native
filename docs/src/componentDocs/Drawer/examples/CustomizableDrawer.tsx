import React from 'react';
import {Box} from '@mui/material';
import {CustomizableDrawerExample} from './CustomizableDrawerExample';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';

const codeSnippet = `<Drawer activeItem="item1" style={{width: 250, margin: 'auto'}}>
    <DrawerHeader
        title={'Drawer Title'}
        subtitle={'Drawer Subtitle'}
        icon={{ name: 'menu', direction: 'auto' }}
    />
    <DrawerBody>
        {/* Using children */}
        <DrawerNavGroup title={'Navigation Group 1'}>
            <DrawerNavItem
                itemID={'item1'}
                title={'Account'}
                icon={{ family: 'material-community', name: 'account', direction: 'auto' }}
            />
            <DrawerNavItem
                itemID={'item2'}
                title={'Notification'}
                icon={{ family: 'material-community', name: 'bell', direction: 'auto' }}
            >
                <DrawerNavItem itemID={'item3'} title={'item3'}>
                    <DrawerNavItem itemID={'item31'} title={'Item31'} />
                    <DrawerNavItem itemID={'item32'} title={'Item32'} />
                </DrawerNavItem>
            </DrawerNavItem>
            <DrawerNavItem
                itemID={'item4'}
                title={'Localization'}
                icon={{ family: 'material-community', name: 'map', direction: 'auto' }}
            />
        </DrawerNavGroup>
        {/* Using 'items' prop */}
        <DrawerNavGroup
            title={'Navigation Group 2'}
            items={[
                { title: 'Sensors', itemID: 'id1' },
                { title: 'Devices', itemID: 'id2' },
            ]}
        />
    </DrawerBody>
</Drawer>`;

export const CustomizableDrawer = (): JSX.Element => (
  <Box>
    <CustomizableDrawerExample />
    <CodeBlock code={codeSnippet} language="jsx" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/Drawer/examples/CustomizableDrawerExample.tsx"
    />
  </Box>
);
