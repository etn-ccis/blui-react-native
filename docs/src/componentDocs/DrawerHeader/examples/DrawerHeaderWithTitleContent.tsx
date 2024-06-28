import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { DrawerHeaderWithTitleContentExample } from './DrawerHeaderWithTitleContentExample';

const codeSnippet = `<Drawer>
    <DrawerHeader
        backgroundImage={{uri: backgroundImage}}
        backgroundColor={'#007bc1'}
        icon={{name: 'menu'}}
        fontColor={'#FFFFFF'}
        titleContent={
            <View style={{display: 'flex',justifyContent: 'center',flexDirection: 'column',marginLeft: 10}}>
                <Text style={{marginBottom: 5, color: '#FFFFFF'}}>
                    API Documentation
                </Text>
                <ListItemTag
                    label="v1.50.8"
                    backgroundColor={'#FFFFFF'}
                    fontColor={'#007bc1'}
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
