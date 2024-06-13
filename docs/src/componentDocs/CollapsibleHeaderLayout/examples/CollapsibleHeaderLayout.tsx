import React from 'react';
import {Box} from '@mui/material';
import {CollapsibleHeaderLayoutExample} from './CollapsibleHeaderLayoutExample';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';

const codeSnippet = `<Header
    title={'Valley Forge'}
    subtitle={'The Last Stand'}
    icon={{ name: 'menu' }}
    onIconPress={() => {}}
    actionItems={[
        {
            icon: { name: 'more-vert' },
            onPress: () => {},
        },
    ]}
    variant="static"
    backgroundImage={require('../assets/images/farm.jpg')}
    searchableConfig={{ onChangeText: () => {} }}
    expandable={true}
    collapsedHeight={56}
/>`;

export const CollapsibleHeaderLayout = (): JSX.Element => {
  return (
    <Box>
      <CollapsibleHeaderLayoutExample />
      <CodeBlock code={codeSnippet} language={'jsx'} />
      <CodeBlockActionButtonRow
        copyText={codeSnippet}
        url="componentDocs/CollapsibleHeaderLayout/examples/CollapsibleHeaderLayoutExamples.tsx"
      />
    </Box>
  );
};
