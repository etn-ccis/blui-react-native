import React from 'react';
import { Box, Stack } from '@mui/material';
import {
    CodeSnippetFunction,
    getPropsMapping,
    getPropsToString,
    InputConfig,
    Playground,
    PreviewComponent,
} from '@brightlayer-ui/react-doc-components';
import { MobileStepper, MobileStepperProps } from '@brightlayer-ui/react-native-components';
import { Button } from 'react-native-paper';

const inputConfig: InputConfig = [
    // Required props
    {
        id: 'steps',
        type: 'number',
        typeLabel: `number`,
        initialValue: 1,
        minValue: 1,
        maxValue: 10,
        valueStep: 1,
        description: 'Total number of steps to display (>0)',
        required: true,
        category: 'Required Props',
    },
    {
        id: 'activeStep',
        type: 'number',
        typeLabel: `number`,
        initialValue: 0,
        description: 'The index of the active step (>= 0)',
        minValue: 0,
        maxValue: 9,
        valueStep: 1,
        required: true,
        category: 'Required Props',
    },
    // Optional Props
    {
        id: 'activeColor',
        type: 'color',
        typeLabel: `string`,
        initialValue: '',
        description: 'Color of the active page indicator',
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'inactiveColor',
        type: 'color',
        typeLabel: `string`,
        initialValue: '',
        description: "Color of inactive dot when using 'dot' variant",
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'leftButton',
        type: 'boolean',
        typeLabel: `JSX.Element`,
        label: 'leftButton',
        description: 'Left button content',
        required: false,
        initialValue: true,
        category: 'Optional Props',
    },
    {
        id: 'rightButton',
        type: 'boolean',
        typeLabel: `JSX.Element`,
        label: 'rightButton',
        description: 'Right button content',
        required: false,
        initialValue: true,
        category: 'Optional Props',
    },
    {
        id: 'variant',
        type: 'select',
        typeLabel: 'string',
        description: 'Which type of indicator to use',
        initialValue: 'dots',
        options: [
            { label: 'dots', value: 'dots' },
            { label: 'text', value: 'text' },
            { label: 'progress', value: 'progress' },
        ],
        required: false,
        category: 'Optional Props',
    },
];

const generateSnippet: CodeSnippetFunction = (data) =>
    `<MobileStepper
    ${getPropsToString(getPropsMapping(data, inputConfig), { join: '\n\t', skip: ['leftButton', 'rightButton'] })}
    ${
        data.leftButton
            ? `leftButton={
        <Button onPress={() => ({})} mode="outlined" style={{ width: 100, alignSelf: 'flex-start', marginRight: 40 }}>
            Back
        </Button>
    }`
            : ''
    }
    ${
        data.rightButton
            ? `rightButton={
        <Button onPress={() => ({})} mode="contained" style={{ width: 100, alignSelf: 'flex-end', marginLeft: 40 }}>
            Next
        </Button>
    }`
            : ''
    }
 />`
        .replace(/^\s*$(?:\r\n?|\n)/gm, '')
        .replace(/(?:^|)( {4}|\t)/gm, '    ');

const MobileStepperPreview: PreviewComponent = ({ data }) => {
    const { leftButton, rightButton, ...rest } = data as unknown as MobileStepperProps;

    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '100%' }}>
            <MobileStepper
                {...rest}
                leftButton={
                    leftButton ? (
                        <Button
                            onPress={() => ({})}
                            mode="outlined"
                            style={{ width: 100, alignSelf: 'flex-start', marginRight: 40 }}
                        >
                            Back
                        </Button>
                    ) : undefined
                }
                rightButton={
                    rightButton ? (
                        <Button
                            onPress={() => ({})}
                            mode="contained"
                            style={{ width: 100, alignSelf: 'flex-end', marginLeft: 40 }}
                        >
                            Next
                        </Button>
                    ) : undefined
                }
                styles={{ progressBar: { width: 100 } }}
            />
        </Stack>
    );
};

export const MobileStepperPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={MobileStepperPreview} />
    </Box>
);
