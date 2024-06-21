import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ScoreCardAdjustBadgeExample } from './ScoreCardAdjustBadgeExample';

const codeSnippet = `<ScoreCard
    headerTitle={'Substation 3'}
    headerSubtitle={'High Humidity Alarm'}
    headerInfo={'4 Devices'}
    badge={
        <Hero
            icon={{ family: 'brightlayer-ui', name: 'grade_a' }}
            label={'Grade'}
            iconSize={72}
            iconBackgroundColor={theme.colors.surface}
            ChannelValueProps={{ value: '98', units: '/100', unitSpace: 'hide' }}
        />
    }
    badgeOffset={-58}
    >
    <View>
        <Text>Body Content</Text>
    </View>
</ScoreCard>`;

export const ScoreCardAdjustBadge = (): JSX.Element => (
    <Box>
        <ScoreCardAdjustBadgeExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="14" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/Header/examples/ScoreCardAdjustBadgeExample.tsx"
        />
    </Box>
);
