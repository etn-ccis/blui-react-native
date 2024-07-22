import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { Header } from '@brightlayer-ui/react-native-components';
import { DRAWER_WIDTH } from '../../../utils';

export const HeaderWithActionsExample = (): JSX.Element => (
    <ExampleShowcase>
        <Header
            style={{ width: DRAWER_WIDTH, margin: 'auto' }}
            title={'Valley Forge'}
            subtitle={'The Last Stand'}
            actionItems={[
                {
                    icon: { name: 'settings' },
                    onPress: (): void => {},
                },
                {
                    icon: { name: 'more-vert' },
                    onPress: (): void => {},
                },
            ]}
            icon={{ name: 'menu' }}
            onIconPress={() => {}}
        />
    </ExampleShowcase>
);
