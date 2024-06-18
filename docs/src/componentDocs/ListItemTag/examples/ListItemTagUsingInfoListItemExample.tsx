import React from 'react';
import {
  ListItemTag,
  InfoListItem,
} from '@brightlayer-ui/react-native-components';
import * as Colors from '@brightlayer-ui/colors';
import {ExampleShowcase} from '../../../shared';
import {View} from 'react-native';

export const ListItemTagUsingInfoListItemExample = (): JSX.Element => (
  <ExampleShowcase sx={{display: 'flex', justifyContent: 'center'}}>
    <InfoListItem
      icon={{name: 'battery-charging-full'}}
      iconColor="#528AAE"
      title="Info List Item"
      subtitle="with a ListItemTag component to the right"
      rightComponent={
        <View style={{flexDirection: 'row'}}>
          <ListItemTag
            label="Build Passing"
            backgroundColor={Colors.green[300]}
            fontColor={Colors.black[900]}
          />
          <View style={{width: 15}} />
          <ListItemTag
            label="5 Bugs"
            backgroundColor={Colors.red[300]}
            fontColor={Colors.black[900]}
          />
        </View>
      }
    />
  </ExampleShowcase>
);
