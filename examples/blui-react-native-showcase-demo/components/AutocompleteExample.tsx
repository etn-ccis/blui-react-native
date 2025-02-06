import React, { useState } from 'react';
import { AutoComplete } from '@brightlayer-ui/react-native-components';
import { Card, TextInput } from 'react-native-paper';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

export const AutoCompleteExample: React.FC = () => {
    const theme = useExtendedTheme();
    const [chipValue, setChipValue] = useState(['Tag1']);
    return (
        <Card style={{ marginTop: 20 }}>
            <Card.Title title="AutoComplete" />
            <Card.Content>
                <TextInput label={'label'} />
                <AutoComplete
                    helperText="Helper text"
                    value={chipValue}
                    // allowCustomtag={true}
                    onChange={(arr) => {
                        setChipValue(arr);
                    }}
                    onDelete={(item) => {
                        let arr = chipValue.filter((str) => str !== item);
                        setChipValue(arr);
                    }}
                    label="Label"
                    options={['Tag1', 'Tag2', 'Tag3', 'Tag4']}
                />
            </Card.Content>
        </Card>
    );
};
