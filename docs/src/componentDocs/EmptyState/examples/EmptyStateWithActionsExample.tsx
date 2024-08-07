import React from 'react';
import { Button } from 'react-native-paper';
import { EmptyState } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { DEMO_WIDTH } from '../../../utils';

export const EmptyStateWithActionsExample = (): JSX.Element => (
    <ExampleShowcase>
        <EmptyState
            icon={{ name: 'devices' }}
            title={'No Devices'}
            description={'Check your network connection or add a new device'}
            actions={
                <Button icon={'plus'} mode="outlined">
                    Add Device
                </Button>
            }
            style={{ width: DEMO_WIDTH, margin: 'auto' }}
        />
    </ExampleShowcase>
);
