import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  HorizontalStackedBar,
  HorizontalStackedBarItem,
} from '@brightlayer-ui/react-native-components';
import { Card, Divider, Text, useTheme } from 'react-native-paper';
import Icons from '@brightlayer-ui/react-native-vector-icons';

// --- Data sets ---

const variantData: HorizontalStackedBarItem[] = [
  { label: 'Failed', count: 8, variant: 'failed' },
  { label: 'Success', count: 48, variant: 'success' },
  { label: 'Pending', count: 18, variant: 'pending' },
  { label: 'Info', count: 12, variant: 'info' },
  { label: 'Canceled', count: 6, variant: 'canceled' },
];

const customColorData: HorizontalStackedBarItem[] = [
  { label: 'Category A', count: 30, backgroundColor: '#6200EE' },
  { label: 'Category B', count: 50, backgroundColor: '#03DAC5' },
  { label: 'Category C', count: 20, backgroundColor: '#FF5722' },
];

const singleItemData: HorizontalStackedBarItem[] = [
  { label: 'Only Item', count: 100, variant: 'success' },
];

const dominantItemData: HorizontalStackedBarItem[] = [
  { label: 'Dominant', count: 500, variant: 'success' },
  { label: 'Tiny A', count: 1, variant: 'failed' },
  { label: 'Tiny B', count: 1, variant: 'pending' },
];

const equalDistributionData: HorizontalStackedBarItem[] = [
  { label: 'Equal A', count: 25, backgroundColor: '#1976D2' },
  { label: 'Equal B', count: 25, backgroundColor: '#388E3C' },
  { label: 'Equal C', count: 25, backgroundColor: '#F57C00' },
  { label: 'Equal D', count: 25, backgroundColor: '#7B1FA2' },
];

const withZerosData: HorizontalStackedBarItem[] = [
  { label: 'Active', count: 40, variant: 'success' },
  { label: 'Empty', count: 0, variant: 'failed' },
  { label: 'Partial', count: 20, variant: 'info' },
  { label: 'None', count: 0, variant: 'pending' },
  { label: 'Some', count: 10, variant: 'canceled' },
];

const customLegendIconsData: HorizontalStackedBarItem[] = [
  {
    label: 'Failed',
    count: 8,
    variant: 'failed',
    icon: { family: 'material-community', name: 'fire-alert' },
  },
  {
    label: 'Success',
    count: 48,
    variant: 'success',
    icon: { family: 'material-community', name: 'shield-check' },
  },
  {
    label: 'Pending',
    count: 0,
    variant: 'pending',
    icon: { family: 'material-community', name: 'clock-outline' },
  },
  {
    label: 'Info',
    count: 12,
    variant: 'info',
    icon: ({ size, color }) => (
      <Icons name="switch" size={size} color={color} />
    ),
  },
  {
    label: 'Canceled',
    count: 6,
    variant: 'canceled',
    icon: ({ size, color }) => (
      <Icons name="cloud_off_filled" size={size} color={color} />
    ),
  },
];

const hiddenLegendIconsData: HorizontalStackedBarItem[] = [
  { label: 'Failed', count: 8, variant: 'failed', icon: null },
  { label: 'Success', count: 48, variant: 'success', icon: null },
  { label: 'Pending', count: 18, variant: 'pending', icon: null },
  { label: 'Info', count: 12, variant: 'info', icon: null },
  { label: 'Canceled', count: 6, variant: 'canceled', icon: null },
];

const twoItemData: HorizontalStackedBarItem[] = [
  { label: 'Pass', count: 85, variant: 'success' },
  { label: 'Fail', count: 15, variant: 'failed' },
];

const allZeroData: HorizontalStackedBarItem[] = [
  { label: 'Failed', count: 0, variant: 'failed' },
  { label: 'Success', count: 0, variant: 'success' },
  { label: 'Pending', count: 0, variant: 'pending' },
  { label: 'Info', count: 0, variant: 'info' },
  { label: 'Canceled', count: 0, variant: 'canceled' },
];

// --- Section component ---

const Section: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  const theme = useTheme();
  return (
    <View style={{ marginVertical: 8 }}>
      <Text
        variant="labelMedium"
        style={{ color: theme.colors.onSurfaceVariant, marginBottom: 8 }}
      >
        {title}
      </Text>
      {children}
    </View>
  );
};

export const HorizontalStackedBarExample: React.FC = () => {
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = useState<
    HorizontalStackedBarItem | undefined
  >(undefined);

  const styles = StyleSheet.create({
    card: {
      padding: 0,
      margin: 10,
    },
    selectedText: {
      marginTop: 16,
      color: theme.colors.onSurface,
    },
  });

  return (
    <Card style={styles.card}>
      <Card.Title title="Horizontal Stacked Bar" />
      <Card.Content>
        {/* 1. With Variants + Selection */}
        <Section title="With Variants (selectable)">
          <HorizontalStackedBar
            data={variantData}
            selectedStatus={selectedItem?.label ?? ''}
            onChange={(item): void => setSelectedItem(item)}
          />
          <Text style={styles.selectedText}>
            {selectedItem
              ? `Selected: ${selectedItem.label} (${selectedItem.count})`
              : 'Tap a bar segment to select'}
          </Text>
        </Section>

        <Divider />

        {/* 2. Custom Legend Icons */}
        <Section title="Custom Legend Icons (icon only)">
          <HorizontalStackedBar data={customLegendIconsData} />
        </Section>

        <Divider />

        {/* 3. Hide Legend Icons */}
        <Section title="Hide Legend Icons (icon: null)">
          <HorizontalStackedBar data={hiddenLegendIconsData} />
        </Section>

        <Divider />

        {/* 4. Custom Colors */}
        <Section title="Custom Colors">
          <HorizontalStackedBar data={customColorData} />
        </Section>

        <Divider />

        {/* 5. Two Items (Pass/Fail) */}
        <Section title="Two Items (Pass / Fail)">
          <HorizontalStackedBar data={twoItemData} />
        </Section>

        <Divider />

        {/* 6. Equal Distribution */}
        <Section title="Equal Distribution">
          <HorizontalStackedBar data={equalDistributionData} />
        </Section>

        <Divider />

        {/* 7. Single Item */}
        <Section title="Single Item">
          <HorizontalStackedBar data={singleItemData} />
        </Section>

        <Divider />

        {/* 8. Dominant Item (min-width test) */}
        <Section title="Dominant Item (min-width for small segments)">
          <HorizontalStackedBar data={dominantItemData} />
        </Section>

        <Divider />

        {/* 9. With Zero Counts (hidden segments) */}
        <Section title="With Zero Counts (0-count segments hidden)">
          <HorizontalStackedBar data={withZerosData} />
        </Section>

        <Divider />

        {/* 10. Uncontrolled (no selectedStatus prop) */}
        <Section title="Uncontrolled Selection">
          <HorizontalStackedBar data={variantData} onChange={(): void => {}} />
        </Section>

        <Divider />

        {/* 11. Custom Bar Style Override */}
        <Section title="Custom Style Override (rounded bars)">
          <HorizontalStackedBar
            data={twoItemData}
            styles={{ bar: { borderRadius: 4 } }}
          />
        </Section>

        <Divider />

        {/* 12. All Zero Counts (disabled bar) */}
        <Section title="All Zero Counts (disabled)">
          <HorizontalStackedBar data={allZeroData} />
        </Section>
      </Card.Content>
    </Card>
  );
};
