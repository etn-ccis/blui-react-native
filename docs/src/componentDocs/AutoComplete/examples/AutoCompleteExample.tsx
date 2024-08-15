import React, { useState } from 'react';
import { ExampleShowcase } from '../../../shared';
import { AutoComplete } from '@brightlayer-ui/react-native-components';
import { DRAWER_WIDTH } from '../../../utils';
import { ScrollView } from 'react-native';

export const AutoCompleteExample = (): JSX.Element => {
    const [chipValue, setChipValue] = useState<string[]>(['New York']);
    return (
        <ExampleShowcase>
            <ScrollView
                style={{ width: DRAWER_WIDTH, margin: 'auto' }}
                nestedScrollEnabled={true}
                keyboardShouldPersistTaps={'handled'}
            >
                <AutoComplete
                    label="Popular Cities"
                    helperText="Helper text"
                    value={chipValue}
                    // onChange={(arr) => {
                    //     setChipValue(arr);
                    // }}
                    onDelete={(item) => {
                        let arr = chipValue.filter((str) => str !== item);
                        setChipValue(arr);
                    }}
                    options={['Dubai', 'London', 'New York', 'Paris', 'Shanghai', 'Sydney', 'San Francisco']}
                />
            </ScrollView>
        </ExampleShowcase>
    );
};
