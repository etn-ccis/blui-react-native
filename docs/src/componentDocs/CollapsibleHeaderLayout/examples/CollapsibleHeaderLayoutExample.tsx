import React from 'react';
import { ExampleShowcase } from '../../../shared';
import { CollapsibleHeaderLayout } from '@brightlayer-ui/react-native-components';
import image from '../images/farm.jpg';
import { getBodyFiller } from '../../../utils';
import { View } from 'react-native';
import { Box } from '@mui/material';

export const CollapsibleHeaderLayoutExample = (): JSX.Element => (
    <ExampleShowcase>
        <Box sx={{ width: 400, margin: 'auto' }}>
            <CollapsibleHeaderLayout
                HeaderProps={{
                    title: 'Valley Forge',
                    subtitle: 'The Last Stand',
                    icon: { name: 'menu' },
                    onIconPress: () => {},
                    actionItems: [
                        {
                            icon: { name: 'more-vert' },
                            onPress: (): void => {},
                        },
                    ],
                    variant: 'dynamic',
                    backgroundImage: { uri: image },
                    searchableConfig: { onChangeText: () => {} },
                    expandable: true,
                    collapsedHeight: 56,
                    expandedHeight: 200,
                    styles: { backgroundImage: { width: '100%' } },
                }}
            >
                <View style={{ height: 200 }}>{getBodyFiller()}</View>
            </CollapsibleHeaderLayout>
        </Box>
    </ExampleShowcase>
);
