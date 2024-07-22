import React from 'react';
import { Spacer } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

export const SpacerWithFlexExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <View style={{ display: 'flex', flexDirection: 'row', height: 56, width: 300 }}>
            <Spacer flex={1} style={{ backgroundColor: '#4da3d4' }}>
                <Text>1</Text>
            </Spacer>
            <Spacer flex={2} style={{ backgroundColor: '#f5db6d' }}>
                <Text>2</Text>
            </Spacer>
            <Spacer flex={3} style={{ backgroundColor: '#da7777' }}>
                <Text>3</Text>
            </Spacer>
        </View>
    </ExampleShowcase>
);
