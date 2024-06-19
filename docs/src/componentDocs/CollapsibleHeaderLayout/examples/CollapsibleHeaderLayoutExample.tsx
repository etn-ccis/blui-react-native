import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {Header} from '@brightlayer-ui/react-native-components';
import image from '../images/farm.jpg';

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
      backgroundImage={image}
      searchableConfig={{onChangeText: () => {}}}
      expandable={true}
      collapsedHeight={56}
      styles={{backgroundImage: {width: '100%'}}}
    />
  </ExampleShowcase>
);
