import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {InfoListItem} from '@brightlayer-ui/react-native-components';

export const InfoListItemExample = (): JSX.Element => (
  <ExampleShowcase>
    <InfoListItem
    title="Info List Item Title"
    subtitle="Info List Item Subtitle"
    icon={{ name: 'alarm' }}
/>
  </ExampleShowcase>
);
