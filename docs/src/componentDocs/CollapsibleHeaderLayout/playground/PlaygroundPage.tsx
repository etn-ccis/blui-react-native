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
import { CollapsibleHeaderLayout, HeaderProps } from '@brightlayer-ui/react-native-components';
import { getBodyFiller, DRAWER_WIDTH } from '../../../utils';
import 'prismjs/components/prism-jsx.min';
import { View } from 'react-native';

const inputConfig: InputConfig = [
    // Required Props
    // Optional Header Props
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

    // Other Configuration
    // NONE
];

const CollapsibleHeaderLayoutPreview: PreviewComponent = ({ data }) => {
    const { collapsedHeight, expandedHeight, ...rest } = data as unknown as HeaderProps;
    const containerRef = useRef(null);

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
            <CollapsibleHeaderLayout {...rest}
                style={{ width: DRAWER_WIDTH, margin: 'auto' }}
                HeaderProps={{
                    title: 'Valley Forge',
                    subtitle: 'The Last Stand',
                    info: 'Text hidden on collapse',
                    icon: { name: 'menu' },
                    onIconPress: () => { },
                    actionItems: [
                        {
                            icon: { name: 'more-vert' },
                            onPress: (): void => { },
                        },
                    ],
                    expandable: true,
                    variant: 'dynamic',
                    collapsedHeight: collapsedHeight,
                    expandedHeight: expandedHeight,

                }}
            >
                <View style={{ height: 200 }}>{getBodyFiller()}</View>
            </CollapsibleHeaderLayout>
        </Box>
    );
};
const generateSnippet: CodeSnippetFunction = (data) =>
`<CollapsibleHeaderLayout
    HeaderProps={{
        title: 'Valley Forge',
        subtitle: 'The Last Stand',
        info: 'Text hidden on collapse',
        icon: { name: 'menu' },
        onIconPress: () => { },
        actionItems: [
            {
                icon: { name: 'more-vert' },
                onPress: (): void => { },
            },
        ],
        expandable: true,
        variant: 'dynamic',
        ${
            getPropsToString(getPropsMapping(data, inputConfig), {join: '\n\t', skip: ['icon', 'backgroundImage'],
        })}
    }}
  />
    `
        .replace(/^\s*$(?:\r\n?|\n)/gm, '')
        .replace(/(?:^|)( {4}|\t)/gm, '    ');

export const CollapsibleHeaderLayoutPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={CollapsibleHeaderLayoutPreview} />
    </Box>
);
