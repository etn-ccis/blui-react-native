import React, { JSX } from 'react';
import { View } from 'react-native';
import { Card, DataTable, Text } from 'react-native-paper';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

const cardStyle = { padding: 0, margin: 10, marginBottom: 5 };

export const DataTableExample: React.FC = (): JSX.Element => {
  const theme = useExtendedTheme();
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0],
  );
  const [items] = React.useState([
    { key: 1, name: 'Cupcake', calories: 356, fat: 16 },
    { key: 2, name: 'Eclair', calories: 262, fat: 16 },
    { key: 3, name: 'Frozen yogurt', calories: 159, fat: 6 },
    { key: 4, name: 'Gingerbread', calories: 305, fat: 3.7 },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <Card style={cardStyle}>
      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 24,
          marginVertical: 24,
        }}
      >
        <Text>Data Table</Text>
        <View style={{ marginTop: 24 }}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title
                textStyle={{
                  color: theme.colors.onSurface,
                  ...theme.fonts.labelLarge,
                }}
              >
                Dessert
              </DataTable.Title>
              <DataTable.Title
                numeric
                textStyle={{
                  color: theme.colors.onSurface,
                  ...theme.fonts.labelLarge,
                }}
              >
                Calories
              </DataTable.Title>
              <DataTable.Title
                numeric
                textStyle={{
                  color: theme.colors.onSurface,
                  ...theme.fonts.labelLarge,
                }}
              >
                Fat
              </DataTable.Title>
            </DataTable.Header>

            {items.slice(from, to).map(item => (
              <DataTable.Row key={item.key}>
                <DataTable.Cell textStyle={{ ...theme.fonts.bodyMedium }}>
                  {item.name}
                </DataTable.Cell>
                <DataTable.Cell
                  textStyle={{ ...theme.fonts.bodyMedium }}
                  numeric
                >
                  {item.calories}
                </DataTable.Cell>
                <DataTable.Cell
                  textStyle={{ ...theme.fonts.bodyMedium }}
                  numeric
                >
                  {item.fat}
                </DataTable.Cell>
              </DataTable.Row>
            ))}

            <DataTable.Pagination
              page={page}
              numberOfPages={Math.ceil(items.length / itemsPerPage)}
              onPageChange={(nextPage): void => setPage(nextPage)}
              label={
                <Text
                  style={{ ...theme.fonts.bodyMedium }}
                >{`${from + 1}-${to} of ${items.length}`}</Text>
              }
              numberOfItemsPerPageList={numberOfItemsPerPageList}
              numberOfItemsPerPage={itemsPerPage}
              onItemsPerPageChange={onItemsPerPageChange}
              showFastPaginationControls
              selectPageDropdownLabel={
                <Text style={{ ...theme.fonts.bodyMedium }}>Rows per page</Text>
              }
            />
          </DataTable>
        </View>
      </View>
    </Card>
  );
};
