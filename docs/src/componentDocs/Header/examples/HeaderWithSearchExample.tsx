import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { Header } from '@brightlayer-ui/react-native-components';

export const HeaderWithSearchExample = (): JSX.Element => (
    <ExampleShowcase>
        <Header
            style={{ width: 350, margin: 'auto' }}
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
            searchableConfig={{ onChangeText: () => {} }}
        />
    </ExampleShowcase>
);
