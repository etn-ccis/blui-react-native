import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import { HeroBanner, Hero } from '../';
import { View } from 'react-native';
import { IconFamily } from '../__types__';
import { Divider } from 'react-native-paper';
const Line: IconFamily = { family: 'material-community', name: 'chart-line-variant' };

describe('HeroBanner', () => {
    it('renders four children when four are passed in', () => {
        let testRenderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            testRenderer = TestRenderer.create(
                <HeroBanner>
                    <Hero label={'Hero One'} icon={Line} />
                    <Hero label={'Hero Two'} icon={Line} />
                    <Hero label={'Hero Three'} icon={Line} />
                    <Hero label={'Hero Four'} icon={Line} />
                </HeroBanner>
            );
        });
        expect(testRenderer!.root.findAllByType(Hero)).toHaveLength(4);
        testRenderer!.unmount();
    });

    describe('divider', () => {
        it('does not render if the prop is not specified', () => {
            let testRenderer: TestRenderer.ReactTestRenderer | undefined;
            act(() => {
                testRenderer = TestRenderer.create(<HeroBanner />);
            });
            expect(testRenderer!.root.findAllByType(View)).toHaveLength(1);
            testRenderer!.unmount();
        });

        it('does render if the prop is set to true', () => {
            let testRenderer: TestRenderer.ReactTestRenderer | undefined;
            act(() => {
                testRenderer = TestRenderer.create(<HeroBanner divider={true} />);
            });
            expect(testRenderer!.root.findAllByType(Divider)).toHaveLength(1);
            testRenderer!.unmount();
        });
    });
});
