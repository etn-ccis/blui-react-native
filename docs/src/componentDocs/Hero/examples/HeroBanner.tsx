import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {HeroBannerExample} from './HeroBannerExample';

const codeSnippet = `<HeroBanner>
    <Hero
        icon={<BLUIIcon name="grade_a" size={40} />}
        label="Efficiency"
        ChannelValueProps={{ value: '98', units: '%' }}
    />
</HeroBanner>`;

export const HeroBanner = (): JSX.Element => (
  <Box>
    <HeroBannerExample />
    <CodeBlock code={codeSnippet} language="jsx" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/Hero/examples/HeroBannerExample.tsx"
    />
  </Box>
);
