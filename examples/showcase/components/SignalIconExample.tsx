import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Signal } from '@brightlayer-ui/react-native-progress-icons';
import { Card, Text } from 'react-native-paper';
import * as BLUIColors from '@brightlayer-ui/colors';

const styles = StyleSheet.create({
  card: {
    padding: 0,
    margin: 10,
    marginBottom: 5,
  },
  sectionTitle: {
    marginTop: 16,
    marginBottom: 8,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 12,
    flexWrap: 'wrap',
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
});

const SignalIconExample: React.FC = () => (
  <Card style={styles.card}>
    <Card.Title
      title="Signal Progress Icons"
      titleStyle={styles.sectionTitle}
    />
    <Card.Content>
      {/* Percentage Examples */}
      <Text variant="labelLarge" style={styles.sectionTitle}>
        Filled - Different Signal Strengths (0-100%)
      </Text>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Signal
            percent={0}
            size={48}
            color={BLUIColors.primary[50]}
            showPercentLabel={true}
            labelPosition="bottom"
          />
        </View>
        <View style={styles.iconContainer}>
          <Signal
            percent={30}
            size={48}
            color={BLUIColors.primary[50]}
            showPercentLabel={true}
            labelPosition="bottom"
          />
        </View>
        <View style={styles.iconContainer}>
          <Signal
            percent={60}
            size={48}
            color={BLUIColors.primary[50]}
            showPercentLabel={true}
            labelPosition="bottom"
          />
        </View>
        <View style={styles.iconContainer}>
          <Signal
            percent={80}
            size={48}
            color={BLUIColors.primary[50]}
            showPercentLabel={true}
            labelPosition="bottom"
          />
        </View>
        <View style={styles.iconContainer}>
          <Signal
            percent={100}
            size={48}
            color={BLUIColors.primary[50]}
            showPercentLabel={true}
            labelPosition="bottom"
          />
        </View>
      </View>
      {/* Outlined Examples */}
      <Text variant="labelLarge" style={styles.sectionTitle}>
        Outlined - Different Signal Strengths
      </Text>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Signal
            percent={0}
            size={48}
            color={BLUIColors.primary[50]}
            outlined={true}
            showPercentLabel={true}
            labelPosition="bottom"
          />
        </View>
        <View style={styles.iconContainer}>
          <Signal
            percent={30}
            size={48}
            color={BLUIColors.primary[50]}
            outlined={true}
            showPercentLabel={true}
            labelPosition="bottom"
          />
        </View>
        <View style={styles.iconContainer}>
          <Signal
            percent={60}
            size={48}
            color={BLUIColors.primary[50]}
            outlined={true}
            showPercentLabel={true}
            labelPosition="bottom"
          />
        </View>
        <View style={styles.iconContainer}>
          <Signal
            percent={80}
            size={48}
            color={BLUIColors.primary[50]}
            outlined={true}
            showPercentLabel={true}
            labelPosition="bottom"
          />
        </View>
        <View style={styles.iconContainer}>
          <Signal
            percent={100}
            size={48}
            color={BLUIColors.primary[50]}
            outlined={true}
            showPercentLabel={true}
            labelPosition="bottom"
          />
        </View>
      </View>
      {/* Color Variations */}
      <Text variant="labelLarge" style={styles.sectionTitle}>
        Color Variations (50%)
      </Text>
      <View style={styles.row}>
        <Signal percent={50} size={48} color={BLUIColors.primary[50]} />
        <Signal percent={50} size={48} color={BLUIColors.error[50]} />
        <Signal percent={50} size={48} color={BLUIColors.purple[50]} />
        <Signal percent={50} size={48} color={BLUIColors.success[50]} />
      </View>
      {/* Size Variations */}
      <Text variant="labelLarge" style={styles.sectionTitle}>
        Size Variations (75%)
      </Text>
      <View style={styles.row}>
        <Signal percent={75} size={24} color={BLUIColors.primary[50]} />
        <Signal percent={75} size={36} color={BLUIColors.primary[50]} />
        <Signal percent={75} size={48} color={BLUIColors.primary[50]} />
        <Signal percent={75} size={64} color={BLUIColors.primary[50]} />
      </View>{' '}
    </Card.Content>{' '}
  </Card>
);

export default SignalIconExample;
