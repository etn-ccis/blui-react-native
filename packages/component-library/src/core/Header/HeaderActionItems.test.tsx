import React, { createRef } from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import { HeaderActionItems } from './HeaderActionItems';
import { SearchContext } from './contexts/SearchContextProvider';
import { Text, View, TextInput } from 'react-native';
import { FontScaleProvider } from '../__contexts__/font-scale-context';

describe('HeaderActionItems', () => {
    afterEach(cleanup);

    const createSearchContext = (overrides = {}): any => ({
        searchRef: createRef<TextInput>(),
        query: '',
        searching: false,
        onQueryChange: jest.fn(),
        searchConfig: undefined,
        onSearch: jest.fn(),
        onClear: jest.fn(),
        onClose: jest.fn(),
        ...overrides,
    });

    const renderWithContext = (
        component: React.ReactElement,
        contextValue = createSearchContext()
    ): ReturnType<typeof render> =>
        render(
            <FontScaleProvider maxScale={1}>
                <SearchContext.Provider value={contextValue}>{component}</SearchContext.Provider>
            </FontScaleProvider>
        );

    const snapshotWithContext = (component: React.ReactElement, contextValue = createSearchContext()): any =>
        TestRenderer.create(
            <FontScaleProvider maxScale={1}>
                <SearchContext.Provider value={contextValue}>{component}</SearchContext.Provider>
            </FontScaleProvider>
        ).toJSON();

    describe('Basic Rendering', () => {
        it('renders null when no actionItems are provided', () => {
            const tree = snapshotWithContext(<HeaderActionItems />);
            expect(tree).toBeNull();
        });

        it('renders with empty actionItems array', () => {
            const tree = snapshotWithContext(<HeaderActionItems actionItems={[]} />);
            expect(tree).toBeNull();
        });

        it('renders with a single icon action item', () => {
            const tree = snapshotWithContext(
                <HeaderActionItems actionItems={[{ icon: { name: 'more' }, onPress: jest.fn() }]} />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with multiple icon action items', () => {
            const tree = snapshotWithContext(
                <HeaderActionItems
                    actionItems={[
                        { icon: { name: 'search' }, onPress: jest.fn() },
                        { icon: { name: 'more' }, onPress: jest.fn() },
                        { icon: { name: 'settings' }, onPress: jest.fn() },
                    ]}
                />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with component action items', () => {
            const tree = snapshotWithContext(
                <HeaderActionItems
                    actionItems={[
                        {
                            component: <Text>Custom</Text>,
                            onPress: jest.fn(),
                        },
                    ]}
                />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with mixed icon and component action items', () => {
            const tree = snapshotWithContext(
                <HeaderActionItems
                    actionItems={[
                        { icon: { name: 'search' }, onPress: jest.fn() },
                        { component: <Text>Custom</Text>, onPress: jest.fn() },
                        { icon: { name: 'more' }, onPress: jest.fn() },
                    ]}
                />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with actionItemColor', () => {
            const tree = snapshotWithContext(
                <HeaderActionItems
                    actionItems={[{ icon: { name: 'settings' }, onPress: jest.fn() }]}
                    actionItemColor="#FF0000"
                />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with custom width for component action item', () => {
            const tree = snapshotWithContext(
                <HeaderActionItems
                    actionItems={[
                        {
                            component: <Text>Wide</Text>,
                            onPress: jest.fn(),
                            width: 100,
                        },
                    ]}
                />
            );
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Search Functionality', () => {
        it('renders search icon when searchConfig is provided', () => {
            const searchContext = createSearchContext({
                searchConfig: { placeholder: 'Search', onChangeText: jest.fn() },
            });
            const tree = snapshotWithContext(<HeaderActionItems />, searchContext);
            expect(tree).toMatchSnapshot();
        });

        it('combines search icon with action items when searchConfig is provided', () => {
            const searchContext = createSearchContext({
                searchConfig: { placeholder: 'Search', onChangeText: jest.fn() },
            });
            const tree = snapshotWithContext(
                <HeaderActionItems actionItems={[{ icon: { name: 'more' }, onPress: jest.fn() }]} />,
                searchContext
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders clear icon when searching with query', () => {
            const searchContext = createSearchContext({
                searching: true,
                query: 'test query',
                searchConfig: { placeholder: 'Search', onChangeText: jest.fn() },
            });
            const tree = snapshotWithContext(<HeaderActionItems />, searchContext);
            expect(tree).toMatchSnapshot();
        });

        it('renders no icons when searching without query', () => {
            const searchContext = createSearchContext({
                searching: true,
                query: '',
                searchConfig: { placeholder: 'Search', onChangeText: jest.fn() },
            });
            const tree = snapshotWithContext(<HeaderActionItems />, searchContext);
            expect(tree).toBeNull();
        });

        it('calls onSearch when search icon is pressed', () => {
            const onSearch = jest.fn();
            const searchContext = createSearchContext({
                searchConfig: { placeholder: 'Search', onChangeText: jest.fn() },
                onSearch,
            });
            const { getByTestId } = renderWithContext(<HeaderActionItems />, searchContext);

            const searchButton = getByTestId('header-action-item0');
            fireEvent.press(searchButton);

            expect(onSearch).toHaveBeenCalled();
        });

        it('calls onClear when clear icon is pressed', () => {
            const onClear = jest.fn();
            const searchContext = createSearchContext({
                searching: true,
                query: 'test',
                searchConfig: { placeholder: 'Search', onChangeText: jest.fn() },
                onClear,
            });
            const { getByTestId } = renderWithContext(<HeaderActionItems />, searchContext);

            const clearButton = getByTestId('header-action-item0');
            fireEvent.press(clearButton);

            expect(onClear).toHaveBeenCalled();
        });

        it('hides regular action items when searching', () => {
            const searchContext = createSearchContext({
                searching: true,
                query: 'test',
                searchConfig: { placeholder: 'Search', onChangeText: jest.fn() },
            });
            const tree = snapshotWithContext(
                <HeaderActionItems actionItems={[{ icon: { name: 'more' }, onPress: jest.fn() }]} />,
                searchContext
            );
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Action Item Interactions', () => {
        it('calls onPress when icon action item is pressed', () => {
            const onPress = jest.fn();
            const { getByTestId } = renderWithContext(
                <HeaderActionItems actionItems={[{ icon: { name: 'settings' }, onPress }]} />
            );

            const actionButton = getByTestId('header-action-item0');
            fireEvent.press(actionButton);

            expect(onPress).toHaveBeenCalled();
        });

        it('calls correct onPress for multiple action items', () => {
            const onPress1 = jest.fn();
            const onPress2 = jest.fn();
            const onPress3 = jest.fn();

            const { getByTestId } = renderWithContext(
                <HeaderActionItems
                    actionItems={[
                        { icon: { name: 'search' }, onPress: onPress1 },
                        { icon: { name: 'more' }, onPress: onPress2 },
                        { icon: { name: 'settings' }, onPress: onPress3 },
                    ]}
                />
            );

            fireEvent.press(getByTestId('header-action-item0'));
            fireEvent.press(getByTestId('header-action-item1'));
            fireEvent.press(getByTestId('header-action-item2'));

            expect(onPress1).toHaveBeenCalledTimes(1);
            expect(onPress2).toHaveBeenCalledTimes(1);
            expect(onPress3).toHaveBeenCalledTimes(1);
        });

        it('renders component action items correctly', () => {
            const { getByTestId, getByText } = renderWithContext(
                <HeaderActionItems
                    actionItems={[
                        {
                            component: <Text>Custom Component</Text>,
                            onPress: jest.fn(),
                        },
                    ]}
                />
            );

            expect(getByTestId('header-action-item0')).toBeTruthy();
            expect(getByText('Custom Component')).toBeTruthy();
        });
    });

    describe('Style Overrides', () => {
        it('renders with custom root styles', () => {
            const tree = snapshotWithContext(
                <HeaderActionItems
                    actionItems={[{ icon: { name: 'more' }, onPress: jest.fn() }]}
                    styles={{ root: { backgroundColor: 'red' } }}
                />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with custom actionItem styles', () => {
            const tree = snapshotWithContext(
                <HeaderActionItems
                    actionItems={[{ icon: { name: 'more' }, onPress: jest.fn() }]}
                    styles={{ actionItem: { padding: 20 } }}
                />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with custom component styles', () => {
            const tree = snapshotWithContext(
                <HeaderActionItems
                    actionItems={[{ component: <Text>Custom</Text>, onPress: jest.fn() }]}
                    styles={{ component: { margin: 10 } }}
                />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders with all custom styles', () => {
            const tree = snapshotWithContext(
                <HeaderActionItems
                    actionItems={[
                        { icon: { name: 'search' }, onPress: jest.fn() },
                        { component: <Text>Custom</Text>, onPress: jest.fn() },
                    ]}
                    styles={{
                        root: { backgroundColor: 'blue' },
                        actionItem: { padding: 15 },
                        component: { margin: 5 },
                    }}
                />
            );
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Edge Cases', () => {
        it('handles action items with no onPress', () => {
            const tree = snapshotWithContext(<HeaderActionItems actionItems={[{ icon: { name: 'more' } }] as any} />);
            expect(tree).toMatchSnapshot();
        });

        it('handles complex component in action item', () => {
            const tree = snapshotWithContext(
                <HeaderActionItems
                    actionItems={[
                        {
                            component: (
                                <View>
                                    <Text>Line 1</Text>
                                    <Text>Line 2</Text>
                                </View>
                            ),
                            onPress: jest.fn(),
                            width: 80,
                        },
                    ]}
                />
            );
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly when switching from regular to search mode', () => {
            const searchContext = createSearchContext({
                searchConfig: { placeholder: 'Search', onChangeText: jest.fn() },
            });

            const { rerender, getByTestId } = renderWithContext(
                <HeaderActionItems actionItems={[{ icon: { name: 'more' }, onPress: jest.fn() }]} />,
                searchContext
            );

            // Should have search icon + action item
            expect(getByTestId('header-action-item0')).toBeTruthy();
            expect(getByTestId('header-action-item1')).toBeTruthy();

            // Switch to searching mode
            const updatedContext = createSearchContext({
                searching: true,
                query: 'test',
                searchConfig: { placeholder: 'Search', onChangeText: jest.fn() },
            });

            rerender(
                <FontScaleProvider maxScale={1}>
                    <SearchContext.Provider value={updatedContext}>
                        <HeaderActionItems actionItems={[{ icon: { name: 'more' }, onPress: jest.fn() }]} />
                    </SearchContext.Provider>
                </FontScaleProvider>
            );

            // Should only have clear icon
            expect(getByTestId('header-action-item0')).toBeTruthy();
        });

        it('handles different icon types', () => {
            const tree = snapshotWithContext(
                <HeaderActionItems
                    actionItems={[
                        { icon: { name: 'search', family: 'material' }, onPress: jest.fn() },
                        { icon: { uri: 'https://example.com/icon.png' }, onPress: jest.fn() },
                        { icon: { name: 'settings' }, onPress: jest.fn() },
                    ]}
                />
            );
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Accessibility', () => {
        it('sets correct accessibility labels for action items', () => {
            const { getByLabelText } = renderWithContext(
                <HeaderActionItems
                    actionItems={[
                        { icon: { name: 'search' }, onPress: jest.fn() },
                        { icon: { name: 'more' }, onPress: jest.fn() },
                    ]}
                />
            );

            expect(getByLabelText('header-action-item0')).toBeTruthy();
            expect(getByLabelText('header-action-item1')).toBeTruthy();
        });

        it('sets correct testIDs for action items', () => {
            const { getByTestId } = renderWithContext(
                <HeaderActionItems
                    actionItems={[
                        { icon: { name: 'search' }, onPress: jest.fn() },
                        { component: <Text>Custom</Text>, onPress: jest.fn() },
                    ]}
                />
            );

            expect(getByTestId('header-action-item0')).toBeTruthy();
            expect(getByTestId('header-action-item1')).toBeTruthy();
        });
    });
});
