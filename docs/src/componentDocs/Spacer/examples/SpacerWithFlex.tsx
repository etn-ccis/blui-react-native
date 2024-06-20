import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {SpacerWithFlexExample} from './SpacerWithFlexExample';

const codeSnippet = `
<View style={{display: 'flex', flexDirection: 'row', height: 56, width: 300}}>
    <Spacer flex={1} style={{backgroundColor: '#4da3d4'}}>
        <Text>1</Text>
    </Spacer>
    <Spacer flex={2} style={{backgroundColor: '#f5db6d'}}>
        <Text>2</Text>
    </Spacer>
    <Spacer flex={3} style={{backgroundColor: '#da7777'}}>
        <Text>3</Text>
    </Spacer>
</View>
`;

export const SpacerWithFlex = (): JSX.Element => (
  <Box>
    <SpacerWithFlexExample />
    <CodeBlock code={codeSnippet} language="jsx" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/Spacer/examples/SpacerWithFlexExample.tsx"
    />
  </Box>
);
