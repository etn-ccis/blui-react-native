import React from 'react';
import { ChannelValue, ChannelValueProps } from '@brightlayer-ui/react-native-components';
import TrendingDown from '@mui/icons-material/TrendingDown';
import TrendingUp from '@mui/icons-material/TrendingUp';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { InputConfig, PreviewComponent, CodeSnippetFunction, getPropsToString, getPropsMapping, Playground } from '@brightlayer-ui/react-doc-components';
import { IconSource } from '@brightlayer-ui/react-native-components/core/__types__';


const inputConfig: InputConfig = [
    // Required Props
    {
        id: 'value',
        type: 'string',
        typeLabel: `number | string`,
        initialValue: '15',
        description: 'The value (bold text) to display',
        required: true,
        category: 'Required Props'
    },
    // Optional Props
    {
        id: 'units',
        type: 'string',
        initialValue: 'hz',
        typeLabel: 'string',
        description: 'The text to display for the units (light text)',
        required: false,
        category: 'Optional Props'
    },
    {
        id: 'icon',
        type: 'select',
        typeLabel: 'IconSource',
        description: 'The inline icon to display',
        initialValue: 'TrendingUp',
        options: [
            { label: 'undefined', value: 'undefined' },
            { label: 'TrendingUp', value: 'TrendingUp' },
            { label: 'TrendingDown', value: 'TrendingDown' }
        ],
        required: false,
        category: 'Optional Props'
    },
    {
        id: 'iconSize',
        type: 'number',
        typeLabel: `number`,
        initialValue: 16,
        description: 'The size of the icon',
        required: false,
        minValue: 10,
        maxValue: 60,
        valueStep: 4,
        category: 'Optional Props',
        defaultValue: 'inherit'
    },
    {
        id: 'iconColor',
        label: 'color',
        type: 'color',
        typeLabel: 'string',
        description: 'The color of the font',
        required: false,
        category: 'Optional Props',
        defaultValue: 'inherit',
        allowMuiColors: true,
    },
    {
        id: 'fontSize',
        type: 'number',
        typeLabel: `number`,
        initialValue: 16,
        description: 'The size of the font',
        required: false,
        minValue: 10,
        maxValue: 50,
        valueStep: 10,
        category: 'Optional Props',
        defaultValue: 'inherit'
    },
    {
        id: 'color',
        label: 'color',
        type: 'color',
        typeLabel: 'string',
        description: 'The color of the font',
        required: false,
        category: 'Optional Props',
        defaultValue: 'inherit',
        allowMuiColors: true,
    },
    {
        id: 'prefix',
        type: 'boolean',
        initialValue: false,
        typeLabel: 'boolean',
        description: 'Show units before the value',
        required: false,
        category: 'Optional Props',
        defaultValue: false,
    },
    {
        id: 'unitSpace',
        type: 'select',
        typeLabel: `'auto' | 'show' | 'hide'`,
        initialValue: 'auto',
        options: [
            { label: 'auto', value: 'auto' },
            { label: 'hide', value: 'hide' },
            { label: 'show', value: 'show' }
        ],
        description: 'Show/Hide spacing between the value and units',
        required: false,
        category: 'Optional Props',
        defaultValue: 'auto'
    },
];


const ChannelValuePreview: PreviewComponent = ({ data }) => {
    const {icon, ...rest } = data as unknown as ChannelValueProps;
    const getIcon = (value: string): IconSource | undefined => {
        switch (value) {
            case 'TrendingUp': return {'family':'material', 'name':'trending-up'};
            case 'TrendingDown': return {'family':'material', 'name':'trending-down'};
            case 'undefined':
            default:
                return undefined;
        }
    }

    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '100%' }}>
            <ChannelValue
                {...rest}
                icon={getIcon(icon as unknown as string)}
            />
        </Stack>
    )
}

const getIconSnippet = (value: any): string | undefined => {
    switch (value) {
        case 'TrendingUp': return JSON.stringify({'family':'material', 'name':'trending-up'});
        case 'TrendingDown': return JSON.stringify({'family':'material', 'name':'trending-down'});
        case 'undefined':
        default:
            return undefined;
    }
}
const generateSnippet: CodeSnippetFunction = (data) => `<ChannelValue 
    ${getPropsToString(getPropsMapping(data, inputConfig), { join: '\n\t', skip: ['icon'] })}
    ${data.icon && data.icon !== 'undefined' ? `icon={${getIconSnippet(data.icon)}}` : ''}
/>`.replace(/^\s*$(?:\r\n?|\n)/gm, '')


export const ChannelValuePlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground
            inputConfig={inputConfig}
            codeSnippet={generateSnippet}
            previewComponent={ChannelValuePreview}
        />
    </Box>
);
