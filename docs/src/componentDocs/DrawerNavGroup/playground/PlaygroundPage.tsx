import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import {
    InputConfig,
    PreviewComponent,
    CodeSnippetFunction,
    getPropsToString,
    getPropsMapping,
    Playground,
} from '@brightlayer-ui/react-doc-components';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerNavGroup,
    NavItem,
    DrawerNavGroupProps,
    ListItemTag,
} from '@brightlayer-ui/react-native-components';
import * as Colors from '@brightlayer-ui/colors';
import { sharedPropsConfig } from '../../Drawer/playground/sharedPropsConfig';
import { getIcon, removeEmptyProps, DRAWER_WIDTH } from '../../../utils';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

const inputConfig: InputConfig = [
    // Required Props
    // NONE

    // Optional Props
    {
        id: 'title',
        type: 'string',
        typeLabel: 'string',
        description: 'Text to display in the group header',
        required: false,
        initialValue: 'Drawer Nav Group',
        category: 'Optional Props',
    },
    {
        id: 'titleColor',
        type: 'color',
        typeLabel: 'string',
        description: `Color used for the title text`,
        required: false,
        initialValue: '',
        category: 'Optional Props',
    },
    {
        id: 'titleDivider',
        type: 'boolean',
        description: 'Whether to show a divider line below the title',
        required: false,
        initialValue: true,
        defaultValue: true,
        category: 'Optional Props',
    },
    {
        id: 'titleContent',
        type: 'boolean',
        typeLabel: `ReactNode`,
        initialValue: false,
        description: 'Custom element, substitute for title',
        required: false,
        category: 'Optional Props',
    },

    // Shared Props
    ...sharedPropsConfig,

    // Other Configuration
    // NONE
];

const DrawerNavGroupPreview: PreviewComponent = ({ data }) => {
    const { expandIcon, collapseIcon, titleContent, ...rest } = data as unknown as Omit<
        DrawerNavGroupProps,
        'collapseIcon' | 'expandIcon'
    > & { collapseIcon: string; expandIcon: string };
    const [activeItem, setActiveItem] = useState('Devices');
    const containerRef = useRef(null);
    const getCollapseIcon = (value: string): any => {
        switch (value) {
            case 'Remove':
                return { family: 'material', name: 'remove' };
            case 'undefined':
            default:
                return undefined;
        }
    };
    const getExpandIcon = (value: string): any => {
        switch (value) {
            case 'Add':
                return { family: 'material', name: 'add' };
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
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: 16,
                        }}
                    >
                        <Text>Nav Group Title Content</Text>
                        <ListItemTag label="v1.0.3" />
                    </View>
                );
            default:
                return undefined;
        }
    };

    const navGroupItems: NavItem[] = [
        {
            icon: { name: 'dashboard' },
            itemID: 'Overview',
            title: 'Overview',
            collapseIcon: getCollapseIcon(collapseIcon as unknown as string),
            expandIcon: getExpandIcon(expandIcon as unknown as string),
            items: [
                {
                    itemID: 'Monthly Report',
                    title: 'Monthly Report',
                    onPress: (): void => setActiveItem('Monthly Report'),
                    hidePadding: rest.hidePadding,
                },
                {
                    itemID: 'Annual Report',
                    title: 'Annual Report',
                    onPress: (): void => setActiveItem('Annual Report'),
                    hidePadding: rest.hidePadding,
                },
            ],
        },
        {
            icon: { name: 'toc' },
            itemID: 'Timeline',
            title: 'Timeline',
            onPress: (): void => setActiveItem('Timeline'),
        },
        {
            icon: { name: 'devices' },
            title: 'Devices',
            itemID: 'Devices',
            subtitle: '5 new warnings',
            statusColor: Colors.yellow[500],
            onPress: (): void => setActiveItem('Devices'),
        },
        {
            icon: { name: 'airport-shuttle' },
            itemID: 'Schedule',
            title: 'Schedule',
            onPress: (): void => setActiveItem('Schedule'),
        },
    ];

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
            <Box>
                <Drawer activeItem={activeItem} style={{ width: DRAWER_WIDTH, margin: 'auto' }}>
                    <DrawerHeader title="Header Title" icon={{ name: 'menu' }} />
                    <DrawerBody>
                        <DrawerNavGroup
                            titleContent={getTitleContent(titleContent as unknown as boolean)}
                            items={navGroupItems}
                            collapseIcon={getIcon(collapseIcon)}
                            expandIcon={getIcon(expandIcon)}
                            {...removeEmptyProps(rest)}
                            hidePadding
                        />
                    </DrawerBody>
                </Drawer>
            </Box>
        </Box>
    );
};
const getCollapseIcon = (value: any): any => {
    switch (value) {
        case 'Remove':
            return JSON.stringify({ family: 'material', name: 'remove' });
        case 'undefined':
        default:
            return undefined;
    }
};
const getExpandIcon = (value: any): any => {
    switch (value) {
        case 'Add':
            return JSON.stringify({ family: 'material', name: 'add' });
        case 'undefined':
        default:
            return undefined;
    }
};

const generateSnippet: CodeSnippetFunction = (data) =>
    `<DrawerNavGroup
    ${getPropsToString(getPropsMapping(data, inputConfig), {
        join: '\n\t',
        skip: ['collapseIcon', 'expandIcon', 'titleContent'],
    })}
    ${
        data.titleContent && data.titleContent !== 'undefined'
            ? `titleContent={
            <View style={{ display: 'flex',flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',padding: 16 }}>
                <Text>
                    Nav Group Title Content
                </Text> 
            <ListItemTag
                label="v1.0.3"
                backgroundColor={'#FFFFFF'}
                fontColor={'#007bc1'}
                style={{ width: '50%' }}
            />
            </View>}`
            : ''
    }
    ${data.collapseIcon !== 'undefined' ? `collapseIcon={${getCollapseIcon(data.collapseIcon as string)}}` : ''}
    ${data.expandIcon !== 'undefined' ? `expandIcon={${getExpandIcon(data.expandIcon as string)}}` : ''}
    items={navGroupItems}
/>`
        .replace(/^\s*$(?:\r\n?|\n)/gm, '')
        .replace(/(?:^|)( {4}|\t)/gm, '    ');

export const DrawerNavGroupPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={DrawerNavGroupPreview} />
    </Box>
);
