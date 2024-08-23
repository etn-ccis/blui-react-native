import React, { useState } from 'react';
import { ExampleShowcase } from '../../../shared';
import { AutoComplete } from '@brightlayer-ui/react-native-components';
import { DRAWER_WIDTH } from '../../../utils';
import { ScrollView } from 'react-native';

export const AutoCompleteCustomTagsExample = (): JSX.Element => {
    const [chipValue, setChipValue] = useState<string[]>(['New York']);
    return (
        <ExampleShowcase>
            <ScrollView
                style={{ width: DRAWER_WIDTH, margin: 'auto' }}
                nestedScrollEnabled={true}
                keyboardShouldPersistTaps={'handled'}
            >
                <AutoComplete
                    helperText="Select a destination"
                    label="Popular Cities"
                    value={chipValue}
                    options={['Dubai', 'London', 'New York', 'Paris']}
                    allowCustomtag={true}
                    onChange={(item = []) => {
                        setChipValue(item);
                    }}
                />
            </ScrollView>
        </ExampleShowcase>
    );
};
