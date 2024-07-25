import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import {
    InputConfig,
    PreviewComponent,
    CodeSnippetFunction,
    getPropsToString,
    getPropsMapping,
    Playground,
    usePlaygroundValues,
} from '@brightlayer-ui/react-doc-components';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerProps,
    DrawerNavGroup,
    NavItem,
    DrawerFooter,
} from '@brightlayer-ui/react-native-components';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import { sharedPropsConfig } from './sharedPropsConfig';
import 'prismjs/components/prism-jsx.min';
import { DRAWER_WIDTH } from '../../../utils';

const inputConfig: InputConfig = [
    // Optional Props
    {
        id: 'activeItem',
        type: 'select',
        typeLabel: `string`,
        description: `itemID for the 'active' item`,
        initialValue: '',
        defaultValue: '',
        options: ['undefined', 'Overview', 'Monthly Report', 'Annual Report', 'Timeline', 'Devices', 'Schedule'],
        required: false,
        category: 'Optional Props',
    },

    // Shared Props
    ...sharedPropsConfig,

    // Other Configuration
    // NONE
];

const DrawerPreview: PreviewComponent = ({ data }) => {
    const { collapseIcon, expandIcon, ...rest } = data as unknown as Omit<
        DrawerProps,
        'collapseIcon' | 'expandIcon'
    > & {
        collapseIcon: string;
        expandIcon: string;
    };
    const { updateData } = usePlaygroundValues();
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
            itemID: 'Overview',
            title: 'Overview',
            icon: { name: 'dashboard' },
            collapseIcon: getCollapseIcon(collapseIcon as unknown as string),
            expandIcon: getExpandIcon(expandIcon as unknown as string),
            items: [
                {
                    itemID: 'Monthly Report',
                    title: 'Monthly Report',
                    onPress: (): void => updateData('activeItem', 'Monthly Report'),
                },
                {
                    itemID: 'Annual Report',
                    title: 'Annual Report',
                    onPress: (): void => updateData('activeItem', 'Annual Report'),
                },
            ],
        },
        {
            itemID: 'Timeline',
            title: 'Timeline',
            onPress: (): void => updateData('activeItem', 'Timeline'),
            icon: { name: 'toc' },
        },
        {
            title: 'Devices',
            itemID: 'Devices',
            subtitle: '5 new warnings',
            onPress: (): void => updateData('activeItem', 'Devices'),
            icon: { name: 'devices' },
        },
        {
            itemID: 'Schedule',
            title: 'Schedule',
            onPress: (): void => updateData('activeItem', 'Schedule'),
            icon: { name: 'airport-shuttle' },
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
            <Drawer style={{ width: DRAWER_WIDTH, margin: 'auto' }} {...rest}>
                <DrawerHeader title="Header" />
                <DrawerBody>
                    <DrawerNavGroup items={navGroupItems}></DrawerNavGroup>
                </DrawerBody>
                <DrawerFooter>
                    <View style={{ padding: 16 }}>
                        <Text>Footer</Text>
                    </View>
                </DrawerFooter>
            </Drawer>
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
    `<Drawer 
    ${getPropsToString(getPropsMapping(data, inputConfig), { join: '\n\t', skip: ['icon'] })}
    ${
        data.collapseIcon && data.collapseIcon !== 'undefined'
            ? `collapseIcon={${getCollapseIcon(data.collapseIcon)}}`
            : ''
    }
    ${data.expandIcon && data.expandIcon !== 'undefined' ? `expandIcon={${getExpandIcon(data.expandIcon)}}` : ''}
  >
    <DrawerHeader {...headerProps} />
    <DrawerBody>
        <DrawerNavGroup {...navGroupProps} />
    </DrawerBody>
    <DrawerFooter>
        <View style={{padding: 16}}>
            <Text>Footer</Text>
        </View>
    </DrawerFooter>
</Drawer>`
        .replace(/^\s*$(?:\r\n?|\n)/gm, '')
        .replace(/(?:^|)( {4}|\t)/gm, '    ');

export const DrawerPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={DrawerPreview} />
    </Box>
);
