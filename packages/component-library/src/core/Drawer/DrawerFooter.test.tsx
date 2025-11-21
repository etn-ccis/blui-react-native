import React from 'react';
import { cleanup } from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import { DrawerFooter } from './DrawerFooter';
import { Text, View } from 'react-native';

describe('DrawerFooter', () => {
    afterEach(cleanup);

    it('renders correctly with minimal props', () => {
        const tree = TestRenderer.create(<DrawerFooter />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with children', () => {
        const tree = TestRenderer.create(
            <DrawerFooter>
                <View>
                    <Text>Footer Content</Text>
                </View>
            </DrawerFooter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with divider by default', () => {
        const tree = TestRenderer.create(
            <DrawerFooter>
                <Text>Content</Text>
            </DrawerFooter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders without divider when divider is false', () => {
        const tree = TestRenderer.create(
            <DrawerFooter divider={false}>
                <Text>Content</Text>
            </DrawerFooter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with divider when divider is true', () => {
        const tree = TestRenderer.create(
            <DrawerFooter divider={true}>
                <Text>Content</Text>
            </DrawerFooter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with complex children', () => {
        const tree = TestRenderer.create(
            <DrawerFooter>
                <View style={{ padding: 10 }}>
                    <Text>Version 1.0.0</Text>
                    <Text>© 2025 Company</Text>
                </View>
            </DrawerFooter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with null children', () => {
        const tree = TestRenderer.create(<DrawerFooter>{null as any}</DrawerFooter>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with undefined children', () => {
        const tree = TestRenderer.create(<DrawerFooter>{undefined}</DrawerFooter>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders without children prop', () => {
        const tree = TestRenderer.create(<DrawerFooter divider={true} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with conditional children', () => {
        const showVersion = true;
        const tree = TestRenderer.create(
            <DrawerFooter>{showVersion && <Text>Version 1.0.0</Text>}</DrawerFooter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with multiple child elements', () => {
        const tree = TestRenderer.create(
            <DrawerFooter>
                <View>
                    <Text>Line 1</Text>
                    <Text>Line 2</Text>
                    <Text>Line 3</Text>
                </View>
            </DrawerFooter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with divider=false and children', () => {
        const tree = TestRenderer.create(
            <DrawerFooter divider={false}>
                <View>
                    <Text>No Divider Above</Text>
                </View>
            </DrawerFooter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('has correct displayName', () => {
        expect(DrawerFooter.displayName).toBe('DrawerFooter');
    });

    it('renders with styled children', () => {
        const tree = TestRenderer.create(
            <DrawerFooter>
                <View style={{ backgroundColor: 'blue', padding: 20 }}>
                    <Text style={{ color: 'white' }}>Styled Footer</Text>
                </View>
            </DrawerFooter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with nested components', () => {
        const tree = TestRenderer.create(
            <DrawerFooter divider={true}>
                <View>
                    <View>
                        <Text>Nested Content</Text>
                    </View>
                </View>
            </DrawerFooter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly when divider prop changes', () => {
        const tree = TestRenderer.create(
            <DrawerFooter divider={true}>
                <Text>Content</Text>
            </DrawerFooter>
        );
        expect(tree.toJSON()).toMatchSnapshot();

        tree.update(
            <DrawerFooter divider={false}>
                <Text>Content</Text>
            </DrawerFooter>
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('renders with JSX expression as children', () => {
        const footerContent = (
            <View>
                <Text>Dynamic Content</Text>
            </View>
        );
        const tree = TestRenderer.create(<DrawerFooter>{footerContent}</DrawerFooter>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
