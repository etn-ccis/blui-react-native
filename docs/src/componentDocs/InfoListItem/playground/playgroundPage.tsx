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
import { ChannelValue, InfoListItem, InfoListItemProps } from '@brightlayer-ui/react-native-components';
import Stack from '@mui/material/Stack';
import { View, Text } from 'react-native';
import { getRNIcon, getRNIconSnippet } from '../../../utils/utilities';
const inputConfig: InputConfig = [
    // Required Props
    {
        id: 'title',
        type: 'string',
        typeLabel: 'string',
        description: 'The text to show on the first line',
        required: true,
        initialValue: 'Info List Item',
        category: 'Required Props',
    },
    // Optional Props
    {
        id: 'avatar',
        type: 'boolean',
        description: 'Show colored background for icon',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Optional Props',
    },
    {
        id: 'backgroundColor',
        type: 'color',
        typeLabel: 'string',
        description: 'The color used for the background',
        required: false,
        initialValue: '',
        category: 'Optional Props',
    },
    {
        id: 'chevron',
        type: 'boolean',
        description: 'Add a chevron icon on the right',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Optional Props',
    },
    {
        id: 'dense',
        type: 'boolean',
        description: 'Smaller height row with less padding',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Optional Props',
    },
    {
        id: 'divider',
        type: 'select',
        typeLabel: `'full' | 'partial'`,
        description: 'Show a row separator below the row',
        initialValue: 'undefined',
        defaultValue: 'undefined',
        options: ['undefined', 'partial', 'full'],
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'fontColor',
        type: 'color',
        typeLabel: 'string',
        description: 'Main text color',
        required: false,
        initialValue: '',
        category: 'Optional Props',
    },
    {
        id: 'hidePadding',
        type: 'boolean',
        description: 'Remove left padding if no icon is used',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Optional Props',
    },
    {
        id: 'icon',
        type: 'select',
        typeLabel: 'IconSource',
        description: 'A component to render for the icon',
        initialValue: 'Devices',
        options: ['undefined', 'Devices'],
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'iconAlign',
        type: 'select',
        typeLabel: `'left' | 'center' | 'right'`,
        description: 'Icon alignment when avatar is set to false',
        initialValue: 'left',
        defaultValue: 'left',
        options: ['left', 'center', 'right'],
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'iconColor',
        type: 'color',
        typeLabel: 'string',
        description: 'The color used for the icon',
        required: false,
        initialValue: '',
        category: 'Optional Props',
    },
    {
        id: 'info',
        type: 'string',
        typeLabel: `string | ReactNode[]`,
        description: 'The text to show on the third line',
        required: false,
        initialValue: 'more info...',
        category: 'Optional Props',
    },
    {
        id: 'statusColor',
        type: 'color',
        typeLabel: 'string',
        description: 'Status stripe and icon color',
        required: false,
        initialValue: '',
        category: 'Optional Props',
    },
    {
        id: 'subtitle',
        type: 'string',
        typeLabel: `string | ReactNode[]`,
        description: 'The text to show on the second line',
        required: false,
        initialValue: 'with all customizable properties',
        category: 'Optional Props',
    },
    {
        id: 'leftComponent',
        type: 'boolean',
        description: 'Custom content to render between the icon and the text elements',
        required: false,
        initialValue: false,
        category: 'Optional Props',
    },
    {
        id: 'rightComponent',
        type: 'boolean',
        description: 'Custom content to render to the right of the text elements',
        required: false,
        initialValue: false,
        category: 'Optional Props',
    },
    {
        id: 'subtitleSeparator',
        type: 'string',
        typeLabel: `string`,
        description: 'Separator character for subtitle',
        required: false,
        initialValue: '·',
        category: 'Optional Props',
    },
    {
        id: 'wrapInfo',
        type: 'boolean',
        description: 'Whether to wrap info on overflow',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Optional Props',
    },
    {
        id: 'wrapSubtitle',
        type: 'boolean',
        description: 'Whether to wrap subtitle on overflow',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Optional Props',
    },
    {
        id: 'wrapTitle',
        type: 'boolean',
        description: 'Whether to wrap title on overflow',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Optional Props',
    },

    // Other Configuration
    {
        id: 'clickable',
        label: 'Add onPress',
        type: 'boolean',
        description: 'A function to execute when pressed',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Other Configuration',
    },
];
const InfoListItemPreview: PreviewComponent = ({ data }) => {
    const { icon, divider, title, clickable, rightComponent, leftComponent, ...rest } = data as unknown as Omit<
        InfoListItemProps,
        'divider'
    > & {
        divider: 'full' | 'partial' | 'undefined';
        clickable: boolean;
    };

    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '100%' }}>
            <InfoListItem
                {...rest}
                title={title}
                icon={getRNIcon(icon as unknown as string)}
                style={{ maxWidth: 700 }}
                onPress={clickable ? (): void => {} : undefined}
                divider={divider === 'undefined' ? undefined : divider}
                rightComponent={rightComponent ? <ChannelValue value={'15'} units={'A'} /> : undefined}
                leftComponent={
                    leftComponent ? (
                        <View>
                            <Text style={{ fontWeight: 'bold' }}>8:32 AM</Text>
                            <Text>23/10/23</Text>
                        </View>
                    ) : undefined
                }
            />
        </Stack>
    );
};
const generateSnippet: CodeSnippetFunction = (data) =>
    `<InfoListItem 
    ${getPropsToString(getPropsMapping(data, inputConfig), {
        join: '\n\t',
        skip: ['icon', 'clickable', 'rightComponent', 'leftComponent'],
    })}
    ${data.icon && data.icon !== 'undefined' ? `icon={${getRNIconSnippet(data.icon as string)}}` : ''}
    ${data.clickable ? `onPress={(): void => {}}` : ``}
    ${
        data.leftComponent
            ? `leftComponent={<View>
            <Text style={{ fontWeight: 'bold' }}>8:32 AM</Text>
            <Text>23/10/23</Text>
            </View>}`
            : ``
    }
    ${data.rightComponent ? `rightComponent={<ChannelValue value={'15'} units={'A'} />}` : ``}
/>`
        .replace(/^\s*$(?:\r\n?|\n)/gm, '')
        .replace(/(?:^|)( {4}|\t)/gm, '    ');
export const InfoListItemPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={InfoListItemPreview} />
    </Box>
);
