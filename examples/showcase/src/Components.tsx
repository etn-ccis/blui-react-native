import React from 'react';
import {View} from 'react-native';
import {
  ChannelValue,
  Chip,
  InfoListItem,
  ListItemTag,
  Grade,
} from '@brightlayer-ui/react-native-components';
import {Avatar, Text} from 'react-native-paper';

const Components = () => {
  return (
    <View style={{width: '100%', padding: 16, alignItems: 'center'}}>
      <Text variant="titleMedium" style={{color: 'black'}}>
        React Native Components
      </Text>
      <View style={{alignItems: 'flex-start'}}>
        <Chip>Outlined Chip</Chip>
        <Chip
          icon={{name: 'info'}}
          style={{
            marginTop: 10,
          }}>
          Outlined Chip With Icon
        </Chip>
        <Chip
          avatar={<Avatar.Icon size={40} icon="account-circle" />}
          style={{
            marginTop: 10,
          }}>
          Outlined Chip With Avatar
        </Chip>
        <Chip
          closeIcon="delete"
          style={{
            marginTop: 10,
          }}
          onClose={() => {}}>
          Outlined Chip With Close Icon
        </Chip>
      </View>
      <InfoListItem
        title={'Title'}
        subtitle={'Subtitle'}
        info={'Info'}
        hidePadding
      />
      <ChannelValue
        value="5"
        units="tb"
        fontSize={18}
        icon={{family: 'brightlayer-ui', name: 'device'}}
        iconColor="green"
      />
      {/* Font size : 14px */}
      <ChannelValue
        value="2.5:1"
        icon={{name: 'settings'}}
        fontSize={14}
        style={{marginTop: 12}}
      />
      {/* Font size : 16px */}
      <ChannelValue
        value="Concord"
        icon={'🍇'}
        fontSize={16}
        style={{marginTop: 12}}
      />
      {/* Font size : 10px */}
      <ListItemTag label={'IN PROGRESS'} />
      {/* Font size : 14px */}
      <ListItemTag
        label={'Foo Bar'}
        backgroundColor={'lightgreen'}
        fontColor={'black'}
        style={{marginTop: 12}}
        fontSize={14}
      />
      <Grade.APlus style={{marginBottom: 10}} />
      <Grade.A style={{marginBottom: 10}} />
    </View>
  );
};

export default Components;
