import React, {JSX, useCallback} from 'react';
import type {DrawerNavigationProp} from '@react-navigation/drawer';

import {View, FlatList, StyleSheet, ViewStyle} from 'react-native';
import {
  Header,
  InfoListItem,
  EmptyState,
  ListItemTag,
  InfoListItemProps,
} from '@brightlayer-ui/react-native-components';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import {useExtendedTheme} from '@brightlayer-ui/react-native-themes';

export type ActionListProps = {
  hardcodedData?: InfoListItemProps[];
  navigation: DrawerNavigationProp<Record<string, undefined>>;
};
const useStyles = (
  theme: any,
): StyleSheet.NamedStyles<{container: ViewStyle}> =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.surface,
    },
  });

const createInfoListItemConfig = (
  index: number,
  randomStatus: string,
  theme: any,
  tag?: boolean,
): InfoListItemProps => {
  switch (randomStatus) {
    case 'alarm':
      return {
        title: `Item ${index}`,
        subtitle: `Status: ${randomStatus}`,
        icon: (
          <MatIcon
            name="notifications"
            size={24}
            color={tag ? theme.colors.onPrimary : theme.colors.error}
          />
        ),
        statusColor: tag ? theme.colors.error : 'transparent',
        rightComponent: tag ? (
          <ListItemTag label={'NEW'} backgroundColor={theme.colors.error} />
        ) : undefined,
      };
    case 'warning':
      return {
        title: `Item ${index}`,
        subtitle: `Status: ${randomStatus}`,
        icon: (
          <MatIcon
            name="warning"
            size={24}
            color={theme.colors.orangeNonText}
          />
        ),
      };
    case 'normal':
    default:
      return {
        title: `Item ${index}`,
        subtitle: `Status: ${randomStatus}`,
        icon: <MatIcon name="home" size={24} color={theme.colors.outline} />,
      };
  }
};

const createRandomItem = (theme: any): InfoListItemProps => {
  const int = parseInt(`${Math.random() * 100}`, 10);
  switch (Math.floor(Math.random() * 5)) {
    case 0:
      return createInfoListItemConfig(int, 'alarm', theme);
    case 1:
      return createInfoListItemConfig(int, 'alarm', theme, true);
    case 2:
      return createInfoListItemConfig(int, 'warning', theme);
    default:
      return createInfoListItemConfig(int, 'normal', theme);
  }
};

// const list: InfoListItemProps[] = [];

// for (let i = 0; i < 20; i++) {
//   list.push(createRandomItem());
// }

export const StatusListScreen: React.FC<ActionListProps> = props => {
  const {hardcodedData, navigation} = props;
  const theme = useExtendedTheme();
  const styles = useStyles(theme);
  const data =
    hardcodedData ?? Array.from({length: 20}, () => createRandomItem(theme));

  const toggleMenu = useCallback((): void => {
    navigation.openDrawer();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header
        testID="header"
        title={'Status List'}
        icon={<MatIcon name="menu" color={theme.colors.onPrimary} size={24} />}
        onIconPress={(): void => {
          toggleMenu();
        }}
      />
      {data.length ? (
        <FlatList
          data={data}
          testID={'list'}
          keyExtractor={(_item, index): string => `${index}`}
          renderItem={({item}): JSX.Element => (
            <InfoListItem
              hidePadding
              iconColor={theme.colors.onPrimary}
              statusColor={'transparent'}
              avatar
              divider={'partial'}
              {...item}
            />
          )}
        />
      ) : (
        <EmptyState title={'No Items found'} />
      )}
    </View>
  );
};
