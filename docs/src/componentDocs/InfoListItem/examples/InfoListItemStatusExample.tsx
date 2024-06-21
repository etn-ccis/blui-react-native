import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { InfoListItem } from '@brightlayer-ui/react-native-components';

export const InfoListItemStatusExample = (): JSX.Element => (
    <ExampleShowcase>
        <InfoListItem
            title="Info List Item"
            subtitle="with a status indicator"
            icon={{ name: 'settings' }}
            avatar
            statusColor="#2ca618"
        />
    </ExampleShowcase>
);
