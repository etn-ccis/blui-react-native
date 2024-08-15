import React, { useState } from 'react';
import { ExampleShowcase } from '../../../shared';
import { AutoComplete } from '@brightlayer-ui/react-native-components';
import { DRAWER_WIDTH } from '../../../utils';
import { ScrollView } from 'react-native';

export const AutoCompleteExample = (): JSX.Element => {
    const [chipValue, setChipValue] = useState(['New York']);
    return (
        <ExampleShowcase>
            <ScrollView style={{ width: DRAWER_WIDTH, margin: 'auto' }}
                nestedScrollEnabled={true}
                keyboardShouldPersistTaps={'handled'}
            >
                <AutoComplete
                    label="Popular Cities"
                    helperText="Helper text"
                    onChange={(arr) => {
                        setChipValue(arr);
                    }}
                    onDelete={(item) => {
                        let arr = chipValue.filter((str) => str !== item);
                        setChipValue(arr);
                    }}
                    value={['New York']}
                    options={['Dubai', 'London', 'Paris', 'Shanghai', 'Sydney', 'San Francisco']}
                />
            </ScrollView>
        </ExampleShowcase>
    );
};
