import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {DrawerHeaderWithTitleContentExample} from './DrawerHeaderWithTitleContentExample';

const codeSnippet = `<Drawer style={{width: 250, margin: 'auto'}}>
    <DrawerHeader
        backgroundImage={{uri: backgroundImage}}
        backgroundColor={colors.blue[500]}
        icon={{name: 'menu'}}
        fontColor={colors.white[50]}
        titleContent={
            <View style={{display: 'flex',justifyContent: 'center',flexDirection: 'column',marginLeft: 10}}>
                <Text style={{marginBottom: 5, color: colors.white[50]}}>
                    API Documentation
                </Text>
                <ListItemTag
                    label="v1.50.8"
                    backgroundColor={colors.white[50]}
                    fontColor={colors.blue[500]}
                    style={{width: '50%'}}
                />
            </View>
        }
    />
</Drawer>
`;

export const DrawerHeaderWithTitleContent = (): JSX.Element => (
  <Box>
    <DrawerHeaderWithTitleContentExample />
    <CodeBlock code={codeSnippet} language="jsx" dataLine="7-19" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/DrawerHeader/examples/DrawerHeaderWithTitleContentExample.tsx"
    />
  </Box>
);
