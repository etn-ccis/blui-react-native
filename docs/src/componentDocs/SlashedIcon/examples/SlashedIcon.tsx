import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { SlashedIconExample } from './SlashedIconExample';

const codeSnippet = `import { SlashedBLUIIcon } from '@brightlayer-ui/react-native-vector-icons';

<SlashedBLUIIcon
    name="air_filter"
    size={48}
    color="#007bc1"
    slashColor="#007bc1"
/>
<SlashedBLUIIcon
    name="water"
    size={48}
    color="#007bc1"
    slashColor="#ca3c3d"
/>
<SlashedBLUIIcon
    name="ups"
    size={48}
    color="#007bc1"
    slashColor="#007bc1"
    slashGapVisible={false}
/>`;

export const SlashedIcon = (): React.JSX.Element => (
    <Box>
        <SlashedIconExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/SlashedIcon/examples/SlashedIconExample.tsx"
        />
    </Box>
);
