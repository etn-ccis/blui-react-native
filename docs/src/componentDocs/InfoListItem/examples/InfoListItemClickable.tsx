import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { InfoListItemClickableExample } from './InfoListItemClickableExample';

const codeSnippet = `<InfoListItem
    dense
    title={'Status'}
    divider="partial"
    statusColor="#2ca618"
    subtitleSeparator={'/'}
    icon={{ family: 'brightlayer-ui', name: 'device_activating' }}
    iconAlign={'center'}
    chevron
    onPress={() => { }}
/>
<InfoListItem
    title={'Output Voltage'}
    divider={'partial'}
    avatar
    statusColor="#ca3c3d"
    subtitle={['Phase A', 'Phase B', 'Phase C']}
    icon={{ name: 'check-circle' }}
    chevron
    onPress={() => { }}
/>
<InfoListItem
    dense
    title={'Output Current'}
    icon={{ name: 'battery-charging-full' }}
    chevron
    onPress={() => { }}
/>`;

export const InfoListItemClickable = (): JSX.Element => (
    <Box>
        <InfoListItemClickableExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="10, 20, 27" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/InfoListItem/examples/InfoListItemClickableExample.tsx"
        />
    </Box>
);
