import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {CustomNavGroupTitleContentExample} from './CustomNavGroupTitleContentExample';

const codeSnippet = `
  <Drawer style={{width: 250, margin: 'auto', backgroundColor: colors.white[100]}}>
    <DrawerBody>
      <DrawerNavGroup
        hidePadding
        titleContent={
          <View style={{ display: 'flex',flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',padding: 10,
            }}>
            <Text>Nav Group Title Content</Text>
            <ListItemTag label="v1.0.3" />
          </View>
        }>
        <DrawerNavItem title="Item 1" itemID="1" />
        <DrawerNavItem title="Item 2" itemID="2" />
      </DrawerNavGroup>
    </DrawerBody>
  </Drawer>
  `;
export const CustomNavGroupTitleContent = (): JSX.Element => (
  <Box>
    <CustomNavGroupTitleContentExample />
    <CodeBlock code={codeSnippet} language="jsx" dataLine="4-9" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/DrawerNavGroup/examples/CustomNavGroupTitleContentExample.tsx"
    />
  </Box>
);
