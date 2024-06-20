import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {EmptyStateWithActionsExample} from './EmptyStateWithActionsExample';

const codeSnippet = `<EmptyState
    icon={{name: 'devices'}}
    title={'No Devices'}
    description={'Check your network connection or add a new device'}
    actions={
        <Button icon={'plus'} mode="outlined">
            Add Device
        </Button>
    }
/>`;

export const EmptyStateWithActions = (): JSX.Element => (
  <Box>
    <EmptyStateWithActionsExample />
    <CodeBlock code={codeSnippet} language="jsx" dataLine={'5, 6-9'} />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/EmptyState/examples/EmptyStateWithActionsExample.tsx"
    />
  </Box>
);
