import React, { useState } from 'react';
import { ExampleShowcase } from '../../../shared';
import { AutoComplete } from '@brightlayer-ui/react-native-components';
import { DRAWER_WIDTH } from '../../../utils';
import { ScrollView } from 'react-native';

export const AutoCompleteBasicExample = (): JSX.Element => {
    return (
        <ExampleShowcase>
            <ScrollView
                style={{ width: DRAWER_WIDTH, margin: 'auto' }}
                nestedScrollEnabled={true}
                keyboardShouldPersistTaps={'handled'}
            >
                <AutoComplete
                    helperText="Helper text"
                    label="Popular Cities"
                    value={['New York']}
                    options={['Dubai','London','New York','Paris']}
                />
            </ScrollView>
        </ExampleShowcase>
    );
};
