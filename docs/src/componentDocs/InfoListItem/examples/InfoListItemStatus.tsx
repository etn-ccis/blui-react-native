import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {InfoListItemStatusExample} from './InfoListItemStatusExample';

const codeSnippet = `<InfoListItem
    title="Info List Item"
    subtitle="with a status indicator"
    icon={{ name: 'settings' }}
    avatar
    statusColor="#2ca618"
/>`;

export const InfoListItemStatus = (): JSX.Element => (
  <Box>
    <InfoListItemStatusExample />
    <CodeBlock code={codeSnippet} language="jsx" dataLine="6" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/Header/examples/InfoListItemStatusExample.tsx"
    />
  </Box>
);