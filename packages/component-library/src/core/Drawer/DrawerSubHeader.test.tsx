import React from 'react';
import { cleanup } from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import { DrawerSubheader } from './DrawerSubHeader';
import { Text, View } from 'react-native';

describe('DrawerSubheader', () => {
    afterEach(cleanup);

    describe('Basic Rendering', () => {
        it('renders correctly with minimal props', () => {
            const tree = TestRenderer.create(
                <DrawerSubheader>
                    <Text>Subheader Content</Text>
                </DrawerSubheader>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with text children', () => {
            const tree = TestRenderer.create(
                <DrawerSubheader>
                    <Text>Simple Text</Text>
                </DrawerSubheader>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with view children', () => {
            const tree = TestRenderer.create(
                <DrawerSubheader>
                    <View>
                        <Text>Subheader Content</Text>
                    </View>
                </DrawerSubheader>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with complex children', () => {
            const tree = TestRenderer.create(
                <DrawerSubheader>
                    <View style={{ padding: 16 }}>
                        <Text>Title</Text>
                        <Text>Subtitle</Text>
                    </View>
                </DrawerSubheader>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Divider Prop', () => {
        it('renders with divider by default', () => {
            const tree = TestRenderer.create(
                <DrawerSubheader>
                    <Text>Content</Text>
                </DrawerSubheader>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders without divider when divider is false', () => {
            const tree = TestRenderer.create(
                <DrawerSubheader divider={false}>
                    <Text>Content</Text>
                </DrawerSubheader>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with divider when divider is true', () => {
            const tree = TestRenderer.create(
                <DrawerSubheader divider={true}>
                    <Text>Content</Text>
                </DrawerSubheader>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with divider explicitly set to undefined', () => {
            const tree = TestRenderer.create(
                <DrawerSubheader divider={undefined}>
                    <Text>Content</Text>
                </DrawerSubheader>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Children Variations', () => {
        it('renders with multiple child elements in a container', () => {
            const tree = TestRenderer.create(
                <DrawerSubheader>
                    <View>
                        <Text>Line 1</Text>
                        <Text>Line 2</Text>
                        <Text>Line 3</Text>
                    </View>
                </DrawerSubheader>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with styled children', () => {
            const tree = TestRenderer.create(
                <DrawerSubheader>
                    <View style={{ backgroundColor: 'blue', padding: 10 }}>
                        <Text style={{ color: 'white' }}>Styled Content</Text>
                    </View>
                </DrawerSubheader>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with conditional children', () => {
            const showContent = true;
            const tree = TestRenderer.create(
                <DrawerSubheader>{showContent && <Text>Conditional Content</Text>}</DrawerSubheader>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with nested views', () => {
            const tree = TestRenderer.create(
                <DrawerSubheader>
                    <View>
                        <View>
                            <View>
                                <Text>Deeply Nested</Text>
                            </View>
                        </View>
                    </View>
                </DrawerSubheader>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Edge Cases', () => {
        it('renders with null children', () => {
            const tree = TestRenderer.create(<DrawerSubheader>{null as any}</DrawerSubheader>).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with undefined children', () => {
            const tree = TestRenderer.create(<DrawerSubheader>{undefined as any}</DrawerSubheader>).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with empty view', () => {
            const tree = TestRenderer.create(
                <DrawerSubheader>
                    <View />
                </DrawerSubheader>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders with false children and divider false', () => {
            const tree = TestRenderer.create(
                <DrawerSubheader divider={false}>{false as any}</DrawerSubheader>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Component Properties', () => {
        it('has correct displayName', () => {
            expect(DrawerSubheader.displayName).toBe('DrawerSubheader');
        });

        it('renders with all props combined', () => {
            const tree = TestRenderer.create(
                <DrawerSubheader divider={true}>
                    <View style={{ padding: 20, backgroundColor: 'lightgray' }}>
                        <Text>Full Props Example</Text>
                    </View>
                </DrawerSubheader>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Snapshot Tests', () => {
        it('matches snapshot with minimal configuration', () => {
            const tree = TestRenderer.create(
                <DrawerSubheader>
                    <Text>Snapshot Test</Text>
                </DrawerSubheader>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('matches snapshot without divider', () => {
            const tree = TestRenderer.create(
                <DrawerSubheader divider={false}>
                    <Text>No Divider</Text>
                </DrawerSubheader>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('matches snapshot with complex content', () => {
            const tree = TestRenderer.create(
                <DrawerSubheader divider={true}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <Text>Left</Text>
                        <Text>Right</Text>
                    </View>
                </DrawerSubheader>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
