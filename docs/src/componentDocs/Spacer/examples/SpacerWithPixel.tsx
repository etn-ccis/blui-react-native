import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {SpacerWithPixelExample} from './SpacerWithPixelExample';

const codeSnippet = `
<View style={{display: 'flex', flexDirection: 'row', height: 56}}>
    <Spacer width={25} flex={0} style={{backgroundColor: '#4682B4'}}>
        <Text>25</Text>
    </Spacer>
    <Spacer width={75} flex={0} style={{backgroundColor: '#FFD700'}}>
        <Text>75</Text>
    </Spacer>
    <Spacer width={200} flex={0} style={{backgroundColor: '#FF6347'}}>
        <Text>200</Text>
    </Spacer>
</View>
<View style={{display: 'flex', flexDirection: 'column', width: 300}}>
    <Spacer height={25} flex={0} style={{backgroundColor: '#4682B4'}}>
        <Text>25</Text>
    </Spacer>
    <Spacer height={50} flex={0} style={{backgroundColor: '#FFD700'}}>
        <Text>50</Text>
    </Spacer>
    <Spacer height={75} flex={0} style={{backgroundColor: '#FF6347'}}>
        <Text>75</Text>
    </Spacer>
</View>
`;

export const SpacerWithPixel = (): JSX.Element => (
  <Box>
    <SpacerWithPixelExample />
    <CodeBlock code={codeSnippet} language="jsx" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/Spacer/examples/SpacerWithPixelExample.tsx"
    />
  </Box>
);
