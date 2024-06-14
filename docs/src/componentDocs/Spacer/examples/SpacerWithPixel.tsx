import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {SpacerWithPixelExample} from './SpacerWithPixelExample';

const codeSnippet = `
  <View>
    <View style={{display: 'flex', flexDirection: 'row', height: 56}}>
      <Spacer width={25} flex={0} style={{backgroundColor: '#4da3d4', flexBasis: 'auto'}}>
        <Text>25</Text>
      </Spacer>
      <Spacer width={75} flex={0} style={{backgroundColor: '#f5db6d', flexBasis: 'auto'}}>
        <Text>75</Text>
      </Spacer>
      <Spacer width={200} flex={0} style={{backgroundColor: '#da7777', flexBasis: 'auto'}}>
        <Text>200</Text>
      </Spacer>
    </View>
    <View
      style={{display: 'flex', flexDirection: 'column', width: 300, marginTop: 20,
      }}>
      <Spacer height={25} flex={0} style={{backgroundColor: '#4da3d4', flexBasis: 'auto'}}>
        <Text>25</Text>
      </Spacer>
      <Spacer height={50} flex={0} style={{backgroundColor: '#f5db6d', flexBasis: 'auto'}}>
        <Text>50</Text>
      </Spacer>
      <Spacer height={75} flex={0} style={{backgroundColor: '#da7777', flexBasis: 'auto'}}>
        <Text>75</Text>
      </Spacer>
    </View>
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
