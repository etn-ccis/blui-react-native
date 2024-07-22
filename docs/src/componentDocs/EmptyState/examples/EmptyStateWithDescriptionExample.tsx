import React from 'react';
import { EmptyState } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { DEMO_WIDTH } from '../../../utils';

export const EmptyStateWithDescriptionExample = (): JSX.Element => (
    <ExampleShowcase>
        <EmptyState
            icon={{ name: 'location-off' }}
            title="Location Services Disabled"
            description="Enable Location Services via Settings to receive GPS information"
            style={{ width: DEMO_WIDTH, margin: 'auto' }}
        />
    </ExampleShowcase>
);
