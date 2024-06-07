import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {ChannelValueWithPrefixExample} from './ChannelValueWithPrefixExample';

const codeSnippet = `<ChannelValue value="12" units="$" prefix icon={{family:'material', name:'check-circle'}} />`;

export const ChannelValueWithPrefix = (): JSX.Element => (
  <Box>
    <ChannelValueWithPrefixExample />
    <CodeBlock code={codeSnippet} language="jsx" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/ChannelValue/examples/ChannelValueWithPrefixExample.tsx"
    />
  </Box>
);
