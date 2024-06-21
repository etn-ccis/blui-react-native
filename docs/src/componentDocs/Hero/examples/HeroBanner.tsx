import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { HeroBannerExample } from './HeroBannerExample';

const codeSnippet = `<HeroBanner>
    <Hero
        icon={{family: 'brightlayer-ui', name: 'grade_a'}}
        label="Efficiency"
        ChannelValueProps={{ value: '98', units: '%' }}
    />
    <Hero
        icon={{name: 'schedule'}}
        label="Schedule"
        ChannelValueProps={{value: '1', units: 'h'}}
    />
    <Hero
        icon={{name: 'schedule'}}
        label="Schedule"
        ChannelValueProps={{value: '27', units: 'm'}}
    />
</HeroBanner>`;

export const HeroBanner = (): JSX.Element => (
    <Box>
        <HeroBannerExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow copyText={codeSnippet} url="componentDocs/Hero/examples/HeroBannerExample.tsx" />
    </Box>
);
