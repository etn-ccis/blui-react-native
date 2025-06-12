import React from 'react';
import TestRenderer, { act, ReactTestInstance } from 'react-test-renderer';
import { View } from 'react-native';
import { Hero } from '..';
import { IconFamily } from '../__types__';
import { ScoreCard } from './ScoreCard';

const Line: IconFamily = { family: 'material-community', name: 'chart-line-variant' };

describe('ScoreCard', () => {
    describe('headerText', () => {
        describe('when a single string is passed in as headerText', () => {
            let instance: ReactTestInstance;
            beforeEach(async () => {
                let renderer: TestRenderer.ReactTestRenderer;
                await act(() => {
                    renderer = TestRenderer.create(<ScoreCard headerTitle={'Hello'} />);
                });
                instance = renderer!.root;
            });

            it('finds a single header text element', () => {
                expect(instance.find((x: any) => x.props.testID === 'header_title')).toBeTruthy();
                expect(instance.findAll((x: any) => x.props.testID === 'header_subtitle')).toHaveLength(0);
                expect(instance.findAll((x: any) => x.props.testID === 'header_info')).toHaveLength(0);
            });
        });

        describe('when an array of three strings is passed', () => {
            let instance: ReactTestInstance;
            beforeEach(async () => {
                let renderer: TestRenderer.ReactTestRenderer;
                await act(() => {
                    renderer = TestRenderer.create(
                        <ScoreCard
                            headerTitle={'Portland Datacenter Long Name'}
                            headerSubtitle={'6 UPS Devices'}
                            headerInfo={'Attention Required'}
                        />
                    );
                });
                instance = renderer!.root;
            });

            it('renders at all three', () => {
                expect(instance.find((x: any) => x.props.testID === 'header_title')).toBeTruthy();
                expect(instance.find((x: any) => x.props.testID === 'header_subtitle')).toBeTruthy();
                expect(instance.find((x: any) => x.props.testID === 'header_info')).toBeTruthy();
            });
        });
    });

    describe('actionRow', () => {
        describe('when present', () => {
            let instance: ReactTestInstance;
            beforeEach(async () => {
                let renderer: TestRenderer.ReactTestRenderer;
                await act(() => {
                    renderer = TestRenderer.create(
                        <ScoreCard headerTitle={'Hello'} actionRow={<View testID={'my-action'} />} />
                    );
                });
                instance = renderer!.root;
            });

            it('is rendered', () => {
                expect(instance.find((x: any) => x.props.testID === 'my-action')).toBeTruthy();
            });
        });
    });

    describe('badge', () => {
        describe('when present', () => {
            let instance: ReactTestInstance;
            beforeEach(async () => {
                let renderer: TestRenderer.ReactTestRenderer;
                await act(() => {
                    renderer = TestRenderer.create(
                        <ScoreCard
                            headerTitle={'Hello'}
                            badge={<Hero testID={'my-badge'} label={'...'} icon={Line} />}
                        />
                    );
                });
                instance = renderer!.root;
            });

            it('is rendered', () => {
                expect(instance.find((x: any) => x.props.testID === 'my-badge')).toBeTruthy();
            });
        });
    });

    describe('actionItems', () => {
        describe('when 2 actionItems are passed in', () => {
            let instance: ReactTestInstance;
            let firstCallback: ReturnType<typeof jest.fn>;
            let secondCallback: ReturnType<typeof jest.fn>;
            beforeEach(async () => {
                firstCallback = jest.fn();
                secondCallback = jest.fn();
                let renderer: TestRenderer.ReactTestRenderer;
                await act(() => {
                    renderer = TestRenderer.create(
                        <ScoreCard
                            headerTitle={'Hello'}
                            actionItems={[
                                { icon: Line, onPress: firstCallback },
                                { icon: Line, onPress: secondCallback },
                            ]}
                        />
                    );
                });
                instance = renderer!.root;
            });

            it('renders two actionItems', () => {
                expect(instance.find((x: any) => x.props.testID === 'action-item0')).toBeTruthy();
                expect(instance.find((x: any) => x.props.testID === 'action-item1')).toBeTruthy();
            });

            it('the first button can be pressed', () => {
                instance.find((x: any) => x.props.testID === 'action-item0').props.onPress();

                expect(firstCallback).toHaveBeenCalled();
                expect(secondCallback).not.toHaveBeenCalled();
            });

            it('the second button can be pressed', () => {
                instance.find((x: any) => x.props.testID === 'action-item1').props.onPress();

                expect(firstCallback).not.toHaveBeenCalled();
                expect(secondCallback).toHaveBeenCalled();
            });
        });

        describe('when more than 6 actionItems are passed in', () => {
            let instance: ReactTestInstance;
            beforeEach(async () => {
                let renderer: TestRenderer.ReactTestRenderer;
                await act(() => {
                    renderer = TestRenderer.create(
                        <ScoreCard
                            headerTitle={'Hello'}
                            actionItems={[
                                { icon: Line, onPress: jest.fn() },
                                { icon: Line, onPress: jest.fn() },
                                { icon: Line, onPress: jest.fn() },
                                { icon: Line, onPress: jest.fn() },
                                { icon: Line, onPress: jest.fn() },
                                { icon: Line, onPress: jest.fn() },
                                { icon: Line, onPress: jest.fn() },
                            ]}
                        />
                    );
                });
                instance = renderer!.root;
            });

            it('renders only the first six items', () => {
                expect(instance.find((x: any) => x.props.testID === 'action-item0')).toBeTruthy();
                expect(instance.find((x: any) => x.props.testID === 'action-item1')).toBeTruthy();
                expect(instance.find((x: any) => x.props.testID === 'action-item2')).toBeTruthy();
                expect(instance.find((x: any) => x.props.testID === 'action-item3')).toBeTruthy();
                expect(instance.find((x: any) => x.props.testID === 'action-item4')).toBeTruthy();
                expect(instance.find((x: any) => x.props.testID === 'action-item5')).toBeTruthy();
                expect(instance.findAll((x: any) => x.props.testID === 'action-item6')).toHaveLength(0);
            });
        });
    });
});
