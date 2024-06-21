import React from 'react';
import { EmptyState } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { Text } from 'react-native-paper';

export const EmptyStateWithContentExample = (): JSX.Element => (
    <ExampleShowcase>
        <EmptyState
            icon={{ name: 'report' }}
            title={<Text style={{ color: '#007bc1' }}>Request Permission</Text>}
            description={
                <Text>
                    You must{' '}
                    <Text style={{ textDecorationLine: 'underline', color: '#007bc1' }}>contact your system admin</Text>{' '}
                    to view this content.
                </Text>
            }
        />
    </ExampleShowcase>
);
