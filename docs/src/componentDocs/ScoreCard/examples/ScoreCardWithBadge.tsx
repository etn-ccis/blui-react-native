import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ScoreCardWithBadgeExample } from './ScoreCardWithBadgeExample';

const codeSnippet = `<ScoreCard
    headerTitle="Station 3"
    headerSubtitle="High Humidity Alarm"
    headerInfo="4 Devices"
    badge={
        <HeroBanner
            <Hero
                icon={{ family: 'brightlayer-ui', name: 'temp' }}
                label="Temperature"
                ChannelValueProps={{ value: 98, units: '°F' }}
                style={{ overflow: 'visible' }}
            />
            <Hero
                icon={{ family: 'brightlayer-ui', name: 'moisture' }}
                label="Humidity"
                ChannelValueProps={{ value: 54, units: '%' }}
            />
        </HeroBanner>
    }
    >
    <View>
        <Text>Body Content</Text>
    </View>
</ScoreCard>`;

export const ScoreCardWithBadge = (): JSX.Element => (
    <Box>
        <ScoreCardWithBadgeExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="5-19" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/Header/examples/ScoreCardWithBadgeExample.tsx"
        />
    </Box>
);