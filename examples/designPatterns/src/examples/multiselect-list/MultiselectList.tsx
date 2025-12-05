import React, { useState, useCallback, JSX } from 'react';
import {
  Header,
  InfoListItem,
  EmptyState,
} from '@brightlayer-ui/react-native-components';
import { View, StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ListItem, generateData, createRandomItem } from './utilities';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SnackBar } from './components/SnackBar';
import { IconButton, Button } from 'react-native-paper';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

const useStyles = (theme: any): any =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.onPrimary,
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 8,
      backgroundColor: theme.colors.onPrimary,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.5,
      shadowRadius: 10,
      elevation: 10,
    },
    footerContent: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    footerTitleContainer: {
      padding: 8,
    },
    footerTitle: {
      fontSize: 16,
    },
    footerIcons: {
      flex: 1,
      flexDirection: 'row-reverse',
    },
  });

export type MultiselectListProps = {
  hardcodedData?: ListItem[];
};

export const MultiselectListScreen: React.FC<MultiselectListProps> = props => {
  const { hardcodedData } = props;
  const navigation =
    useNavigation<DrawerNavigationProp<Record<string, undefined>>>();
  const theme = useExtendedTheme();
  const styles = useStyles(theme);

  const [list, setList] = useState(
    hardcodedData ? hardcodedData : generateData(),
  );
  const [selectedItems, setSelectedItems]: any = useState([]);
  const insets = useSafeAreaInsets();

  const toggleMenu = (): void => {
    navigation.openDrawer();
  };

  const onSelect = useCallback(
    (item: ListItem): void => {
      const index = selectedItems.indexOf(item);
      if (index === -1) {
        setSelectedItems([...selectedItems, item]);
      } else {
        setSelectedItems(
          selectedItems.filter((_: any, i: number) => i !== index),
        );
      }
    },
    [selectedItems],
  );

  const isSelected = useCallback(
    (item: ListItem): boolean => selectedItems.indexOf(item) !== -1,
    [selectedItems],
  );

  const onDelete = useCallback((): void => {
    const updatedList = [...list];
    selectedItems.forEach((item: ListItem) => {
      const index = updatedList.indexOf(item);
      updatedList.splice(index, 1);
    });
    setList(updatedList);
    setSelectedItems([]);
  }, [selectedItems, list]);

  const onCancel = useCallback((): void => {
    setSelectedItems([]);
  }, [setSelectedItems]);

  const addItem = useCallback((): void => {
    setList([...list, createRandomItem()]);
  }, [list, setList]);

  return (
    <View style={styles.container}>
      <Header
        title={'Multiselect List'}
        icon={<MatIcon name="menu" color={theme.colors.onPrimary} size={24} />}
        onIconPress={(): void => {
          toggleMenu();
        }}
        actionItems={[
          {
            icon: (
              <MatIcon name="add" color={theme.colors.onPrimary} size={24} />
            ),
            onPress: (): void => {
              addItem();
            },
          },
        ]}
      />
      <SafeAreaView style={styles.container}>
        {list.length ? (
          <ScrollView>
            {list.map((item: ListItem, index: number) => (
              <InfoListItem
                key={index}
                title={item.name}
                subtitle={item.details}
                onPress={(): void => onSelect(item)}
                backgroundColor={theme.colors.onPrimary}
                rightComponent={<></>}
                icon={
                  isSelected(item) ? (
                    <MatIcon
                      name="check-box"
                      size={24}
                      color={theme.colors.primary}
                    />
                  ) : (
                    <MatIcon
                      name="check-box-outline-blank"
                      size={24}
                      color={theme.colors.primary}
                    />
                  )
                }
              />
            ))}
          </ScrollView>
        ) : (
          <EmptyState
            title={'No Data Found'}
            icon={
              <MatIcon name="error" size={100} color={theme.colors.primary} />
            }
            actions={
              <Button
                icon={(): JSX.Element => (
                  <MatIcon
                    name="add"
                    color={theme.colors.onPrimary}
                    size={24}
                  />
                )}
                onPress={addItem}
                mode="contained"
              >
                Add Item
              </Button>
            }
          />
        )}
      </SafeAreaView>
      <SnackBar style={styles.footer} show={selectedItems.length}>
        <View style={[styles.footerContent, { paddingBottom: insets.bottom }]}>
          <View style={styles.footerTitleContainer}>
            <Text style={styles.footerTitle}>
              {' '}
              {selectedItems.length} selected items{' '}
            </Text>
          </View>
          <View style={styles.footerIcons}>
            <IconButton
              icon={(): JSX.Element => (
                <MatIcon name="cancel" color={theme.colors.primary} size={24} />
              )}
              onPress={onCancel}
            />
            <IconButton
              icon={(): JSX.Element => (
                <MatIcon name="delete" color={theme.colors.primary} size={24} />
              )}
              onPress={onDelete}
            />
          </View>
        </View>
      </SnackBar>
    </View>
  );
};
