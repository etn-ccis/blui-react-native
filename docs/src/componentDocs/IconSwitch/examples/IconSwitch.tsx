import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {IconSwitchExample} from './IconSwitchExample';

const codeSnippet = `<View style={{flexDirection: 'column'}}>
  <View style={{padding: 10}}>
    <IconSwitch value={false} />
  </View>
  <View style={{padding: 10}}>
    <IconSwitch value={true} />
  </View>
  <View style={{padding: 10}}>
    <IconSwitch disabled />
  </View>
  <View style={{padding: 10}}>
    <IconSwitch value disabled />
  </View>
</View>`;
export const IconSwitch = (): JSX.Element => (
  <Box>
    <IconSwitchExample />
    <CodeBlock code={codeSnippet} language="jsx" dataLine="3,6,9,12" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/IconSwitch/examples/IconSwitchExample.tsx"
    />
  </Box>
);
