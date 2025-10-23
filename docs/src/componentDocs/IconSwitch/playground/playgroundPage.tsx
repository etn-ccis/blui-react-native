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
import { IconSwitch, IconSwitchProps } from '@brightlayer-ui/react-native-components';
import Stack from '@mui/material/Stack';
const inputConfig: InputConfig = [
    // Optional Props
    {
        id: 'showIcon',
        type: 'boolean',
        typeLabel: 'boolean',
        description: 'To display icon or not',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Optional Props',
    },
    {
        id: 'disabled',
        type: 'boolean',
        typeLabel: 'boolean',
        description: 'Flag for render disabled switch',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Optional Props',
    },
    {
        id: 'value',
        type: 'boolean',
        typeLabel: 'boolean',
        description: 'Pass state to the component',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Optional Props',
    },
];

const IconSwitchPreivew: PreviewComponent = ({ data }) => {
    const { value, ...rest } = data as unknown as IconSwitchProps;

    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '100%' }}>
            <IconSwitch {...rest} value={value ? true : undefined}></IconSwitch>
        </Stack>
    );
};

const generateSnippet: CodeSnippetFunction = (data) =>
    `<IconSwitch
    ${getPropsToString(getPropsMapping(data, inputConfig), { join: '\n\t', skip: ['value', 'showIcon', 'disabled'] })}
    ${data.showIcon ? 'showIcon={true}' : ''}
    ${data.disabled ? 'disabled={true}' : ''}
    ${data.value ? 'value={true}' : ''}
></IconSwitch>`.replace(/^\s*$(?:\r\n?|\n)/gm, '');

export const IconSwitchPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={IconSwitchPreivew} />
    </Box>
);
