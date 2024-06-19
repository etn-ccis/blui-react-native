import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {CollapsibleHeaderLayout} from '@brightlayer-ui/react-native-components';
import image from '../images/farm.jpg';

export const CollapsibleHeaderLayoutExample = (): JSX.Element => (
  <ExampleShowcase>
    <CollapsibleHeaderLayout
      HeaderProps={{
        title: 'Valley Forge',
        subtitle: 'The Last Stand',
        icon: {name: 'menu'},
        onIconPress: () => {},
        actionItems: [
          {
            icon: {name: 'more-vert'},
            onPress: () => {},
          },
        ],
        variant: 'static',
        backgroundImage: {uri: image},
        searchableConfig: {onChangeText: () => {}},
        expandable: true,
        collapsedHeight: 56,
        expandedHeight: 200,
        styles: {backgroundImage: {width: '100%'}},
      }}
    />
  </ExampleShowcase>
);
