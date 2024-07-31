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
import { IconSource } from '@brightlayer-ui/react-native-components/core/__types__';
import { Drawer, DrawerNavItem, DrawerNavItemProps, DrawerNavGroup, DrawerBody, ListItemTag } from '@brightlayer-ui/react-native-components';
import { sharedPropsConfig } from '../../Drawer/playground/sharedPropsConfig';
import { getIconSnippetWithProps, removeEmptyProps, DRAWER_WIDTH } from '../../../utils';
import 'prismjs/components/prism-jsx.min';

const inputConfig: InputConfig = [
    // Required Props
    {
        id: 'title',
        type: 'string',
        typeLabel: 'string',
        description: 'Text to show on the first line',
        required: true,
        initialValue: 'Nav Item Title',
        category: 'Required Props',
    },

    // Optional Props
    {
        id: 'subtitle',
        type: 'string',
        typeLabel: 'string',
        description: 'Text to show on the second line',
        required: false,
        initialValue: 'Subtitle',
        category: 'Optional Props',
    },
    {
        id: 'hidden',
        type: 'boolean',
        description: 'Whether to hide this nav item',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Optional Props',
    },
    {
        id: 'icon',
        type: 'select',
        typeLabel: 'IconSource',
        description: 'The icon to display on the left',
        required: false,
        initialValue: 'home',
        options: [
            { label: 'undefined', value: 'undefined' },
            { label: 'home', value: 'home' },
            { label: 'place', value: 'place' },
        ],
        category: 'Optional Props',
    },
    {
        id: 'statusColor',
        type: 'color',
        typeLabel: 'string',
        description: `Status stripe and icon color`,
        required: false,
        initialValue: '',
        category: 'Optional Props',
    },
    {
        id: 'rightComponent',
        type: 'boolean',
        typeLabel: `ReactNode`,
        initialValue: false,
        description: 'Custom content/component to display to the right',
        required: false,
        category: 'Optional Props',
    },

    // Shared Props
    ...sharedPropsConfig,

    // Other Configuration
    // NONE
];

const DrawerNavItemPreview: PreviewComponent = ({ data }) => {
    const { expandIcon, collapseIcon, icon, rightComponent, ...rest } = data as unknown as Omit<
        DrawerNavItemProps,
        'collapseIcon' | 'expandIcon' | 'icon'
    > & { collapseIcon: string; expandIcon: string; icon: string };
    const [activeItem, setActiveItem] = useState('Home');
    const containerRef = useRef(null);
    const getIcon = (value: string): IconSource | undefined => {
        switch (value) {
            case 'home':
                return { name: 'home' };
            case 'place':
                return { name: 'place' };
            case 'undefined':
            default:
                return undefined;
        }
    };
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
                    <DrawerBody>
                        <DrawerNavGroup>
                            <DrawerNavItem
                                itemID={'Home'}
                                icon={getIcon(icon as unknown as string)}
                                collapseIcon={getCollapseIcon(collapseIcon)}
                                expandIcon={getExpandIcon(expandIcon)}
                                rightComponent={rightComponent ? <ListItemTag label="New" /> : undefined}
                                {...removeEmptyProps(rest)}
                                title={rest.title}
                            >
                                <DrawerNavItem itemID={'Web'} title={'Web'} onPress={() => setActiveItem('Web')} />
                                <DrawerNavItem itemID={'Mobile'} title={'Mobile'} onPress={() => setActiveItem('Mobile')} />
                            </DrawerNavItem>
                            <DrawerNavItem
                                itemID={'Accessibility'}
                                title={'Accessibility'}
                                icon={{ name: 'accessibility' }}
                                onPress={() => setActiveItem('Accessibility')}
                            />
                        </DrawerNavGroup>
                    </DrawerBody>
                </Drawer>
            </Box>
        </Box>
    );
};
const getIconSnippet = (value: any): string | undefined => {
    switch (value) {
        case 'home':
            return JSON.stringify({ name: 'home' });
        case 'place':
            return JSON.stringify({ name: 'place' });
        case 'undefined':
        default:
            return undefined;
    }
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
    `<DrawerNavItem
    ${getPropsToString(getPropsMapping(data, inputConfig), {
        join: '\n\t',
        skip: ['collapseIcon', 'expandIcon', 'icon', 'rightComponent'],
    })}
    ${data.rightComponent ? `rightComponent={<ListItemTag label="New" />}` : ``}
    ${data.icon !== 'undefined' ? `icon={${getIconSnippet(data.icon as string)}}` : ''}
    ${data.collapseIcon !== 'undefined' ? `collapseIcon={${getCollapseIcon(data.collapseIcon as string)}}` : ''}
    ${data.collapseIcon !== 'undefined' ? `collapseIcon={${getIconSnippetWithProps(data.collapseIcon as string)}}` : ''}
    ${data.expandIcon !== 'undefined' ? `expandIcon={${getExpandIcon(data.expandIcon as string)}}` : ''}
    ${data.expandIcon !== 'undefined' ? `expandIcon={${getIconSnippetWithProps(data.expandIcon as string)}}` : ''}
/>`
        .replace(/^\s*$(?:\r\n?|\n)/gm, '')
        .replace(/(?:^|)( {4}|\t)/gm, '    ');

export const DrawerNavItemPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={DrawerNavItemPreview} />
    </Box>
);
