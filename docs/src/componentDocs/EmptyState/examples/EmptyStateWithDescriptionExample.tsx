import React from 'react';
import {EmptyState} from '@brightlayer-ui/react-native-components';
import {ExampleShowcase} from '../../../shared';

export const EmptyStateWithDescriptionExample = (): JSX.Element => (
  <ExampleShowcase>
    <EmptyState
      icon={{name: 'location-off'}}
      title="Location Services Disabled"
      description="Enable Location Services via Settings to receive GPS information"
    />
  </ExampleShowcase>
);
