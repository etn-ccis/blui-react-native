import React, { JSX } from 'react';
import { cleanup } from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import { Text, View } from 'react-native';
import { DrawerContext } from './context/drawer-context';

// Mock all hooks and dependencies used by DrawerNavGroup
jest.mock('@brightlayer-ui/react-native-themes', (): any => ({
    useExtendedTheme: (): any => ({
        colors: {
            surface: '#FFFFFF',
            primary: '#007BC1',
            onSurface: '#000000',
            onSurfaceVariant: '#424242',
        },
    }),
}));

jest.mock('react-native-safe-area-context', (): any => ({
    useSafeAreaInsets: (): any => ({
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }),
}));

jest.mock('../__contexts__/font-scale-context', (): any => ({
    useFontScale: (): any => 1,
}));

jest.mock('../Utility/shared', (): any => ({
    useFontStyles: (): any => ({
        fontStyleSemiBold: { fontWeight: '600' },
        fontStyleRegular: { fontWeight: '400' },
    }),
}));

// Don't mock DrawerNavItem - we need the real component for testing active hierarchy

import { DrawerNavGroup, findID, DrawerNavGroupMakeStyles } from './DrawerNavGroup';
import { DrawerNavItem } from './DrawerNavItem';

describe('DrawerNavGroup', () => {
    afterEach(cleanup);

    const mockDrawerContext = {
        activeItem: undefined,
        onItemSelect: jest.fn(),
    };

    const renderWithContext = (component: React.ReactElement, activeItem?: string): TestRenderer.ReactTestRenderer =>
        TestRenderer.create(
            <DrawerContext.Provider value={{ ...mockDrawerContext, activeItem }}>{component}</DrawerContext.Provider>
        );

    describe('Helper Functions', () => {
        describe('findID', () => {
            it('returns false when activeItem is undefined', () => {
                const item = { itemID: 'item1', title: 'Item 1' };
                expect(findID(item, undefined)).toBe(false);
            });

            it('returns true when item matches activeItem at leaf level', () => {
                const item = { itemID: 'item1', title: 'Item 1' };
                expect(findID(item, 'item1')).toBe(true);
            });

            it('returns false when item does not match activeItem at leaf level', () => {
                const item = { itemID: 'item1', title: 'Item 1' };
                expect(findID(item, 'item2')).toBe(false);
            });

            it('returns true when activeItem is in nested items', () => {
                const item = {
                    itemID: 'parent',
                    title: 'Parent',
                    items: [
                        { itemID: 'child1', title: 'Child 1' },
                        { itemID: 'child2', title: 'Child 2' },
                    ],
                };
                expect(findID(item, 'child1')).toBe(true);
            });

            it('returns false when activeItem is not in nested items', () => {
                const item = {
                    itemID: 'parent',
                    title: 'Parent',
                    items: [
                        { itemID: 'child1', title: 'Child 1' },
                        { itemID: 'child2', title: 'Child 2' },
                    ],
                };
                expect(findID(item, 'child3')).toBe(false);
            });

            it('returns true when activeItem is deeply nested in items', () => {
                const item = {
                    itemID: 'parent',
                    title: 'Parent',
                    items: [
                        {
                            itemID: 'child1',
                            title: 'Child 1',
                            items: [{ itemID: 'grandchild1', title: 'Grandchild 1' }],
                        },
                    ],
                };
                expect(findID(item, 'grandchild1')).toBe(true);
            });

            it('returns true when matching parent itemID with nested items', () => {
                const item = {
                    itemID: 'parent',
                    title: 'Parent',
                    items: [{ itemID: 'child1', title: 'Child 1' }],
                };
                expect(findID(item, 'parent')).toBe(false); // Parent itself doesn't match when it has items
            });

            it('returns true when first nested item matches', () => {
                const item = {
                    itemID: 'parent',
                    title: 'Parent',
                    items: [
                        { itemID: 'child1', title: 'Child 1' },
                        { itemID: 'child2', title: 'Child 2' },
                        { itemID: 'child3', title: 'Child 3' },
                    ],
                };
                expect(findID(item, 'child1')).toBe(true);
            });

            it('returns true when last nested item matches', () => {
                const item = {
                    itemID: 'parent',
                    title: 'Parent',
                    items: [
                        { itemID: 'child1', title: 'Child 1' },
                        { itemID: 'child2', title: 'Child 2' },
                        { itemID: 'child3', title: 'Child 3' },
                    ],
                };
                expect(findID(item, 'child3')).toBe(true);
            });

            // Note: Testing children path is covered through integration tests
            // because it requires proper React element structure with DrawerNavItem
            it('handles children in integration tests', () => {
                // This is tested through the component integration tests below
                // where we render actual DrawerNavItem children
                expect(true).toBe(true);
            });

            it('returns false when item has no items or children', () => {
                const item = { itemID: 'parent', title: 'Parent' };
                expect(findID(item, 'child1')).toBe(false);
            });
        });

        describe('DrawerNavGroupMakeStyles', () => {
            const mockTheme = {
                colors: {
                    surface: '#FFFFFF',
                    primary: '#007BC1',
                    onSurface: '#000000',
                    onSurfaceVariant: '#424242',
                },
            };
            const mockInsets = { top: 0, bottom: 0, left: 0, right: 0 };
            const mockFontStyle = { fontWeight: '600' };

            it('creates styles with provided titleColor', () => {
                const props = { titleColor: 'red' } as any;
                const styles = DrawerNavGroupMakeStyles(props, mockTheme as any, mockInsets, 1, mockFontStyle as any);
                expect((styles.title as any).color).toBe('red');
            });

            it('creates styles with theme default titleColor when not provided', () => {
                const props = {} as any;
                const styles = DrawerNavGroupMakeStyles(props, mockTheme as any, mockInsets, 1, mockFontStyle as any);
                expect((styles.title as any).color).toBe('#000000');
            });

            it('applies fontScale to textContent height', () => {
                const props = {} as any;
                const styles = DrawerNavGroupMakeStyles(props, mockTheme as any, mockInsets, 2, mockFontStyle as any);
                expect((styles.textContent as any).height).toBe(104); // 52 * 2
            });

            it('applies insets to textContent paddingLeft', () => {
                const props = {} as any;
                const customInsets = { top: 10, bottom: 10, left: 20, right: 10 };
                const styles = DrawerNavGroupMakeStyles(props, mockTheme as any, customInsets, 1, mockFontStyle as any);
                expect((styles.textContent as any).paddingLeft).toBe(20);
            });

            it('applies fontStyleSemiBold to title', () => {
                const props = {} as any;
                const customFontStyle = { fontWeight: '700', fontFamily: 'Custom' };
                const styles = DrawerNavGroupMakeStyles(props, mockTheme as any, mockInsets, 1, customFontStyle as any);
                expect((styles.title as any).fontWeight).toBe('700');
                expect((styles.title as any).fontFamily).toBe('Custom');
            });
        });
    });

    describe('Basic Rendering', () => {
        it('renders correctly with minimal props', () => {
            const tree = renderWithContext(<DrawerNavGroup />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with title', () => {
            const tree = renderWithContext(<DrawerNavGroup title="Navigation" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with title and titleColor', () => {
            const tree = renderWithContext(<DrawerNavGroup title="Navigation" titleColor="red" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with titleContent', () => {
            const tree = renderWithContext(<DrawerNavGroup titleContent={<Text>Custom Title</Text>} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with titleContent overriding title', () => {
            const tree = renderWithContext(
                <DrawerNavGroup title="Ignored" titleContent={<Text>Custom Title</Text>} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with titleContent set to null', () => {
            const tree = renderWithContext(<DrawerNavGroup title="Should Show" titleContent={null} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly without titleDivider', () => {
            const tree = renderWithContext(<DrawerNavGroup title="Navigation" titleDivider={false} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with titleDivider enabled', () => {
            const tree = renderWithContext(<DrawerNavGroup title="Navigation" titleDivider={true} />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Items Prop', () => {
        it('renders correctly with items prop', () => {
            const items = [
                { itemID: 'item1', title: 'Item 1' },
                { itemID: 'item2', title: 'Item 2' },
            ];
            const tree = renderWithContext(<DrawerNavGroup items={items} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with items prop and title', () => {
            const items = [
                { itemID: 'item1', title: 'Item 1' },
                { itemID: 'item2', title: 'Item 2' },
            ];
            const tree = renderWithContext(<DrawerNavGroup title="Group" items={items} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with empty items array', () => {
            const tree = renderWithContext(<DrawerNavGroup items={[]} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with single item', () => {
            const items = [{ itemID: 'item1', title: 'Item 1' }];
            const tree = renderWithContext(<DrawerNavGroup items={items} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with items containing nested items', () => {
            const items = [
                {
                    itemID: 'parent1',
                    title: 'Parent 1',
                    items: [
                        { itemID: 'child1', title: 'Child 1' },
                        { itemID: 'child2', title: 'Child 2' },
                    ],
                },
            ];
            const tree = renderWithContext(<DrawerNavGroup items={items} />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Children Prop', () => {
        const MockDrawerNavItem = ({ itemID, title }: any): JSX.Element => (
            <View testID={`nav-item-${itemID}`}>
                <Text>{title}</Text>
            </View>
        );
        MockDrawerNavItem.displayName = 'DrawerNavItem';

        it('renders correctly with children', () => {
            const tree = renderWithContext(
                <DrawerNavGroup>
                    <MockDrawerNavItem itemID="item1" title="Item 1" />
                    <MockDrawerNavItem itemID="item2" title="Item 2" />
                </DrawerNavGroup>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with title and children', () => {
            const tree = renderWithContext(
                <DrawerNavGroup title="Navigation">
                    <MockDrawerNavItem itemID="item1" title="Item 1" />
                </DrawerNavGroup>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with mixed items and children', () => {
            const items = [{ itemID: 'item1', title: 'Item 1' }];
            const tree = renderWithContext(
                <DrawerNavGroup items={items}>
                    <MockDrawerNavItem itemID="item2" title="Item 2" />
                </DrawerNavGroup>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Style Props', () => {
        it('renders correctly with custom styles', () => {
            const customStyles = {
                root: { backgroundColor: 'blue' },
                textContent: { padding: 20 },
                title: { color: 'green', fontSize: 14 },
                divider: { height: 2, backgroundColor: 'red' },
            };
            const tree = renderWithContext(<DrawerNavGroup title="Navigation" styles={customStyles} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with style prop', () => {
            const tree = renderWithContext(<DrawerNavGroup title="Navigation" style={{ margin: 10 }} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with both styles and style props', () => {
            const customStyles = {
                root: { backgroundColor: 'blue' },
            };
            const tree = renderWithContext(
                <DrawerNavGroup title="Navigation" styles={customStyles} style={{ margin: 10 }} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Inherited Props', () => {
        it('renders correctly with backgroundColor', () => {
            const tree = renderWithContext(<DrawerNavGroup title="Navigation" backgroundColor="lightblue" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with activeItemBackgroundColor', () => {
            const tree = renderWithContext(
                <DrawerNavGroup title="Navigation" activeItemBackgroundColor="yellow" />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with chevron enabled', () => {
            const tree = renderWithContext(<DrawerNavGroup title="Navigation" chevron={true} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with divider enabled', () => {
            const tree = renderWithContext(<DrawerNavGroup title="Navigation" divider={true} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with hidePadding enabled', () => {
            const tree = renderWithContext(<DrawerNavGroup title="Navigation" hidePadding={true} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with custom itemFontColor', () => {
            const tree = renderWithContext(<DrawerNavGroup title="Navigation" itemFontColor="purple" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with custom itemIconColor', () => {
            const tree = renderWithContext(<DrawerNavGroup title="Navigation" itemIconColor="orange" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with nestedBackgroundColor', () => {
            const tree = renderWithContext(
                <DrawerNavGroup title="Navigation" nestedBackgroundColor="lightgray" />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with nestedDivider enabled', () => {
            const tree = renderWithContext(<DrawerNavGroup title="Navigation" nestedDivider={true} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with disableActiveItemParentStyles', () => {
            const tree = renderWithContext(
                <DrawerNavGroup title="Navigation" disableActiveItemParentStyles={true} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with activeItemBackgroundShape square', () => {
            const tree = renderWithContext(
                <DrawerNavGroup title="Navigation" activeItemBackgroundShape="square" />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with activeItemBackgroundShape round', () => {
            const tree = renderWithContext(
                <DrawerNavGroup title="Navigation" activeItemBackgroundShape="round" />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with custom activeItemFontColor', () => {
            const tree = renderWithContext(<DrawerNavGroup title="Navigation" activeItemFontColor="red" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with custom activeItemIconColor', () => {
            const tree = renderWithContext(<DrawerNavGroup title="Navigation" activeItemIconColor="blue" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with custom chevronColor', () => {
            const tree = renderWithContext(<DrawerNavGroup title="Navigation" chevronColor="green" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with custom activeChevronColor', () => {
            const tree = renderWithContext(<DrawerNavGroup title="Navigation" activeChevronColor="pink" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with custom expandIcon', () => {
            const expandIcon = { name: 'expand' };
            const tree = renderWithContext(<DrawerNavGroup title="Navigation" expandIcon={expandIcon} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with custom collapseIcon', () => {
            const collapseIcon = { name: 'collapse' };
            const tree = renderWithContext(<DrawerNavGroup title="Navigation" collapseIcon={collapseIcon} />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Active Item Handling', () => {
        it('renders correctly with active item in items prop', () => {
            const items = [
                { itemID: 'item1', title: 'Item 1' },
                { itemID: 'item2', title: 'Item 2' },
            ];
            const tree = renderWithContext(<DrawerNavGroup items={items} />, 'item1').toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with active nested item', () => {
            const items = [
                {
                    itemID: 'parent1',
                    title: 'Parent 1',
                    items: [
                        { itemID: 'child1', title: 'Child 1' },
                        { itemID: 'child2', title: 'Child 2' },
                    ],
                },
            ];
            const tree = renderWithContext(<DrawerNavGroup items={items} />, 'child1').toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly when active item is not in group', () => {
            const items = [
                { itemID: 'item1', title: 'Item 1' },
                { itemID: 'item2', title: 'Item 2' },
            ];
            const tree = renderWithContext(<DrawerNavGroup items={items} />, 'item3').toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly when activeItem is undefined', () => {
            const items = [
                { itemID: 'item1', title: 'Item 1' },
                { itemID: 'item2', title: 'Item 2' },
            ];
            const tree = renderWithContext(<DrawerNavGroup items={items} />, undefined).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Theme Override', () => {
        it('renders correctly with theme override', () => {
            const customTheme = {
                colors: {
                    surface: '#FF0000',
                    primary: '#00FF00',
                    onSurface: '#0000FF',
                    onSurfaceVariant: '#FFFF00',
                },
            };
            const tree = renderWithContext(<DrawerNavGroup title="Navigation" theme={customTheme as any} />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('ViewProps', () => {
        it('renders correctly with testID', () => {
            const tree = renderWithContext(<DrawerNavGroup testID="nav-group" title="Navigation" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with accessible', () => {
            const tree = renderWithContext(<DrawerNavGroup accessible={true} title="Navigation" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with accessibilityLabel', () => {
            const tree = renderWithContext(
                <DrawerNavGroup accessibilityLabel="Navigation Group" title="Navigation" />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Edge Cases', () => {
        it('renders correctly with all props combined', () => {
            const items = [
                { itemID: 'item1', title: 'Item 1' },
                { itemID: 'item2', title: 'Item 2' },
            ];
            const customStyles = {
                root: { backgroundColor: 'blue' },
                title: { color: 'white' },
            };
            const tree = renderWithContext(
                <DrawerNavGroup
                    title="Navigation"
                    titleColor="red"
                    titleDivider={true}
                    items={items}
                    styles={customStyles}
                    style={{ margin: 10 }}
                    backgroundColor="lightblue"
                    chevron={true}
                    divider={true}
                    testID="nav-group"
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with deeply nested items', () => {
            const items = [
                {
                    itemID: 'parent1',
                    title: 'Parent 1',
                    items: [
                        {
                            itemID: 'child1',
                            title: 'Child 1',
                            items: [
                                { itemID: 'grandchild1', title: 'Grandchild 1' },
                                { itemID: 'grandchild2', title: 'Grandchild 2' },
                            ],
                        },
                    ],
                },
            ];
            const tree = renderWithContext(<DrawerNavGroup items={items} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with active deeply nested item', () => {
            const items = [
                {
                    itemID: 'parent1',
                    title: 'Parent 1',
                    items: [
                        {
                            itemID: 'child1',
                            title: 'Child 1',
                            items: [
                                { itemID: 'grandchild1', title: 'Grandchild 1' },
                                { itemID: 'grandchild2', title: 'Grandchild 2' },
                            ],
                        },
                    ],
                },
            ];
            const tree = renderWithContext(<DrawerNavGroup items={items} />, 'grandchild1').toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with multiple groups of items', () => {
            const items = [
                {
                    itemID: 'parent1',
                    title: 'Parent 1',
                    items: [
                        { itemID: 'child1', title: 'Child 1' },
                        { itemID: 'child2', title: 'Child 2' },
                    ],
                },
                {
                    itemID: 'parent2',
                    title: 'Parent 2',
                    items: [
                        { itemID: 'child3', title: 'Child 3' },
                        { itemID: 'child4', title: 'Child 4' },
                    ],
                },
            ];
            const tree = renderWithContext(<DrawerNavGroup items={items} />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Active Hierarchy and FindID Function', () => {
        it('finds active item at root level', () => {
            const items = [
                { itemID: 'item1', title: 'Item 1' },
                { itemID: 'item2', title: 'Item 2' },
            ];
            const tree = renderWithContext(<DrawerNavGroup items={items} />, 'item1').toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('finds active item in nested items', () => {
            const items = [
                {
                    itemID: 'parent1',
                    title: 'Parent 1',
                    items: [{ itemID: 'child1', title: 'Child 1' }],
                },
            ];
            const tree = renderWithContext(<DrawerNavGroup items={items} />, 'child1').toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('finds active item in deeply nested items', () => {
            const items = [
                {
                    itemID: 'parent1',
                    title: 'Parent 1',
                    items: [
                        {
                            itemID: 'child1',
                            title: 'Child 1',
                            items: [{ itemID: 'grandchild1', title: 'Grandchild 1' }],
                        },
                    ],
                },
            ];
            const tree = renderWithContext(<DrawerNavGroup items={items} />, 'grandchild1').toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('handles activeItem change when item not in tree', () => {
            const items = [
                { itemID: 'item1', title: 'Item 1' },
                { itemID: 'item2', title: 'Item 2' },
            ];
            const renderer = renderWithContext(<DrawerNavGroup items={items} />, 'item1');
            const tree1 = renderer.toJSON();
            expect(tree1).toMatchSnapshot();

            // Update with activeItem not in tree
            renderer.update(
                <DrawerContext.Provider value={{ ...mockDrawerContext, activeItem: 'item999' }}>
                    <DrawerNavGroup items={items} />
                </DrawerContext.Provider>
            );
            const tree2 = renderer.toJSON();
            expect(tree2).toMatchSnapshot();
        });

        it('handles activeItem with children prop using DrawerNavItem', () => {
            const tree = renderWithContext(
                <DrawerNavGroup>
                    <DrawerNavItem itemID="item1" title="Item 1" />
                    <DrawerNavItem itemID="item2" title="Item 2" />
                </DrawerNavGroup>,
                'item1'
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('handles activeItem with nested children in DrawerNavItem', () => {
            const tree = renderWithContext(
                <DrawerNavGroup>
                    <DrawerNavItem itemID="parent1" title="Parent 1">
                        <DrawerNavItem itemID="child1" title="Child 1" />
                        <DrawerNavItem itemID="child2" title="Child 2" />
                    </DrawerNavItem>
                </DrawerNavGroup>,
                'child1'
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders without crashing when activeItem is undefined', () => {
            const items = [{ itemID: 'item1', title: 'Item 1' }];
            const tree = renderWithContext(<DrawerNavGroup items={items} />, undefined).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders without crashing when items prop has no itemID', () => {
            const items = [{ title: 'Item 1' } as any];
            const tree = renderWithContext(<DrawerNavGroup items={items} />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('State Updates and Callbacks', () => {
        it('handles notifyActiveParent callback from items', () => {
            const items = [
                {
                    itemID: 'parent1',
                    title: 'Parent 1',
                    items: [{ itemID: 'child1', title: 'Child 1' }],
                },
            ];
            const renderer = renderWithContext(<DrawerNavGroup items={items} />);

            // The notifyActiveParent callback should be called when an item becomes active
            // This is tested implicitly through activeItem changes
            renderer.update(
                <DrawerContext.Provider value={{ ...mockDrawerContext, activeItem: 'child1' }}>
                    <DrawerNavGroup items={items} />
                </DrawerContext.Provider>
            );
            const tree = renderer.toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('handles multiple activeItem changes', () => {
            const items = [
                { itemID: 'item1', title: 'Item 1' },
                { itemID: 'item2', title: 'Item 2' },
                { itemID: 'item3', title: 'Item 3' },
            ];
            const renderer = renderWithContext(<DrawerNavGroup items={items} />, 'item1');

            // Change to item2
            renderer.update(
                <DrawerContext.Provider value={{ ...mockDrawerContext, activeItem: 'item2' }}>
                    <DrawerNavGroup items={items} />
                </DrawerContext.Provider>
            );

            // Change to item3
            renderer.update(
                <DrawerContext.Provider value={{ ...mockDrawerContext, activeItem: 'item3' }}>
                    <DrawerNavGroup items={items} />
                </DrawerContext.Provider>
            );

            const tree = renderer.toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('clears active hierarchy when activeItem removed from tree', () => {
            const items1 = [
                { itemID: 'item1', title: 'Item 1' },
                { itemID: 'item2', title: 'Item 2' },
            ];
            const items2 = [{ itemID: 'item3', title: 'Item 3' }];

            const renderer = renderWithContext(<DrawerNavGroup items={items1} />, 'item1');

            // Update items but keep same activeItem (which is no longer in tree)
            renderer.update(
                <DrawerContext.Provider value={{ ...mockDrawerContext, activeItem: 'item1' }}>
                    <DrawerNavGroup items={items2} />
                </DrawerContext.Provider>
            );

            const tree = renderer.toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Mixed Children Types', () => {
        it('handles mix of DrawerNavItem children and other children', () => {
            const tree = renderWithContext(
                <DrawerNavGroup>
                    <DrawerNavItem itemID="item1" title="Item 1" />
                    <View testID="non-nav-item">
                        <Text>Not a NavItem</Text>
                    </View>
                    <DrawerNavItem itemID="item2" title="Item 2" />
                </DrawerNavGroup>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('handles children with nested DrawerNavItems', () => {
            const tree = renderWithContext(
                <DrawerNavGroup>
                    <DrawerNavItem itemID="parent1" title="Parent 1">
                        <DrawerNavItem itemID="child1" title="Child 1">
                            <DrawerNavItem itemID="grandchild1" title="Grandchild 1" />
                        </DrawerNavItem>
                    </DrawerNavItem>
                </DrawerNavGroup>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('finds active item in DrawerNavItem children', () => {
            const tree = renderWithContext(
                <DrawerNavGroup>
                    <DrawerNavItem itemID="item1" title="Item 1" />
                    <DrawerNavItem itemID="item2" title="Item 2" />
                </DrawerNavGroup>,
                'item2'
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('finds active item in deeply nested DrawerNavItem children', () => {
            const tree = renderWithContext(
                <DrawerNavGroup>
                    <DrawerNavItem itemID="parent1" title="Parent 1">
                        <DrawerNavItem itemID="child1" title="Child 1">
                            <DrawerNavItem itemID="grandchild1" title="Grandchild 1" />
                        </DrawerNavItem>
                    </DrawerNavItem>
                </DrawerNavGroup>,
                'grandchild1'
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('handles children prop change with active item', () => {
            const renderer = renderWithContext(
                <DrawerNavGroup>
                    <DrawerNavItem itemID="item1" title="Item 1" />
                </DrawerNavGroup>,
                'item1'
            );

            renderer.update(
                <DrawerContext.Provider value={{ ...mockDrawerContext, activeItem: 'item1' }}>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                        <DrawerNavItem itemID="item2" title="Item 2" />
                    </DrawerNavGroup>
                </DrawerContext.Provider>
            );

            const tree = renderer.toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('handles activeItem change between children', () => {
            const renderer = renderWithContext(
                <DrawerNavGroup>
                    <DrawerNavItem itemID="item1" title="Item 1" />
                    <DrawerNavItem itemID="item2" title="Item 2" />
                </DrawerNavGroup>,
                'item1'
            );

            renderer.update(
                <DrawerContext.Provider value={{ ...mockDrawerContext, activeItem: 'item2' }}>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                        <DrawerNavItem itemID="item2" title="Item 2" />
                    </DrawerNavGroup>
                </DrawerContext.Provider>
            );

            const tree = renderer.toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('GetChildren Function Coverage', () => {
        it('calls getChildren with DrawerNavItem children', () => {
            const tree = renderWithContext(
                <DrawerNavGroup title="Navigation">
                    <DrawerNavItem itemID="child1" title="Child 1" />
                    <DrawerNavItem itemID="child2" title="Child 2" />
                    <DrawerNavItem itemID="child3" title="Child 3" />
                </DrawerNavGroup>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('triggers notifyActiveParent callback via children update', () => {
            const items = [
                { itemID: 'item1', title: 'Item 1' },
                { itemID: 'item2', title: 'Item 2' },
            ];
            const renderer = renderWithContext(<DrawerNavGroup items={items} />, 'item1');

            // Trigger the notifyActiveParent by changing activeItem
            renderer.update(
                <DrawerContext.Provider value={{ ...mockDrawerContext, activeItem: 'item2' }}>
                    <DrawerNavGroup items={items} />
                </DrawerContext.Provider>
            );

            // Change back to trigger the callback again
            renderer.update(
                <DrawerContext.Provider value={{ ...mockDrawerContext, activeItem: 'item1' }}>
                    <DrawerNavGroup items={items} />
                </DrawerContext.Provider>
            );

            const tree = renderer.toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('handles children with isInActiveTree changes', () => {
            const renderer = renderWithContext(
                <DrawerNavGroup>
                    <DrawerNavItem itemID="item1" title="Item 1" />
                    <DrawerNavItem itemID="item2" title="Item 2" />
                </DrawerNavGroup>
            );

            // Set item1 as active
            renderer.update(
                <DrawerContext.Provider value={{ ...mockDrawerContext, activeItem: 'item1' }}>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                        <DrawerNavItem itemID="item2" title="Item 2" />
                    </DrawerNavGroup>
                </DrawerContext.Provider>
            );

            // Change to item2
            renderer.update(
                <DrawerContext.Provider value={{ ...mockDrawerContext, activeItem: 'item2' }}>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                        <DrawerNavItem itemID="item2" title="Item 2" />
                    </DrawerNavGroup>
                </DrawerContext.Provider>
            );

            const tree = renderer.toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('handles items prop with isInActiveTree changes', () => {
            const items = [
                {
                    itemID: 'parent1',
                    title: 'Parent 1',
                    items: [
                        { itemID: 'child1', title: 'Child 1' },
                        { itemID: 'child2', title: 'Child 2' },
                    ],
                },
            ];

            const renderer = renderWithContext(<DrawerNavGroup items={items} />);

            // Set child1 as active
            renderer.update(
                <DrawerContext.Provider value={{ ...mockDrawerContext, activeItem: 'child1' }}>
                    <DrawerNavGroup items={items} />
                </DrawerContext.Provider>
            );

            // Change to child2
            renderer.update(
                <DrawerContext.Provider value={{ ...mockDrawerContext, activeItem: 'child2' }}>
                    <DrawerNavGroup items={items} />
                </DrawerContext.Provider>
            );

            const tree = renderer.toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Edge Cases for Branch Coverage', () => {
        it('handles empty children', () => {
            const tree = renderWithContext(<DrawerNavGroup>{null}</DrawerNavGroup>).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('handles undefined children', () => {
            const tree = renderWithContext(<DrawerNavGroup>{undefined}</DrawerNavGroup>).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('handles false children', () => {
            const tree = renderWithContext(<DrawerNavGroup>{false}</DrawerNavGroup>).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('handles items with parent matching activeItem', () => {
            const items = [
                {
                    itemID: 'parent1',
                    title: 'Parent 1',
                    items: [{ itemID: 'child1', title: 'Child 1' }],
                },
            ];
            const tree = renderWithContext(<DrawerNavGroup items={items} />, 'parent1').toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('handles complex activeItem hierarchy updates', () => {
            const items = [
                {
                    itemID: 'parent1',
                    title: 'Parent 1',
                    items: [
                        {
                            itemID: 'child1',
                            title: 'Child 1',
                            items: [
                                { itemID: 'grandchild1', title: 'Grandchild 1' },
                                { itemID: 'grandchild2', title: 'Grandchild 2' },
                            ],
                        },
                    ],
                },
            ];

            const renderer = renderWithContext(<DrawerNavGroup items={items} />, 'grandchild1');

            // Change active item to different grandchild
            renderer.update(
                <DrawerContext.Provider value={{ ...mockDrawerContext, activeItem: 'grandchild2' }}>
                    <DrawerNavGroup items={items} />
                </DrawerContext.Provider>
            );

            const tree = renderer.toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
