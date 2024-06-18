import React from 'react';
import {Box} from '@mui/material';
import {InteractiveDrawerSubheaderExample} from './InteractiveDrawerSubheaderExample';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';

const codeSnippet = `
<Drawer style={{width: 250, margin: 'auto'}}>
    <DrawerHeader
        title={'Drawer Title'}
        subtitle={'Drawer Subtitle'}
        icon={{name: 'menu', direction: 'auto'}}
    />
    <DrawerSubheader>
        <View style={{padding: 10}}>
            <TextInput label={'Add new navigation group'} mode="outlined" />
        </View>
    </DrawerSubheader>
    <DrawerBody>
        <DrawerNavGroup title={'Navigation Group'}>
            <DrawerNavItem
                itemID={'item1'}
                title={'Account'}
                icon={{
                    family: 'material-community',
                    name: 'account',
                    direction: 'auto',
                }}
                InfoListItemProps={{
                    iconAlign: 'center',
                }}
            />
            <DrawerNavItem
                itemID={'item2'}
                title={'Notification'}
                icon={{
                    family: 'material-community',
                    name: 'bell',
                    direction: 'auto',
                }}
                activeItemBackgroundShape={'round'}
                InfoListItemProps={{
                    iconAlign: 'center',
                }}
            />
            <DrawerNavItem
                itemID={'item4'}
                title={'Localization'}
                icon={{
                    family: 'material-community',
                    name: 'circle',
                    direction: 'auto',
                }}
                activeItemBackgroundShape={'round'}
                InfoListItemProps={{
                    iconAlign: 'center',
                }}
            />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>
`;

export const InteractiveDrawerSubheader = (): JSX.Element => (
  <Box>
    <InteractiveDrawerSubheaderExample />
    <CodeBlock code={codeSnippet} language="jsx" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/DrawerSubheader/examples/InteractiveDrawerSubheaderExample.tsx"
    />
  </Box>
);
