import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { IconSwitchWithIconExample } from './IconSwitchWithIconExample';

const codeSnippet = `<View style={{ flexDirection: 'column' }}>
  <View style={{ padding: 10 }}>
    <IconSwitch value={switch1} showIcon onValueChange={setSwitch1} />
  </View>
  <View style={{ padding: 10 }}>
    <IconSwitch value={switch2} showIcon onValueChange={setSwitch2} />
  </View>
  <View style={{ padding: 10 }}>
    <IconSwitch value={false} disabled showIcon onValueChange={() => {}} />
  </View>
  <View style={{ padding: 10 }}>
    <IconSwitch value={true} disabled showIcon onValueChange={() => {}} />
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
