import React, { JSX } from 'react';
import { View } from 'react-native';
import { BottomNavigation, Card, Text } from 'react-native-paper';
import { MAX_FONT_SCALE } from '../../../constants';

const MusicRoute = (): JSX.Element => <Text>Music</Text>;
const AlbumsRoute = (): JSX.Element => <Text>Albums</Text>;
const RecentsRoute = (): JSX.Element => <Text>Recents</Text>;
const cardStyle = { padding: 0, margin: 10, marginBottom: 5 };

export const BottomNavigationExample: React.FC = (): JSX.Element => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Music', focusedIcon: 'music', badge: true },
    { key: 'albums', title: 'Albums', focusedIcon: 'album', badge: '1' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <Card style={cardStyle}>
      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 24,
          marginVertical: 24,
        }}
      >
        <Text>BottomNavigation</Text>
        <View style={{ marginTop: 24 }}>
          <BottomNavigation
            style={{ marginBottom: 16 }}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            labelMaxFontSizeMultiplier={MAX_FONT_SCALE}
          />
          <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
          />
        </View>
      </View>
    </Card>
  );
};
