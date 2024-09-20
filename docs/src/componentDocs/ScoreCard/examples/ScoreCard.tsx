import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ScoreCardExample } from './ScoreCardExample';

const codeSnippet = `<ScoreCard
    headerTitle="Station 3"
    headerSubtitle="High Humidity Alarm"
    headerInfo="4 Devices"
    >
    <View>
        <Text>Body Content</Text>
    </View>
</ScoreCard>`;

export const ScoreCard = (): JSX.Element => (
    <Box>
        <ScoreCardExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow copyText={codeSnippet} url="componentDocs/ScoreCard/examples/ScoreCardExample.tsx" />
    </Box>
);
