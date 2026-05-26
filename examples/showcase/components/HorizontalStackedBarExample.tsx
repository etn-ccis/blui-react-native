import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  HorizontalStackedBar,
  HorizontalStackedBarItem,
} from '@brightlayer-ui/react-native-components';
import { Card, Divider, Text, useTheme } from 'react-native-paper';

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

        {/* 2. Custom Colors */}
        <Section title="Custom Colors">
          <HorizontalStackedBar data={customColorData} />
        </Section>

        <Divider />

        {/* 3. Two Items (Pass/Fail) */}
        <Section title="Two Items (Pass / Fail)">
          <HorizontalStackedBar data={twoItemData} />
        </Section>

        <Divider />

        {/* 4. Equal Distribution */}
        <Section title="Equal Distribution">
          <HorizontalStackedBar data={equalDistributionData} />
        </Section>

        <Divider />

        {/* 5. Single Item */}
        <Section title="Single Item">
          <HorizontalStackedBar data={singleItemData} />
        </Section>

        <Divider />

        {/* 6. Dominant Item (min-width test) */}
        <Section title="Dominant Item (min-width for small segments)">
          <HorizontalStackedBar data={dominantItemData} />
        </Section>

        <Divider />

        {/* 7. With Zero Counts (hidden segments) */}
        <Section title="With Zero Counts (0-count segments hidden)">
          <HorizontalStackedBar data={withZerosData} />
        </Section>

        <Divider />

        {/* 8. Uncontrolled (no selectedStatus prop) */}
        <Section title="Uncontrolled Selection">
          <HorizontalStackedBar data={variantData} onChange={(): void => {}} />
        </Section>

        <Divider />

        {/* 9. Custom Bar Style Override */}
        <Section title="Custom Style Override (rounded bars)">
          <HorizontalStackedBar
            data={twoItemData}
            styles={{ bar: { borderRadius: 4 } }}
          />
        </Section>

        <Divider />

        {/* 10. All Zero Counts (disabled bar) */}
        <Section title="All Zero Counts (disabled)">
          <HorizontalStackedBar data={allZeroData} />
        </Section>
      </Card.Content>
    </Card>
  );
};
