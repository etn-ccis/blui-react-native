import React, { JSX } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import {
  ChannelValue,
  InfoListItem,
} from '@brightlayer-ui/react-native-components';
import * as BLUIColors from '@brightlayer-ui/colors';

const styles = StyleSheet.create({
  card: {
    padding: 0,
    margin: 10,
    marginBottom: 5,
  },
});

export const InfoListItemExample: React.FC = (): JSX.Element => (
  <Card style={styles.card}>
    <Card.Title title="InfoListItem" />
    <Card.Content style={{ alignItems: 'center' }}>
      {/* With Info prop */}
      <InfoListItem
        title={'Title'}
        subtitle={'Subtitle'}
        info={'Info'}
        hidePadding
      />
      {/* Indicating Status with Avatar */}
      <InfoListItem
        title={'Title'}
        icon={{ family: 'brightlayer-ui', name: 'leaf' }}
        subtitle={'Subtitle'}
        statusColor={BLUIColors.error[50]}
        backgroundColor={BLUIColors.primary[50]}
        avatar
        divider={'partial'}
        chevron
        style={{ marginBottom: 20 }}
      />
      {/* with Icon */}
      <InfoListItem
        title="Info List Item Title"
        subtitle="Info List Item Subtitle"
        icon={{ name: 'settings' }}
        avatar
        divider={'full'}
      />
      {/* Advance example*/}
      <InfoListItem
        title={'Hillman Field East'}
        subtitle={['PXM 2000', 'DT 1150', '113.4 GPM']}
        subtitleSeparator={'/'}
      />
      {/* Adding Additional Content */}
      <InfoListItem
        title="Battery Fully Charged"
        subtitle="Your device is ready to use"
        icon={{ name: 'settings' }}
        iconAlign="center"
        leftComponent={
          <View>
            <Text variant="titleSmall">{'8:32 AM'}</Text>
            <Text variant="bodySmall">{'11/21/21'}</Text>
          </View>
        }
        rightComponent={<ChannelValue value={'15'} units={'A'} />}
        chevron
      />
    </Card.Content>
  </Card>
);
