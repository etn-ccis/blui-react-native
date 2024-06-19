import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {DrawerNavGroupCompositionExample} from './DrawerNavGroupCompositionExample';

const codeSnippet = `<Drawer style={{width: 250, margin: 'auto'}}>
    <DrawerBody>
        <DrawerNavGroup title="Group 1" hidePadding titleDivider={false}>
            <DrawerNavItem title="Item 1" itemID="1" />
            <DrawerNavItem title="Item 2" itemID="2" />
        </DrawerNavGroup>
        <Divider />
        <DrawerNavGroup
            title="Group 2"
            hidePadding
            titleDivider={false}
            items={[
                {
                    title: 'Item 3',
                    itemID: '3',
                },
                {
                    title: 'Item 4',
                    itemID: '4',
                },
            ]}
        />
    </DrawerBody>
</Drawer>`;
export const DrawerNavGroupComposition = (): JSX.Element => (
  <Box>
    <DrawerNavGroupCompositionExample />
    <CodeBlock code={codeSnippet} language="jsx" dataLine="3-21" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/DrawerNavGroup/examples/DrawerNavGroupCompositionExample.tsx"
    />
  </Box>
);
