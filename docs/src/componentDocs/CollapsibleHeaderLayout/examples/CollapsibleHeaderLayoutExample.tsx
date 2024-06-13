import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {Header} from '@brightlayer-ui/react-native-components';

export const CollapsibleHeaderLayoutExample = (): JSX.Element => (
  <ExampleShowcase>
    <Header
      title={'Valley Forge'}
      subtitle={'The Last Stand'}
      icon={{name: 'menu'}}
      onIconPress={() => {}}
      actionItems={[
        {
          icon: {name: 'more-vert'},
          onPress: () => {},
        },
      ]}
      variant="static"
      // backgroundImage={require('../images/farm.jpg')}
      searchableConfig={{onChangeText: () => {}}}
      expandable={true}
      collapsedHeight={56}
    />
  </ExampleShowcase>
);
