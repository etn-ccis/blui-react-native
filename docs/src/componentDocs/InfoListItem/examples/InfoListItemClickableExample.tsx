import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { InfoListItem } from '@brightlayer-ui/react-native-components';
import { DEMO_WIDTH } from '../../../utils';

export const InfoListItemClickableExample = (): JSX.Element => (
    <ExampleShowcase>
        <InfoListItem
            dense
            title={'Status'}
            divider="partial"
            statusColor="#2ca618"
            subtitleSeparator={'/'}
            icon={{ family: 'brightlayer-ui', name: 'device_activating' }}
            iconAlign={'center'}
            onPress={() => {}}
            chevron
            style={{ width: DEMO_WIDTH, margin: 'auto' }}
        />
        <InfoListItem
            title={'Output Voltage'}
            divider={'partial'}
            avatar
            statusColor="#ca3c3d"
            subtitle={['Phase A', 'Phase B', 'Phase C']}
            icon={{ name: 'check-circle' }}
            chevron
            onPress={() => {}}
            style={{ width: DEMO_WIDTH, margin: 'auto' }}
        />
        <InfoListItem
            dense
            title={'Output Current'}
            icon={{ name: 'battery-charging-full' }}
            chevron
            onPress={() => {}}
            style={{ width: DEMO_WIDTH, margin: 'auto' }}
        />
    </ExampleShowcase>
);
