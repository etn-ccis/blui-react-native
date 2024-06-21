import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { SpacerWithFlexExample } from './SpacerWithFlexExample';

const codeSnippet = `
<View style={{display: 'flex', flexDirection: 'row', height: 56, width: 300}}>
    <Spacer flex={1} style={{backgroundColor: colors.blue[300]}}>
        <Text>1</Text>
    </Spacer>
    <Spacer flex={2} style={{backgroundColor: colors.yellow[300]}}>
        <Text>2</Text>
    </Spacer>
    <Spacer flex={3} style={{backgroundColor: colors.red[300]}}>
        <Text>3</Text>
    </Spacer>
</View>
`;

export const SpacerWithFlex = (): JSX.Element => (
    <Box>
        <SpacerWithFlexExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/Spacer/examples/SpacerWithFlexExample.tsx"
        />
    </Box>
);
