import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {HeroWithChannelValueExample} from './HeroWithChannelValueExample';

const codeSnippet = `<Hero label={'Duration'} icon={{ name: 'schedule' } />}>
    <ChannelValue
        fontSize={20}
        value={1}
        units={'h'}
        unitSpace={'hide'}
    />
    <ChannelValue
        fontSize={20}
        value={27}
        units={'m'}
        unitSpace={'hide'}
    />
</Hero>`;

export const HeroWithChannelValue = (): JSX.Element => (
  <Box>
    <HeroWithChannelValueExample />
    <CodeBlock code={codeSnippet} language="jsx" dataLine="2-13" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/Hero/examples/HeroWithChannelValueExample.tsx"
    />
  </Box>
);
