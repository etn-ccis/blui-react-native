import React from 'react';
import { MobileStepper } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { Button } from 'react-native-paper';

export const MobileStepperTextVariantExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <MobileStepper
            activeStep={2}
            steps={5}
            leftButton={
                <Button
                    onPress={() => ({})}
                    mode="outlined"
                    style={{ width: 100, alignSelf: 'flex-start', marginRight: 40 }}
                >
                    Back
                </Button>
            }
            rightButton={
                <Button
                    onPress={() => ({})}
                    mode="contained"
                    style={{ width: 100, alignSelf: 'flex-end', marginLeft: 40 }}
                >
                    Next
                </Button>
            }
            variant={'text'}
        />
    </ExampleShowcase>
);
