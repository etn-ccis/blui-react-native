import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { Hero } from '@brightlayer-ui/react-native-components';
import { Avatar } from 'react-native-paper';

export const IconAsInlineFunctionalComponentExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <Hero
            label={'Icon'}
            iconSize={100}
            icon={({ size, ...props }) => (
                <Avatar.Icon size={size} {...props} icon="account-circle" color={'#E5E4E2'} />
            )}
        />
    </ExampleShowcase>
);
