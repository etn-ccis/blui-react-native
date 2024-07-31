import React from 'react';
import { Box, Stack } from '@mui/material';
import { CodeSnippetFunction, InputConfig, Playground, PreviewComponent } from '@brightlayer-ui/react-doc-components';
import { MobileStepper, MobileStepperProps } from '@brightlayer-ui/react-native-components';
import { Button } from 'react-native-paper';

const inputConfig: InputConfig = [
    // Required props
    {
        id: 'activeStep',
        type: 'number',
        typeLabel: `number`,
        initialValue: 1,
        description: 'The index of the active step (>= 0)',
        required: true,
        category: 'Required Props',
    },
    {
        id: 'steps',
        type: 'number',
        typeLabel: `number`,
        initialValue: 1,
        description: 'Total number of steps to display (>0)',
        required: true,
        category: 'Required Props',
    },
];

const generateSnippet: CodeSnippetFunction = (data) => ``;

const MobileStepperPreview: PreviewComponent = ({ data }) => {
    const { activeStep, steps, ...rest } = data as unknown as MobileStepperProps;

    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '100%' }}>
            <MobileStepper
                {...rest}
                activeStep={0}
                steps={0}
                leftButton={
                    <Button
                        onPress={() => ({})}
                        mode="outlined"
                        style={{ width: 100, alignSelf: 'flex-start', marginRight: 8 }}
                    >
                        Back
                    </Button>
                }
                rightButton={
                    <Button
                        onPress={() => ({})}
                        mode="contained"
                        style={{ width: 100, alignSelf: 'flex-end', marginLeft: 8 }}
                    >
                        Next
                    </Button>
                }
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
