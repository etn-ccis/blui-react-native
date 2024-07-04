import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { InfoListItem } from '@brightlayer-ui/react-native-components';
import { DEMO_WIDTH } from '../../../utils';

export const InfoListItemMultipleExample = (): JSX.Element => (
    <ExampleShowcase>
        <InfoListItem
            title="Dense Info List Item 1"
            dense
            divider="full"
            style={{ width: DEMO_WIDTH, margin: 'auto' }}
        />
        <InfoListItem
            title="Dense Info List Item 2"
            dense
            divider="full"
            style={{ width: DEMO_WIDTH, margin: 'auto' }}
        />
        <InfoListItem
            title="Dense Info List Item 3"
            dense
            divider="full"
            style={{ width: DEMO_WIDTH, margin: 'auto' }}
        />
    </ExampleShowcase>
);
