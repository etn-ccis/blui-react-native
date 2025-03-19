import React from 'react';
import { Box, Button } from '@mui/material';
import { EmptyState } from '@brightlayer-ui/react-native-components';
import { Add } from '@mui/icons-material';

export const EmptyStateDemo: JSX.Element = (
    <Box sx={{ maxWidth: 400, py: 5, px: 3 }}>
        <EmptyState
            icon={{ family: 'material', name: 'devices' }}
            title={'No Devices'}
            description={'Check your network connection or add a new device'}
            actions={
                <Button color={'primary'} variant={'contained'} startIcon={<Add />}>
                    Add a Device
                </Button>
            }
        />
    </Box>
);
