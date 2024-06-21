import React from 'react';
import { ChannelValue } from '@brightlayer-ui/react-native-components/core/ChannelValue';
import { Hero } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';

export const HeroWithChannelValueExample = (): JSX.Element => (
    <ExampleShowcase>
        <Hero label={'Duration'} icon={{ name: 'schedule' }}>
            <ChannelValue fontSize={20} value={1} units={'h'} unitSpace={'hide'} />
            <ChannelValue fontSize={20} value={27} units={'m'} unitSpace={'hide'} />
        </Hero>
    </ExampleShowcase>
);
