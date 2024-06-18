import React from 'react';
import Box from '@mui/material/Box';
import {CodeBlock, CodeBlockActionButtonRow} from '../../../shared';
import {ListItemTagUsingInfoListItemExample} from './ListItemTagUsingInfoListItemExample';

const codeSnippet = `<InfoListItem
    icon={{name: 'battery-charging-full'}}
    iconColor="#528AAE"
    title="Info List Item"
    subtitle="with a ListItemTag component to the right"
    rightComponent={
      <View style={{flexDirection: 'row'}}>
          <ListItemTag
              label="Build Passing"
              backgroundColor={Colors.green[300]}
              fontColor={Colors.black[900]}
          />
          <View style={{width: 15}} />
          <ListItemTag
              label="5 Bugs"
              backgroundColor={Colors.red[300]}
              fontColor={Colors.black[900]}
          />
      </View>
    }
/>`;

export const ListItemTagUsingInfoListItem = (): JSX.Element => (
  <Box>
    <ListItemTagUsingInfoListItemExample />
    <CodeBlock code={codeSnippet} language="jsx" dataLine="8-18" />
    <CodeBlockActionButtonRow
      copyText={codeSnippet}
      url="componentDocs/ListItemTag/examples/ListItemTagUsingInfoListItemExample.tsx"
    />
  </Box>
);
