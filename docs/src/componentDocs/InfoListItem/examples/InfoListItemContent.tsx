import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { InfoListItemContentExample } from './InfoListItemContentExample';

const codeSnippet = `<InfoListItem
    title="Battery Fully Charged"
    subtitle="Your device is ready to use"
    icon={{ name: 'battery-charging-full' }}
    iconColor="#2ca618"
    leftComponent={
        <View>
            <Text style={{ fontWeight: 'bold' }}>8:32 AM</Text>
            <Text>11/21/21</Text>
        </View>
    }
    rightComponent={<ChannelValue value={'15'} units={'A'} />}
/>`;

export const InfoListItemContent = (): JSX.Element => (
    <Box>
        <InfoListItemContentExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="6-11, 12" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/InfoListItem/examples/InfoListItemContentExample.tsx"
        />
    </Box>
);
