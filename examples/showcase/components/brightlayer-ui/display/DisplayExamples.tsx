import React, { JSX } from 'react';
import { StyleSheet } from 'react-native';
import { Card, IconButton, Text } from 'react-native-paper';
import {
  ChannelValue,
  EmptyState,
  Hero,
  HeroBanner,
  ListItemTag,
  Overline,
} from '@brightlayer-ui/react-native-components';
import BLUIIcon from '@brightlayer-ui/react-native-vector-icons';

const PublicDomainAlice = require('../../../assets/images/public-domain-alice.png');

const styles = StyleSheet.create({
  card: {
    padding: 0,
    margin: 10,
    marginBottom: 5,
  },
});

export const DisplayExamples: React.FC = (): JSX.Element => (
  <>
    <Card style={styles.card}>
      <Card.Title title="Overline" />
      <Card.Content>
        <Overline>Overline</Overline>
      </Card.Content>
    </Card>
    <Card style={styles.card}>
      <Card.Title title="Icon (Icon Button)" />
      <Card.Content>
        <IconButton
          icon={iconProps => <BLUIIcon name="broccoli" {...iconProps} />}
          onPress={() => {}}
        />
        <IconButton icon="chart-pie" onPress={() => {}} />
      </Card.Content>
    </Card>
    <Card style={styles.card}>
      <Card.Title title="ChannelValue" />
      <Card.Content>
        {/* FontSize : 12px */}
        <ChannelValue
          value="2"
          units="tb"
          fontSize={12}
          icon={{ family: 'brightlayer-ui', name: 'device' }}
          iconColor="green"
        />
        {/* Font size : 14px */}
        <ChannelValue
          value="2.5:1"
          icon={{ name: 'settings' }}
          fontSize={14}
          style={{ marginTop: 12 }}
        />
        {/* Font size : 16px */}
        <ChannelValue
          value="Concord"
          icon={'🍇'}
          fontSize={16}
          style={{ marginTop: 12 }}
        />
        {/* Font size : 22px */}
        <ChannelValue
          value="100"
          units="%"
          fontSize={22}
          icon={{ family: 'brightlayer-ui', name: 'battery' }}
          style={{ marginTop: 12 }}
        />
        {/* Font size : 32px */}
        <ChannelValue
          value="50.2.1"
          fontSize={32}
          icon={{ name: 'settings' }}
          iconColor="red"
          style={{ marginTop: 12 }}
        />
        {/* Font size : 32px */}
        <ChannelValue
          value="1"
          icon={'A'}
          iconColor="blue"
          fontSize={32}
          style={{ marginTop: 12 }}
        />
        <ChannelValue
          value="1"
          icon={PublicDomainAlice}
          style={{ marginTop: 12 }}
        />
      </Card.Content>
    </Card>
    <Card style={styles.card}>
      <Card.Title title="ListItemTag" />
      <Card.Content style={{ alignItems: 'center' }}>
        {/* Font size : 10px */}
        <ListItemTag label={'IN PROGRESS'} />
        {/* Font size : 14px */}
        <ListItemTag
          label={'Foo Bar'}
          backgroundColor={'red'}
          fontColor={'black'}
          style={{ marginTop: 12 }}
          fontSize={14}
        />
        {/* Font size : 22px */}
        <Text style={{ marginTop: 12 }}>Font size : 22px</Text>
        <ListItemTag
          label={'Foo Bar'}
          backgroundColor={'red'}
          fontColor={'black'}
          fontSize={22}
        />
      </Card.Content>
    </Card>
    <Card style={styles.card}>
      <Card.Title title="Hero" />
      <Card.Content style={{ alignItems: 'center' }}>
        <Hero
          label={'Charged'}
          icon={{ family: 'brightlayer-ui', name: 'battery' }}
          ChannelValueProps={{ value: 100, units: '%' }}
        />
        <Hero
          label={'Chart'}
          icon={{ family: 'material-community', name: 'chart-pie' }}
        />
        <Hero
          label={'Setting'}
          icon={{ name: 'settings' }}
          iconColor="red"
          ChannelValueProps={{ value: '50.2.1', units: '' }}
        />
      </Card.Content>
    </Card>
    <Card style={styles.card}>
      <Card.Title title="Hero Banner" />
      <Card.Content style={{ alignItems: 'center' }}>
        <HeroBanner divider>
          <Hero
            label={'Charged'}
            icon={{ family: 'brightlayer-ui', name: 'battery' }}
            ChannelValueProps={{ value: 100, units: '%' }}
          />
          <Hero
            label={'Charged'}
            icon={{ family: 'brightlayer-ui', name: 'ups_outline' }}
            ChannelValueProps={{ value: 100, units: '%' }}
          />
          <Hero
            label={'Setting'}
            icon={{ name: 'settings' }}
            iconColor="red"
            ChannelValueProps={{ value: '50.2.1', units: '' }}
          />
        </HeroBanner>
      </Card.Content>
    </Card>
    <Card style={styles.card}>
      <Card.Title title="Empty State" />
      <Card.Content style={{ alignItems: 'center' }}>
        <EmptyState
          title={'Nothing Found'}
          description={'Not a single thing'}
          icon={{ family: 'brightlayer-ui', name: 'battery' }}
        />
      </Card.Content>
    </Card>
  </>
);
