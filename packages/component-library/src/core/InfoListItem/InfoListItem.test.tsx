import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import { InfoListItem } from '.';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const OtherComponent = (): React.JSX.Element => <View />;

describe('InfoListItem', () => {
    describe('subtitle', () => {
        describe('string subtitle', () => {
            it('renders as a Text element when a string is passed in', () => {
                let renderer: TestRenderer.ReactTestRenderer | undefined;
                act(() => {
                    renderer = TestRenderer.create(<InfoListItem title={'some title'} subtitle={'some subtitle'} />);
                });
                const instance = renderer!.root;
                const textElements = instance.findAllByType(Text as any);

                expect(textElements).toHaveLength(2);
                expect(textElements[1].props.children).toEqual('some subtitle');
            });
        });

        describe('when subtitle is an array of a string and an icon', () => {
            it('renders Text elements for the title, string from subtitles, and interpunct separator', () => {
                let renderer: TestRenderer.ReactTestRenderer | undefined;
                act(() => {
                    renderer = TestRenderer.create(
                        <InfoListItem
                            title={'some title'}
                            subtitle={['details...', <OtherComponent key={'otherComponent_1'} />]}
                        />
                    );
                });
                const instance = renderer!.root;
                const textElements = instance.findAllByType(Text as any);

                expect(textElements).toHaveLength(3);
                expect(textElements[1].props.children).toEqual('details...');
                expect(textElements[2].props.children).toEqual('\u00B7');
            });

            it('renders Text elements for the title, string from subtitles, and CUSTOM interpunct separator', () => {
                let renderer: TestRenderer.ReactTestRenderer | undefined;
                act(() => {
                    renderer = TestRenderer.create(
                        <InfoListItem
                            title={'some title'}
                            subtitleSeparator={'-'}
                            subtitle={['details...', <OtherComponent key={'otherComponent_2'} />]}
                        />
                    );
                });
                const instance = renderer!.root;
                const textElements = instance.findAllByType(Text as any);

                expect(textElements).toHaveLength(3);
                expect(textElements[1].props.children).toEqual('details...');
                expect(textElements[2].props.children).toEqual('-');
            });

            it('renders the non-string subtitle element as it was given', () => {
                let renderer: TestRenderer.ReactTestRenderer | undefined;
                act(() => {
                    renderer = TestRenderer.create(
                        <InfoListItem
                            title={'some title'}
                            subtitle={['details...', <OtherComponent key={'otherComponent_1'} />]}
                        />
                    );
                });
                const instance = renderer!.root;
                const otherElement = instance.findAllByType(OtherComponent);
                expect(otherElement).toHaveLength(1);
            });
        });
    });

    describe('chevron', () => {
        describe('when provided', () => {
            it('appears when there is no rightComponent', () => {
                let renderer: TestRenderer.ReactTestRenderer | undefined;
                act(() => {
                    renderer = TestRenderer.create(<InfoListItem title={'some title'} chevron />);
                });
                const instance = renderer!.root;
                expect(instance.findAllByType(Icon as any)).toHaveLength(1);
            });

            it('appears when there is a rightComponent', () => {
                let renderer: TestRenderer.ReactTestRenderer | undefined;
                act(() => {
                    renderer = TestRenderer.create(
                        <InfoListItem title={'some title'} chevron rightComponent={<View />} />
                    );
                });
                const instance = renderer!.root;
                expect(instance.findAllByType(Icon as any)).toHaveLength(1);
            });
        });

        describe('when not provided', () => {
            let renderer: TestRenderer.ReactTestRenderer | undefined;
            beforeEach(() => {
                act(() => {
                    renderer = TestRenderer.create(
                        <InfoListItem
                            title={'some title'}
                            onPress={(): void => {
                                /* do nothing */
                            }}
                        />
                    );
                });
            });
            it('does not show its chevron', () => {
                const instance = renderer!.root;
                expect(instance.findAllByType(Icon as any)).toHaveLength(0);
            });
        });
    });
});
