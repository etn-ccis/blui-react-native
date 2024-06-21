import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { Hero } from '@brightlayer-ui/react-native-components';

export const IconAsPropExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <Hero iconColor="green" label={'Setting'} icon={{ family: 'material', name: 'settings' }} />
    </ExampleShowcase>
);
