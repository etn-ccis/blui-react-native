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
import { UserMenu, UserMenuProps } from '@brightlayer-ui/react-native-components';
import { Avatar } from 'react-native-paper';
import trexImage from '../images/trex.png'
import { removeEmptyProps } from '../../../utils';
import 'prismjs/components/prism-jsx.min';

const inputConfig: InputConfig = [
    // Required Props
    // NONE

    // Optional Props
    {
        id: 'menuTitle',
        type: 'string',
        typeLabel: 'string',
        description: 'Title shown when menu is open',
        required: false,
        initialValue: 'Menu Title',
        category: 'Optional Props',
    },
    {
        id: 'menuSubtitle',
        type: 'string',
        typeLabel: 'string',
        description: 'Subtitle shown when menu is open',
        required: false,
        initialValue: 'Menu Subtitle',
        category: 'Optional Props',
    },
    {
        id: 'backgroundColor',
        type: 'color',
        typeLabel: 'string',
        description: `Background color of the bottom sheet`,
        required: false,
        initialValue: '',
        category: 'Optional Props',
    },
    {
        id: 'fontColor',
        type: 'color',
        typeLabel: 'string',
        description: `Color of text for the bottom sheet header and menu items`,
        required: false,
        initialValue: '',
        category: 'Optional Props',
    },
    {
        id: 'iconColor',
        type: 'color',
        typeLabel: 'string',
        description: `Color of icons for the bottom sheet menu items`,
        required: false,
        initialValue: '',
        category: 'Optional Props',
    },

    // Other Configuration
    {
        id: 'imageAvatar',
        label: 'Image Avatar',
        type: 'boolean',
        description: 'Use image avatar instead of text',
        required: false,
        initialValue: false,
        category: 'Other Configuration',
    },
];

const UserMenuPreview: PreviewComponent = ({ data }) => {
    const { imageAvatar, ...rest } = data as unknown as UserMenuProps & { imageAvatar: boolean };

    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '100%' }}>
            <UserMenu
                {...removeEmptyProps(rest)}
                avatar={imageAvatar ? <Avatar.Image source={{ uri: trexImage }} /> : <Avatar.Text size={40} label="AV" />}
                menuItems={[
                    {
                        title: 'Settings',
                        icon: { name: 'settings' },
                        onPress: (): void => { },
                    },
                    {
                        title: 'Contact Us',
                        icon: { name: 'email' },
                        onPress: (): void => { },
                    },
                    {
                        title: 'Log Out',
                        icon: { name: 'exit-to-app' },
                        onPress: (): void => { },
                    },
                ]}
            />
        </Stack>
    );
};

const generateSnippet: CodeSnippetFunction = (data) =>
    `<UserMenu 
    ${getPropsToString(getPropsMapping(data, inputConfig), { join: '\n\t', skip: ['imageAvatar'] })}
    avatar={${data.imageAvatar ? `<Avatar.Image source={{ trexImage }} />` : '<Avatar.Text size={40} label="AV" />'}}
    menuItems={[
        {
            title: 'Settings',
            icon: { name: 'settings' },
            onPress: (): void => { },
        },
        {
            title: 'Contact Us',
            icon: { name: 'email' },
            onPress: (): void => { },
        },
        {
            title: 'Log Out',
            icon: { name: 'exit-to-app' },
            onPress: (): void => { },
        },
    ]}
/>`
        .replace(/^\s*$(?:\r\n?|\n)/gm, '')
        .replace(/(?:^|)( {4}|\t)/gm, '    ');

export const UserMenuPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={UserMenuPreview} />
    </Box>
);
