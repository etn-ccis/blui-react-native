import React from 'react';
import {Box} from '@mui/material';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {ChipSelectExample} from './ChipSelectExample';

const codeSnippet = `<Chip>Unselected Chip</Chip>
<Chip selected>Selected Chip</Chip>`;

export const ChipSelect = (): JSX.Element => (
  <Box>
    <ChipSelectExample />
    <CodeBlock code={codeSnippet} language={'jsx'} />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/Chip/examples/ChipSelect.tsx"
    />
  </Box>
);
