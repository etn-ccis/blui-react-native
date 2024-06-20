import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {DrawerFooterExample} from './DrawerFooterExample';

const codeSnippet = `<Drawer style={{width: 250, margin: 'auto'}}>
      <DrawerBody>
        <DrawerNavItem
          itemID={'item1'}
          title={'Account'}
          icon={{
            family: 'material-community',
            name: 'account',
            direction: 'auto',
          }}
        />
        <DrawerNavItem
          itemID={'item2'}
          title={'Notification'}
          icon={{family: 'material-community', name: 'bell', direction: 'auto'}}
          activeItemBackgroundShape={'round'}
        />
      </DrawerBody>
      <DrawerFooter>
        <Text variant="displayMedium" style={{alignSelf: 'center'}}>
          Footer content goes here
        </Text>
      </DrawerFooter>
    </Drawer>`;

export const DrawerFooter = (): JSX.Element => (
  <Box>
    <DrawerFooterExample />
    <CodeBlock code={codeSnippet} language="jsx" dataLine='19-23' />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/DrawerFooter/examples/DrawerFooterExample.tsx"
    />
  </Box>
);
