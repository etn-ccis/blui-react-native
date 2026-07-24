import React, { JSX } from 'react';
import { View } from 'react-native';
import { Card, List, Text } from 'react-native-paper';
import * as BLUIColors from '@brightlayer-ui/colors';

const cardStyle = { padding: 0, margin: 10, marginBottom: 5 };

export const ListExample: React.FC = (): JSX.Element => {
  const [accordionOneExpanded, setAccordionOneExpanded] = React.useState(false);
  const [accordionTwoExpanded, setAccordionTwoExpanded] = React.useState(false);

  return (
    <Card style={cardStyle}>
      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 24,
          marginVertical: 24,
        }}
      >
        <Text>List</Text>
        <View style={{ marginTop: 24 }}>
          <View>
            <List.Item
              title="Item 1"
              description="Item 1 Description"
              left={(): JSX.Element => (
                <List.Icon
                  icon="folder"
                  color={BLUIColors.neutralVariant[30]}
                />
              )}
            />
            <List.Item
              title="Item 2"
              description="Item 2 Description"
              left={(): JSX.Element => (
                <List.Icon
                  icon="folder"
                  color={BLUIColors.neutralVariant[30]}
                />
              )}
            />
            <List.Item
              title="Item 3"
              description="Item 3 Description"
              left={(): JSX.Element => (
                <List.Icon
                  icon="folder"
                  color={BLUIColors.neutralVariant[30]}
                />
              )}
            />
          </View>
          <View>
            <List.Section title="Accordions">
              <List.Accordion
                title="Accordion 1"
                left={(): JSX.Element => (
                  <List.Icon
                    icon="folder"
                    color={BLUIColors.neutralVariant[30]}
                  />
                )}
                expanded={accordionOneExpanded}
                onPress={(): void =>
                  setAccordionOneExpanded(!accordionOneExpanded)
                }
              >
                <List.Item title="Item 1" description="Item 1 Description" />
                <List.Item title="Item 2" description="Item 2 Description" />
              </List.Accordion>
              <List.Accordion
                title="Accordion 2"
                left={(): JSX.Element => (
                  <List.Icon
                    icon="folder"
                    color={BLUIColors.neutralVariant[30]}
                  />
                )}
                expanded={accordionTwoExpanded}
                onPress={(): void =>
                  setAccordionTwoExpanded(!accordionTwoExpanded)
                }
              >
                <List.Item title="Item 1" description="Item 1 Description" />
                <List.Item title="Item 2" description="Item 2 Description" />
              </List.Accordion>
            </List.Section>
          </View>
        </View>
      </View>
    </Card>
  );
};
