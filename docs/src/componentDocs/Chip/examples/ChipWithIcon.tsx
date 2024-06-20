import React from 'react';
import {Box} from '@mui/material';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {ChipWithIconExample} from './ChipWithIconExample';

const codeSnippet = `
<Chip icon={{name: 'info'}} style={{marginRight: 10}}>Chip With Icon</Chip>
<Chip mode="elevated" avatar={<Avatar.Icon size={40} icon="account-circle" />}>Elevated Chip With Avatar</Chip>
`;

export const ChipWithIcon = (): JSX.Element => (
  <Box>
    <ChipWithIconExample />
    <CodeBlock code={codeSnippet} language={'jsx'} />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/Chip/examples/ChipWithIcon.tsx"
    />
  </Box>
);
