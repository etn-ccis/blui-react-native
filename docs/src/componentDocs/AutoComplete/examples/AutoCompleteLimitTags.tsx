import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';

const codeSnippet = `<ScrollView
    nestedScrollEnabled={true}
    keyboardShouldPersistTaps={'handled'}
>
    <AutoComplete
        helperText="Select a destination"
        label="Popular Cities"
        value={chipValue}
        options={['Dubai']}
        onChange={(item = []) => {
            setChipValue(item);
        }}
        onDelete={(item) => {
            let arr = chipValue.filter((str) => str !== item);
            setChipValue(arr);
        }}
        allowCustomtag={true}
        limitTags={3}
        limitCharacterCountTag={10}
    />
</ScrollView>`;

export const AutoCompleteLimitTags = (): JSX.Element => (
    <Box>
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow copyText={codeSnippet} />
    </Box>
);
