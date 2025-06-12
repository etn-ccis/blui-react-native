import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import { HeroBanner, Hero } from '../';
import { View } from 'react-native';
import { IconFamily } from '../__types__';
import { cleanup } from '@testing-library/react-native';
import { Divider } from 'react-native-paper';
const Line: IconFamily = { family: 'material-community', name: 'chart-line-variant' };

describe('HeroBanner', () => {
    afterEach(cleanup);
    it('renders four children when four are passed in', () => {
        let renderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            renderer = TestRenderer.create(
                <HeroBanner>
                    <Hero label={'Hero One'} icon={Line} />
                    <Hero label={'Hero Two'} icon={Line} />
                    <Hero label={'Hero Three'} icon={Line} />
                    <Hero label={'Hero Four'} icon={Line} />
                </HeroBanner>
            );
        });
        const instance = renderer!.root;

        expect(instance.findAllByType(Hero as any)).toHaveLength(4);
    });

    describe('divider', () => {
        afterEach(cleanup);
        it('does not render if the prop is not specified', () => {
            let renderer: TestRenderer.ReactTestRenderer | undefined;
            act(() => {
                renderer = TestRenderer.create(<HeroBanner />);
            });
            const instance = renderer!.root;

            expect(instance.findAllByType(View as any)).toHaveLength(1);
        });

        it('does render if the prop is set to true', () => {
            let renderer: TestRenderer.ReactTestRenderer | undefined;
            act(() => {
                renderer = TestRenderer.create(<HeroBanner divider={true} />);
            });
            const instance = renderer!.root;
            expect(instance.findAllByType(Divider)).toHaveLength(1);
        });
    });
});
