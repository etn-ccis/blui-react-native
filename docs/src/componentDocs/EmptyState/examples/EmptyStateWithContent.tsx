import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {EmptyStateWithContentExample} from './EmptyStateWithContentExample';

const codeSnippet = `<EmptyState
    icon={{name: 'report'}}
    title={<Text style={{color: Colors.blue[500]}}>Request Permission</Text>}
    description={
    <Text>
        You must{' '}
    <Text style={{textDecorationLine: 'underline', color: Colors.blue[500]}}>
        contact your system admin
    </Text>{' '}
        to view this content.
    </Text>
}
/>`;

export const EmptyStateWithContent = (): JSX.Element => (
  <Box>
    <EmptyStateWithContentExample />
    <CodeBlock code={codeSnippet} language="jsx" dataLine="3-4" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/EmptyState/examples/EmptyStateWithContentExample.tsx"
    />
  </Box>
);
