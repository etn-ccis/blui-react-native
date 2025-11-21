import React from 'react';
import { cleanup } from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import { DrawerContext } from './context/drawer-context';
import { NavGroupContext } from './context';

// Mock all hooks and dependencies used by DrawerNavItem
jest.mock('@brightlayer-ui/react-native-themes', (): any => ({
    useExtendedTheme: (): any => ({
        colors: {
            surface: '#FFFFFF',
            primary: '#007BC1',
            onSurface: '#000000',
            onSurfaceVariant: '#424242',
            primaryContainer: '#B3D9F2',
            onPrimaryContainer: '#001F3D',
            surfaceContainer: '#F5F5F5',
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
    useFontScaleSettings: (): any => ({
        disableScaling: false,
    }),
}));

jest.mock('../Utility/shared', (): any => ({
    useFontStyles: (): any => ({
        fontStyleSemiBold: { fontWeight: '600' },
        fontStyleRegular: { fontWeight: '400' },
    }),
}));

jest.mock('../__hooks__/usePrevious', (): any => ({
    usePrevious: (): any => undefined,
}));

jest.mock('../InfoListItem', (): any => ({
    InfoListItem: 'InfoListItem',
}));

jest.mock('../Icon', (): any => ({
    Icon: 'Icon',
}));

jest.mock('react-native-collapsible', (): any => {
    const { View } = jest.requireActual('react-native');
    return {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        __esModule: true,
        default: ({ children, collapsed }: any) => (!collapsed ? <View>{children}</View> : null),
    };
});

import { DrawerNavItem } from './DrawerNavItem';
import { Text } from 'react-native';

describe('DrawerNavItem', () => {
    afterEach(cleanup);

    const mockDrawerContext = {
        activeItem: undefined,
        onItemSelect: jest.fn(),
    };

    const mockNavGroupContext = {
        activeHierarchy: [],
    };

    const renderWithContext = (
        component: React.ReactElement,
        activeItem?: string,
        activeHierarchy: string[] = []
    ): TestRenderer.ReactTestRenderer =>
        TestRenderer.create(
            <DrawerContext.Provider value={{ ...mockDrawerContext, activeItem }}>
                <NavGroupContext.Provider value={{ activeHierarchy }}>{component}</NavGroupContext.Provider>
            </DrawerContext.Provider>
        );

    describe('Basic Rendering', () => {
        it('renders correctly with minimal props', () => {
            const tree = renderWithContext(<DrawerNavItem itemID="item1" title="Item 1" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with title and subtitle', () => {
            const tree = renderWithContext(
                <DrawerNavItem itemID="item1" title="Item 1" subtitle="Subtitle 1" />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with icon', () => {
            const icon = { name: 'home' };
            const tree = renderWithContext(<DrawerNavItem itemID="item1" title="Item 1" icon={icon} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with statusColor', () => {
            const tree = renderWithContext(<DrawerNavItem itemID="item1" title="Item 1" statusColor="red" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with rightComponent', () => {
            const rightComponent = <Text>Right</Text>;
            const tree = renderWithContext(
                <DrawerNavItem itemID="item1" title="Item 1" rightComponent={rightComponent} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Active State', () => {
        it('renders correctly when active', () => {
            const tree = renderWithContext(<DrawerNavItem itemID="item1" title="Item 1" />, 'item1').toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly when not active', () => {
            const tree = renderWithContext(<DrawerNavItem itemID="item1" title="Item 1" />, 'item2').toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('applies active styles when isInActiveTree is true', () => {
            const tree = renderWithContext(
                <DrawerNavItem itemID="item1" title="Item 1" isInActiveTree={true} />,
                undefined,
                ['item1']
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('applies active styles when isInActiveTree is true and disableActiveItemParentStyles is false', () => {
            const tree = renderWithContext(
                <DrawerNavItem
                    itemID="item1"
                    title="Item 1"
                    isInActiveTree={true}
                    disableActiveItemParentStyles={false}
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('does not apply active parent styles when disableActiveItemParentStyles is true', () => {
            const tree = renderWithContext(
                <DrawerNavItem
                    itemID="item1"
                    title="Item 1"
                    isInActiveTree={true}
                    disableActiveItemParentStyles={true}
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Nested Items', () => {
        it('renders correctly with items prop', () => {
            const items = [
                { itemID: 'child1', title: 'Child 1' },
                { itemID: 'child2', title: 'Child 2' },
            ];
            const tree = renderWithContext(<DrawerNavItem itemID="parent1" title="Parent 1" items={items} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with children', () => {
            const tree = renderWithContext(
                <DrawerNavItem itemID="parent1" title="Parent 1">
                    <DrawerNavItem itemID="child1" title="Child 1" />
                    <DrawerNavItem itemID="child2" title="Child 2" />
                </DrawerNavItem>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with deeply nested items', () => {
            const items = [
                {
                    itemID: 'child1',
                    title: 'Child 1',
                    items: [
                        { itemID: 'grandchild1', title: 'Grandchild 1' },
                        { itemID: 'grandchild2', title: 'Grandchild 2' },
                    ],
                },
            ];
            const tree = renderWithContext(<DrawerNavItem itemID="parent1" title="Parent 1" items={items} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly at different depths', () => {
            const tree = renderWithContext(<DrawerNavItem itemID="item1" title="Item 1" depth={0} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly at depth 1', () => {
            const tree = renderWithContext(<DrawerNavItem itemID="item1" title="Item 1" depth={1} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly at depth 2', () => {
            const tree = renderWithContext(<DrawerNavItem itemID="item1" title="Item 1" depth={2} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('does not show icon when depth > 0', () => {
            const icon = { name: 'home' };
            const tree = renderWithContext(
                <DrawerNavItem itemID="item1" title="Item 1" icon={icon} depth={1} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Divider Handling', () => {
        it('renders correctly with divider at depth 0', () => {
            const tree = renderWithContext(
                <DrawerNavItem itemID="item1" title="Item 1" divider={true} depth={0} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly without divider at depth 0', () => {
            const tree = renderWithContext(
                <DrawerNavItem itemID="item1" title="Item 1" divider={false} depth={0} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with nestedDivider at depth 1', () => {
            const tree = renderWithContext(
                <DrawerNavItem itemID="item1" title="Item 1" nestedDivider={true} depth={1} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly without nestedDivider at depth 1', () => {
            const tree = renderWithContext(
                <DrawerNavItem itemID="item1" title="Item 1" nestedDivider={false} depth={1} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('uses nestedDivider when depth > 0 and nestedDivider is undefined', () => {
            const tree = renderWithContext(<DrawerNavItem itemID="item1" title="Item 1" depth={1} />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Chevron Prop', () => {
        it('renders correctly with chevron enabled', () => {
            const tree = renderWithContext(<DrawerNavItem itemID="item1" title="Item 1" chevron={true} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with chevron disabled', () => {
            const tree = renderWithContext(<DrawerNavItem itemID="item1" title="Item 1" chevron={false} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('does not show chevron when item has children', () => {
            const items = [{ itemID: 'child1', title: 'Child 1' }];
            const tree = renderWithContext(
                <DrawerNavItem itemID="parent1" title="Parent 1" items={items} chevron={true} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Expand/Collapse', () => {
        it('renders expand icon when collapsed', () => {
            const items = [{ itemID: 'child1', title: 'Child 1' }];
            const tree = renderWithContext(<DrawerNavItem itemID="parent1" title="Parent 1" items={items} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders collapse icon when expanded', () => {
            const items = [{ itemID: 'child1', title: 'Child 1' }];
            const tree = renderWithContext(
                <DrawerNavItem itemID="parent1" title="Parent 1" items={items} isInActiveTree={true} />,
                undefined,
                ['child1', 'parent1']
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders custom expandIcon', () => {
            const expandIcon = { name: 'arrow-down' };
            const items = [{ itemID: 'child1', title: 'Child 1' }];
            const tree = renderWithContext(
                <DrawerNavItem itemID="parent1" title="Parent 1" items={items} expandIcon={expandIcon} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders custom collapseIcon', () => {
            const collapseIcon = { name: 'arrow-up' };
            const items = [{ itemID: 'child1', title: 'Child 1' }];
            const tree = renderWithContext(
                <DrawerNavItem itemID="parent1" title="Parent 1" items={items} collapseIcon={collapseIcon} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Hidden Prop', () => {
        it('does not render when hidden is true', () => {
            const tree = renderWithContext(<DrawerNavItem itemID="item1" title="Item 1" hidden={true} />).toJSON();
            expect(tree).toBeNull();
        });

        it('renders when hidden is false', () => {
            const tree = renderWithContext(<DrawerNavItem itemID="item1" title="Item 1" hidden={false} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders when hidden is undefined', () => {
            const tree = renderWithContext(<DrawerNavItem itemID="item1" title="Item 1" />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Color Props', () => {
        it('renders correctly with custom activeItemFontColor', () => {
            const tree = renderWithContext(
                <DrawerNavItem itemID="item1" title="Item 1" activeItemFontColor="red" />,
                'item1'
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with custom activeItemIconColor', () => {
            const icon = { name: 'home' };
            const tree = renderWithContext(
                <DrawerNavItem itemID="item1" title="Item 1" icon={icon} activeItemIconColor="blue" />,
                'item1'
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with custom activeItemBackgroundColor', () => {
            const tree = renderWithContext(
                <DrawerNavItem itemID="item1" title="Item 1" activeItemBackgroundColor="yellow" />,
                'item1'
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with custom itemFontColor', () => {
            const tree = renderWithContext(
                <DrawerNavItem itemID="item1" title="Item 1" itemFontColor="purple" />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with custom itemIconColor', () => {
            const icon = { name: 'home' };
            const tree = renderWithContext(
                <DrawerNavItem itemID="item1" title="Item 1" icon={icon} itemIconColor="orange" />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with custom chevronColor', () => {
            const tree = renderWithContext(
                <DrawerNavItem itemID="item1" title="Item 1" chevron={true} chevronColor="green" />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with custom activeChevronColor', () => {
            const tree = renderWithContext(
                <DrawerNavItem itemID="item1" title="Item 1" chevron={true} activeChevronColor="pink" />,
                'item1'
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with custom backgroundColor', () => {
            const tree = renderWithContext(
                <DrawerNavItem itemID="item1" title="Item 1" backgroundColor="lightblue" />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with custom nestedBackgroundColor', () => {
            const tree = renderWithContext(
                <DrawerNavItem itemID="item1" title="Item 1" nestedBackgroundColor="lightgray" depth={1} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('ActiveItemBackgroundShape', () => {
        it('renders correctly with square shape', () => {
            const tree = renderWithContext(
                <DrawerNavItem itemID="item1" title="Item 1" activeItemBackgroundShape="square" />,
                'item1'
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with round shape', () => {
            const tree = renderWithContext(
                <DrawerNavItem itemID="item1" title="Item 1" activeItemBackgroundShape="round" />,
                'item1'
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Callback Props', () => {
        it('renders correctly with onPress', () => {
            const onPress = jest.fn();
            const tree = renderWithContext(<DrawerNavItem itemID="item1" title="Item 1" onPress={onPress} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with notifyActiveParent', () => {
            const notifyActiveParent = jest.fn();
            const tree = renderWithContext(
                <DrawerNavItem itemID="item1" title="Item 1" notifyActiveParent={notifyActiveParent} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe('Style Props', () => {
        it('renders correctly with custom styles', () => {
            const customStyles = {
                root: { backgroundColor: 'blue' },
                activeBackground: { backgroundColor: 'red' },
                expandIcon: { marginLeft: 20 },
                infoListItem: {
                    root: { padding: 10 },
                    title: { fontSize: 16 },
                },
            };
            const tree = renderWithContext(
                <DrawerNavItem itemID="item1" title="Item 1" styles={customStyles} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('InfoListItemProps', () => {
        it('renders correctly with InfoListItemProps', () => {
            const InfoListItemProps = {
                dense: false,
                leftComponent: <Text>Left</Text>,
            };
            const tree = renderWithContext(
                <DrawerNavItem itemID="item1" title="Item 1" InfoListItemProps={InfoListItemProps} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('HidePadding Prop', () => {
        it('renders correctly with hidePadding enabled', () => {
            const tree = renderWithContext(<DrawerNavItem itemID="item1" title="Item 1" hidePadding={true} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with hidePadding disabled', () => {
            const tree = renderWithContext(
                <DrawerNavItem itemID="item1" title="Item 1" hidePadding={false} />
            ).toJSON();
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
                    primaryContainer: '#FF00FF',
                    onPrimaryContainer: '#00FFFF',
                    surfaceContainer: '#F0F0F0',
                },
            };
            const tree = renderWithContext(
                <DrawerNavItem itemID="item1" title="Item 1" theme={customTheme as any} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Edge Cases', () => {
        it('renders correctly with all props combined', () => {
            const icon = { name: 'home' };
            const items = [{ itemID: 'child1', title: 'Child 1' }];
            const rightComponent = <Text>Right</Text>;
            const onPress = jest.fn();
            const tree = renderWithContext(
                <DrawerNavItem
                    itemID="parent1"
                    title="Parent Item"
                    subtitle="Parent Subtitle"
                    icon={icon}
                    statusColor="blue"
                    items={items}
                    rightComponent={rightComponent}
                    onPress={onPress}
                    chevron={true}
                    divider={true}
                    activeItemBackgroundShape="round"
                    activeItemFontColor="red"
                    activeItemIconColor="blue"
                    backgroundColor="lightgray"
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with empty items array', () => {
            const tree = renderWithContext(<DrawerNavItem itemID="item1" title="Item 1" items={[]} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly without any optional props', () => {
            const tree = renderWithContext(<DrawerNavItem itemID="item1" title="Item 1" />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Active Hierarchy Changes', () => {
        it('expands when isInActiveTree changes to true', () => {
            const items = [{ itemID: 'child1', title: 'Child 1' }];
            const renderer = renderWithContext(
                <DrawerNavItem itemID="parent1" title="Parent 1" items={items} isInActiveTree={false} />
            );

            renderer.update(
                <DrawerContext.Provider value={{ ...mockDrawerContext, activeItem: 'child1' }}>
                    <NavGroupContext.Provider value={{ activeHierarchy: ['child1', 'parent1'] }}>
                        <DrawerNavItem itemID="parent1" title="Parent 1" items={items} isInActiveTree={true} />
                    </NavGroupContext.Provider>
                </DrawerContext.Provider>
            );

            const tree = renderer.toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('handles activeItem becoming active', () => {
            const notifyActiveParent = jest.fn();
            const renderer = renderWithContext(
                <DrawerNavItem itemID="item1" title="Item 1" notifyActiveParent={notifyActiveParent} />
            );

            renderer.update(
                <DrawerContext.Provider value={{ ...mockDrawerContext, activeItem: 'item1' }}>
                    <NavGroupContext.Provider value={mockNavGroupContext}>
                        <DrawerNavItem itemID="item1" title="Item 1" notifyActiveParent={notifyActiveParent} />
                    </NavGroupContext.Provider>
                </DrawerContext.Provider>
            );

            const tree = renderer.toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('User Interactions', () => {
        it('passes onPress callback to InfoListItem when onPress prop is provided', () => {
            const onPress = jest.fn();
            const tree = renderWithContext(<DrawerNavItem itemID="item1" title="Item 1" onPress={onPress} />).toJSON();

            // Verify the component renders with onPress
            expect(tree).toMatchSnapshot();
        });

        it('passes onPress callback to InfoListItem when item has nested items', () => {
            const items = [{ itemID: 'child1', title: 'Child 1' }];
            const tree = renderWithContext(<DrawerNavItem itemID="parent" title="Parent" items={items} />).toJSON();

            // Verify the component renders with expand/collapse capability
            expect(tree).toMatchSnapshot();
        });

        it('passes onPress callback to InfoListItem when item has children', () => {
            const tree = renderWithContext(
                <DrawerNavItem itemID="parent" title="Parent">
                    <DrawerNavItem itemID="child" title="Child" />
                </DrawerNavItem>
            ).toJSON();

            // Verify the component renders with expand/collapse capability
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Nested Children with notifyActiveParent', () => {
        it('passes notifyActiveParent callback to cloned children', () => {
            const notifyActiveParent = jest.fn();
            const tree = renderWithContext(
                <DrawerNavItem itemID="parent" title="Parent" notifyActiveParent={notifyActiveParent}>
                    <DrawerNavItem itemID="child1" title="Child 1" />
                    <DrawerNavItem itemID="child2" title="Child 2" />
                </DrawerNavItem>
            ).toJSON();

            expect(tree).toMatchSnapshot();
        });

        it('handles multiple levels of nested children', () => {
            const tree = renderWithContext(
                <DrawerNavItem itemID="level1" title="Level 1">
                    <DrawerNavItem itemID="level2" title="Level 2">
                        <DrawerNavItem itemID="level3" title="Level 3" />
                    </DrawerNavItem>
                </DrawerNavItem>
            ).toJSON();

            expect(tree).toMatchSnapshot();
        });
    });
});
