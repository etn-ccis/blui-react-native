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
} from '@brightlayer-ui/react-native-components';
import * as Colors from '@brightlayer-ui/colors';
import { sharedPropsConfig } from '../../Drawer/playground/sharedPropsConfig';
import { getIcon, removeEmptyProps, DRAWER_WIDTH } from '../../../utils';

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

    // Shared Props
    ...sharedPropsConfig,

    // Other Configuration
    // NONE
];

const DrawerNavGroupPreview: PreviewComponent = ({ data }) => {
    const { expandIcon, collapseIcon, ...rest } = data as unknown as Omit<
        DrawerNavGroupProps,
        'collapseIcon' | 'expandIcon'
    > & { collapseIcon: string; expandIcon: string };
    const [activeItem, setActiveItem] = useState('Overview');
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

    const navGroupItems: NavItem[] = [
        {
            icon: { name: 'dashboard' },
            itemID: 'Overview',
            title: 'Overview',
            // onPress: (): void => setActiveItem('Overview'),
            collapseIcon: getCollapseIcon(collapseIcon as unknown as string),
            expandIcon: getExpandIcon(expandIcon as unknown as string),
            items: [
                {
                    itemID: 'Monthly Report',
                    title: 'Monthly Report',
                    onPress: (): void => setActiveItem('Monthly Report'),
                },
                {
                    itemID: 'Annual Report',
                    title: 'Annual Report',
                    onPress: (): void => setActiveItem('Annual Report'),
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
                            items={navGroupItems}
                            collapseIcon={getIcon(collapseIcon)}
                            expandIcon={getIcon(expandIcon)}
                            {...removeEmptyProps(rest)}
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
    ${getPropsToString(getPropsMapping(data, inputConfig), { join: '\n\t', skip: ['collapseIcon', 'expandIcon'] })}
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
