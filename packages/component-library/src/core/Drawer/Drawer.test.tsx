import React from 'react';
import { cleanup } from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import { Drawer, getDefaultProps, processSectionChildren, makeStyles } from './Drawer';
import { DrawerHeader } from './DrawerHeader';
import { DrawerSubheader } from './DrawerSubHeader';
import { DrawerBody } from './DrawerBody';
import { DrawerFooter } from './DrawerFooter';
import { DrawerNavGroup } from './DrawerNavGroup';
import { DrawerNavItem } from './DrawerNavItem';
import { Text, View } from 'react-native';

describe('Drawer', () => {
    afterEach(cleanup);

    describe('Helper Functions', () => {
        it('getDefaultProps returns correct default values', () => {
            const defaults = getDefaultProps();
            expect(defaults.activeItemBackgroundShape).toBe('square');
            expect(defaults.chevron).toBe(false);
            expect(defaults.divider).toBe(false);
            expect(defaults.hidePadding).toBe(true);
            expect(defaults.styles).toEqual({});
        });

        it('makeStyles uses provided backgroundColor', () => {
            const props = { backgroundColor: '#FF0000' } as any;
            const theme = { colors: { surfaceContainerLow: '#DEFAULT' } } as any;
            const insets = { top: 0, right: 0, bottom: 0, left: 0 };

            const styles = makeStyles(props, theme, insets);
            expect(styles.root?.backgroundColor).toBe('#FF0000');
        });

        it('makeStyles uses theme color when backgroundColor is not provided', () => {
            const props = {} as any;
            const theme = { colors: { surfaceContainerLow: '#THEME_COLOR' } } as any;
            const insets = { top: 0, right: 0, bottom: 0, left: 0 };

            const styles = makeStyles(props, theme, insets);
            expect(styles.root?.backgroundColor).toBe('#THEME_COLOR');
        });

        it('makeStyles uses theme color when backgroundColor is undefined', () => {
            const props = { backgroundColor: undefined } as any;
            const theme = { colors: { surfaceContainerLow: '#THEME_DEFAULT' } } as any;
            const insets = { top: 0, right: 0, bottom: 0, left: 0 };

            const styles = makeStyles(props, theme, insets);
            expect(styles.root?.backgroundColor).toBe('#THEME_DEFAULT');
        });

        it('makeStyles applies insets to paddingBottom', () => {
            const props = {} as any;
            const theme = { colors: { surfaceContainerLow: '#000' } } as any;
            const insets = { top: 0, right: 0, bottom: 20, left: 0 };

            const styles = makeStyles(props, theme, insets);
            expect(styles.root?.paddingBottom).toBe(20);
        });

        it('processSectionChildren returns empty array when no matching children', () => {
            const children = <Text>Not a drawer component</Text>;
            const result = processSectionChildren(children, 'DrawerHeader', false, {}, {} as any, {} as any);
            expect(result).toEqual([]);
        });

        it('processSectionChildren returns matching child without inheritance', () => {
            const children = <DrawerHeader title="Test" />;
            const result = processSectionChildren(children, 'DrawerHeader', false, {}, {} as any, {} as any);
            expect(result.length).toBe(1);
            expect(result[0].type).toBe(DrawerHeader);
        });

        it('processSectionChildren applies inheritance when inherit is true', () => {
            const children = <DrawerBody />;
            const defaultProps = { chevron: true, divider: true };
            const props = { activeItemBackgroundColor: 'red', itemIconColor: 'blue' };
            const theme = { colors: { primary: '#000' } };

            const result = processSectionChildren(
                children,
                'DrawerBody',
                true,
                defaultProps,
                props as any,
                theme as any
            );
            expect(result.length).toBe(1);
            expect(result[0].props.chevron).toBe(true);
            expect(result[0].props.divider).toBe(true);
            expect(result[0].props.activeItemBackgroundColor).toBe('red');
        });

        it('processSectionChildren does not apply inheritance when inherit is false', () => {
            const children = <DrawerHeader title="Test" />;
            const defaultProps = { chevron: true };
            const props = { activeItemBackgroundColor: 'red' };

            const result = processSectionChildren(
                children,
                'DrawerHeader',
                false,
                defaultProps,
                props as any,
                {} as any
            );
            expect(result.length).toBe(1);
            // Props should not be inherited
            expect(result[0].props.chevron).toBeUndefined();
            expect(result[0].props.activeItemBackgroundColor).toBeUndefined();
        });

        it('processSectionChildren handles multiple children and returns only first', () => {
            const children = [<DrawerHeader key="1" title="First" />, <DrawerHeader key="2" title="Second" />];
            const result = processSectionChildren(children, 'DrawerHeader', false, {}, {} as any, {} as any);
            expect(result.length).toBe(1);
            expect(result[0].props.title).toBe('First');
        });

        it('processSectionChildren handles null children', () => {
            const result = processSectionChildren(null, 'DrawerHeader', false, {}, {} as any, {} as any);
            expect(result).toEqual([]);
        });

        it('processSectionChildren handles undefined children', () => {
            const result = processSectionChildren(undefined, 'DrawerHeader', false, {}, {} as any, {} as any);
            expect(result).toEqual([]);
        });
    });

    it('renders correctly with minimal props', () => {
        const tree = TestRenderer.create(<Drawer />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with DrawerHeader', () => {
        const tree = TestRenderer.create(
            <Drawer>
                <DrawerHeader title="Test Header" />
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with DrawerSubheader', () => {
        const tree = TestRenderer.create(
            <Drawer>
                <DrawerSubheader>
                    <Text>Test Subheader</Text>
                </DrawerSubheader>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with DrawerBody', () => {
        const tree = TestRenderer.create(
            <Drawer>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with DrawerFooter', () => {
        const tree = TestRenderer.create(
            <Drawer>
                <DrawerFooter>
                    <Text>Footer Content</Text>
                </DrawerFooter>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with all sections', () => {
        const tree = TestRenderer.create(
            <Drawer>
                <DrawerHeader title="Test Header" />
                <DrawerSubheader>
                    <Text>Test Subheader</Text>
                </DrawerSubheader>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                        <DrawerNavItem itemID="item2" title="Item 2" />
                    </DrawerNavGroup>
                </DrawerBody>
                <DrawerFooter>
                    <Text>Footer Content</Text>
                </DrawerFooter>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with activeItem prop', () => {
        const tree = TestRenderer.create(
            <Drawer activeItem="item1">
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                        <DrawerNavItem itemID="item2" title="Item 2" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with onItemSelect callback', () => {
        const onItemSelect = jest.fn();
        const tree = TestRenderer.create(
            <Drawer onItemSelect={onItemSelect}>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with custom backgroundColor', () => {
        const tree = TestRenderer.create(<Drawer backgroundColor="red" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with custom styles', () => {
        const tree = TestRenderer.create(
            <Drawer styles={{ root: { backgroundColor: 'blue', padding: 10 } }} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with custom style prop', () => {
        const tree = TestRenderer.create(<Drawer style={{ margin: 20 }} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with activeChevronColor prop', () => {
        const tree = TestRenderer.create(
            <Drawer activeChevronColor="green">
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with activeItemBackgroundColor prop', () => {
        const tree = TestRenderer.create(
            <Drawer activeItemBackgroundColor="yellow">
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with activeItemBackgroundShape prop', () => {
        const tree = TestRenderer.create(
            <Drawer activeItemBackgroundShape="round">
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with activeItemFontColor prop', () => {
        const tree = TestRenderer.create(
            <Drawer activeItemFontColor="purple">
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with activeItemIconColor prop', () => {
        const tree = TestRenderer.create(
            <Drawer activeItemIconColor="orange">
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with chevron prop', () => {
        const tree = TestRenderer.create(
            <Drawer chevron={true}>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with chevronColor prop', () => {
        const tree = TestRenderer.create(
            <Drawer chevronColor="pink">
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with collapseIcon prop', () => {
        const tree = TestRenderer.create(
            <Drawer collapseIcon={{ name: 'expand-less' }}>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with expandIcon prop', () => {
        const tree = TestRenderer.create(
            <Drawer expandIcon={{ name: 'expand-more' }}>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with disableActiveItemParentStyles prop', () => {
        const tree = TestRenderer.create(
            <Drawer disableActiveItemParentStyles={true}>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with divider prop', () => {
        const tree = TestRenderer.create(
            <Drawer divider={true}>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with hidePadding prop set to false', () => {
        const tree = TestRenderer.create(
            <Drawer hidePadding={false}>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with itemFontColor prop', () => {
        const tree = TestRenderer.create(
            <Drawer itemFontColor="navy">
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with itemIconColor prop', () => {
        const tree = TestRenderer.create(
            <Drawer itemIconColor="teal">
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with nestedBackgroundColor prop', () => {
        const tree = TestRenderer.create(
            <Drawer nestedBackgroundColor="lightgray">
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with nestedDivider prop', () => {
        const tree = TestRenderer.create(
            <Drawer nestedDivider={true}>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with theme override', () => {
        const customTheme = {
            colors: {
                surfaceContainerLow: '#123456',
            },
        };
        const tree = TestRenderer.create(<Drawer theme={customTheme} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with multiple DrawerHeaders (only renders first)', () => {
        const tree = TestRenderer.create(
            <Drawer>
                <DrawerHeader title="First Header" />
                <DrawerHeader title="Second Header" />
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with multiple DrawerSubheaders (only renders first)', () => {
        const tree = TestRenderer.create(
            <Drawer>
                <DrawerSubheader>
                    <Text>First Subheader</Text>
                </DrawerSubheader>
                <DrawerSubheader>
                    <Text>Second Subheader</Text>
                </DrawerSubheader>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with multiple DrawerBodies (only renders first)', () => {
        const tree = TestRenderer.create(
            <Drawer>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item2" title="Item 2" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with multiple DrawerFooters (only renders first)', () => {
        const tree = TestRenderer.create(
            <Drawer>
                <DrawerFooter>
                    <Text>First Footer</Text>
                </DrawerFooter>
                <DrawerFooter>
                    <Text>Second Footer</Text>
                </DrawerFooter>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with non-drawer children (should be ignored)', () => {
        const tree = TestRenderer.create(
            <Drawer>
                <Text>Random Text</Text>
                <DrawerHeader title="Test Header" />
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('passes DrawerContext values correctly', () => {
        const onItemSelect = jest.fn();
        const component = TestRenderer.create(
            <Drawer activeItem="item1" onItemSelect={onItemSelect}>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('inherits shared props to DrawerBody', () => {
        const tree = TestRenderer.create(
            <Drawer
                chevron={true}
                divider={true}
                activeItemBackgroundColor="red"
                activeItemFontColor="blue"
                itemIconColor="green"
            >
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with additional ViewProps', () => {
        const tree = TestRenderer.create(
            <Drawer testID="drawer-test-id" accessible={true} accessibilityLabel="Navigation Drawer" />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('applies combined styles from styles prop and style prop', () => {
        const tree = TestRenderer.create(
            <Drawer styles={{ root: { paddingTop: 10 } }} style={{ marginLeft: 5, backgroundColor: 'white' }} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders without backgroundColor to use default theme color', () => {
        const tree = TestRenderer.create(<Drawer />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('inherits all shared props to DrawerBody when specified', () => {
        const tree = TestRenderer.create(
            <Drawer
                activeChevronColor="red"
                activeItemBackgroundColor="blue"
                activeItemBackgroundShape="round"
                activeItemFontColor="green"
                activeItemIconColor="yellow"
                backgroundColor="white"
                chevron={true}
                chevronColor="purple"
                collapseIcon={{ name: 'collapse' }}
                disableActiveItemParentStyles={true}
                divider={true}
                expandIcon={{ name: 'expand' }}
                hidePadding={false}
                itemFontColor="orange"
                itemIconColor="pink"
                nestedBackgroundColor="gray"
                nestedDivider={true}
            >
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders DrawerBody with child props overriding parent props', () => {
        const tree = TestRenderer.create(
            <Drawer chevron={true} divider={false} activeItemBackgroundColor="red">
                <DrawerBody chevron={false} divider={true} activeItemBackgroundColor="blue">
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with empty children', () => {
        const tree = TestRenderer.create(<Drawer>{null}</Drawer>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with undefined children', () => {
        const tree = TestRenderer.create(<Drawer>{undefined}</Drawer>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('handles mixed valid and invalid children', () => {
        const tree = TestRenderer.create(
            <Drawer>
                <DrawerHeader title="Header" />
                {null}
                {undefined}
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
                {false}
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly when only first of each section type is used', () => {
        const tree = TestRenderer.create(
            <Drawer>
                <DrawerHeader title="First" />
                <DrawerHeader title="Second (ignored)" />
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="First Body" />
                    </DrawerNavGroup>
                </DrawerBody>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item2" title="Second Body (ignored)" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('applies theme override correctly', () => {
        const customTheme = {
            colors: {
                surfaceContainerLow: '#FF0000',
                surface: '#00FF00',
            },
        };
        const tree = TestRenderer.create(
            <Drawer theme={customTheme}>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('passes context values through DrawerContext', () => {
        const mockOnItemSelect = jest.fn();
        const tree = TestRenderer.create(
            <Drawer activeItem="test-item" onItemSelect={mockOnItemSelect}>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="test-item" title="Test Item" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with all default props explicitly set', () => {
        const tree = TestRenderer.create(
            <Drawer activeItemBackgroundShape="square" chevron={false} divider={false} hidePadding={true} styles={{}}>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders multiple sections and only shows first of each type', () => {
        const tree = TestRenderer.create(
            <Drawer>
                <DrawerHeader title="Header 1" />
                <DrawerHeader title="Header 2" />
                <DrawerSubheader>
                    <Text>Subheader 1</Text>
                </DrawerSubheader>
                <DrawerSubheader>
                    <Text>Subheader 2</Text>
                </DrawerSubheader>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="body1" title="Body 1" />
                    </DrawerNavGroup>
                </DrawerBody>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="body2" title="Body 2" />
                    </DrawerNavGroup>
                </DrawerBody>
                <DrawerFooter>
                    <Text>Footer 1</Text>
                </DrawerFooter>
                <DrawerFooter>
                    <Text>Footer 2</Text>
                </DrawerFooter>
            </Drawer>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('verifies complete prop inheritance scenario', () => {
        const tree = TestRenderer.create(
            <Drawer chevron={true} divider={true} itemIconColor="red" activeItemBackgroundColor="blue">
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('verifies child prop override scenario', () => {
        const tree = TestRenderer.create(
            <Drawer chevron={true} divider={false}>
                <DrawerBody chevron={false} divider={true}>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('verifies theme passing scenario', () => {
        const customTheme = {
            colors: {
                primary: '#FF0000',
                surfaceContainerLow: '#00FF00',
            },
        };

        const tree = TestRenderer.create(
            <Drawer theme={customTheme}>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('uses theme default color when backgroundColor is not provided', () => {
        const tree = TestRenderer.create(
            <Drawer>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('uses provided backgroundColor over theme default', () => {
        const tree = TestRenderer.create(
            <Drawer backgroundColor="#CUSTOM">
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders all four section types correctly', () => {
        const tree = TestRenderer.create(
            <Drawer>
                <DrawerHeader title="Header" subtitle="Subtitle" />
                <DrawerSubheader>
                    <Text>Subheader Text</Text>
                </DrawerSubheader>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="nav1" title="Nav Item" />
                    </DrawerNavGroup>
                </DrawerBody>
                <DrawerFooter>
                    <Text>Footer Text</Text>
                </DrawerFooter>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('handles DrawerBody with inherited props from parent Drawer', () => {
        const tree = TestRenderer.create(
            <Drawer
                chevron={true}
                divider={true}
                activeItemBackgroundColor="red"
                activeItemBackgroundShape="round"
                activeItemFontColor="white"
                activeItemIconColor="yellow"
                itemFontColor="black"
                itemIconColor="gray"
            >
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem itemID="item1" title="Item 1" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('processes sections without crashing when children is an empty array', () => {
        const tree = TestRenderer.create(<Drawer>{[]}</Drawer>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('handles complex nested structure', () => {
        const tree = TestRenderer.create(
            <Drawer activeItem="active-id" onItemSelect={jest.fn()}>
                <DrawerHeader title="Complex" subtitle="Test" icon={{ name: 'menu' }} />
                <DrawerSubheader divider={true}>
                    <View>
                        <Text>Custom Subheader Content</Text>
                    </View>
                </DrawerSubheader>
                <DrawerBody chevron={true} divider={true}>
                    <DrawerNavGroup title="Group 1">
                        <DrawerNavItem itemID="item1" title="Item 1" icon={{ name: 'home' }} />
                        <DrawerNavItem itemID="active-id" title="Active Item" icon={{ name: 'star' }} />
                        <DrawerNavItem itemID="item3" title="Item 3" icon={{ name: 'settings' }} />
                    </DrawerNavGroup>
                    <DrawerNavGroup title="Group 2">
                        <DrawerNavItem itemID="item4" title="Item 4" />
                    </DrawerNavGroup>
                </DrawerBody>
                <DrawerFooter>
                    <View>
                        <Text>Version 1.0.0</Text>
                    </View>
                </DrawerFooter>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with explicit backgroundColor value provided', () => {
        const tree = TestRenderer.create(
            <Drawer backgroundColor="#FF5733">
                <DrawerHeader title="Custom BG" />
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with undefined backgroundColor to use theme default', () => {
        const tree = TestRenderer.create(
            <Drawer backgroundColor={undefined}>
                <DrawerHeader title="Default BG" />
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders and invokes getSectionByDisplayName for all section types', () => {
        const tree = TestRenderer.create(
            <Drawer>
                <DrawerHeader title="Header" />
                <DrawerSubheader>
                    <Text>Subheader Content</Text>
                </DrawerSubheader>
                <DrawerBody>
                    <DrawerNavItem itemID="test" title="Test" />
                </DrawerBody>
                <DrawerFooter>
                    <Text>Footer</Text>
                </DrawerFooter>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('updates when children change to trigger useCallback dependencies', () => {
        const tree1 = TestRenderer.create(
            <Drawer activeItem="item1">
                <DrawerBody>
                    <DrawerNavItem itemID="item1" title="Item 1" />
                </DrawerBody>
            </Drawer>
        );
        tree1.update(
            <Drawer activeItem="item2">
                <DrawerBody>
                    <DrawerNavItem itemID="item2" title="Item 2" />
                </DrawerBody>
            </Drawer>
        );

        expect(tree1.toJSON()).toMatchSnapshot();
    });

    it('handles theme override properly', () => {
        const customTheme = {
            colors: {
                surfaceContainerLow: '#custom-color',
                primary: '#000',
            },
        };

        const tree = TestRenderer.create(
            <Drawer theme={customTheme as any}>
                <DrawerHeader title="Theme Override" />
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with all possible view props', () => {
        const tree = TestRenderer.create(
            <Drawer accessible={true} accessibilityLabel="Drawer" testID="test-drawer">
                <DrawerHeader title="With Props" />
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('handles complex children array with mixed section types', () => {
        const tree = TestRenderer.create(
            <Drawer>
                {[
                    <DrawerHeader key="h1" title="Header 1" />,
                    <DrawerSubheader key="s1">
                        <Text>Subheader Text</Text>
                    </DrawerSubheader>,
                    <DrawerBody key="b1">
                        <DrawerNavItem itemID="i1" title="Item" />
                    </DrawerBody>,
                    <DrawerFooter key="f1">
                        <Text>Footer</Text>
                    </DrawerFooter>,
                ]}
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with conditional children', () => {
        const showFooter = true;
        const tree = TestRenderer.create(
            <Drawer>
                <DrawerHeader title="Header" />
                {showFooter && (
                    <DrawerFooter>
                        <Text>Conditional Footer</Text>
                    </DrawerFooter>
                )}
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('handles null/undefined/false children', () => {
        const tree = TestRenderer.create(
            <Drawer>
                {null}
                {undefined}
                {false}
                <DrawerHeader title="Valid Header" />
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('processes sections with inherit flag variations', () => {
        const tree = TestRenderer.create(
            <Drawer chevron={true} divider={true}>
                <DrawerHeader title="No Inherit" />
                <DrawerBody>
                    <DrawerNavItem itemID="inherit" title="Inherits Props" />
                </DrawerBody>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('executes onItemSelect callback when provided', () => {
        const mockCallback = jest.fn();
        TestRenderer.create(
            <Drawer onItemSelect={mockCallback} activeItem="item1">
                <DrawerBody>
                    <DrawerNavItem itemID="item1" title="Item 1" />
                    <DrawerNavItem itemID="item2" title="Item 2" />
                </DrawerBody>
            </Drawer>
        );
        expect(mockCallback).not.toHaveBeenCalled(); // Callback not invoked during render
    });

    it('renders with different theme values to trigger makeStyles', () => {
        const customTheme = {
            colors: {
                surfaceContainerLow: '#CUSTOM123',
                primary: '#PRIMARY',
            },
        };
        const tree = TestRenderer.create(
            <Drawer theme={customTheme as any}>
                <DrawerHeader title="Custom Theme" />
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('re-renders with different children to trigger useCallback dependencies', () => {
        const renderer = TestRenderer.create(
            <Drawer>
                <DrawerHeader title="First Header" />
            </Drawer>
        );

        renderer.update(
            <Drawer>
                <DrawerFooter>
                    <Text>Updated Footer</Text>
                </DrawerFooter>
            </Drawer>
        );

        const snapshot = renderer.toJSON();
        expect(snapshot).toMatchSnapshot();
    });

    it('updates props to trigger dependency array changes', () => {
        const renderer = TestRenderer.create(
            <Drawer activeItem="item1" chevron={false}>
                <DrawerBody>
                    <DrawerNavItem itemID="item1" title="Item 1" />
                </DrawerBody>
            </Drawer>
        );

        renderer.update(
            <Drawer activeItem="item2" chevron={true}>
                <DrawerBody>
                    <DrawerNavItem itemID="item2" title="Item 2" />
                </DrawerBody>
            </Drawer>
        );

        expect(renderer.toJSON()).toMatchSnapshot();
    });

    it('renders with multiple getSectionByDisplayName calls through different section types', () => {
        const tree = TestRenderer.create(
            <Drawer>
                <DrawerHeader title="Header Section" />
                <DrawerSubheader divider={false}>
                    <Text>Subheader Section</Text>
                </DrawerSubheader>
                <DrawerBody chevron={true}>
                    <DrawerNavItem itemID="id1" title="Body Section" />
                </DrawerBody>
                <DrawerFooter>
                    <View>
                        <Text>Footer Section</Text>
                    </View>
                </DrawerFooter>
            </Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
