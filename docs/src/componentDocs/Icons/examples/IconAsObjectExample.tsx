import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { Hero } from '@brightlayer-ui/react-native-components';

export const IconAsObjectExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <Hero label={'Device'} icon={{ family: 'brightlayer-ui', name: 'device' }} />
    </ExampleShowcase>
);
