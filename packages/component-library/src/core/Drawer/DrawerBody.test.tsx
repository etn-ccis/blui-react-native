import React from 'react';
import { cleanup } from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import { DrawerBody } from './DrawerBody';
import { DrawerNavGroup } from './DrawerNavGroup';
import { DrawerNavItem } from './DrawerNavItem';
import { Text, View } from 'react-native';

describe('DrawerBody', () => {
    afterEach(cleanup);

    it('renders correctly with minimal props', () => {
        const tree = TestRenderer.create(<DrawerBody />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with children', () => {
        const tree = TestRenderer.create(
            <DrawerBody>
                <DrawerNavItem itemID="item1" title="Item 1" />
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with multiple DrawerNavGroup children', () => {
        const tree = TestRenderer.create(
            <DrawerBody>
                <DrawerNavGroup title="Group 1">
                    <DrawerNavItem itemID="item1" title="Item 1" />
                    <DrawerNavItem itemID="item2" title="Item 2" />
                </DrawerNavGroup>
                <DrawerNavGroup title="Group 2">
                    <DrawerNavItem itemID="item3" title="Item 3" />
                </DrawerNavGroup>
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with custom styles', () => {
        const tree = TestRenderer.create(
            <DrawerBody styles={{ root: { backgroundColor: 'blue', padding: 10 } }}>
                <DrawerNavItem itemID="item1" title="Item 1" />
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with style prop', () => {
        const tree = TestRenderer.create(
            <DrawerBody style={{ marginTop: 20 }}>
                <DrawerNavItem itemID="item1" title="Item 1" />
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with combined styles and style props', () => {
        const tree = TestRenderer.create(
            <DrawerBody styles={{ root: { padding: 5 } }} style={{ marginLeft: 10 }}>
                <DrawerNavItem itemID="item1" title="Item 1" />
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('inherits chevron prop to DrawerNavGroup children', () => {
        const tree = TestRenderer.create(
            <DrawerBody chevron={true}>
                <DrawerNavGroup title="Group">
                    <DrawerNavItem itemID="item1" title="Item 1" />
                </DrawerNavGroup>
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('inherits divider prop to DrawerNavGroup children', () => {
        const tree = TestRenderer.create(
            <DrawerBody divider={true}>
                <DrawerNavGroup title="Group">
                    <DrawerNavItem itemID="item1" title="Item 1" />
                </DrawerNavGroup>
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('inherits activeItemBackgroundColor prop to DrawerNavGroup children', () => {
        const tree = TestRenderer.create(
            <DrawerBody activeItemBackgroundColor="red">
                <DrawerNavGroup title="Group">
                    <DrawerNavItem itemID="item1" title="Item 1" />
                </DrawerNavGroup>
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('inherits activeItemBackgroundShape prop to DrawerNavGroup children', () => {
        const tree = TestRenderer.create(
            <DrawerBody activeItemBackgroundShape="round">
                <DrawerNavGroup title="Group">
                    <DrawerNavItem itemID="item1" title="Item 1" />
                </DrawerNavGroup>
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('inherits activeItemFontColor prop to DrawerNavGroup children', () => {
        const tree = TestRenderer.create(
            <DrawerBody activeItemFontColor="blue">
                <DrawerNavGroup title="Group">
                    <DrawerNavItem itemID="item1" title="Item 1" />
                </DrawerNavGroup>
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('inherits activeItemIconColor prop to DrawerNavGroup children', () => {
        const tree = TestRenderer.create(
            <DrawerBody activeItemIconColor="green">
                <DrawerNavGroup title="Group">
                    <DrawerNavItem itemID="item1" title="Item 1" />
                </DrawerNavGroup>
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('inherits backgroundColor prop to DrawerNavGroup children', () => {
        const tree = TestRenderer.create(
            <DrawerBody backgroundColor="white">
                <DrawerNavGroup title="Group">
                    <DrawerNavItem itemID="item1" title="Item 1" />
                </DrawerNavGroup>
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('inherits chevronColor prop to DrawerNavGroup children', () => {
        const tree = TestRenderer.create(
            <DrawerBody chevronColor="gray">
                <DrawerNavGroup title="Group">
                    <DrawerNavItem itemID="item1" title="Item 1" />
                </DrawerNavGroup>
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('inherits activeChevronColor prop to DrawerNavGroup children', () => {
        const tree = TestRenderer.create(
            <DrawerBody activeChevronColor="orange">
                <DrawerNavGroup title="Group">
                    <DrawerNavItem itemID="item1" title="Item 1" />
                </DrawerNavGroup>
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('inherits collapseIcon prop to DrawerNavGroup children', () => {
        const tree = TestRenderer.create(
            <DrawerBody collapseIcon={{ name: 'collapse' }}>
                <DrawerNavGroup title="Group">
                    <DrawerNavItem itemID="item1" title="Item 1" />
                </DrawerNavGroup>
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('inherits expandIcon prop to DrawerNavGroup children', () => {
        const tree = TestRenderer.create(
            <DrawerBody expandIcon={{ name: 'expand' }}>
                <DrawerNavGroup title="Group">
                    <DrawerNavItem itemID="item1" title="Item 1" />
                </DrawerNavGroup>
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('inherits hidePadding prop to DrawerNavGroup children', () => {
        const tree = TestRenderer.create(
            <DrawerBody hidePadding={false}>
                <DrawerNavGroup title="Group">
                    <DrawerNavItem itemID="item1" title="Item 1" />
                </DrawerNavGroup>
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('inherits itemFontColor prop to DrawerNavGroup children', () => {
        const tree = TestRenderer.create(
            <DrawerBody itemFontColor="purple">
                <DrawerNavGroup title="Group">
                    <DrawerNavItem itemID="item1" title="Item 1" />
                </DrawerNavGroup>
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('inherits itemIconColor prop to DrawerNavGroup children', () => {
        const tree = TestRenderer.create(
            <DrawerBody itemIconColor="pink">
                <DrawerNavGroup title="Group">
                    <DrawerNavItem itemID="item1" title="Item 1" />
                </DrawerNavGroup>
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('inherits nestedBackgroundColor prop to DrawerNavGroup children', () => {
        const tree = TestRenderer.create(
            <DrawerBody nestedBackgroundColor="lightgray">
                <DrawerNavGroup title="Group">
                    <DrawerNavItem itemID="item1" title="Item 1" />
                </DrawerNavGroup>
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('inherits nestedDivider prop to DrawerNavGroup children', () => {
        const tree = TestRenderer.create(
            <DrawerBody nestedDivider={true}>
                <DrawerNavGroup title="Group">
                    <DrawerNavItem itemID="item1" title="Item 1" />
                </DrawerNavGroup>
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('inherits disableActiveItemParentStyles prop to DrawerNavGroup children', () => {
        const tree = TestRenderer.create(
            <DrawerBody disableActiveItemParentStyles={true}>
                <DrawerNavGroup title="Group">
                    <DrawerNavItem itemID="item1" title="Item 1" />
                </DrawerNavGroup>
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('child props override inherited props', () => {
        const tree = TestRenderer.create(
            <DrawerBody chevron={true} divider={false}>
                <DrawerNavGroup title="Group" chevron={false} divider={true}>
                    <DrawerNavItem itemID="item1" title="Item 1" />
                </DrawerNavGroup>
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders non-DrawerNavGroup children without modification', () => {
        const tree = TestRenderer.create(
            <DrawerBody chevron={true}>
                <View>
                    <Text>Custom Content</Text>
                </View>
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders mixed children (DrawerNavGroup and other elements)', () => {
        const tree = TestRenderer.create(
            <DrawerBody chevron={true}>
                <View>
                    <Text>Header</Text>
                </View>
                <DrawerNavGroup title="Group">
                    <DrawerNavItem itemID="item1" title="Item 1" />
                </DrawerNavGroup>
                <View>
                    <Text>Footer</Text>
                </View>
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('handles null children', () => {
        const tree = TestRenderer.create(
            <DrawerBody>
                {null}
                <DrawerNavItem itemID="item1" title="Item 1" />
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('handles undefined children', () => {
        const tree = TestRenderer.create(
            <DrawerBody>
                {undefined}
                <DrawerNavItem itemID="item1" title="Item 1" />
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('handles false children', () => {
        const tree = TestRenderer.create(
            <DrawerBody>
                {false}
                <DrawerNavItem itemID="item1" title="Item 1" />
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('handles conditional children', () => {
        const showItem = true;
        const tree = TestRenderer.create(
            <DrawerBody>{showItem && <DrawerNavItem itemID="item1" title="Item 1" />}</DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with ScrollView props', () => {
        const tree = TestRenderer.create(
            <DrawerBody showsVerticalScrollIndicator={false} bounces={false}>
                <DrawerNavItem itemID="item1" title="Item 1" />
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with accessibility props', () => {
        const tree = TestRenderer.create(
            <DrawerBody accessible={true} accessibilityLabel="Navigation Body" testID="drawer-body">
                <DrawerNavItem itemID="item1" title="Item 1" />
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with all inheritable props', () => {
        const tree = TestRenderer.create(
            <DrawerBody
                activeChevronColor="red"
                activeItemBackgroundColor="blue"
                activeItemBackgroundShape="round"
                activeItemFontColor="white"
                activeItemIconColor="yellow"
                backgroundColor="black"
                chevron={true}
                chevronColor="gray"
                collapseIcon={{ name: 'collapse' }}
                disableActiveItemParentStyles={true}
                divider={true}
                expandIcon={{ name: 'expand' }}
                hidePadding={false}
                itemFontColor="green"
                itemIconColor="purple"
                nestedBackgroundColor="lightblue"
                nestedDivider={true}
            >
                <DrawerNavGroup title="Group">
                    <DrawerNavItem itemID="item1" title="Item 1" />
                </DrawerNavGroup>
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with empty children array', () => {
        const tree = TestRenderer.create(<DrawerBody>{[]}</DrawerBody>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with multiple DrawerNavGroups and inherits props correctly', () => {
        const tree = TestRenderer.create(
            <DrawerBody chevron={true} divider={true} activeItemBackgroundColor="red">
                <DrawerNavGroup title="Group 1">
                    <DrawerNavItem itemID="item1" title="Item 1" />
                </DrawerNavGroup>
                <DrawerNavGroup title="Group 2">
                    <DrawerNavItem itemID="item2" title="Item 2" />
                </DrawerNavGroup>
                <DrawerNavGroup title="Group 3">
                    <DrawerNavItem itemID="item3" title="Item 3" />
                </DrawerNavGroup>
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('has correct displayName', () => {
        expect(DrawerBody.displayName).toBe('DrawerBody');
    });

    it('renders with theme override', () => {
        const customTheme = {
            colors: {
                primary: '#000',
            },
        };
        const tree = TestRenderer.create(
            <DrawerBody theme={customTheme as any}>
                <DrawerNavItem itemID="item1" title="Item 1" />
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders children array with key prop', () => {
        const items = [
            <DrawerNavGroup key="g1" title="Group 1">
                <DrawerNavItem itemID="item1" title="Item 1" />
            </DrawerNavGroup>,
            <DrawerNavGroup key="g2" title="Group 2">
                <DrawerNavItem itemID="item2" title="Item 2" />
            </DrawerNavGroup>,
        ];
        const tree = TestRenderer.create(<DrawerBody>{items}</DrawerBody>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('applies props to DrawerNavGroup when child has partial props', () => {
        const tree = TestRenderer.create(
            <DrawerBody chevron={true} divider={true} activeItemBackgroundColor="red">
                <DrawerNavGroup title="Group" chevron={false}>
                    <DrawerNavItem itemID="item1" title="Item 1" />
                </DrawerNavGroup>
            </DrawerBody>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
