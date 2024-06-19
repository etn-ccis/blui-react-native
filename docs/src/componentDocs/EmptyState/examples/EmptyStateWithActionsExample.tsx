import React from 'react';
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';
import {EmptyState} from '@brightlayer-ui/react-native-components';
import {ExampleShowcase} from '../../../shared';

export const EmptyStateWithActionsExample = (): JSX.Element => (
  <ExampleShowcase>
    <EmptyState
      icon={{name: 'devices'}}
      title="No Devices"
      description="Check your network connection or add a new device"
      actions={
        <Button variant="outlined" color="primary" startIcon={<Add />}>
          Add Device
        </Button>
      }
    />
  </ExampleShowcase>
);
