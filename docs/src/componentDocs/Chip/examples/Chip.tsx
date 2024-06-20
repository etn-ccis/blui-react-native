import React from 'react';
import {Box} from '@mui/material';
import {ChipExample} from './ChipExample';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';

const codeSnippet = `
<Chip>Outlined Chip</Chip>
<Chip mode="elevated">Elevated Chip</Chip>
`;

export const Chip = (): JSX.Element => (
  <Box>
    <ChipExample />
    <CodeBlock code={codeSnippet} language={'jsx'} />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/Chip/examples/Chip.tsx"
    />
  </Box>
);
