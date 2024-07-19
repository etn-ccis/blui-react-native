import React from 'react';
import { Chip, ChipProps } from '@brightlayer-ui/react-native-components';
import {
    InputConfig,
    PreviewComponent,
    CodeSnippetFunction,
    getPropsToString,
    getPropsMapping,
    Playground,
} from '@brightlayer-ui/react-doc-components';
import { IconSource } from '@brightlayer-ui/react-native-components/core/__types__';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Avatar } from 'react-native-paper';

const inputConfig: InputConfig = [
    // Optional Props
    {
        id: 'chipColor',
        type: 'color',
        typeLabel: `string`,
        initialValue: '',
        description: 'The color of the chip',
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'textColor',
        type: 'color',
        typeLabel: `string`,
        initialValue: '',
        description: 'The color of the text label',
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'iconColor',
        type: 'color',
        typeLabel: `string`,
        initialValue: '',
        description: 'The color of the icon',
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'borderColor',
        type: 'color',
        typeLabel: `string`,
        initialValue: '',
        description: 'TThe color of border color',
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'icon',
        type: 'select',
        typeLabel: 'IconSource',
        initialValue: 'info',
        description: 'A component to render for the icon',
        options: [
            { label: 'undefined', value: 'undefined' },
            { label: 'info', value: 'info' },
        ],
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'mode',
        type: 'string',
        typeLabel: `string`,
        initialValue: 'elevated',
        description: 'The size of the circle in px',
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'avatar',
        type: 'boolean',
        typeLabel: `React.ReactNode`,
        initialValue: false,
        description: 'Avatar to display in chip',
        required: false,
        category: 'Optional Props',
    },
];
const ChipPreview: PreviewComponent = ({ data }) => {
    const { avatar, icon, ...rest } = data as unknown as ChipProps;
    const getIcon = (value: string): IconSource | undefined => {
        switch (value) {
            case 'info':
                return { name: 'info' };
            case 'undefined':
            default:
                return undefined;
        }
    };
    const getAvtar = (value: boolean): React.ReactElement | undefined => {
        switch (value) {
            case true:
                return <Avatar.Icon size={40} icon="account-circle" />;
            default:
                return undefined;
        }
    };
    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '100%' }}>
            <Chip {...rest} icon={getIcon(icon as unknown as string)} avatar={getAvtar(avatar as unknown as boolean)}>
                {' '}
                label
            </Chip>
        </Stack>
    );
};

const getIconSnippet = (value: any): string | undefined => {
    switch (value) {
        case 'info':
            return JSON.stringify({ name: 'info' });
        case 'undefined':
        default:
            return undefined;
    }
};

const generateSnippet: CodeSnippetFunction = (data) =>
    `<Chip
    ${getPropsToString(getPropsMapping(data, inputConfig), { join: '\n\t', skip: ['icon', 'avatar'] })}
    ${data.icon && data.icon !== 'undefined' ? `icon={${getIconSnippet(data.icon)}}` : ''}
    ${data.avatar && data.avatar !== 'undefined' ? `avatar={<Avatar.Icon size={40} icon="account-circle" />}` : ''}
>label</Chip>`.replace(/^\s*$(?:\r\n?|\n)/gm, '');

export const ChipPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={ChipPreview} />
    </Box>
);
