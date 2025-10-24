import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { IconSwitchExample } from './IconSwitchExample';

const codeSnippet = `<View style={{ flexDirection: 'column' }}>
  <View style={{ padding: 10 }}>
    <IconSwitch value={switch1} onValueChange={setSwitch1} />
  </View>
  <View style={{ padding: 10 }}>
    <IconSwitch value={switch2} onValueChange={setSwitch2} />
  </View>
  <View style={{ padding: 10 }}>
    <IconSwitch value={false} disabled={true} onValueChange={() => {}} />
  </View>
  <View style={{ padding: 10 }}>
    <IconSwitch value={true} disabled={true} onValueChange={() => {}} />
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
