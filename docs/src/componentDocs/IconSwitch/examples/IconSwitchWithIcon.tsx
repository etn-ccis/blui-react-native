import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { IconSwitchWithIconExample } from './IconSwitchWithIconExample';

const codeSnippet = `<View style={{flexDirection: 'column'}}>
  <View style={{padding: 10}}>
    <IconSwitch value={false} showIcon />
  </View>
  <View style={{padding: 10}}>
    <IconSwitch value={true} showIcon />
  </View>
  <View style={{padding: 10}}>
    <IconSwitch disabled showIcon />
  </View>
  <View style={{padding: 10}}>
    <IconSwitch value disabled showIcon />
  </View>
</View>`;
export const IconSwitchWithIcon = (): JSX.Element => (
    <Box>
        <IconSwitchWithIconExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3,6,9,12" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/IconSwitch/examples/IconSwitchWithIconExample.tsx"
        />
    </Box>
);
