import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, ViewStyle} from 'react-native';
import {Header, InfoListItem} from '@brightlayer-ui/react-native-components';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import alarms, {formatDate} from './data/alarmData';
import {BottomSheetScreen} from './components/BottomSheet';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {ThemeProp} from 'react-native-paper/lib/typescript/types';
import {useExtendedTheme} from '@brightlayer-ui/react-native-themes';

const useStyles = (
  theme: ThemeProp,
): StyleSheet.NamedStyles<{
  container: ViewStyle;
}> =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors?.surface,
    },
  });

export const BottomSheetAlarmsScreen: React.FC = () => {
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const navigation =
    useNavigation<DrawerNavigationProp<Record<string, undefined>>>();
  const theme = useExtendedTheme();
  const defaultStyles = useStyles(theme);

  const toggleMenu = (): void => {
    navigation.openDrawer();
  };

  return (
    <View style={defaultStyles.container}>
      <Header
        title={'Bottom Sheet'}
        icon={<MatIcon name="menu" color={theme.colors.onPrimary} size={24} />}
        onIconPress={(): void => {
          toggleMenu();
        }}
        actionItems={[
          {
            icon: (
              <MatIcon
                name="more-vert"
                color={theme.colors.onPrimary}
                size={24}
              />
            ),
            onPress: (): void => {
              setShowBottomSheet(true);
            },
          },
        ]}
      />
      <ScrollView>
        {alarms.map((item, index) => (
          <InfoListItem
            key={index}
            title={`${item.active ? 'ACTIVE: ' : ''}${item.details}`}
            subtitle={formatDate(item.date)}
            icon={
              item.active ? (
                <MatIcon
                  name="notifications-active"
                  size={24}
                  color={theme.colors.onPrimary}
                />
              ) : (
                <MatIcon
                  name="notifications"
                  size={24}
                  color={theme.colors.primary}
                />
              )
            }
            iconColor={
              item.active ? theme.colors.background : theme.colors.onBackground
            }
            fontColor={
              item.active ? theme.colors.error : theme.colors.onBackground
            }
            statusColor={
              item.active ? theme.colors.error : theme.colors.background
            }
            avatar={item.active}
          />
        ))}
      </ScrollView>
      <BottomSheetScreen
        show={showBottomSheet}
        dismissBottomSheet={(): void => setShowBottomSheet(false)}>
        <InfoListItem
          title={'Acknowledge All'}
          icon={<MatIcon name="done" size={24} color={theme.colors.primary} />}
          onPress={(): void => setShowBottomSheet(false)}
          testID={'menu-item-button-0'}
          dense
        />
        <InfoListItem
          title={'Export'}
          icon={
            <MatIcon name="get-app" size={24} color={theme.colors.primary} />
          }
          onPress={(): void => setShowBottomSheet(false)}
          testID={'menu-item-button-1'}
          dense
        />
        <InfoListItem
          title={'Cancel'}
          icon={<MatIcon name="clear" size={24} color={theme.colors.primary} />}
          onPress={(): void => setShowBottomSheet(false)}
          testID={'cancel-button'}
          dense
        />
      </BottomSheetScreen>
    </View>
  );
};
