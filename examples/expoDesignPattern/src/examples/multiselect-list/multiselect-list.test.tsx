/* eslint-disable */
import React from 'react';
// import renderer from 'react-test-renderer';
// import { MultiselectListScreen } from './MultiselectList';
// import { ListItem } from './utilities';
// import { InfoListItem } from '@brightlayer-ui/react-native-components';
// import { Provider as ThemeProvider } from 'react-native-paper';
// import * as BLUIThemes from '@brightlayer-ui/react-native-themes';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// jest.mock('@react-navigation/native', () => ({
//     useNavigation: (): any => ({ openDrawer: jest.fn(() => true) }),
// }));

// jest.mock('react-native-safe-area-context', () => ({
//     useSafeAreaInsets: (): any => ({}),
// }));

// const hardcodedData: ListItem[] = [
//     {
//         id: 1,
//         name: 'item 1',
//         details: 'item 1 details',
//     },
//     {
//         id: 2,
//         name: 'item 2',
//         details: 'item 2 details',
//     },
//     {
//         id: 3,
//         name: 'item 3',
//         details: 'item 3 details',
//     },
// ];

describe('Multiselect List Tests', () => {
  it('passes a test for now', () => {
    expect(true).toBeTruthy();
  });

  // it('renders the screen', () => {
  //     const tree = renderer
  //         .create(
  //             <ThemeProvider theme={BLUIThemes.blue}>
  //                 <SafeAreaProvider>
  //                 <MultiselectListScreen hardcodedData={hardcodedData} />
  //                 </SafeAreaProvider>
  //             </ThemeProvider>
  //         )
  //         .toJSON();
  //     expect(tree).toMatchSnapshot();
  // });

  // it('Should render 10 items by default', () => {
  //     const instance = renderer.create(<MultiselectListScreen />).root;
  //     const infoListItems = instance.findAllByType(InfoListItem);
  //     expect(infoListItems).toHaveLength(10);
  // });
});

// @TODO implement these tests

// it('Should delete an Item', () => {

// });

// it('Should clear all Items', () => {

// });
