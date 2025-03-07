/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, useTheme} from 'react-native-paper';
import {useExtendedTheme} from '@brightlayer-ui/react-native-themes';
import {Text, View} from 'react-native';
import {
  ChannelValue,
  Chip,
  InfoListItem,
  ListItemTag,
} from '@brightlayer-ui/react-native-components';
import ProgessIconExample from './src/ProgessIconExample';
import 'react-native-svg';

function App(): React.JSX.Element {
  const theme = useTheme();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>React Native Monorepo with Yarn workspaces</Text>
      <Button
        mode="contained"
        style={{
          backgroundColor: theme.colors.primary,
        }}>
        <Text style={{color: 'white'}}>Brightlayer UI</Text>
      </Button>
      <Chip>Outlined Chip</Chip>
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
      {/* Font size : 10px */}
      <ListItemTag label={'IN PROGRESS'} />
      {/* Font size : 14px */}
      <ListItemTag
        label={'Foo Bar'}
        backgroundColor={'red'}
        fontColor={'black'}
        style={{marginTop: 12}}
        fontSize={14}
      />
      {/* Advance example*/}
      <InfoListItem
        title={'Hillman Field East'}
        subtitle={['PXM 2000', 'DT 1150', '113.4 GPM']}
        subtitleSeparator={'/'}
        backgroundColor={theme.colors.secondary}
      />
      <ProgessIconExample/>
    </View>
  );
}

export default App;
