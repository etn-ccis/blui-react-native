import React from 'react';
import Box from '@mui/material/Box';
import {
    InputConfig,
    PreviewComponent,
    CodeSnippetFunction,
    getPropsToString,
    getPropsMapping,
    Playground,
} from '@brightlayer-ui/react-doc-components';
import Stack from '@mui/material/Stack';
import { EmptyState, EmptyStateProps } from '@brightlayer-ui/react-native-components';
import Add from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { removeEmptyProps } from '../../../utils/';
import { IconSource } from '@brightlayer-ui/react-native-components/core/__types__';

const inputConfig: InputConfig = [
    // Required Props
    {
        id: 'title',
        type: 'string',
        typeLabel: 'ReactNode',
        description: 'The primary text to display (first line)',
        required: true,
        initialValue: 'No devices',
        category: 'Required Props',
    },
    // Optional Props
    {
        id: 'description',
        type: 'string',
        typeLabel: 'ReactNode',
        description: 'The secondary text to display (second line)',
        required: false,
        initialValue: 'Check your network connection',
        category: 'Optional Props',
    },
    {
        id: 'icon',
        type: 'select',
        typeLabel: 'IconSource',
        description: 'A component to render for the primary icon',
        initialValue: 'devices',
        options: [
            { label: 'undefined', value: 'undefined' },
            { label: 'devices', value: 'devices' },
        ],
        required: true,
        category: 'Optional Props',
    },
    {
        id: 'iconSize',
        type: 'number',
        typeLabel: `number`,
        initialValue: 100,
        description: 'The size of the primary icon',
        required: false,
        minValue: 100,
        maxValue: 200,
        valueStep: 4,
        category: 'Optional Props',
        defaultValue: 100,
    },
    {
        id: 'iconColor',
        label: 'iconColor',
        type: 'color',
        typeLabel: 'string',
        description: 'The color of the primary icon',
        required: false,
        category: 'Optional Props',
        defaultValue: 'inherit',
        allowMuiColors: true,
    },
    // Other Configuration
    {
        id: 'showAction',
        label: 'Show Actions',
        type: 'boolean',
        description: 'Whether to show action section or not',
        required: false,
        initialValue: false,
        category: 'Other Configuration',
    },
];

const EmptyStatePreview: PreviewComponent = ({ data }) => {
    const { icon, showAction, iconSize, ...rest } = data as unknown as EmptyStateProps & { showAction?: boolean };
    const getIcon = (value: string): IconSource | undefined => {
        switch (value) {
            case 'devices':
                return { family: 'material', name: 'devices' };
            case 'undefined':
            default:
                return undefined;
        }
    };
    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '100%' }}>
            <EmptyState
                {...removeEmptyProps(rest)}
                title={rest.title}
                iconSize={iconSize}
                icon={getIcon(icon as unknown as string)}
                actions={
                    showAction ? (
                        <Button variant={'outlined'} color={'primary'} startIcon={<Add />}>
                            {'Add Device'}
                        </Button>
                    ) : undefined
                }
            />
        </Stack>
    );
};

const getIconSnippet = (value: any): string | undefined => {
    switch (value) {
        case 'devices':
            return JSON.stringify({ family: 'material', name: 'devices' });
        case 'undefined':
        default:
            return undefined;
    }
};

const generateSnippet: CodeSnippetFunction = (data) =>
    `<EmptyState 
    ${getPropsToString(getPropsMapping(data, inputConfig), { join: '\n\t', skip: ['icon', 'showAction'] })}
    ${data.icon && data.icon !== 'undefined' ? `icon={${getIconSnippet(data.icon)}}` : ''}
    ${
        data.showAction
            ? `actions={
        <Button variant={'outlined'} color={'primary'} startIcon={<AddIcon />}>
            {'Add Device'}
        </Button>
    }`
            : ''
    }
/>`
        .replace(/^\s*$(?:\r\n?|\n)/gm, '')
        .replace(/(?:^|)( {4}|\t)/gm, '    ');

export const EmptyStatePlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={EmptyStatePreview} />
    </Box>
);
