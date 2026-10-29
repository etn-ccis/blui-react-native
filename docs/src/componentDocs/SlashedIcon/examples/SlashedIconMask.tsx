import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { SlashedIconMaskExample } from './SlashedIconMaskExample';

const codeSnippet = `import { SlashedBLUISvgMaskIcon } from '@brightlayer-ui/react-native-vector-icons';
import { Path } from 'react-native-svg';

<SlashedBLUISvgMaskIcon size={48} slashColor="#ca3c3d">
    <Path d="M4 4H20V20H4Z" fill="#007bc1" />
</SlashedBLUISvgMaskIcon>`;

export const SlashedIconMask = (): React.JSX.Element => (
    <Box>
        <SlashedIconMaskExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/SlashedIcon/examples/SlashedIconMaskExample.tsx"
        />
    </Box>
);
