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
import { Header, HeaderProps } from '@brightlayer-ui/react-native-components';
import { getBodyFiller, getImage, DRAWER_WIDTH } from '../../../utils';
import 'prismjs/components/prism-jsx.min';

const inputConfig: InputConfig = [
    // Required Props
    {
        id: 'title',
        type: 'string',
        typeLabel: 'string',
        description: 'The text to display on the first line',
        required: true,
        initialValue: 'Valley Forge',
        category: 'Required Props',
    },
    // Optional Props
    {
        id: 'subtitle',
        type: 'string',
        typeLabel: 'string',
        description: 'The text to display on the second line',
        required: true,
        initialValue: 'The Last Stand',
        category: 'Optional Props',
    },
    {
        id: 'info',
        type: 'string',
        typeLabel: 'string',
        description: 'Third line of text (hidden on collapse)',
        required: false,
        initialValue: 'Text hidden on collapse',
        category: 'Optional Props',
    },
    {
        id: 'actionItems',
        type: 'boolean',
        typeLabel: `IconSource`,
        initialValue: false,
        description: 'Array of icons / actions to display on the right',
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'searchableConfig',
        type: 'boolean',
        typeLabel: ``,
        description: 'Configuration object for search behavior',
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'actionItemColor',
        type: 'color',
        typeLabel: 'string',
        description: `The color used for the action item icon`,
        required: false,
        initialValue: '',
        category: 'Optional Props',
    },
    {
        id: 'backgroundColor',
        type: 'color',
        typeLabel: 'string',
        description: `The color used for the background`,
        required: false,
        initialValue: '',
        category: 'Optional Props',
    },
    {
        id: 'backgroundImage',
        type: 'select',
        typeLabel: `ImageSourcePropType`,
        description: 'An image to blend with the colored background in the header',
        initialValue: 'undefined',
        defaultValue: 'undefined',
        options: ['undefined', 'farm', 'pattern'],
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'expandable',
        type: 'boolean',
        typeLabel: `boolean`,
        initialValue: false,
        description: 'Allow the header to expand/collapse on tap',
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'collapsedHeight',
        label: 'collapsedHeight',
        type: 'number',
        description: 'The height of the header when collapsed',
        required: false,
        initialValue: 56,
        minValue: 56,
        maxValue: 180,
        defaultValue: 56,
        category: 'Optional Props',
    },
    {
        id: 'expandedHeight',
        label: 'expandedHeight',
        type: 'number',
        description: 'The height of the header when expanded',
        required: false,
        initialValue: 200,
        minValue: 100,
        maxValue: 240,
        defaultValue: 200,
        category: 'Optional Props',
    },
    {
        id: 'variant',
        type: 'select',
        typeLabel: `'static' | 'dynamic'`,
        description:
            'The resize mode of the Header (static will resize only on taps, if enabled. Dynamic will resize as the screen is scrolled see CollapsibleHeaderLayout)',
        required: false,
        initialValue: 'static',
        options: ['static', 'dynamic'],
        category: 'Optional Props',
        disabled: true,
    },
    {
        id: 'fontColor',
        type: 'color',
        typeLabel: 'string',
        description: 'Color of the title, subtitle and info in the header',
        required: false,
        initialValue: '',
        category: 'Optional Props',
    },
    {
        id: 'icon',
        type: 'select',
        typeLabel: 'IconSource',
        description: 'Icon to show to the left of the title',
        initialValue: '',
        options: [
            { label: 'undefined', value: 'undefined' },
            { label: 'menu', value: 'menu' },
        ],
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'navigationIconColor',
        type: 'color',
        typeLabel: 'string',
        description: 'The color used for the Navigation icon',
        required: false,
        initialValue: '',
        category: 'Optional Props',
    },

    // Other Configuration
    // NONE
];

const HeaderPreview: PreviewComponent = ({ data }) => {
    const { icon, backgroundImage, actionItems, searchableConfig, ...rest } = data as unknown as HeaderProps;
    const containerRef = useRef(null);
    const SCROLL_CONTAINER_ID = 'playground-scroll-container';
    const getIcon = (value: string): IconSource | undefined => {
        switch (value) {
            case 'menu':
                return { name: 'menu' };
            case 'undefined':
            default:
                return undefined;
        }
    };
    const getActionItems = (value: boolean): any => {
        switch (value) {
            case true:
                return [{ icon: { name: 'settings' } }];
            default:
                return undefined;
        }
    };
    const getSearchConfig = (value: boolean): any => {
        switch (value) {
            case true:
                return <Header title={''} searchableConfig={{ onChangeText: () => {} }}></Header>;
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
            <Header
                style={{ width: DRAWER_WIDTH, margin: 'auto' }}
                {...rest}
                icon={getIcon(icon as unknown as string)}
                actionItems={getActionItems(actionItems as unknown as boolean)}
                searchableConfig={getSearchConfig(searchableConfig as unknown as boolean)}
                styles={{ backgroundImage: { width: DRAWER_WIDTH, margin: 'auto' } }}
                backgroundImage={getImage(backgroundImage?.toString() ?? '')}
                variant="static"
            />
            <Box
                style={{ width: DRAWER_WIDTH, margin: 'auto' }}
                id={SCROLL_CONTAINER_ID}
                sx={{
                    height: 225,
                    overflow: 'scroll',
                    backgroundColor: 'background.paper',
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': { display: 'none' },
                }}
            >
                {getBodyFiller()}
            </Box>
        </Box>
    );
};
const getIconSnippet = (value: any): string | undefined => {
    switch (value) {
        case 'menu':
            return JSON.stringify({ name: 'menu' });
        case 'undefined':
        default:
            return undefined;
    }
};
const generateSnippet: CodeSnippetFunction = (data) =>
    `<Header
    ${getPropsToString(getPropsMapping(data, inputConfig), {
        join: '\n\t',
        skip: ['icon', 'actionItems', 'backgroundImage', 'searchableConfig'],
    })}
    ${data.icon && data.icon !== 'undefined' ? `icon={${getIconSnippet(data.icon)}}` : ''}
    ${
        data.actionItems && data.actionItems !== 'undefined'
            ? `actionItems={[
        { icon: { name: 'settings' } },
    ]}`
            : ''
    }
    ${data.backgroundImage !== 'undefined' ? `backgroundImage={backgroundImage}` : ''}
    ${
        data.searchableConfig && data.searchableConfig !== 'undefined'
            ? `searchableConfig={{ onChangeText: () => {} }}`
            : ''
    }
  />
    `
        .replace(/^\s*$(?:\r\n?|\n)/gm, '')
        .replace(/(?:^|)( {4}|\t)/gm, '    ');

export const HeaderPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={HeaderPreview} />
    </Box>
);
