import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import {
    InputConfig,
    PreviewComponent,
    CodeSnippetFunction,
    getPropsToString,
    getPropsMapping,
    Playground,
} from '@brightlayer-ui/react-doc-components';
import { IconSource } from '@brightlayer-ui/react-native-components/core/__types__';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerHeaderProps,
    DrawerNavGroup,
    DrawerNavItem,
    ListItemTag,
} from '@brightlayer-ui/react-native-components';
import { getImage, removeEmptyProps, DRAWER_WIDTH } from '../../../utils';
import 'prismjs/components/prism-jsx.min';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

const inputConfig: InputConfig = [
    // Required Props
    // NONE

    // Optional Props
    {
        id: 'title',
        type: 'string',
        typeLabel: `string`,
        description: 'The text to show on the first line',
        required: false,
        initialValue: 'Drawer Title',
        category: 'Optional Props',
    },
    {
        id: 'subtitle',
        type: 'string',
        typeLabel: `string`,
        description: 'The text to show on the second line',
        required: false,
        initialValue: 'Organize your menu items here',
        category: 'Optional Props',
    },
    {
        id: 'titleContent',
        type: 'boolean',
        typeLabel: `ReactNode`,
        initialValue: false,
        description: 'Custom content for header title area',
        required: false,
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
        id: 'backgroundImage',
        type: 'select',
        typeLabel: `ImageSourcePropType`,
        description: 'An image to display in the header',
        initialValue: 'undefined',
        defaultValue: 'undefined',
        options: ['undefined', 'pattern', 'farm'],
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'backgroundOpacity',
        type: 'number',
        typeLabel: `number`,
        description: 'The opacity of the background image',
        required: false,
        initialValue: 0.3,
        minValue: 0,
        maxValue: 1,
        valueStep: 0.1,
        defaultValue: 0.3,
        category: 'Optional Props',
    },
    {
        id: 'fontColor',
        type: 'color',
        typeLabel: 'string',
        description: 'The color of the text elements',
        required: false,
        initialValue: '',
        category: 'Optional Props',
    },
    {
        id: 'icon',
        type: 'select',
        typeLabel: 'IconSource',
        description: 'A component to render for the icon',
        initialValue: 'menu',
        options: [
            { label: 'undefined', value: 'undefined' },
            { label: 'menu', value: 'menu' },
            { label: 'arrow-back', value: 'arrow-back' },
        ],
        required: false,
        category: 'Optional Props',
    },

    // Other Configuration
    // NONE
];

const DrawerHeaderPreview: PreviewComponent = ({ data }) => {
    const theme = useExtendedTheme();
    const { icon, backgroundImage, titleContent, ...rest } = data as unknown as DrawerHeaderProps;
    const containerRef = useRef(null);
    const getIcon = (value: string): IconSource | undefined => {
        switch (value) {
            case 'menu':
                return { name: 'menu' };
            case 'arrow-back':
                return { name: 'arrow-back' };
            case 'undefined':
            default:
                return undefined;
        }
    };
    const getTitleContent = (value: boolean): any => {
        switch (value) {
            case true:
                return (
                    <View
                        style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginLeft: 10 }}
                    >
                        <Text>API Documentation</Text>
                        <ListItemTag
                            label="v1.50.8"
                            backgroundColor={'#FFFFFF'}
                            fontColor={'#007bc1'}
                            style={{ width: '50%' }}
                        />
                    </View>
                );
            default:
                return undefined;
        }
    };

    return (
        <Box
            sx={{
                m: '16px 0',
                maxHeight: '100%',
                maxWidth: '100%',
                position: 'relative',
            }}
            ref={containerRef}
        >
            <Drawer style={{ width: DRAWER_WIDTH, margin: 'auto' }}>
                <DrawerHeader
                    {...removeEmptyProps(rest)}
                    icon={getIcon(icon as unknown as string)}
                    backgroundImage={typeof backgroundImage === 'string' ? getImage(backgroundImage) : undefined}
                    titleContent={getTitleContent(titleContent as unknown as boolean)}
                ></DrawerHeader>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem
                            itemFontColor={theme.colors.onSurface}
                            icon={{ name: 'person' }}
                            itemID={'Identity Management'}
                            title={'Identity Management'}
                        />
                        <DrawerNavItem
                            itemFontColor={theme.colors.onSurface}
                            icon={{ name: 'today' }}
                            itemID={'Calendar'}
                            title={'Calendar'}
                        />
                        <DrawerNavItem
                            itemFontColor={theme.colors.onSurface}
                            icon={{ name: 'accessibility' }}
                            title={'Accessibility'}
                            itemID={'Accessibility'}
                        />
                        <DrawerNavItem
                            itemFontColor={theme.colors.onSurface}
                            icon={{ name: 'notifications-active' }}
                            title={'Notifications'}
                            itemID={'Notifications'}
                        />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        </Box>
    );
};

const getIconSnippet = (value: any): string | undefined => {
    switch (value) {
        case 'menu':
            return JSON.stringify({ name: 'menu' });
        case 'arrow-back':
            return JSON.stringify({ name: 'arrow-back' });
        case 'undefined':
        default:
            return undefined;
    }
};

const getBackgroundImageSnippet = (value: any): string => {
    switch (value) {
        case 'farm':
            return 'getImage("farm")';
        case 'pattern':
            return 'getImage("pattern")';
        case 'undefined':
        default:
            return 'undefined';
    }
};

const generateSnippet: CodeSnippetFunction = (data) =>
    `<DrawerHeader 
    ${getPropsToString(getPropsMapping(data, inputConfig), {
        join: '\n\t',
        skip: ['icon', 'backgroundImage', 'titleContent'],
    })}
    ${data.icon && data.icon !== 'undefined' ? `icon={${getIconSnippet(data.icon)}}` : ''}
    ${
        data.titleContent && data.titleContent !== 'undefined'
            ? `titleContent={
        <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginLeft: 10 }}>
            <Text>
                API Documentation
            </Text> 
        <ListItemTag
            label="v1.50.8"
            backgroundColor={'#FFFFFF'}
            fontColor={'#007bc1'}
            style={{ width: '50%' }}
        />
        </View>}`
            : ''
    }
    ${
        data.backgroundImage !== 'undefined'
            ? `backgroundImage={${getBackgroundImageSnippet(data.backgroundImage)}}`
            : ''
    }
/>`
        .replace(/^\s*$(?:\r\n?|\n)/gm, '')
        .replace(/(?:^|)( {4}|\t)/gm, '    ');

export const DrawerHeaderPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={DrawerHeaderPreview} />
    </Box>
);
