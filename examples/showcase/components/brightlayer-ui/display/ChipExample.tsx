import React, { JSX } from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card, Divider } from 'react-native-paper';
import { Chip } from '@brightlayer-ui/react-native-components';
import * as BLUIColors from '@brightlayer-ui/colors';

const styles = StyleSheet.create({
  card: {
    padding: 0,
    margin: 10,
    marginBottom: 5,
  },
});

export const ChipExample: React.FC = (): JSX.Element => (
  <>
    <Card style={styles.card}>
      <Card.Title title="Chip" />
      <Card.Content style={{ alignItems: 'flex-start' }}>
        <Chip style={{ marginTop: 10 }}>Outlined Chip</Chip>
        <Chip
          icon={{ name: 'info' }}
          style={{
            marginTop: 10,
          }}
        >
          Outlined Chip With Icon
        </Chip>
        <Chip
          avatar={<Avatar.Icon size={40} icon="account-circle" />}
          style={{
            marginTop: 10,
          }}
        >
          Outlined Chip With Avatar
        </Chip>
        <Chip
          closeIcon="delete"
          style={{
            marginTop: 10,
          }}
          onClose={() => {}}
        >
          Outlined Chip With Close Icon
        </Chip>
        <Chip selected style={{ marginTop: 10 }}>
          Selected Outlined Chip
        </Chip>
        <Chip
          selected
          showSelectedOverlay
          style={{
            marginTop: 10,
          }}
        >
          Selected Outlined Chip With Overlay
        </Chip>
        <Chip
          selected
          showSelectedCheck
          style={{
            marginTop: 10,
          }}
        >
          Selected Outlined Chip With Check
        </Chip>
        <Chip
          rippleColor={BLUIColors.primary[50]}
          onPress={() => console.log('ripple effect')}
          style={{
            marginTop: 10,
          }}
        >
          Outlined Chip With Ripple Color
        </Chip>
        <Chip disabled style={{ marginTop: 10 }}>
          Disabled Outlined Chip
        </Chip>
        <Chip
          onPress={() => console.log('outlined chip pressed')}
          style={{ marginTop: 10 }}
        >
          Outlined Chip On Press
        </Chip>
        <Chip
          onPress={() => console.log('outlined chip pressed')}
          onLongPress={() => console.log('outlined chip long pressed')}
          style={{ marginTop: 10 }}
        >
          Outlined Chip On Long Press
        </Chip>
        <Chip
          onPressIn={() => console.log('outlined chip on press in')}
          style={{ marginTop: 10 }}
        >
          Outlined Chip On Press In
        </Chip>
        <Chip
          onPressOut={() => console.log('outlined chip on press out')}
          style={{ marginTop: 10 }}
        >
          Outlined Chip On Press Out
        </Chip>
        <Chip
          onClose={(): void => {
            console.log('outlined chip on close');
          }}
          style={{ marginTop: 10 }}
        >
          Outlined Chip On Close
        </Chip>
        <Chip
          delayLongPress={3000}
          onPress={() => console.log('outlined chip pressed')}
          onLongPress={() =>
            console.log('outlined chip long pressed for 3 seconds')
          }
          style={{ marginTop: 10 }}
        >
          Outlined Chip Delay Long Press
        </Chip>
        <Chip
          compact
          style={{
            marginTop: 10,
          }}
        >
          Compact Outlined Chip
        </Chip>
        <Chip
          textStyle={{ color: BLUIColors.neutralVariant[50] }}
          style={{
            marginTop: 10,
          }}
        >
          Outlined Chip With Text Style
        </Chip>
        <Chip
          style={{
            marginTop: 10,
            backgroundColor: BLUIColors.neutralVariant[50],
          }}
        >
          Outlined Chip With Style
        </Chip>
        <Chip
          ellipsizeMode="middle"
          style={{
            marginTop: 10,
          }}
        >
          Outlined Chip With Ellipsize Mode Outlined Chip With Ellipsize Mode
        </Chip>
        <Chip
          icon={{ name: 'info' }}
          iconColor={BLUIColors.error[50]}
          style={{
            marginTop: 10,
          }}
        >
          Outlined Chip With Icon Color
        </Chip>
        <Chip
          chipColor={BLUIColors.primary[50]}
          style={{
            marginTop: 10,
          }}
        >
          Outlined Chip With Chip Color
        </Chip>
        <Chip
          borderColor={BLUIColors.primary[50]}
          style={{
            marginTop: 10,
          }}
        >
          Outlined Chip With Border Color
        </Chip>
        <Divider style={{ marginVertical: 10 }} />
        <Chip mode="elevated">Elevated Chip</Chip>
        <Chip
          mode="elevated"
          icon={{ name: 'info' }}
          style={{
            marginTop: 10,
          }}
        >
          Elevated Chip With Icon
        </Chip>
        <Chip
          mode="elevated"
          avatar={<Avatar.Icon size={40} icon="account-circle" />}
          style={{
            marginTop: 10,
          }}
        >
          Elevated Chip With Avatar
        </Chip>
        <Chip
          mode="elevated"
          closeIcon="delete"
          style={{
            marginTop: 10,
          }}
          onClose={() => {}}
        >
          Elevated Chip With Close Icon
        </Chip>
        <Chip
          selected
          mode="elevated"
          style={{
            marginTop: 10,
          }}
        >
          Selected Elevated Chip
        </Chip>
        <Chip
          mode="elevated"
          selected
          showSelectedOverlay
          style={{
            marginTop: 10,
          }}
        >
          Selected Elevated Chip With Overlay
        </Chip>
        <Chip
          mode="elevated"
          selected
          showSelectedCheck
          style={{
            marginTop: 10,
          }}
        >
          Selected Elevated Chip With Check
        </Chip>
        <Chip
          mode="elevated"
          rippleColor={BLUIColors.primary[50]}
          onPress={() => console.log('ripple effect')}
          style={{
            marginTop: 10,
          }}
        >
          Elevated Chip With Ripple Color
        </Chip>
        <Chip mode="elevated" disabled style={{ marginTop: 10 }}>
          Disabled Elevated Chip
        </Chip>
        <Chip
          mode="elevated"
          onPress={() => console.log('elevated chip pressed')}
          style={{ marginTop: 10 }}
        >
          Elevated Chip On Press
        </Chip>
        <Chip
          mode="elevated"
          onPress={() => console.log('elevated chip pressed')}
          onLongPress={() => console.log('elevated chip long pressed')}
          style={{ marginTop: 10 }}
        >
          Elevated Chip On Long Press
        </Chip>
        <Chip
          mode="elevated"
          onPressIn={() => console.log('elevated chip on press in')}
          style={{ marginTop: 10 }}
        >
          Elevated Chip On Press In
        </Chip>
        <Chip
          mode="elevated"
          onPressOut={() => console.log('elevated chip on press out')}
          style={{ marginTop: 10 }}
        >
          Elevated Chip On Press Out
        </Chip>
        <Chip
          mode="elevated"
          onClose={(): void => {
            console.log('elevated chip on close');
          }}
          style={{ marginTop: 10 }}
        >
          Elevated Chip On Close
        </Chip>
        <Chip
          mode="elevated"
          delayLongPress={3000}
          onPress={() => console.log('elevated chip pressed')}
          onLongPress={() =>
            console.log('elevated chip long pressed for 3 seconds')
          }
          style={{ marginTop: 10 }}
        >
          Elevated Chip Delay Long Press
        </Chip>
        <Chip
          mode="elevated"
          compact
          style={{
            marginTop: 10,
          }}
        >
          Compact Elevated Chip
        </Chip>
        <Chip
          mode="elevated"
          textStyle={{ color: BLUIColors.neutralVariant[50] }}
          style={{
            marginTop: 10,
          }}
        >
          Elevated Chip With Text Style
        </Chip>
        <Chip
          mode="elevated"
          style={{
            marginTop: 10,
            backgroundColor: BLUIColors.neutralVariant[50],
          }}
        >
          Elevated Chip With Style
        </Chip>
        <Chip
          mode="elevated"
          ellipsizeMode="middle"
          style={{
            marginTop: 10,
          }}
        >
          Elevated Chip With Ellipsize Mode Elevated Chip With Ellipsize Mode
        </Chip>
        <Chip
          mode="elevated"
          icon={{ name: 'info' }}
          iconColor={BLUIColors.error[50]}
          style={{
            marginTop: 10,
          }}
        >
          Elevated Chip With Icon Color
        </Chip>
        <Chip
          mode="elevated"
          chipColor={BLUIColors.primary[50]}
          style={{
            marginTop: 10,
          }}
        >
          Elevated Chip With Chip Color
        </Chip>
        <Chip
          mode="elevated"
          borderColor={BLUIColors.primary[50]}
          style={{
            marginTop: 10,
          }}
        >
          Elevated Chip With Border Color
        </Chip>
      </Card.Content>
    </Card>
  </>
);
