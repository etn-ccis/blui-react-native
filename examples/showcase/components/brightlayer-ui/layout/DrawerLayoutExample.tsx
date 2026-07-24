import React, { JSX, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerNavGroup,
  DrawerNavItem,
  Grade,
  Header,
  Spacer,
} from '@brightlayer-ui/react-native-components';
import { UserMenuExamples } from '../display/UserMenuExamples';
import { ScoreCardExample } from '../display/ScoreCardExample';
import { MobileStepperExample } from './MobileStepperExample';

const styles = StyleSheet.create({
  card: {
    padding: 0,
    margin: 10,
    marginBottom: 5,
  },
});

export const DrawerLayoutExample: React.FC = (): JSX.Element => {
  const navItems = useMemo(
    () => [
      { title: 'Sensors', itemID: 'id1' },
      { title: 'Devices', itemID: 'id2' },
      { title: 'Communication', itemID: 'id3' },
    ],
    [],
  );

  return (
    <>
      <Card style={styles.card}>
        <Card.Title title="Grades" />
        <Card.Content>
          <Grade.APlus style={{ marginBottom: 10 }} />
          <Grade.A style={{ marginBottom: 10 }} />
          <Grade.AMinus style={{ marginBottom: 10 }} />
          <Grade.BPlus style={{ marginBottom: 10 }} />
          <Grade.B style={{ marginBottom: 10 }} />
          <Grade.BMinus style={{ marginBottom: 10 }} />
          <Grade.CPlus style={{ marginBottom: 10 }} />
          <Grade.C style={{ marginBottom: 10 }} />
          <Grade.CMinus style={{ marginBottom: 10 }} />
          <Grade.DPlus style={{ marginBottom: 10 }} />
          <Grade.D style={{ marginBottom: 10 }} />
          <Grade.DMinus style={{ marginBottom: 10 }} />
          <Grade.F style={{ marginBottom: 10 }} />
          <Grade label="Cg" size={40} />
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Drawer" />
        <Card.Content>
          <Drawer activeItem="item1" style={{ margin: 10 }}>
            <DrawerHeader
              title={'Drawer Title'}
              subtitle={'Drawer Subtitle'}
              icon={{ name: 'menu', direction: 'auto' }}
            />
            <DrawerBody>
              <DrawerNavGroup title={'Navigation Group'}>
                <DrawerNavItem
                  itemID={'item1'}
                  title={'Account'}
                  icon={{
                    family: 'material-community',
                    name: 'account',
                    direction: 'auto',
                  }}
                  InfoListItemProps={{ iconAlign: 'center' }}
                />
                <DrawerNavItem
                  itemID={'item2'}
                  title={'Notification'}
                  icon={{
                    family: 'material-community',
                    name: 'bell',
                    direction: 'auto',
                  }}
                  activeItemBackgroundShape={'round'}
                  InfoListItemProps={{ iconAlign: 'center' }}
                >
                  <DrawerNavItem itemID={'item3'} title={'item3'}>
                    <DrawerNavItem itemID={'item31'} title={'Item31'} />
                    <DrawerNavItem itemID={'item32'} title={'Item32'} />
                  </DrawerNavItem>
                </DrawerNavItem>
                <DrawerNavItem
                  itemID={'item4'}
                  title={'Localization'}
                  icon={{
                    family: 'material-community',
                    name: 'circle',
                    direction: 'auto',
                  }}
                  activeItemBackgroundShape={'round'}
                  InfoListItemProps={{ iconAlign: 'center' }}
                />
              </DrawerNavGroup>
              <DrawerNavGroup title={'Navigation Group'} items={navItems} />
            </DrawerBody>
          </Drawer>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Header" />
      </Card>
      <Header
        title={'Valley Forge'}
        subtitle={'The Last Stand'}
        icon={{ name: 'menu' }}
        onIconPress={() => {}}
        actionItems={[
          {
            icon: { name: 'more-vert' },
            onPress: (): void => {},
          },
        ]}
        variant="static"
        backgroundImage={require('../../../assets/images/farm.jpg')}
        searchableConfig={{ onChangeText: () => {} }}
        expandable={true}
        collapsedHeight={56}
      />

      <Card style={styles.card}>
        <Card.Title title="Spacer" />
        <View style={{ marginLeft: 20, marginRight: 20, marginBottom: 20 }}>
          <Text>Horizontal</Text>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <View
              style={{ height: 50, width: 70, backgroundColor: '#4682B4' }}
            />
            <Spacer flex={0} height={10} width={10} />
            <View
              style={{ height: 50, width: 155, backgroundColor: '#FFD700' }}
            />
            <Spacer flex={0} height={10} width={10} />
            <View
              style={{ height: 50, width: 70, backgroundColor: '#FF6347' }}
            />
          </View>
        </View>
        <View style={{ marginLeft: 20, marginRight: 20, marginBottom: 20 }}>
          <Text>Vertical</Text>
          <View style={{ display: 'flex' }}>
            <View
              style={{ height: 50, width: 315, backgroundColor: '#4682B4' }}
            />
            <Spacer flex={0} height={10} width={10} />
            <View
              style={{ height: 50, width: 315, backgroundColor: '#FFD700' }}
            />
            <Spacer flex={0} height={10} width={10} />
            <View
              style={{ height: 50, width: 315, backgroundColor: '#FF6347' }}
            />
          </View>
        </View>
      </Card>

      <UserMenuExamples />

      <View style={{ justifyContent: 'center', margin: 10 }}>
        <ScoreCardExample />
      </View>
      <MobileStepperExample />
    </>
  );
};
