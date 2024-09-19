import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ScoreCardWithActionsExample } from './ScoreCardWithActionsExample';

const codeSnippet = `<ScoreCard
    headerTitle="Header Actions"
    actionItems={[
        { icon: { name: 'star-outline' } },
        { icon: { name: 'settings' } },
        { icon: { name: 'more-vert' } },
    ]}
    actionRow={
        <View>
            <InfoListItem dense chevron title="View Location" hidePadding />
        </View>
    }
    badge={
        <Hero
            icon={{ family: 'brightlayer-ui', name: 'grade_a' }}
            label="Grade"
            iconSize={72}
            iconBackgroundColor={theme.colors.surface}
            ChannelValueProps={{ value: '98', units: '/100', unitSpace: 'hide' }}
        />
    }
    badgeOffset={-54}
    >
    <View>
        <Text>Body Content</Text>
    </View>
</ScoreCard>`;

export const ScoreCardWithActions = (): JSX.Element => (
    <Box>
        <ScoreCardWithActionsExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3-7" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ScoreCard/examples/ScoreCardWithActionsExample.tsx"
        />
    </Box>
);
